#### O que foi aprendido na aula 01 "Começando a escrever testes":

- Criar um arquivo de teste
- Executar os testes da aplicação
- Criar uma estrutura de testes usando `describe`, `it` e `test`
- Organizar vários testes de um mesmo componente

#### O que foi aprendido na aula 02 "Testando funções":

- Como testar funções e móduos de uma aplicação
- Entender o que são testes unitários e em qual sitaução usá-los
- Criar funções puras e sua utilizade

#### O que foi aprendido na aula 03 "Testando componentes React":

- Criar testes de snapshot e entender que situações utilizá-los
- Criar testes usando React Testing Library
- Simular comportamentos de seus usuários nos testes
- Renderizar um componente React
- Acessar o componente renderizado

#### O que foi aprendido na aula 04 "Simulando comportamentos":

- Entender o que são queries do react Testing Library e como usá-las no seu teste
- Entender o que é um mock e como utilizá-lo
- Simular o valor de retorno de uma função
- Simular um teste de código assíncrono
- Testar uma requisição para um endpoint
- Simular uma função e em quais casos de teste isso pode ser útil

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tipos de Testes

- Na base da pirâmide estão os testes unitários funcionam para testar as menores partes do nosso projeto, por exemplo: funções, módulos, componentes.
- No meio da pirâmide temos os testes de integração após todos os testes menores (unitários) realizados. Nós precisaremos saber como eles estão interagindo, por exemplo: como a requisição está sendo feito para o backend, como nossa conexão com BD está se comportando, como um conjunto de componentes estão trabalho juntos.
- No topo da pirâmide temos os testes e2e (end to end) eles testam, por exemplo, um fluxo inteiro que o usuário interagie, uma feature completa, simulam também como usuário está interagindo com a página.

### Código descatável

POCs, Página para campanha de MKT (Landing Pages), Teste A/B

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
