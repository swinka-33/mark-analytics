class Subjects extends Component {
    render() {
        return (`<div class="Subjects none-js" id="subjects">
            <div class="Subjects__block" id="subject-contauner"></div>
            <div class="Subjects__plus" id="subject-plus">
                <img class="Subjects__plus-img" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828925.svg" />
            </div>
            <div class="Subjects__plus-window" id="subject-plus-window">
                <div class="Subjects__plus-cross" id="subject-plus-cross">
                    &times;
                </div>
                <input type="text" placeholder="Subject" id="subject-plus-input"/>
                <button class="Subjects__plus-create" id="subject-create">Create</button>
                <button class="Subjects__plus-delete" id="subject-delete">Delete</button>
            </div>
        </div>`)
    }
}