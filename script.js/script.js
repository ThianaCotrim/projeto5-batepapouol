
const nome = prompt('Qual o seu nome?');

let nomeUsuario = 
    {
        name: nome
    }



function abrirAbaLateral() {
    const abaLateral = document.querySelector('.overlay');
    abaLateral.classList.remove('escondido');
}

function entrarNaSala(){

    console.log(axios);

    const conversa = document.querySelector('.areaConversa');
    conversa.innerHTML = '';


        let template = `
            <div class="entraNaSala">
                (09:21:45) ${nomeUsuario.name} entra na sala...
            </div> <!-- fechamento entra na sala-->
        `;

        conversa.innerHTML += template;
    }



const resposta = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nomeUsuario);

resposta.then(entrarNaSala);

function mantendoConexao(){

const manterConexao = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', nomeUsuario);

manterConexao.then(respostaChegou)
manterConexao.catch()




}
setInterval(mantendoConexao, 5000);


function respostaChegou(resposta){
    
    console.log('resposta chegou!!!!');
    console.log(resposta);
   
}

function deuRuim (){
    console.log('deu ruim');

}

