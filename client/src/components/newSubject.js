class newSubjectPage extends Component {
    render() {
        return (`
            <div class="NewSubject none-js" id="new-subjects">
                <div class="NewSubject__banner none-js" id="subject-banner">
                    Сongratulations! You create the subject.
                </div>
                <div class="NewSubject__name">
                    New subject
                </div>
                <div class="Subjects__plus-window" id="subject-plus-window">
                    <input type="text" placeholder="Subject" class="subject-name" id="subject-plus-input"/>
                    <input type="text" placeholder="Comment" class="subject-comment" id="subject-comment-input"/>
                    <button class="Subjects__plus-create" id="subject-create">Create</button>
                    <button class="Subjects__plus-delete" id="subject-delete">Delete</button>
                </div>
            </div>
        `)
    }
}