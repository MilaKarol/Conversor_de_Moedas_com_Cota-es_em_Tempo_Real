# Conversor de Moedas

Este projeto é uma aplicação web de conversão de moedas, desenvolvida com HTML, CSS e JavaScript. A interface permite que o usuário insira um valor e selecione moedas de origem e destino para realizar a conversão.

## Funcionalidades

- Entrada de valor para conversão
- Seleção da moeda de origem e moeda de destino
- Exibição do valor convertido
- Botão para converter o valor e outro para limpar o formulário

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização e design responsivo.
- **Bootstrap 5**: Componentes estilizados e design responsivo.
- **JavaScript**: Lógica de conversão de moedas e integração com API de câmbio (a ser implementada).

## Como Utilizar

1. **Abrir a aplicação**: Abra o arquivo `index.html` em um navegador.
2. **Inserir o valor**: Digite o valor que deseja converter no campo de entrada.
3. **Selecionar moedas**: Escolha a moeda de origem e a moeda de destino.
4. **Converter**: Clique no botão **Converter** para realizar a conversão.
5. **Limpar formulário**: Clique no botão **Limpar** para redefinir o formulário.

## Estilos Personalizados (cont.css)

O arquivo `cont.css` define os estilos visuais personalizados da página para criar uma aparência moderna e agradável. Abaixo estão as principais customizações:

- **Cor de fundo da página** (`body`): Um tom de roxo escuro (#1d1429) cria um contraste sofisticado com os elementos do conversor.
- **Container principal** (`.container`): 
  - Altura de 80% da viewport e largura máxima de 30%.
  - Margem esquerda de 5rem para alinhamento e fundo em roxo claro (#7250cf), que destaca o conteúdo do conversor.
- **Botões de ação** (`.btn-primary`):
  - Estilizados com bordas arredondadas e sem borda externa.
  - Cor de fundo em rosa claro (rgb(214, 146, 235)) e sombra de texto para efeito de brilho.
  - Animação ao passar o cursor (`hover`): reduz ligeiramente o tamanho e adiciona uma sombra sutil, com alteração de cor para um tom mais claro.
- **Títulos** (`h1` e `h2`): Cores personalizadas e centralização:
  - `h1` usa um tom de rosa claro (rgb(255, 187, 187)).
  - `h2` está alinhado mais à direita, com um tom roxo acinzentado (rgb(152, 87, 182)).
- **Imagem decorativa** (`img`): 
  - Posicionada à direita da página, com 15% de largura, para complementar o design.
- **Seletores de Moeda** (`.form-select`):
  - Bordas arredondadas, cor de fundo branca, e borda roxa (#6c63ff).
  - Cursor personalizado para melhorar a interatividade.

## Funções JavaScript (cont.js)

O arquivo `cont.js` contém as principais funcionalidades de conversão de moeda e manipulação de interface. Abaixo estão descritas algumas funções esperadas:

- **Função de Conversão**:
  - Esta função obtém os valores inseridos pelo usuário (valor a ser convertido, moeda de origem e moeda de destino).
  - Realiza a conversão com base nas taxas de câmbio, que podem ser obtidas de uma API externa (como ExchangeRate-API ou Fixer.io).
  - Exibe o valor convertido na interface.

- **Função de Limpeza de Formulário**:
  - Esta função limpa os campos do formulário e redefine os seletores de moeda para os valores padrão.
  - Facilita a experiência do usuário ao permitir uma reinicialização rápida da interface.

- **Função de Manipulação de Erros**:
  - Verifica se o valor inserido é válido (por exemplo, não vazio e numérico).
  - Exibe uma mensagem de erro caso haja um problema com o valor inserido ou com a resposta da API de câmbio.

## Estrutura do Projeto

- **index.html**: Estrutura da página e layout do formulário de conversão.
- **cont.css**: Estilos personalizados para o projeto.
- **cont.js**: Lógica de conversão e manipulação do DOM.

## Próximos Passos

- **Integração com API de câmbio**: Adicionar integração com uma API (como ExchangeRate-API ou Fixer.io) para obter taxas de câmbio atualizadas.
- **Mensagens de Erro**: Exibir mensagens de erro caso o valor inserido seja inválido ou se houver um problema com a API.

## Exemplo de Interface

A interface é composta por:
- Um campo de entrada para o valor a ser convertido.
- Seletor de moedas para a moeda de origem e moeda de destino.
- Botões para **Converter** e **Limpar** o formulário.

## Imagem do Projeto

![Captura de Tela do Conversor](img1.png)

---

Este é um projeto simples para ajudar usuários a realizar conversões de moeda de maneira rápida e prática.