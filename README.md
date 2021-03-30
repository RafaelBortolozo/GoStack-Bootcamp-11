# GoStack-Bootcamp-11

# Ambiente de desenvolvimento
* NodeJS, Yarn
* Visual Studio Code (+ dracula theme, material icon theme)
* Git e Github
* **Extensões:** JSON viewer, React Dev Tools, Octotree
* **Ferramentas:** Notion, Whimsical, DevDocs, Insomnia

# Módulo 3 - NodeJS
## Comandos
Instalar todas as dependências (caso haver package.json):

```jsx
yarn
```


Criar arquivo package.json:

```jsx
yarn init -y
```


**Express:** micro framework com várias funcionalidades que facilitam o desenvolvimento, como por exemplo o gerenciamento de rotas:

```jsx
yarn add express

const express = require('express');
const app= express();
```


**Nodemon:** Ferramenta para reiniciar o servidor a cada vez que há alteração do código:

-D: development

```jsx
yarn add nodemon -D
or
yarn global add nodemon -D
```


**Uuidv4:** ferramenta que permite adicionar um ID único universal em alguma coisa:

```jsx
yarn add uuidv4

const { uuid, isUuid }= require('uuidv4');
```

# Módulo 4 - ReactJS
## Comandos
Instalar todas as dependências (caso haver package.json):

```jsx
yarn
```

Criar arquivo package.json:

```jsx
yarn init -y
```

Instalar o react e o react-dom, que é a integração do react com a DOM (arvore de elementos, HTML):

```jsx
yarn add react react-dom
```
