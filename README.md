# GoStack-Bootcamp-11

# Table of contents
1. [Introduction](#introduction)
2. [Some paragraph](#paragraph1)
    1. [Sub paragraph](#subparagraph1)
3. [Another paragraph](#paragraph2)

## This is the introduction <a name="introduction"></a>
Some introduction text, formatted in heading 2 style

## Some paragraph <a name="paragraph1"></a>
The first paragraph text

### Sub paragraph <a name="subparagraph1"></a>
This is a sub paragraph, formatted in heading 3 style

## Another paragraph <a name="paragraph2"></a>
The second paragraph text

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

Comando referente ao babel / webpack:

```jsx
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
```

Interface de linha de comando babel:

```jsx
yarn add @babel/cli
```

Babel-loader, converter código com o babel:

```jsx
yarn add babel-loader
```

Live reload do webpack, toda vez que haver alteração no código, o bundle.js será recompilado automaticamente:

```jsx
yarn add webpack-dev-server -D
```

```jsx
yarn webpack serve --mode development
```
