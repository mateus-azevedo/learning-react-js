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

#### O que foi aprendido na aula 05 "Quando usar cada tipo de teste":

- Entender a pirâmide de testes.
- Os tipos de teste mais comuns no backend e frontend: unitário, integração e end to end.
- Analisar situações em que criamos testes automatizados para identifcar situações em que o custo do testes podem ser maior do que seus benefícios: Testes A/B, código descartável, provas de conceito

## Tipos de Testes

- Na base da pirâmide estão os testes unitários funcionam para testar as menores partes do nosso projeto, por exemplo: funções, módulos, componentes.
- No meio da pirâmide temos os testes de integração após todos os testes menores (unitários) realizados. Nós precisaremos saber como eles estão interagindo, por exemplo: como a requisição está sendo feito para o backend, como nossa conexão com BD está se comportando, como um conjunto de componentes estão trabalho juntos.
- No topo da pirâmide temos os testes e2e (end to end) eles testam, por exemplo, um fluxo inteiro que o usuário interagie, uma feature completa, simulam também como usuário está interagindo com a página.

### Código descatável

POCs, Página para campanha de MKT (Landing Pages), Teste A/B
