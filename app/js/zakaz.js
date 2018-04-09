//--------------open hidden block "Make a request"
var make = document.getElementById('make');
var formBlock = document.querySelector('.form__block');
    make.addEventListener('click', showForm);
    function showForm() {
        formBlock.classList.toggle('form__block-show'); 
    } 