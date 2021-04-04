# GoStack-Bootcamp-11

# Índice
1. [Ambiente de desenvolvimento](#ambienteDesenvolvimento)
2. [NodeJS](#nodejs)
    1. [Comandos](#comandosNode)
    2. [API REST](#apiRest)
3. [ReactJS](#reactjs)
    1. [Comandos](#comandosReact)
    2. [Babel / Webpack](#babelWebpack)
    3. [Conceitos do ReactJS](#conceitosReact)

# Ambiente de desenvolvimento <a name="ambienteDesenvolvimento" />
* NodeJS, Yarn
* Visual Studio Code (+ dracula theme, material icon theme)
* Git e Github
* **Extensões:** JSON viewer, React Dev Tools, Octotree
* **Ferramentas:** Notion, Whimsical, DevDocs, Insomnia

# Módulo 3 - NodeJS <a name="nodejs" />
## Comandos <a name="comandosNode" />
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
## API REST <a name="apiRest" />
A requisição é feita por um cliente/browser que tenta acessar uma URL, fazendo uma requisição AJAX, que faz a requisição sem recarregar a página e sem perder a conexão. A resposta do servidor vem por meio de uma estrutura de dados (JSON) e o cliente fica responsável por usar essa resposta para montar a aplicação.

## Benefícios dessa API

- É possível ter vários front-end usando o mesmo back-end;
- Protocolo de comunicação padronizado utilizando JSON, diversos dispositivos conseguem usar os serviços da API com pouquíssimas alterações nos códigos.


# Módulo 4 - ReactJS <a name="reactjs" />
## Comandos <a name="comandosReact" />
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

## Babel / Webpack <a name="babelWebpack" />
### Babel

Responsável por converter (transpilar) código javascript moderno para um código que o browser consiga interpretar.

Na imagem abaixo, está a configuração padrão do babel para projetos React:
![Untitled](https://user-images.githubusercontent.com/62819159/113497194-fdb04800-94d7-11eb-8fda-66f9901547d1.png)

### Webpack

Responsável por converter os diferentes tipos de arquivos em um código que o browser entenda, para isso usa-se os *Loaders;*

ex: babel-loader, css-loader, img-loader, file-loader

Na imagem abaixo, está a configuração padrão do webpack para projetos React:
![Untitled (1)](https://user-images.githubusercontent.com/62819159/113497209-394b1200-94d8-11eb-9dbe-3a6b64612e3e.png)

## Conceitos do ReactJS <a name="conceitosReact" />
### Componentes

O React é totalmente baseado na componentização. Componente é tudo aquilo que é possível separar na aplicação e que pode ser reaproveitado posteriormente.

- Os componentes são arquivos que sempre começam com letra maiúscula;
- Retornam uma função que contem todo o HTML, CSS e JS do componente.
- Para usa-lo, basta importar e usar como se fosse um componente HTML.
![Untitled (2)](https://user-images.githubusercontent.com/62819159/113497297-1cfba500-94d9-11eb-9a3e-021e3c7938cc.png)

**Fragment:** Maneira de retornar múltiplos elementos sem adicionar nós na DOM, como por exemplo:

```jsx
<div> <div/>
```

Então usa-se:

```jsx
<> </> 
ou
<React.Fragment> <React.Fragment/>
```

### Propriedades

É uma informação que é passado do elemento pai para o elemento filho. Resumidamente, é passar informações para um componente por dentro da tag ou pelos atributos.

**Exemplo:** passando o titulo como atributo e uma lista dentro da tag *Header*:

![Untitled (3)](https://user-images.githubusercontent.com/62819159/113497315-3b61a080-94d9-11eb-808b-4d157c9c687a.png)

Ambas as informações chegam no componente *Header* em forma de um objeto chamado *props*, podendo ser desfragmentado.

- **title:** titulo;
- **children:** todas as informações dentro da tag.

![Untitled (4)](https://user-images.githubusercontent.com/62819159/113497316-3dc3fa80-94d9-11eb-9070-5e4d17b8497d.png)
