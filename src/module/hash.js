{
    {
        const hashElement = document.getElementsByClassName('hash-js')
    
        for(let i = 0; i < ROUTER.length; i++) {
            hashElement[i].addEventListener('click', () => {
                window.location.hash = HASH[i]
            })
        }
    }
}