
const inputSearch = document.getElementById('search');

inputSearch.addEventListener('keyup', e => {

    const search = e.target.value.toLocaleLowerCase();
    const users = document.querySelectorAll('.user');

    users.forEach(user => {

        const user_name = user.querySelector('.name').innerText.toLocaleLowerCase();

        user.style.display = 'table-row';

        if(!user_name.includes(search)) {
            user.style.display = 'none';
        }

    });

})