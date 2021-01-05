{
    const routerElement = document.getElementsByClassName('router')

    for(let i = 0; i < ROUTER.length; i++) {
        routerElement[i].addEventListener('click', () => {
            for(let j = 0; j < ROUTER.length; j++) {
                ROUTER[j].style.display = 'none'
            }
            ROUTER[i].style.display = 'block'
        })
    }
}