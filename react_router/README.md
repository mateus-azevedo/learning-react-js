# React Router: Navegação em uma SPA

## O que foi aprendido:

- Crie uma aplicação em React utilizando a biblioteca React Router
- Estabeleça rotas para outras páginas sem perder a essência que forma uma SPA
- Deixe a aplicação dinâmica com requisições para a API do blog da Doguito Petshop
- Monte filtros para procurar por posts de maneira mais eficiente

### O que aprendemos na aula 01 "Router":

- Configuramos rotas para componentes diversos utilizando condições com `if`.
- Vimos o problema de se utilizar as condições `if` para a navegação de componentes.
- Melhoramos o código com a biblioteca do React Router e deixamos a responsabilidade de direcionar os componentes com ela.

### O que aprendemos na aula 02 "Criando componentes":

- Criamos um componente 404 para quando a pessoa tentar acessar alguma página que não existe
- Vimos a diferença entre uma SPA (Single Page Application) e uma MPA (Multi Pages Application)
- Montamos a navbar utilizando o React Routes para simular uma MPA (Multi Pages Application)

### O que aprendemos na aula 03 "Conectando com API":

- Mudamos a tag `<a>` do html para que o React consiga entender utilizando o `Link`;
- Utilizamos a biblioteca axios para fazer requisições no servidor para buscar artigos;
- Fizemos uma requisição de um artigo específico passando o id do curso, utilizando o `useEffect`.

### O que aprendemos na aula 04 "Exibindo post e categoria":

- Mandamos a pessoa para o componente de 404 utilizando a função `useHistory()`;
- Melhoramos a experiência de buscar um artigo criando um filtro por categorias;

### `npm start`

Rode o app em modo de desenvolvedor\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador

A página irá recarregar quando você fizer alterações

## Aprenda mais

Você pode aprender mais em [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, acesse [React documentation](https://reactjs.org/).
