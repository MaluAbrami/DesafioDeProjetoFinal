# Desafio De Projeto Final
Este é um desafio de projeto proposto pela Dio durante o meu percurso pelo BootCamp da GFT

# Instruções para entrega

# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}"
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

# Sobre o meu Código
- Realizei todos os requisitos pedidos pelo desafio
  - criei a classe **Hero** e fiz seu construtor com os atributos pedidos
  - dentro da classe criei o método **atacar()** que utilizou de um **switch** para determinar o tipo de ataque que seria realizado pelo herói de acordo com o seu tipo, além disso ao final apresenta a mensagem que foi exigida no desafio
  - criei a função **obterTipoHeroi** em que utilizei um **do-while** e um **switch** para sortear através da simulação de um dado de 6 lados(com o método ***Math.random()***) qual seria o tipo do herói, sendo que caso o número sorteado seja 5 ou 6 o loop do-while se repete, pois só tem tipos determinados para os números do 1 até o 4

#
[Site da Dio](https://www.dio.me/)
#####
[Meu Linkedin](https://www.linkedin.com/in/maria-luiza-abrami-617bab330/?trk=opento_sprofile_details)
#####
[Meu Perfil na Dio](https://www.dio.me/users/marialuizaabrami)