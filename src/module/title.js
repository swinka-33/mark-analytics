{
    const title = document.getElementById('title')

    const changeTitle = (value) => {
        title.innerHTML = value
    }

    const titleElement = document.getElementsByClassName('title-js')

    changeTitle(TITLES[0])

    for(let i = 0; i < TITLES.length; i++) {
        titleElement[i].addEventListener('click', () => {
            changeTitle(TITLES[i])
        })
    }
}   