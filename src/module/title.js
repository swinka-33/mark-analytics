{
    const title = document.getElementById('title')

    const changeTitle = (value) => {
        title.innerHTML = value
    }

    const titles = ['Home page', 'Statistic page', 'Subjects page', 'Settings page']

    const titleElement = document.getElementsByClassName('title')

    changeTitle(titles[0])

    for(let i = 0; i < titleElement.length; i++) {
        titleElement[i].addEventListener('click', () => {
            changeTitle(titles[i])
        })
    }
}   