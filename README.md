# Todo List
O Todo list é uma aplicação onde o usuário pode inserir diversas atividades que precisam ser feitas ao longo de um determinado período, o que permite uma fácil visualização e controle destas atividades.

## Funcionamento
O funcionamento da aplicação é relativamente simples. Caso o usuário queira adicionar um novo item ou tarefa que precisa executar, basta inseri-la no campo disponível e apertar no botão **ADD**. 
Depois de adicionar, é possível que o usuário exclua, edite ou finalize a tarefa, conforme será abordado a seguir:

- Uma vez excluída, a tarefa deixa de existir e não é possível recuperá-la. 
- Ao editar, a tarefa selecionada é inserida no campo de escrita e o botão **ADD** é substituído pelo botão **EDIT**. Ao apertar este botão, a tarefa é atualizada de acordo com o que foi escrito no campo disponível.
- Atividades marcadas (finalizadas) podem ser desmarcadas.

A aplicação foi desenvolvida utilizando **React** e as tarefas adicionadas são tratadas como um estado que contém uma lista de todas as tarefas. Para manipular o estado das tarefas assim como as suas possíveis ações, foi utilizado o **Redux**.

Vale lembrar que as tarefas adicionadas são colocadas no `localStorage` do navegador, permitindo que o usuário feche a aplicação sem perder os itens inseridos.

## Objetivo
O principal objetivo desta aplicação foi de aprender e aprofundar os estudos a cerca do **React**. Apesar de ser um projeto simples, optei por utilizar o **Redux** a fim de compreender mais sobre ele. A primeira versão da aplicação havia sido feito apenas com os *hooks* `useState()` e `useEffects()` que já foram suficientes.

## Tecnologias utilizadas
- HTML
- CSS
- JavaScript
- React
- Redux
