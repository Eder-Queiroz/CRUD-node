const form = document.getElementById('form-cadastro');
const inputCep = document.getElementById('cep');
const inputName = document.getElementById('name'); 
const inputEmail = document.getElementById('email-cadastro');
const inputPassword = document.getElementById('password-cadastro');
const inputEndereco = document.getElementById('endereco');  
const inputCpf = document.getElementById('cpf');  
const inputCell = document.getElementById('cell');  
const btnCadastrar = document.getElementById('cadastrar');
let cep;
let endereco;

async function ChamadaCep() {

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    let res = await fetch(url).then((response) => {

        response.json().then((data) => {

            endereco = `${data.bairro}, ${data.logradouro}`;
            document.getElementById('endereco').value = endereco;

        });

    });

}

const validation = () => {

    let flag = true;

    let indexEmail = inputEmail.value.indexOf("@");

    if(inputCep.value.length != 8) {
        inputCep.style.backgroundColor = 'rgba(255, 76, 48, .5)';
        inputCep.style.color = 'rgb(255,255,255)';
        flag = false;
    }

    if(inputName.value.trim() === '') {
        inputName.style.backgroundColor = 'rgba(255, 76, 48, .5)';
        inputName.style.color = 'rgb(255,255,255)';
        flag = false;
    }

    if(inputEmail.value.trim() === '' || inputEmail.value[indexEmail] !== "@") {
        inputEmail.style.backgroundColor = 'rgba(255, 76, 48, .5)';
        inputEmail.style.color = 'rgb(255,255,255)';
        flag = false;
    }

    if(inputPassword.value.trim() === '') {
        inputPassword.style.backgroundColor = 'rgba(255, 76, 48, .5)';
        inputPassword.style.color = 'rgb(255,255,255)';
    }

    if(inputEndereco.value.trim() === '') {
        inputEndereco.style.backgroundColor = 'rgba(255, 76, 48, .5)';
        inputEndereco.style.color = 'rgb(255,255,255)';
        flag = false;
    }

    if(inputCpf.value.length != 11 || inputCpf.value.trim() === '') {
        inputCpf.style.backgroundColor = 'rgba(255, 76, 48, .5)';
        inputCpf.style.color = 'rgb(255,255,255)';
        flag = false;
    }

    if(inputCell.value.length != 11 || inputCell.value.trim() === '') {
        inputCell.style.backgroundColor = 'rgba(255, 76, 48, .5)';
        inputCell.style.color = 'rgb(255,255,255)';
        flag = false;
    }

    if(!flag) {
        alert("Preencha todos os campos corretamente");
    }

    return flag;

}

inputCep.addEventListener('blur', () => {

    cep = document.getElementById("cep").value.replace("-", "");

    ChamadaCep();

});

btnCadastrar.addEventListener("click", (e) => {

    e.preventDefault();

    if(validation()) {
        form.submit();
    }

});