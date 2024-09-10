# primeira tentativa de criação de uma página front-end usando React + Vite

## Principais objetivos  
### 1. Desenvolver uma tela no zero.
### 2. Melhoras minhas habilidades com React e lidando com terminais 
### 3. Ter uma base melhor da biblioteca para usos futuros

## Principais obstaculos 

### 1. Não sei lidar direito com comandos do Node.
### 2. Estou com sono
### 3. Esse é meu segundo contato com React, ou seja, eu não sei de *NADA*

### mas acho que isso nunca foi motivo pra desistir, então vamo lá sofrer 👌

## Primeira etapa da criação 

criação e inicialização do projeto utilizando *terminais* e *node* 

`npm create vite@latest 'primeiro-app-react'`

`npm install & npm run dev` 

e pronto, você acabou de inicializar seu primeiro projeto em React. a mas porque o Vite? A resposta é simples. eu não sei o porque!

talvez a parte que mais pegue no começo no react é a quantia absurda de coisa na sua tela, e como tu organiza isso pra ficar fácil, a questão é: Eu não sei como organizar uma aplicação React certinho, e também não sei se tem jeito certo ou sei lá.

enfim, o importante é perguntar e aprender.

## imports e exports

em um contexto geral, import e exports são elementos cruciais pra modular progamming, e porque isso? simples, elas permitem que você divida o seu código entre diferentes arquivos, os tornando mais organizados, manuteniveis e reutilizaveis.

### sintaxe do Import

import basico

`import react from 'react`

isso importa tudo do modulo 'react'

imports nomeados / named imports

`import{algo aqui, algo aqui} from 'react'`

o mesmo importa exports nomeados especificos do modulo 'react'

export basico 

default export

`export default NomeDoComponente`

só se pode ter um export default por modulo
pode ter qualquer nome quando é importado

export nomeado / named exports

`export Function()`

você pode ter quantas named exports que preferir, não tem limite.
deve ter o mesmo exato nome no import export joão = import joão

## props 

componentes em React usam props pra se comunicar uns com os outros. props são como atributos HTML, como `<src = ''/>` de uma imagem, por exemplo. a diferença é: da pra passar qualquer valor JS por eles, como objetos, arrays e funções.

no caso desse projeto, o primeiro exemplo de prop fica no ./background.jsx
dentro da tag `<video/>` sendo o prop <src = {video1}> onde é passado o objeto video1. 

## Anotações finais

esse projeto serviu justamente como uma simples introdução minha ao React. Ficou bonito? não. Ficou otimizado? não. Ficou organizado? talvez.
Oque importa é que as funcionalidades funcionam de fato, é claro que são coisas extremamentes simples, mas funcionam e serviram de alguma coisa pro meu aprendizado. 

## oque eu aprendi

1 - organização de projeto.
2 - Conceitos basicos de React, como: Componentes, Imports e exports, Conditional Rendering, props.



