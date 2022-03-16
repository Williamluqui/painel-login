// MODELO DE APRENDIZADO --- ARMAZENANDO NO LOCALSTORAGE ---


function entrar (){
    let email = document.getElementById('email');
    let senha = document.getElementById('password');
    let msgErro = document.querySelector('#msgErro')
    let listaUser = [];
    let usuarioValido = { // OBJETO CRIADO PARA PUXAR DO STORAGE DOS USUARIOS

        nome: '',
        email: '',
        senha: ''
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {// varrer o objeto
        if(email.value == item.email && senha.value == item.senha){
            usuarioValido = {
                nome: item.nome,
                email: item.email,
                senha: item.senha
            }
        } 
        
    });
    if(email.value == usuarioValido.email && senha.value == usuarioValido.senha ){
        
        setTimeout(()=>{
            window.location = '/logado.html'
        },3000)
        
        let token = Math.random().toString(16).substring(2) // Criando token para validar o acesso
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado',JSON.stringify(usuarioValido))

        msgErro.innerText = 'Usuario Logado !'
        msgErro.style.color = 'green'
        console.log(token)
    }else{
        msgErro.innerText = 'Usuário ou Senha Inválidos.Tente Novamente !'
        msgErro.style.color = 'red'
    }
    
    
}

