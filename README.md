# Distribuição-Normal

Este projeto é uma simulação de estatística que gera um gráfico de uma distribuição normal e sua correspondente distribuição cumulativa.

## Arquivos

O projeto consiste em três arquivos:

- `index.html`: Este é o arquivo principal que contém a estrutura HTML do projeto.
- `script.js`: Este é o arquivo JavaScript que contém a lógica para gerar o gráfico.
- `style.css`: Este é o arquivo CSS que contém os estilos para a página.

## Como usar

Para usar este projeto, você precisa inserir a média e o desvio padrão da distribuição normal que deseja gerar. Depois de inserir esses valores, clique no botão "Gerar Gráfico" para gerar o gráfico.

## Detalhes do código

Aqui estão alguns detalhes sobre como o código funciona:

- A função `gerarGrafico` é chamada quando você clica no botão "Gerar Gráfico". Esta função lê a média e o desvio padrão que você inseriu, e então gera o gráfico da distribuição normal e da distribuição cumulativa correspondente.

- A função `normal` calcula a função de densidade de probabilidade de uma distribuição normal para um dado valor `x`.

- A função `acumulado` calcula a função de distribuição cumulativa de uma distribuição normal para um dado valor `x`. Ela usa a função de erro `math.erf` da biblioteca Math.js para fazer isso.
