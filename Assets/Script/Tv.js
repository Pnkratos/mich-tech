import { utilidades } from "./Produtos.js";
/*Renderiza os produtos*/


import { salvarLocalStorage } from "./Produtos.js";



function habilitarRecursos(){
var lugarTitulo = document.getElementById("lugtitutv");
lugarTitulo.innerHTML = `<a href='smartphones.html' style='text-align:center;'><h1 id='titsec'>Smart Tv</h1><br><br><br></a>`;

var lugSmartphones = document.getElementById("tv");


function renderizarProduto() {
  for (const dados of utilidades) {
    if (dados.cate == "TV") {
      lugSmartphones.innerHTML += `
      <div class="produto item current-item" id='produtoLugar${dados.id}'>
      <div class='divProdutoMain'>
      <img src="${dados.imagem}" alt="" class='imgProdutoMain'  id='btnAbrirPagProduto${dados.id}'>
      </div>
      <div class="nome">${dados.nome}</div>
      <div class="marca" >${dados.marca}</div>
      <div class="preco" >R$ ${dados.preco}</div>
      <div class='avaliacao'>
      <span id='estrela1' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
      <span id='estrela2' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
      <span id='estrela3' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
      <span id='estrela4' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
      <span id='estrela5' class='estrelaVazia'><img src='./Assets/botoes/star-regular.svg' class='estrela'></span>
      <span style='color:orange;'>(50)</span>
      </div>
      <button class='butAdd' style='display:flex; cursor:pointer; align-items:center;' id='pro${dados.id}')'>adicionar  <img src='./Assets/botoes/add_product_car.svg' style='height:20px;'></button>
      
      </div>`;
    }
  }
}






  // AQUI COMEÇA OS FILTROS


  const celulares = utilidades.filter(
    (produto) => produto.cate === "TV"
  );
  console.log(celulares)



//   // Obtendo as marcas únicas dos celulares

const marcasDeCelulares = [
  ...new Set(celulares.map((produto) => produto.marca))
];

function colocarMarcas() {
  var luga = document.getElementById("summarioFiltro");
  luga.innerHTML+="<h3 style='margin-bottom:20px;'>Marcas</h3>"
  for(const adda of marcasDeCelulares){
    luga.innerHTML+=`<button class='btnMarcas' id='${adda}'>${adda}</button>`
  }
}
colocarMarcas()

const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
var number = value.textContent = input.value;
input.addEventListener("input", (event) => {
  number = event.target.value
  console.log(value.textContent = event.target.value)
});

  const cateFiltrada = utilidades.filter((c)=>c.cate == 'TV')



  

  
document.getElementById("adsa").addEventListener('click', function(){
  const produtosFiltradosPreco =  cateFiltrada.filter((s)=>s.preco <= number)
  document.getElementById("tv").innerHTML=''
  for(const dados of produtosFiltradosPreco){
    
    document.getElementById("tv").innerHTML += `
    <div class="produto item current-item">
    <div class='divProdutoMain'>
    <img src="${dados.imagem}" alt="" class='imgProdutoMain'  id='btnAbrirPagProduto${dados.id}'>
    </div>
    <div class="nome">${dados.nome}</div>
    <div class="marca" >${dados.marca}</div>
    <div class="preco" >R$ ${dados.preco}</div>
    <div class='avaliacao'>
    <span id='estrela1' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela2' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela3' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela4' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela5' class='estrelaVazia'><img src='./Assets/botoes/star-regular.svg' class='estrela'></span>
    <span style='color:orange;'>(50)</span>
    </div>
    <button class='butAdd' style='display:flex; cursor:pointer; align-items:center;' id='3pro${dados.id}')'>adicionar  <img src='./Assets/botoes/add_product_car.svg' style='height:20px;'></button>
    </div>`
  }
  for (const idProduto of produtosFiltradosPreco) {
    var btnAdicionar = document.getElementById(`3pro${idProduto.id}`);
    btnAdicionar.addEventListener("click", () =>
      renderizarProdutoCarrinho(idProduto.id)
    );

    for (const abc of produtosFiltradosPreco) {
        var abrirProdutosIndividuais2 = document.getElementById(
          `btnAbrirPagProduto${abc.id}`
        );
        abrirProdutosIndividuais2.addEventListener("click", () =>
          aparecerProdutoIndividual(abc.id)
        );
    }
    
  }
  
})



  for(const Produtos of marcasDeCelulares){
    document.getElementById(`${Produtos}`).addEventListener("click", ()=> testederecepcao(Produtos)) 
  }
// adiciona funcionalidade aos botões





  function testederecepcao(item){
    const produtosFiltrados = cateFiltrada.filter((p)=>p.marca == item )
    var lugProdutosFiltrados = document.getElementById('tv')
    console.log(produtosFiltrados)
    lugProdutosFiltrados.innerHTML=''
    for (const dados of produtosFiltrados) {


        lugProdutosFiltrados.innerHTML += `
      <div class="produto item current-item">
      <div class='divProdutoMain'>
      <img src="${dados.imagem}" alt="" class='imgProdutoMain'  id='btnAbrirPagProduto${dados.id}'>
      </div>
      <div class="nome">${dados.nome}</div>
      <div class="marca" >${dados.marca}</div>
      <div class="preco" >R$ ${dados.preco}</div>
      <div class='avaliacao'>
      <span id='estrela1' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
      <span id='estrela2' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
      <span id='estrela3' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
      <span id='estrela4' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
      <span id='estrela5' class='estrelaVazia'><img src='./Assets/botoes/star-regular.svg' class='estrela'></span>
      <span style='color:orange;'>(50)</span>
      </div>
      <button class='butAdd' style='display:flex; cursor:pointer; align-items:center;' id='3pro${dados.id}')'>adicionar  <img src='./Assets/botoes/add_product_car.svg' style='height:20px;'></button>
      </div>`;
      
    }

      
for (const idProduto of produtosFiltrados) {
    var btnAdicionar = document.getElementById(`3pro${idProduto.id}`);
    btnAdicionar.addEventListener("click", () =>
      renderizarProdutoCarrinho(idProduto.id)
    );

    for (const abc of produtosFiltrados) {
        var abrirProdutosIndividuais2 = document.getElementById(
          `btnAbrirPagProduto${abc.id}`
        );
        abrirProdutosIndividuais2.addEventListener("click", () =>
          aparecerProdutoIndividual(abc.id)
        );
    }
    
    
    
}
  }








renderizarProduto();

/*Renderiza os produtos*/
/*Faz o menu de itens aparecer */
function habilitarRecursos() {
  function aparecerCarrinho() {
    const carrinho = document.getElementById("menuCarrinho");
    carrinho.classList.toggle("menuCarrinhoAparecendo");
  }
  const btnCarrinho = document.getElementById("btnAbrirCarrinho");
  btnCarrinho.addEventListener("click", () => aparecerCarrinho());

  const btnFCarrinho = document.getElementById("btnFecharCarrinho");
  btnFCarrinho.addEventListener("click", () => aparecerCarrinho());

function aparecerLogin() {
    const Login = document.getElementById("menuDesaparecido");
    Login.classList.toggle("menuProfileAparecendo");
  }

  const btnAMenuP = document.getElementById("btnApareceProfile");
  btnAMenuP.addEventListener("click", () => aparecerLogin());

  const btnFMenuP = document.getElementById("btnFecharMenuProfile");
  btnFMenuP.addEventListener("click", () => aparecerLogin());
  Notfy();
}
habilitarRecursos();

/*Faz o Carrinho aparecer*/

}
habilitarRecursos()

            // adiciona os produtos ao Carrinho

var conteinerCarrinho = document.createElement('article')
conteinerCarrinho.setAttribute('id','conteinerCarrinho' )
conteinerCarrinho.setAttribute('class','containerCarrinho')
const lugarCarrinho = document.getElementById('lugarProdutoCarrinho')
lugarCarrinho.appendChild(conteinerCarrinho)


import { idsProdutosCarrinho } from "./Produtos.js";

function redesenharProdutos(idpro){   

  const product = utilidades.find((p) => p.id == idpro) /*Acha o produto no catalogo*/
  const lugar = document.getElementById('conteinerCarrinho')
  const tagProdutoNoaCarrinho = document.createElement('div')
  tagProdutoNoaCarrinho.setAttribute('class',`produtoNoaCarrinho`)
  tagProdutoNoaCarrinho.setAttribute('id',`produtoNoaCarrinho${product.id}`)
  lugar.appendChild(tagProdutoNoaCarrinho) /*adiciona a div Pai do Produto*/



  const model = `

  <div class='caracteristicas'>
  <img src="${product.imagem}" alt="" class="imgProdutoCarrinho">

  <div class="dadosProdutoCarrinho" id="lugarDados${product.id}">
      <p class="nome" id="nomeNoCarrinho${product.id}" style='color:white;'>${product.nome}</p>
      <p class="marca" id="marcaNoCarrinho${product.id}" style='color:grey;'>${product.marca}</p>
      <p class="preco" id="precoNoCarrinho${product.id}"> R$ ${product.preco}</p>
  </div>
  </div>

  <div class="botoesDoProdutoCarrinho" id="botoesDoProdutoCarrinho${product.id}">
  <button class="fecharProdutocarrinho" id="fecharProdutocarrinho${product.id}"><img src='./Assets/botoes/delete-left-solid.svg' style='height:100%;'></button>
    <div class='infoProduto'>
      <button class="btnsQuant" id="btnAcrescentarProduto${product.id}"><img src='./Assets/botoes/add.svg'></button>
        <p class='numquantidadeprodutos' id="quantidadeProdutosCarrinhos${product.id}"  style='color:orange;'></p>
        <button class="btnsQuant" id="btnSubtrairProduto${product.id}"><img src='./Assets/botoes/remove.svg'></button>
          </div>
      </div>
  `   /*modelo de card para colocar no carrinho */
  const lugarTag = document.getElementById(`produtoNoaCarrinho${product.id}`)/*Mudei */
  lugarTag.innerHTML+=model
  atualizarQuantidade(idpro)  /* recupera o elemento e coloca o modelo nele*/
  atualizarPrecoCarrinho()
  Notfy()

  document.getElementById(`btnAcrescentarProduto${idpro}`).addEventListener('click',()=> acrescentarProduto(idpro))
  document.getElementById(`btnSubtrairProduto${idpro}`).addEventListener('click',()=> subtrairProduto(idpro))
   document.getElementById(`fecharProdutocarrinho${idpro}`).addEventListener('click',()=> removerProdutoCarrinho(idpro))
                /*Adiciona funcionalidade aos botoes */

}


// function removerProdutoCarrinho(idpro) {
//   delete idsProdutosCarrinho[idpro];
//   
//   salvarLocalStorage("carrinho", idsProdutosCarrinho);
//   mostrarProdutosAtualizados();
//   atualizarPrecoCarrinho();
//   Notfy();
// }

function removerProdutoCarrinho(idpro){
  delete idsProdutosCarrinho[idpro]
  Notfy()
  salvarLocalStorage('carrinho', idsProdutosCarrinho)
  mostrarProdutosAtualizados()
  atualizarPrecoCarrinho()
   
} 




function atualizarPrecoCarrinho() {
  const lugPreco = document.getElementById("txtPreco");
  let totalPreco = 0;
  for (const idProduto in idsProdutosCarrinho) {
    totalPreco =
      totalPreco +
      utilidades.find((pr) => pr.id == idProduto).preco *
        idsProdutosCarrinho[idProduto];
  }
  lugPreco.innerText = `Total: R$ ${totalPreco.toFixed(2).replace(".", ",")}`;
}
atualizarPrecoCarrinho()

// function acrescentarProduto(idpro) {
//   idsProdutosCarrinho[idpro]++;
//   
//   salvarLocalStorage("carrinho", idsProdutosCarrinho);
//   atualizarQuantidade(idpro);
//   atualizarPrecoCarrinho();
//   Notfy();
// }

function acrescentarProduto(idpro){
  idsProdutosCarrinho[idpro]++
  Notfy()
  salvarLocalStorage('carrinho', idsProdutosCarrinho)
  atualizarQuantidade(idpro)
  atualizarPrecoCarrinho()
  
}


// function subtrairProduto(idpro) {
//   if (idsProdutosCarrinho[idpro] === 1) {
//     removerProdutoCarrinho(idpro);
//     return;
//   }

//   idsProdutosCarrinho[idpro]--;
//   
//   salvarLocalStorage("carrinho", idsProdutosCarrinho);
//   atualizarQuantidade(idpro);
//   atualizarPrecoCarrinho();
//   Notfy();
// }

function subtrairProduto(idpro){

  if(idsProdutosCarrinho[idpro] === 1){
    removerProdutoCarrinho(idpro)
    Notfy()
    
    return
  }
  
  idsProdutosCarrinho[idpro]--
  Notfy()
  salvarLocalStorage('carrinho', idsProdutosCarrinho)
  atualizarQuantidade(idpro)
  
  atualizarPrecoCarrinho()
}

function atualizarQuantidade(idpro) {
  document.getElementById(`quantidadeProdutosCarrinhos${idpro}`).innerText =
    idsProdutosCarrinho[idpro];
}

function mostrarProdutosAtualizados() {
  const lugar = document.getElementById("conteinerCarrinho");
  lugar.innerHTML = "";

  for (const idProduto in idsProdutosCarrinho) {
    redesenharProdutos(idProduto);
  }
}
mostrarProdutosAtualizados();

// function renderizarProdutoCarrinho(idpro) {
//   if (idpro in idsProdutosCarrinho) {
//     acrescentarProduto(idpro);
//     return;
//   }
//   idsProdutosCarrinho[idpro] = 1;
//   
//   salvarLocalStorage('carrinho', idsProdutosCarrinho)
//   redesenharProdutos(idpro);
// }

function renderizarProdutoCarrinho(idpro){
  if(idpro in idsProdutosCarrinho){
    acrescentarProduto(idpro)
    Notfy()
    
    return
  }
  idsProdutosCarrinho[idpro]=1;
  salvarLocalStorage('carrinho', idsProdutosCarrinho)
  Notfy()
  
  redesenharProdutos(idpro)
}


for(const idProduto of utilidades){
  if(idProduto.cate == 'TV'){
  var btnAdicionar = document.getElementById(`pro${idProduto.id}`)
  btnAdicionar.addEventListener('click',() => renderizarProdutoCarrinho(idProduto.id));
}
}

function Notfy(){
  var quantTotal = 0 
  for(const idpro in idsProdutosCarrinho){
    quantTotal+=idsProdutosCarrinho[idpro]
  } 
  var spanQuant = document.getElementById('spanQuant')
  spanQuant.innerText=quantTotal
}



function filtrarProdutos(){

  
    var divitemlist = document.createElement('div')
    divitemlist.setAttribute("id","itemList")
    divitemlist.setAttribute("class","itemlist")
  
    document.getElementById("topo").appendChild(divitemlist)
  
    var divKaua = document.createElement('div')
    divKaua.setAttribute('id','kaua')
  
    var lugitems =  document.getElementById('itemList')
      lugitems.innerHTML+=`<h2 style='color:orange;'>Produtos Encontrados</h2>`
    lugitems.appendChild(divKaua)
  
  
    for(const dadosPesquisa of utilidades){
  
      document.getElementById('kaua').innerHTML+=`
      <div class='produtosBarra' id='lugar${dadosPesquisa.id}'>
    
        <img src='${dadosPesquisa.imagem}' style='height: 100px;'>
        <div style='display:flex;flex-direction:column; gap:10px;'>
        <span class='tets' id='${dadosPesquisa.id}'>${dadosPesquisa.nome} </span>
        <span style='color:grey;'>${dadosPesquisa.marca}</span>
        <b><span style='color:orange;'>R$<span style='color:orange;'> ${dadosPesquisa.preco}</span></span></b>
        </div>
        <button id='btnPesquisaProduto${dadosPesquisa.id}' class='btnAbrirBarra'>Abrir</button>
      </div>
  
      `
    }
    
    document.getElementById('inputSearch').addEventListener('input', function () {
      let searchTerm = this.value.toLowerCase();
      let items = document.querySelectorAll('.tets');
      var aparecerMenu = document.getElementById("itemList")
      aparecerMenu.classList.add("itensAparecendo")
      var input = document.getElementById('inputSearch')
    
      if(input.value == 0){
        aparecerMenu.classList.remove("itensAparecendo")
      }
      
      items.forEach(item => {
          let text = item.innerText.toLowerCase();
          if (text.includes(searchTerm)) {
            document.getElementById(`lugar${item.id}`).style.display='flex'
          } else {
              document.getElementById(`lugar${item.id}`).style.display='none'
          }
      });
    });
    // for(const produtos of utilidades){
    //   var btnAbrirPesquisa = document.getElementById(`btnPesquisaProduto${produtos.id}`)
    //   btnAbrirPesquisa.addEventListener("click",()=>habilitarProdutoIndividual(produtos.id))
    // }

  }
  filtrarProdutos()

  for(const teste of utilidades){
    habilitarProdutoIndividual(teste.id)
  } 
  
  function habilitarProdutoIndividual(id){


    const produtos = utilidades.find(
      (p) => p.id == id
    );

    var content = document.createElement('div')
    content.setAttribute('id',`container${produtos.id}`)
    content.setAttribute('class','ProdutosIndividuais')
  
    const model2 = `    <div class='totalProdutoIndividual'>
    <button class='btnFecharProdutoIndividual' id='btnFecharProdutoIndividual${produtos.id}'>    <img src="./Assets/botoes/close_FILL1_wght400_GRAD0_opsz24B.svg" alt="" style='scale:1.2;'></button>

    <div class='left-side'>
    <span style='color:orange; position:absolute; top:0; margin-top:3%;'><a style='color:orange;' href='./index.html'>Início</a> / <a
    style='color:orange;' href='./${produtos.cate}.html'>${produtos.cate}</a></span>
  
        <div class="divImgProdutoIndividual">
            <img src='${produtos.imagem}' style='height:300px;'>
        </div>
    </div>
  
  
  
        <div class="caracteristicasProdutoIndividual">
            <p class="nomeProdutoIndividual">
                ${produtos.nome}
            </p>
            <p class="marcaProdutoIndividual">
                ${produtos.marca}
            </p>
            <div class="descricaoProdutoIndividual">
            <h3>Características:</h3>
            <p>${produtos.caract}</p>
            </div>
            <div class='avaliacao'>
            <span id='estrela1' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
            <span id='estrela2' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
            <span id='estrela3' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
            <span id='estrela4' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
            <span id='estrela5' class='estrelaVazia'><img src='./Assets/botoes/star-regular.svg' class='estrela'></span>
            <span style='color:orange;'>(50)</span>
            </div>
            <span class="precoProdutoIndividual">
                R$${produtos.preco}
  
            </span>
            <span class="semjurosProdutoIndividual">
                Em até <span class='txtsemjuros'> 10 X de R$${(produtos.preco/10).toFixed(2)}</span>
            </span>
            <div class="addToCartProdutoIndividual">
            <button type="button" class="button" id='2pro${produtos.id}'  >
            <span class="button__text">Adicionar</span>
            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
          </button>     </div>
  
  
    </div>
  </div>
  `

  
    var lugar = document.getElementById('tete')
    lugar.appendChild(content)
  
    var container = document.getElementById(`container${produtos.id}`)
    container.innerHTML+=model2
  
  
  var abrirProdutosIndividuais = document.getElementById(`btnPesquisaProduto${produtos.id}`)
  abrirProdutosIndividuais.addEventListener("click",()=>aparecerProdutoIndividual(produtos.id))
  



  var btnimgFecharProduto = document.getElementById(`btnFecharProdutoIndividual${produtos.id}`)
  btnimgFecharProduto.addEventListener('click',()=>aparecerProdutoIndividual(produtos.id))
  
  var btnADDCARProdutoIndividual = document.getElementById(`2pro${produtos.id}`)
  btnADDCARProdutoIndividual.addEventListener('click',()=> renderizarProdutoCarrinho(produtos.id))



}




function aparecerProdutoIndividual(id){
  var lugarP = document.getElementById(`container${id}`)
  lugarP.classList.toggle('ProdutosIndividuaisAparecendo')
}




for(const abc of utilidades){
  if(abc.cate == "TV"){
   var abrirProdutosIndividuais2 = document.getElementById(`btnAbrirPagProduto${abc.id}`)
  abrirProdutosIndividuais2.addEventListener("click",()=>aparecerProdutoIndividual(abc.id))

}
}

// function {
//   var contadorID = 0
// for(const dados in idsProdutosCarrinho){
//   contadorID++
// }

// const lugarV = document.getElementById('conteinerCarrinho')
// if(contadorID >= 1 ){
//   document.getElementById('txtVazio').style.display='none'
//   document.getElementById("conteinerCarrinho").style.justifyContent='start'
//   return
// }
// else{

//   lugarV.innerHTML=`<p style='color:white; display:flex; flex-direction:column; align-items:center; justify-content:space-around; gap:50px; ' id='txtVazio'> <img src='./Assets/botoes/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg' style='height:150px;'>Ops! Carrinho Vazio</p>`
//     document.getElementById('txtVazio').style.display='flex'
//     document.getElementById("conteinerCarrinho").style.justifyContent='center'
// }

// }





    document.getElementById("finalizarCompra").addEventListener("click", function(){
      window.location.href='FinalCompra.html'
    })

