const getGoods = () => {
    const navbar = document.querySelector('.navigation__links')


    const getData = () => {
        fetch('/db/db.json')
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('data', JSON.stringify(data))
            })
    }

    navbar.addEventListener('click', (e) => {
        if (e.target.closest('.navigation-link')) {
            e.preventDefault()
            getData()
        }
    })
}

getGoods()