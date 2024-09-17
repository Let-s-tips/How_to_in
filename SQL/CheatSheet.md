# Cheat Sheet SQL

## 1. Sélectionner des données

### Sélectionner toutes les colonnes d'une table
```sql
SELECT * FROM table_name;
```

### Sélectionner des colonnes spécifiques
```sql
SELECT column1, column2 FROM table_name;
```

### Sélectionner avec une condition
```sql
SELECT column1, column2 
FROM table_name 
WHERE condition;
```

## 2. Insérer des données

### Insérer une nouvelle ligne dans une table
```sql
INSERT INTO table_name (column1, column2) 
VALUES (value1, value2);
```

## 3. Mettre à jour des données

### Mettre à jour des lignes existantes dans une table
```sql
UPDATE table_name 
SET column1 = value1, column2 = value2 
WHERE condition;
```

## 4. Supprimer des données

### Supprimer des lignes d'une table
```sql
DELETE FROM table_name 
WHERE condition;
```

## 5. Créer une table

### Créer une nouvelle table
```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    ...
);
```

## 6. Modifier une table

### Ajouter une colonne à une table existante
```sql
ALTER TABLE table_name 
ADD column_name datatype;
```

### Modifier une colonne existante
```sql
ALTER TABLE table_name 
MODIFY column_name new_datatype;
```

### Supprimer une colonne
```sql
ALTER TABLE table_name 
DROP COLUMN column_name;
```

## 7. Joindre des tables

### Jointure interne (INNER JOIN)
```sql
SELECT table1.column1, table2.column2
FROM table1
INNER JOIN table2 
    ON table1.common_column = table2.common_column;
```

### Jointure externe gauche (LEFT JOIN)
```sql
SELECT table1.column1, table2.column2
FROM table1
LEFT JOIN table2 
    ON table1.common_column = table2.common_column;
```

### Jointure externe droite (RIGHT JOIN)
```sql
SELECT table1.column1, table2.column2
FROM table1
RIGHT JOIN table2 
    ON table1.common_column = table2.common_column;
```

## 8. Fonctions d’agrégation

### Compter le nombre de lignes
```sql
SELECT COUNT(*) FROM table_name;
```

### Somme d'une colonne
```sql
SELECT SUM(column_name) FROM table_name;
```

### Moyenne d'une colonne
```sql
SELECT AVG(column_name) FROM table_name;
```

### Valeur maximale d'une colonne
```sql
SELECT MAX(column_name) FROM table_name;
```

### Valeur minimale d'une colonne
```sql
SELECT MIN(column_name) FROM table_name;
```

## 9. Groupement de données

### Grouper par une colonne et appliquer une fonction d'agrégation
```sql
SELECT column_name, COUNT(*) 
FROM table_name 
GROUP BY column_name;
```

### Grouper et filtrer avec HAVING
```sql
SELECT column_name, COUNT(*) 
FROM table_name 
GROUP BY column_name 
HAVING COUNT(*) > 1;
```

## 10. Clauses de tri et de limite

### Trier les résultats
```sql
SELECT * FROM table_name 
ORDER BY column_name ASC;  -- Ascendant

SELECT * FROM table_name 
ORDER BY column_name DESC; -- Descendant
```

### Limiter le nombre de résultats retournés
```sql
SELECT * FROM table_name 
LIMIT number_of_rows;
```

## 11. Sous-requêtes

### Sous-requête dans une clause WHERE
```sql
SELECT column_name 
FROM table_name 
WHERE column_name IN (
    SELECT column_name 
    FROM other_table 
    WHERE condition
);
```

### Sous-requête dans une clause FROM
```sql
SELECT a.column1, b.column2
FROM table_name AS a, (
    SELECT column1, column2 
    FROM other_table
) AS b
WHERE a.common_column = b.common_column;
```