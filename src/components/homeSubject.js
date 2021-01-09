class homeSubject extends Component {
    render(name, id) {
        return (`
            <div class="Home__subject">
                <div id="home-math" class="Home__subject-name">
                    ${name}
                </div>
                <div id=${id} class="Home__subject-marks"></div>
            </div>
        `)
    }
}