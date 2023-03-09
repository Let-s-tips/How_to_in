# Créer une nouvelle app

## Initialisation d'un projet

Pour initialiser un nouveau projet, on utilise:

```
npx create-expo-app my-app
```

On peut utiliser à la création:

```
npx create-expo-app --template
```

--template permet de voir la liste des templates utilisables.

## Start un serveur

```
npx expo start
```

Lorsque vous exécutez npx expo start (ou yarn expo start), Expo CLI démarre Metro Bundler. Ce bundleur est un serveur
HTTP qui compile le code JavaScript de votre application en utilisant Babel et le sert à l'application Expo. Pour plus
d'informations, consultez la section Comment fonctionne le serveur de développement Expo.

## Ouvrir l'application sur mobile et tablette

Pour ouvrir l'application :

Sur votre appareil Android, appuyez sur "Scanner le code QR" sur l'onglet "Accueil" de l'application Expo Go et scannez
le code QR que vous voyez dans le terminal.

Sur votre iPhone ou iPad, ouvrez l'application de caméra par défaut d'Apple et scannez le code QR que vous voyez dans le
terminal.

Vous pouvez ouvrir le projet sur plusieurs appareils simultanément. N'hésitez pas à l'essayer sur les deux téléphones en
même temps si vous les avez sous la main.

## L'application ne se charge pas sur votre appareil ?

Tout d'abord, assurez-vous que vous êtes sur le même réseau Wi-Fi sur votre ordinateur et votre appareil.

Si cela ne fonctionne toujours pas, cela peut être dû à la configuration du routeur - c'est courant pour les réseaux
publics. Vous pouvez contourner ce problème en choisissant le type de connexion "Tunnel" lors du démarrage du serveur de
développement, puis en scannant à nouveau le code QR.

```
npx expo start --tunnel
```
L'utilisation du type de connexion "Tunnel" rendra les rechargements d'application considérablement plus lents que sur "
LAN" ou "Local", il est donc préférable d'éviter le tunnel lorsque cela est possible. Vous pouvez installer un
simulateur/émulateur pour accélérer le développement si "Tunnel" est nécessaire pour accéder à votre machine à partir
d'un autre appareil sur votre réseau.

