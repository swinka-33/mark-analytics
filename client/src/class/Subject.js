class Subject {
    constructor(options) {
        this.input = options.input,
        this.comment = options.comment
    }

    clear() {
        this.input.value = '' 
        this.comment.value = ''
    }
}