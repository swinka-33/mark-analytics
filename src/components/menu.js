class Menu extends Component {
    render() {
        return (`<div class="Menu">
            <a href="#/Home">
                <div class="Menu__home title-js router-js">Home</div>
            </a>
            <a href="#/Statistic">
                <div class="Menu__statistic title-js router-js">Statistic</div>
            </a>
            <a href="#/NewSubject">
                <div class="Menu__new-subject title-js router-js">New Subject</div>
            </a>
            <a href="#/Subject">
                <div class="Menu__subject title-js router-js">Subject</div>
            </a>
            <a href="#/Settings">
                <div class="Menu__settings title-js router-js">Settings</div>
            </a>
        </div>`)
    }
}