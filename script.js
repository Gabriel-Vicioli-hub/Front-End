const produtos = {

osasco:[
{nome:"Baião de Dois",preco:25},
{nome:"Acarajé",preco:18},
{nome:"Cuscuz Nordestino",preco:12},
{nome:"Tapioca",preco:15}
],

barueri:[
{nome:"Carne de Sol",preco:30},
{nome:"Tapioca",preco:15},
{nome:"Acarajé",preco:18}
],

sp:[
{nome:"Moqueca",preco:35},
{nome:"Baião de Dois",preco:25},
{nome:"Tapioca",preco:15}
]

};

let carrinho = [];
let pontos = 0;

function aceitarLGPD(){
document.getElementById("lgpd").style.display="none";
}

function cadastrar(){

const nome =
document.getElementById("nome").value;

const email =
document.getElementById("email").value;

const senha =
document.getElementById("senha").value;

if(!nome || !email || !senha){
alert("Preencha todos os campos");
return;
}

localStorage.setItem("usuario",
JSON.stringify({
nome,
email,
senha
}));

alert("Cadastro realizado!");
}

function login(){

const email =
document.getElementById("email").value;

const senha =
document.getElementById("senha").value;

const usuario =
JSON.parse(localStorage.getItem("usuario"));

if(
usuario &&
usuario.email === email &&
usuario.senha === senha
){

document.getElementById(
"usuarioLogado"
).innerHTML =
`Bem-vindo, ${usuario.nome}`;

}else{

alert("Login inválido");

}
}

function carregarCardapio(){

const unidade =
document.getElementById("unidade").value;

const area =
document.getElementById("cardapio");

area.innerHTML="";

produtos[unidade].forEach(produto=>{

area.innerHTML += `
<div class="card">

<h3>${produto.nome}</h3>

<p>R$ ${produto.preco}</p>

<button
onclick="adicionarCarrinho(
'${produto.nome}',
${produto.preco}
)">
Adicionar
</button>

</div>
`;

});

}

function filtrarProdutos(){

const termo =
document
.getElementById("pesquisa")
.value
.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.style.display =
card.innerText.toLowerCase()
.includes(termo)
?
"block"
:
"none";

});

}

function adicionarCarrinho(nome,preco){

carrinho.push({
nome,
preco
});

atualizarCarrinho();

}

function removerItem(index){

carrinho.splice(index,1);

atualizarCarrinho();

}

function atualizarCarrinho(){

const lista =
document.getElementById("carrinho");

lista.innerHTML="";

let total = 0;

carrinho.forEach((item,index)=>{

total += item.preco;

lista.innerHTML += `
<li>
${item.nome}
- R$ ${item.preco}

<button
onclick="removerItem(${index})">
Remover
</button>

</li>
`;

});

document.getElementById(
"total"
).innerText =
`Total: R$ ${total}`;

}

function finalizarPedido(){

if(carrinho.length === 0){

alert("Carrinho vazio");
return;

}

const total =
carrinho.reduce(
(acc,item)=>acc+item.preco,
0
);

const aprovado =
Math.random() > 0.2;

if(!aprovado){

document.getElementById(
"statusPedido"
).innerHTML =
"❌ Pagamento recusado";

return;

}

pontos += Math.floor(total/10);

document.getElementById(
"pontos"
).innerText =
`Pontos acumulados: ${pontos}`;

document.getElementById(
"historico"
).innerHTML +=
`<li>Pedido de R$ ${total}</li>`;

document.getElementById(
"statusPedido"
).innerHTML =
"📦 Pedido Recebido";

setTimeout(()=>{

document.getElementById(
"statusPedido"
).innerHTML =
"👨‍🍳 Em preparo";

},3000);

setTimeout(()=>{

document.getElementById(
"statusPedido"
).innerHTML =
"✅ Pronto para retirada";

},6000);

carrinho = [];

atualizarCarrinho();

}

carregarCardapio();
