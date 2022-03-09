/*não faz parte diretamente do react, é uma biblioteca do javascript
serve para ter controle dos estados globais - diminui as props.
Regras pra usar: O estado tem mais de um dono?
é manipulado por mais componentes?
as ações do usuario em ouyros componenes causam efeito nos estados?

a ação chama um objeto que tem um type (e uma info) que vai pra store
na store tem um reducer (ações do reducer) (player, user, cadastros...)*/

/*Redux é um controlador de estados geral para sua aplicação.

Compartilhar estados entre vários componentes diferentes se torna uma coisa muito fácil quando o utilizamos. 
O Redux é basicamente divido em 3 partes: store, reducers e actions.

A store
"store" é o nome dado pelo Facebook para o conjunto de estados da sua aplicação. 
Vamos pensar na store como um grande centro de informações, que possui disponibilidade para receber e 
entregar exatamente o que o seu componente requisita (seja uma função, ou uma informação propriamente dita). 
A store é um objeto JavaScript que possui todos os estados dos seus componentes.

Os reducers
Cada dado da store deve ter o seu próprio reducer, por exemplo: o dado "user" teria o seu reducer, 
chamado  só para User. Um reducer é encarregado de lidar com todas as ações, como algum componente pedindo 
para alterar algum dado da store.

Actions
Actions são responsáveis por requisitar algo para um reducer. Elas devem ser sempre funções puras, 
dizendo de uma forma leiga, ou seja elas devem APENAS enviar os dados ao reducer, nada além disso. 
Disparar uma ação apenas levando os dados que você deseja enviar e o reducer vai receber e usar os dados.*/