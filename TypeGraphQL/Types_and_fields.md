## Types and fields

L'idée principale de TypeGraphQL est de créer automatiquement des définitions de schéma GraphQL à partir de classes
TypeScript. Pour éviter de devoir utiliser des fichiers de définition de schéma et des interfaces décrivant le schéma,
nous utilisons des décorateurs et un peu de magie de réflexion.

Commençons par définir notre classe TypeScript exemple qui représente notre modèle Recipe avec des champs pour stocker
les données de la recette :

```ts
class Recipe {
    id: string;
    title: string;
    ratings: Rate[];
    averageRating?: number;
}
```

La première chose à faire est de décorer la classe avec le décorateur @ObjectType. Il marque la classe comme étant du
type connu de la SDL GraphQL ou GraphQLObjectType de graphql-js :

```ts
@ObjectType()
class Recipe {
    id: string;
    title: string;
    ratings: Rate[];
    averageRating: number;
}
```

Ensuite, nous déclarons quelles propriétés de classe doivent être mappées sur les champs GraphQL. Pour ce faire, nous
utilisons le décorateur @Field, qui est également utilisé pour collecter les métadonnées du système de réflexion
TypeScript :

```ts
@ObjectType()
class Recipe {
    @Field()
    id: string;

    @Field()
    title: string;

    @Field()
    ratings: Rate[];

    @Field()
    averageRating: number;
}
```

Pour les types simples (comme string ou boolean), c'est tout ce qui est nécessaire, mais en raison d'une limitation dans
la réflexion de TypeScript, nous devons fournir des informations sur les types génériques (comme Array ou Promise). Pour
déclarer le type Rate[], nous devons donc utiliser la syntaxe explicite [ ] pour les types de tableau - @Field(
type => [Rate]). Pour les tableaux imbriqués, nous utilisons simplement la notation explicite [ ] pour déterminer la
profondeur du tableau, par exemple @Field(type => [[Int]]) indiquerait au compilateur que nous attendons un tableau
d'entiers de profondeur 2.

Pourquoi utiliser la syntaxe de fonction et non un simple objet de configuration { type: Rate } ? Parce que, en
utilisant la syntaxe de fonction, nous résolvons le problème des dépendances circulaires (par exemple Post <--> User),
il a donc été adopté comme convention. Vous pouvez utiliser la syntaxe abrégée @Field(() => Rate) si vous voulez
économiser quelques frappes, mais elle peut être moins lisible pour d'autres.

Par défaut, tous les champs sont non nullables, tout comme les propriétés dans TypeScript. Cependant, vous pouvez
changer ce comportement en fournissant l'option nullableByDefault: true dans les paramètres de buildSchema, décrite dans
le guide de démarrage.

Pour les propriétés nullables comme averageRating qui peuvent ne pas être définies lorsqu'une recette n'a pas encore de
notes, nous marquons la propriété de classe comme optionnelle avec l'opérateur ?: et nous devons également passer le
paramètre de décorateur { nullable: true }. Nous devrions être conscients que lorsque nous déclarons notre type comme
une union nullable (par exemple string | null), nous devons explicitement fournir le type au décorateur @Field.

Dans le cas de listes, nous devrons également définir leur nullabilité de manière plus détaillée. Le paramètre de base {
nullable: true | false } ne s'applique qu'à la liste dans son intégralité ([Item!] ou [Item!]!), donc si nous avons
besoin d'un tableau creux, nous pouvons contrôler la nullabilité des éléments de la liste via nullable: "items" (
pour [Item]!) ou nullable: "itemsAndList" (pour [Item]). Soyez conscients que le paramètre nullableByDefault: true
s'appliquera également aux listes, ce qui produira le type [Item], tout comme avec nullable: "itemsAndList".

Pour les listes imbriquées, ces options s'appliquent à toute la profondeur de la liste : @Field(() => [[Item]]
produirait par défaut [[Item!]!]!, tandis que nullable : "itemsAndList" produirait [[Item]] et nullable : "items"
produirait [[Item]]!.

Dans l'objet de configuration, nous pouvons également fournir les propriétés de description et de deprecationReason à
des fins de schéma GraphQL.

Après ces modifications, notre classe d'exemple ressemblerait à ceci :

```ts
@ObjectType({description: "The recipe model"})
class Recipe {
    @Field(type => ID)
    id: string;

    @Field({description: "The title of the recipe"})
    title: string;

    @Field(type => [Rate])
    ratings: Rate[];

    @Field({nullable: true})
    averageRating?: number;
}
```

Cela va entraîner la génération de la partie suivante du schéma GraphQL en SDL :

```ts
type Recipe
{
    id: ID!
    title: String!
    ratings: [Rate!]!
    averageRating: Float
}
```

De manière similaire, la classe de type Rate ressemblerait à ceci :

```ts
@ObjectType()
class Rate {
    @Field(type => Int)
    value: number;

    @Field()
    date: Date;

    user: User;
}
```

ce qui donne cet équivalent du SDL GraphQL :

```ts
type Rate
{
    value: Int!
    date: Date!
}
```

Comme nous pouvons le voir, pour la propriété id de Recipe, nous avons passé type => ID et pour le champ value de Rate,
nous avons passé type => Int. Cela nous permet de surcharger le type inféré à partir des métadonnées de réflexion. Nous
pouvons en savoir plus sur les scalaires ID et Int dans la documentation des scalaires. Il y a également une section sur
le scalaire Date intégré.

De même, la propriété user ne possède pas de décorateur @Field() - de cette manière, nous pouvons masquer certaines
propriétés de notre modèle de données. Dans ce cas, nous devons stocker le champ user de l'objet Rate dans la base de
données pour éviter les notes multiples, mais nous ne voulons pas le rendre publiquement accessible.

Notez que si un champ d'un type d'objet est purement calculable (par exemple averageRating à partir du tableau ratings)
et que nous ne voulons pas polluer la signature de la classe, nous pouvons l'omettre et simplement implémenter le
résolveur de champ (décrit dans la documentation des résolveurs).

Soyez conscient que définir des constructeurs est strictement interdit et que nous ne devrions pas les utiliser ici, car
TypeGraphQL crée lui-même des instances de classes de type objet en coulisse.

Dans certains cas, nous souhaitons peut-être exposer nos classes ou propriétés sous des noms de types ou de champs
différents. Pour ce faire, nous pouvons utiliser le paramètre name ou la propriété name des options du décorateur, par
exemple :

```ts
@ObjectType("ExternalTypeName")
class InternalClassName {
    @Field({name: "externalFieldName"})
    internalPropertyName: string;
}
```

However, be aware that renaming fields works only for output types like object type or interface type. It's due to a
fact that input fields has no resolvers that could translate one field value into another property value.