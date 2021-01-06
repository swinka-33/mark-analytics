class App extends Component {
    render() {
        return (`
            ${header.render()}
            ${menu.render()}
            <div class="div">
                ${home.render()}
                ${statistic.render()}
                ${newsubject.render()}
                ${subject.render()}
                ${settings.render()}
            </div>
        `)
    }
}