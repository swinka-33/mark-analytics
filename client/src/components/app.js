class App extends Component {
    render() {
        return (`
            ${GETTER.header.render()}
            ${GETTER.menu.render()}
            <div class="div">
                ${GETTER.home.render()}
                ${GETTER.statistic.render()}
                ${GETTER.newsubject.render()}
                ${GETTER.subject.render()}
                ${GETTER.settings.render()}
            </div>
        `)
    }
}