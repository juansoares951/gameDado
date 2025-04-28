Um jogo simples criado utilizando HTML, CSS e JavaScript.

Resumindo o HTML:
Importa fontes do Google (Indie Flower)

Exibe o título principal "Atualizar".

Inclui seções para mostrar os dados dos dois jogadores, cada uma com um título (Jogador 1 e Jogador 2) e imagens de dados
_________________________________________________________________________________________________________________________
Resumindo o CSS:
Container Principal (.container):
Centraliza o conteúdo na página, com largura ajustada para 70%.

Dados (.dado):
Cada área de dados tem tamanho fixo (400x400px), é exibida lado a lado e centralizada.

Imagens (img):
Ajustadas para ocupar metade da área disponível (50% de largura).

_________________________________________________________________________________________________________________________
Resumindo o JavaScript:
Geração Aleatória de Números:
Números aleatórios de 1 a 6 são gerados para cada jogador (randomNumber1 e randomNumber2).

Imagens Dinâmicas dos Dados:
As imagens correspondentes aos números gerados são selecionadas (dado1.jpg até dado6.jpg) e atualizadas nos elementos <img> da página.

Determinação do Vencedor:
Compara os números dos jogadores e atualiza o título da página <h1> para indicar o vencedor (Jogador 1 ou Jogador 2) ou um empate.
