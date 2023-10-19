let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
let emailInput = document.getElementById("email");  // Correção: Alterei "emailhelperInput" para "emailInput"
let emailLabel = document.querySelector('label[for="email"]');  // Correção: Removi o espaço entre 'label' e '[for="email"]'
let emailHelper = document.getElementById("email-helper");  // Correção: Alterei "emailhelperHelper" para "emailHelper"
let idadeInput = document.getElementById("idade");  // Correção: Alterei "emailhelperInput" para "emailInput"
let idadeLabel = document.querySelector('label [for="idade"]');  // Correção: Removi o espaço entre 'label' e '[for="email"]'
let idadeHelper = document.getElementById("idade-helper");  // Correção: Alterei "emailhelperHelper" para "emailHelper"

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function()
{
  usernameLabel.classList.add('required-popup')
})

emailInput.addEventListener("focus", function()
{
    emailLabel.classList.add('required-popup')
})
idadeInput.addEventListener("focus", function()
{
    idadeLabel.classList.add('required-popup')
})


// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', function()
{
    usernameLabel.classList.remove('required-popup')
})
emailInput.addEventListener('blur', function()
{
    emailLabel.classList.remove('required-popup')
})
idadeInput.addEventListener('blur', function()
{
    idadeLabel.classList.remove('required-popup')
})
// Validar valor do input
usernameInput.addEventListener
("change", function(evento){
    let valor = evento.target.value
    console.log(valor);

    if(valor.length < 3){
        usernameInput.classList.remove('correct');
        usernameInput.classList.add('error');
        usernameHelper.innerText = 'Seu username deve ter 3 ou mais caracteres'
        usernameHelper.classList.add('visible')

    }
    else{
        usernameInput.classList.remove('error');
        usernameHelper.classList.remove('visible');
        usernameInput.classList.add('correct')
    }
})
emailInput.addEventListener("change", function(evento) {
    let valor = evento.target.value;
    console.log(valor);

    const regex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

        if (regex.test(valor)) {
            // O valor é um email do Gmail válido
            emailInput.classList.remove('error');
            emailHelper.classList.remove('visible');
            emailInput.classList.add('correct');
            console.log('Este é um email do Gmail válido.');
    } else {
        emailInput.classList.remove('correct');
        emailInput.classList.add('error');
        emailHelper.innerText = 'escreva seu E-mail corretamente';  // Correção: Alterei "usernameHelper" para "emailHelper"
        emailHelper.classList.add('visible');
    }
});
