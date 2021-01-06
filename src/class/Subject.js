class Subject {
    constructor(options) {
        this.id = options.id
        this.input = options.input
    }

    open() {
        this.id.style.display = 'block'
    }

    close() {
        this.id.style.display = 'none'
    }

    clear() {
        this.input.value = '' 
    }
}