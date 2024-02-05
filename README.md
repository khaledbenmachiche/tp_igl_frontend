# TP IGL Frontend

## Project Overview
une application web permettant aux utilisateurs authentifiés de rechercher des articles scientifiques. Les utilisateurs peuvent filtrer les résultats, afficher les détails des articles, y compris le texte intégral en formats texte et PDF, et sauvegarder leurs articles préférés. Les administrateurs peuvent gérer les modérateurs et lancer des opérations d'upload d'articles scientifiques depuis des fichiers PDF. Après l'upload, les modérateurs peuvent vérifier et corriger les informations extraites à partir des articles PDF.

# Getting Started
## Folder structure
**components** : Reusable React components

**context** : React context providers for global state

**hooks** : Custom React hooks

**pages** : React components representing different pages

**services** : Modules for interacting with external services or APIs

**types** : TypeScript definition files

**utils** : General utility functions

## Prerequisites

* Node.js
* npm
  
## Installation
1-Clone the repository.

```bash
git clone https://github.com/khaledbenmachiche/tp_igl_frontend
cd tp_igl_frontend
```
2-Install dependencies.

```bash
npm install
```

3-Start the development server.

```bash
npm run dev
```


## Docker Support
### Prerequisites
  **Docker**

### Usage 

To run the application using Docker, follow these steps:
1- Build the Docker image.
  ```bash
  docker build -t tp_igl_frontend .
  ```
2- Run the Docker container.
  ```bash
  docker run -dp 8080:8080 tp_igl_frontend
  ```

## Functional Testing
For functional testing, Selenium is used :
  ```bash
  python3 selenium-test.py
  ```

## Contributing


1- Create a new branch for your feature or bug fix.

```bash
git checkout -b feature/my-feature
```
2- Make your changes and commit them with a clear message.

```bash
git commit -m "Add new feature"
```
3- Push your branch to the repository.

```bash
git push origin feature/my-feature
```
4- Create a pull request to the main branch of the repository.

