
window.addEventListener('load', () => {

    const popUp = document.getElementById('popUp');

    document.addEventListener('click', (e) => {

        e.preventDefault;
        const el = e.target;
    
        if(el.classList.contains('cadastrar') || el.classList.contains('close') || el.classList.contains('popUp')) {
            popUp.classList.toggle('hide');
        }

    })

})