/// MODELO DE APRENDIZADO *--- ARMAZENANDO NO LOCALSTORAGE



let nome = document.getElementById('nome');
let validaNome = false;

let sobrenome = document.getElementById('sobrenome');
let validaSobrenome = false;

let email = document.getElementById('email');
let validaemail = false;

let password = document.getElementById('password');
let validaPass = false;

let confirmPassword = document.getElementById('confirmPassword');
let validaConfimPass = false;

let msgErro = document.getElementById('msgErro')

//cadastrar usuarios // 
function cadastroUsuarios(){
    if(validaNome && validaSobrenome && validaPass && validaConfimPass ){
        alert( 'tudo certo')
        
     let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]') // usar o localstorage para armazenar os dados cadastrados 
     listaUser.push(    
                {
                nome:nome.value,
                sobrenome: sobrenome.value,
                email: email.value,
                senha: password.value
                }
                )

                localStorage.setItem('listaUser', JSON.stringify(listaUser)) // chamando os dados
                msgErro.innerText = 'Cadastrando Usuario...'
                msgErro.style.color = 'green'
                setTimeout(()=>{
                    window.location = '/'
                },3000)

            }else{
                
                msgErro.setAttribute('style', 'display:block')
                msgErro.innerText = 'Preencha todos os campos !!'
                msgErro.style.color = 'red'
            }
        }

// TRATAMENTO DE ERROS 

nome.addEventListener('keyup', ()=> {
    if (nome.value.length <= 4  ){
        nome.setAttribute('style', 'border-color: red')
        msgErro.innerHTML = ' Nome * insira no minimo 5 caracteres'
        msgErro.style.color = "red"
        validaNome = false;
    
    }else{
        msgErro.innerHTML = ' '
        nome.setAttribute('style', 'color: black')
        msgErro.style.color = "green"
        validaNome = true;
    }

});

sobrenome.addEventListener('keyup', ()=> {
    if (sobrenome.value.length <= 3  ){
        sobrenome.setAttribute('style', 'border-color: red')
        msgErro.innerHTML = ' Sobrenome * insira no minimo 3 caracteres'
        msgErro.style.color = "red"
        validaSobrenome = false;
    
    }else{
        msgErro.innerHTML =  ''
        sobrenome.setAttribute('style', 'color: black')
        msgErro.style.color = "green"
        validaSobrenome = true;
    }

});


email.addEventListener('keyup', ()=> {
    if (email.value.length <= 4  ){
        email.setAttribute('style', 'border-color: red')
        msgErro.innerHTML = ' Email * insira no minimo 5 caracteres'
        msgErro.style.color = "red"
        validaNome = false;
    
    }else{
        msgErro.innerHTML = ' '
        nome.setAttribute('style', 'color: black')
        msgErro.style.color = "green"
        validaNome = true;
    }

});

password.addEventListener('keyup', ()=> {
    if (password.value.length <= 5  ){
        password.setAttribute('style', 'border-color: red')
        msgErro.innerText = ' Senha * insira no minimo 6 caracteres'
        msgErro.style.color = "red"
        validaPass = false;
    
    }else{
        msgErro.innerHTML = ' '
        password.setAttribute('style', 'color: black')
        msgErro.style.color = "green"
        validaPass = true;
    }
});
//AS SENHAS PRECISAM SER IDENTICAS
confirmPassword.addEventListener('keyup', ()=> {
    if (password.value !=  confirmPassword.value ){
        confirmPassword.setAttribute('style','color:red')
        msgErro.innerText = ' As senhas não conferem'
        msgErro.style.color = "red"
        validaConfimPass = false;
    }else{
        confirmPassword.setAttribute('style','color:green')
        msgErro.innerText = ' As senhas  conferem!!!'
        msgErro.style.color = "green"
        password.setAttribute('style', 'color: black')
        validaConfimPass = true; 
    }

});














