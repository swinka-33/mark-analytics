class Menu extends Component {
    render() {
        return (`<div class="Menu">
            <a href="#/Home">
                <div class="Menu__home title router">Home</div>
            </a>
            <a href="#/Statistic">
                <div class="Menu__statistic title router">Statistic</div>
            </a>
            <a href="#/Subject">
                <div class="Menu__subject title router">Subject</div>
            </a>
            <a href="#/Settings">
                <div class="Menu__settings title router">Settings</div>
            </a>
        </div>`)
    }
}