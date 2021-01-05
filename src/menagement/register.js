const TITLES = ['Home page', 'Statistic page', 'Subjects page', 'Settings page']

const homePage = document.getElementById('home')
const settingsPage = document.getElementById('settings')
const subjectPage = document.getElementById('subjects')
const statisticPage = document.getElementById('statistic')

window.location.hash = '#/Home'

const ROUTER = 
[
    document.getElementById('home'),
    document.getElementById('statistic'),
    document.getElementById('subjects'), 
    document.getElementById('settings')
]

for(let i = 0; i < ROUTER.length; i++) {
    ROUTER[i].style.display = 'none'
}

ROUTER[0].style.display = 'block'