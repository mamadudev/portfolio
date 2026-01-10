const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {

    event.preventDefault();

    const campoNome = document.querySelector('#name');
    const errNome = document.querySelector('#errNome');

    if (campoNome.value.trim().length < 3) {
        errNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        errNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const errEmail = document.querySelector('#errEmail');

    if (!campoEmail.value.match(emailRegex)) {
        errEmail.innerHTML = 'Digite um E-mail válido.';
        campoEmail.focus();
        return;
    } else {
        errEmail.innerHTML = '';
    }

    const campoSubject = document.querySelector('#subject');
    const errSubject = document.querySelector('#errSubject');

    if (campoSubject.value.trim().length < 5) {
        errSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
        campoSubject.focus();
        return;
    } else {
        errSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');
    const errMessage = document.querySelector('#errMessage');

    if (campoMessage.value.trim().length < 10) {
        errMessage.innerHTML = 'A Mensagem deve ter no minimo 10 caracteres.';
        campoMessage.focus();
        return;
    } else {
        errMessage.innerHTML = '';
    }

    window.alert("Formulário Enviado com Sucesso!");

    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''

});