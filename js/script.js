const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    console.log(nome, email);
    let data = {

        nome,
        email,

    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let carregando = '<p>Carregando</p>'

    let completo = '<p>Completo</p>'

    let content = document.getElementById('content');
    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = completo
    }, 500);


})
