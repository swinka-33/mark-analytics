const root = document.getElementById('root')

const app = new App

root.innerHTML = app.render()

window.location.hash = '/Home'