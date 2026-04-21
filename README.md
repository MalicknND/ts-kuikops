# TypeScript, ou l'art de typer JavaScript de manière plus stricte

TypeScript a été créé pour pallier la trop grande liberté de JavaScript.
Contrairement à d'autres langages, JavaScript est plus flexible au niveau du typage des variables, des paramètres, des classes, etc.

L'objectif de TypeScript est d'ajouter des fonctionnalités qui permettent de coder de façon plus stricte, afin d'éviter des erreurs le plus tôt possible, dès le développement.

> Important : on n'envoie pas de fichiers TypeScript sur les serveurs. Avant cela, il faut compiler le code en JavaScript classique.

C'est pour cette raison que TypeScript est appelé un **superset** : un langage au-dessus de JavaScript, qui se traduit ensuite en JS.

---

## De quoi se compose le cours ?

### 1. Découverte de TypeScript
- Installation et compilation
- Types de base (`number`, `string`, `boolean`, etc.)
- Objets et tableaux
- Comprendre les `enum`
- Utiliser les `tuples`
- Types personnalisés
- Unions
- Interfaces
- DOM
- Et bien plus...

### 2. Projet : cloner Trello
- Reproduire les fonctionnalités clés de Trello
- Drag and drop
- Création d'éléments
- Suppression d'éléments
- Etc.

### 3. Astuces et fonctionnalités avancées TypeScript
- `Generics`
- Overloads
- Comprendre les opérateurs
- Unions discriminantes, merging, etc.

### 4. Utiliser les classes avec TypeScript
- Classe de base (champs, constructeur)
- Champs spéciaux
- Interfaces avec les classes
- Etc.

### 5. Utiliser TypeScript avec React
- Mettre en place une application React + TypeScript
- Typer les props
- Utiliser des refs
- Retourner une liste
- Gérer les événements

---

## Organisation du cours

Pour le cours, nous allons utiliser **VS Code** (mais n'importe quel éditeur de code convient).

Nous allons créer des dossiers contenant le code source de chaque leçon, pour te permettre de revenir sur chaque notion à tout moment, avec tes notes et les exemples proposés.

Si tout ça te donne envie, et si tu as besoin d'apprendre TypeScript, bienvenue : on passe au code.

---

## Ce que vous allez apprendre

- Apprendre à utiliser TypeScript
- Apprendre à typer ses variables avec TypeScript
- Apprendre à utiliser les types spéciaux de TS
- Apprendre à utiliser TypeScript avec des classes
- Apprendre à mettre en place TypeScript + React

---

## Prérequis

- Un ordinateur
- Des bases en JavaScript
- Des bases en HTML/CSS

---

## À qui ce cours s'adresse-t-il ?

- Développeurs Front-End
- Étudiants en développement web
- Développeurs Back-End / Full-Stack
- Personnes en reconversion professionnelle

---

## Structure actuelle du projet

```text
Contenu/
  index.ts
  Les bases de TS/
    Installation/
      index.html
      script.js
      script.ts
      tsconfig.json
    test/
Projets/
  index.ts
```

---

## Démarrage rapide

### Installer TypeScript globalement

```bash
npm install -g typescript
```

### Initialiser TypeScript dans un dossier

```bash
tsc --init
```

### Compiler un fichier TypeScript

```bash
tsc script.ts
```

### Lancer le mode watch

```bash
tsc -w
```
