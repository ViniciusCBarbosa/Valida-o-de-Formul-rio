const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('Success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();
    const senha2Value = senha2.value.trim();

if(usernameValue === '') {
    setError(username, 'O campo usuário precisa ser preenchido');
}else{
    setSuccess(username);
}

if(emailValue === '') {
    setError(email, 'O campo E-mail precisa ser preenchido');
}else if (!isValidEmail(emailValue)) {
   setError(email, 'Insira um e-mail válido');
}else{
    setSuccess(email);
}

if(senhaValue === '') {
    setError(senha, 'Insira sua senha');
}else if (senhaValue.lenght < 8){
    setError(senha, 'A senha deve conter ao menos 8 caracteres');
}else{
    setSuccess(senha);
}

if(senha2Value === '') {
    setError(senha2, 'Confirme a senha');
} else if (senha2Value !== senhaValue) {
    setError(senha2, "Senhas não correspondem");
} else {
    setSuccess(senha2);
}


};