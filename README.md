# GoStack-Bootcamp-11

# Índice
1. [Ambiente de desenvolvimento](#ambienteDesenvolvimento)
2. [NodeJS](#nodejs)
    1. [Comandos](#comandosNode)
    2. [API REST](#apiRest)
    3. [Insomnia](#insomnia)
    4. [Métodos HTTP e requisições](#metodosHttp)
    5. [Middleware](#middleware)
3. [ReactJS](#reactjs)
    1. [Comandos](#comandosReact)
    2. [Babel / Webpack](#babelWebpack)
    3. [Conceitos do ReactJS](#conceitosReact)
    4. [CSS](#css)
    5. [Usando a API](#usandoApi)
3. [React Native](#reactNative)
    1. [Comandos](#comandosReactNative)
    2. [Criando o projeto](#criacaoProjetoRN)
    3. [Diferenças do ReactJS](#diferencasRN)

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

**cors:**  permitir que o nosso front-end consiga acessar os recursos da api:

```jsx
yarn add cors
```

```jsx
app.use(cors());
```
## API REST <a name="apiRest" />
A requisição é feita por um cliente/browser que tenta acessar uma URL, fazendo uma requisição AJAX, que faz a requisição sem recarregar a página e sem perder a conexão. A resposta do servidor vem por meio de uma estrutura de dados (JSON) e o cliente fica responsável por usar essa resposta para montar a aplicação.

## Benefícios dessa API

- É possível ter vários front-end usando o mesmo back-end;
- Protocolo de comunicação padronizado utilizando JSON, diversos dispositivos conseguem usar os serviços da API com pouquíssimas alterações nos códigos.

## Insomnia <a name="insomnia" />
O insomnia é um aplicativo que mostra os resultados das rotas que usam os métodos http

Após criar uma aba, o próximo passo é criar uma pasta com o mesmo nome do recurso (ex: '/projects', o recurso é projects), dentro dessa pasta ficará todas as requisições que utilizam esse recurso.

Para cada requisição é necessário passar a URL. Para facilitar a escrita, podemos criar atalhos dentro do insomnia. Digamos que não queremos digitar http://localhost:3333:

- No canto superior esquerdo, abra a aba "Manage Environment";
- Clica no + e selecione "Environment";
- Adiciona um nome para o seu atalho e edite o código JSON.

## Métodos HTTP e requisições <a name="metodosHttp" />
Existem diferentes métodos HTTP para acessar rotas:

- GET: buscar informações do back-end;
- POST: criar uma informação no back-end;
- PUT/PATCH: alterar uma informação no back-end;
- DELETE: deletar uma informação no back-end.

Podemos usar o mesmo recurso, porém as rotas devem ser diferentes.

No navegador só é possível ver as rotas com o método get, mas uma forma de visualizar as outras rotas, inclusive o get, é através do **Insomnia**

### Tipos de parâmetros

Os parametros são formas de receber informações do front-end através das requisições. Existe 3 principais tipos de parâmetros:

- Query Params: geralmente usado com filtros e paginação, podemos usar o .query para obter os dados
- Route Params: identificar recursos na hora de deletar ou atualizar (:id por exemplo), usamos o .params para obter os dados
- Request Body: conteudo na hora de criar ou editar um recurso, as informações são transmitidas pelo corpo da requisição usando o formato JSON

![Untitled (5)](https://user-images.githubusercontent.com/62819159/113497649-71545400-94dc-11eb-94e1-6f7b5d66edf0.png)

### Request / Response

Request: informações que o **front-end** envia para o **back-end**

response: informações que o **back-end** envia para o **front-end**

### HTTP Codes

Toda requisição exibirá um código HTTP com 3 dígitos numéricos indicando o que ocorreu:

- 1xx: É uma requisição informativa, praticamente nunca é usada
- 2xx: Requisição feita com sucesso, sem erros
    - 200: Success
    - 201: Created
- 3xx: redirecionamento
- 4xx: Erros no Cliente
    - 400: Bad request (faltou alguma informação)
    - 401: Unauthorized (sem autorização, sem login)
    - 404: Not Found
- 5xx: Erros no servidor

## Middleware <a name="middleware" />
Middleware é uma função que é um interceptador de requisições, ele consegue interromper uma requisição e alterar os dados da requisição. Ele pode ser acionado em todas as requisições.

Uma função middleware usa os parametros (request, response, next)

Podemos dizer que as rotas também são middleware por conterem request e response

Os middlewares que não são rotas normalmente terão o argumento next, que executa uma rota depois de ter sido acionado

Seu principal objetivo é interceptar uma rota para verificar ou executar uma função essencial.

Podemos usar os middleware passando a função nas rotas, mas tem uma forma mais fácil:

```jsx
app.use('/projects/:id', validateProjectId) //Exemplo
```

Ao invés de adicionar o middleware nas rotas, podemos definir qual é o formato da rota, assim o middleware é executado somente nas rotas que tiverem aquele formato informado.


# Módulo 4 - ReactJS <a name="reactjs" />
React é uma biblioteca para construção de interfaces, baseado no conceito de Single-Page-Applications, que permite trocar de tela sem recarregar uma nova página.

- React: biblioteca de construção de interfaces e componentização;
- ReactJS: React junto com a biblioteca do facebook que manipula o browser;
- React Native: React junto com a biblioteca que manipula elementos nativos.

### Vantagens

- Organização do código usando componentes, que são todas as partes da página que não são influenciadas com outras áreas (ex: formulário, comentário, lista de comentários, header, footer, etc...), ou seja, se aquela parte for simplesmente removida e o site continuar funcionando, então pode-se transformar aquela parte em componente.
- Divisão de responsabilidades: O front-end é responsável apenas por construir a interface, as regras de negócio fica para o back-end.
- Uma API, múltiplos clientes: podemos usar a mesma API para diversos clientes, pois o back-end envia as informações para a construção do front-end usando um formato chamado JSON. Então um dispositivo mobile e um browser conseguem acessar a mesma API, o front-end então fica responsável por pegar o JSON fornecido pela API para construir a interface.

### JSX

Permite escrever código HTML dentro do Javascript. O react permite criarmos nossos próprios componentes.

### Babel / Webpack

- O browser não entende todo esse código (HTML, CSS dentro do javascript). O Babel converte esse código JS de uma forma que o browser entenda;
- O Webpack tem diversas função, entre elas:
    - Criação do Bundle, que contém todo o código javascript da aplicação, usando o código do Babel;
    - Ensinar o Javascript como importar arquivos CSS e outros através dos loaders (css loader, image loader, babel loader, etc...)
    - Live reload, atualiza a página com as novas alterações

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

Style-loader e css-loader:

```jsx
yarn add style-loader css-loader
```

File-loader:

```jsx
yarn add file-loader
```

Axios:

```jsx
yarn add axios
```

Ao utilizar funções Async, precisa instalar um plugin no babel, pois o "preset-env" sozinho não é capaz de interpretar essas funções:

```jsx
yarn add @babel/plugin-transform-runtime -D
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

### Estado
Imutabilidade: nunca se altera o dado diretamente, deve-se criar uma cópia e daí sim fazer a alteração, observe o exemplo onde a alteração foi feita de forma INDIRETA:

```jsx
const projects= ['text1', 'text2']

//errado
projects.push('Novo projeto') 

//correto
setProjects([...projects, 'Novo projeto'])
```

map( ): percorre uma variável retornando alguma informação;

Toda iteração no React precisa de uma propriedade chamada key, que dentro dele será informado alguma informação única para cada elemento percorrido, o mais comum é o ID

**dica do Diego:** quando há uma ação acionada pelo usuário, inicia-se o nome da function com "handle" 

O estado permite que um componente se atualiza na tela quando há uma alteração nos dados, sem precisar recarregar a página toda.

## CSS <a name="css" />
Primeiramente, temos que configurar um novo Loader para arquivos CSS, no arquivo de configurações do Webpack.

Depois instale 3 pacotes: *style-loader,* *css-loader* e *file-loader*.
```jsx
yarn add style-loader css-loader
```

```jsx
yarn add file-loader
```

*css-loader:* Para interpretar arquivo css e importações.

*style-loader*: injeta o que foi interpretado pelo *css-loader* no HTML. 

file-loader: carregar arquivos para dentro da aplicação.

## Usando a API <a name="usandoApi" />
O módulo "Axios" é responsável por fazer as chamadas na API.

```jsx
yarn add axios
```

No React, temos a função useEffect() que será usada para disparar funções quando houver ou não alguma informação alterada. Ela usa 2 parâmetros:

1. A função a ser disparada
2. Quando disparar

Foi usado o método *get* para pegar os dados da rota *'projects'*. Se der certo, jogue tudo no *response* e seta os projetos com os dados da API.

![Untitled (6)](https://user-images.githubusercontent.com/62819159/113647290-f1a3c200-9660-11eb-8af8-3182c8f9ec8e.png)

Teremos que instalar o módulo "cors" no back-end. O cors é um mecanismo de segurança que pode impedir que os dados do backend sejam compartilhados.

```jsx
yarn add cors
```

```jsx
app.use(cors());
```

# Módulo 5 - React Native <a name="reactNative" />
- React Native é uma versão do React para desenvolvimento mobile.
- O mesmo código funciona em multiplataformas, podendo manipular cada plataforma de forma diferente.
- A interface roda de forma nativa, usando Java e Objective C.
- O código não é transpilado, é injetado no dispositivo uma dependência em que o dispositivo passa a interpretar javascript
- React Native tem uma sintaxe parecida com o ReactJS:

![Untitled (7)](https://user-images.githubusercontent.com/62819159/114119419-fcf52880-98c0-11eb-9ba6-45c1c9f6ed23.png)

### Ambiente de desenvolvimento

Se você tem MacOS, basta baixar e usar o xcode para emular um sistema iOS. Para windows e linux teremos que usar o sistema Android, com o AVD manager do Android Studio.

Utilize o site da rocketseat ou outra fonte para configurar o SDK: [https://react-native.rocketseat.dev](https://react-native.rocketseat.dev/)

## Comandos <a name="comandosReactNative" />

Criar projeto:

```jsx
npx react-native init NomeDoProjeto
```

Instalar todas as dependências:

```jsx
yarn
```

Iniciar projeto no emulador:

```jsx
//Android
npx react-native run-android

//ios
npx react-native run-ios
```

## Criando o projeto <a name="criacaoProjetoRN" />
**OBS:** Os comandos podem não funcionar corretamente por causa do tempo (anotações feitas em 10/04/2021), sempre é recomendado seguir a documentação: [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup).

### Como criar

Para criar um projeto React Native não precisa instalar o react-native-cli, basta criar um projeto usando o npx do Node:

```jsx
npx react-native init NomeDoProjeto
```

Caso ocorrer um erro deste tipo:

```jsx
npm ERR! código ENOLOCAL

npm ERR! Não foi possível instalar a partir de "seuNome \ AppData \ Roaming \ npm-cache_npx \ 8992" porque não contém um arquivo package.json.
```

Isso aconteceu por causa do espaço em branco no seu nome de usuário, use o seguinte comando para resolver e tente novamente o código anterior:

```jsx
npm config set cache C:\tmp\nodejs\npm-cache --global
```

### Como executar

Usarei o Android Studio já configurado conforme a documentação do React Native: [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup).

1. Abre um dispositivo Android com o AVD Manager;
2. Abra um novo terminal dentro do projeto;
3. No terminal digite:

```jsx
npx react-native run-android
```

Se tudo ocorreu bem, a aplicação será executada no dispositivo:

![Untitled (8)](https://user-images.githubusercontent.com/62819159/114290818-a6baed80-9a58-11eb-8a7d-d221b131195a.png)

## Diferenças do ReactJS <a name="diferencasRN" />
Ao comparar ReactJS com o React Native notamos algumas diferenças entre eles. 

No React Native:

- Não trabalha-se com HTML, utilizamos elementos que o React Native exporta.
- Esses elementos não tem valor semântico, ou seja, uma <View/> por exemplo é usada como container para qualquer coisa.
- Não existe estilização própria nos elementos, qualquer estilo é feito por CSS (StyleSheet).
- Todos os componentes possuem por padrão "display: flex".
- Não tem herança de estilos. Ao aplicar um estilo em um container por exemplo, apenas o container será afetado, o que estiver dentro dele não será estilizado.
