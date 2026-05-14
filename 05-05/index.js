const div = document.getElementsById('div')
const btn = document.getElementsById('btn')

//Criar novos elementos e fazê-los aparecer no HTML

const novo = document.createElement("p")
novo.textContent = "Texto criado com sucesso"

//Depois de criado o elemento, precisamos dizer aonde ele irá ser posicionado
div.appendChild(novo)