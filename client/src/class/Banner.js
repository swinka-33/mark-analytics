class Banner {
    constructor(options) {
        this.id = options.id
        this.time = options.time
    }

    open() {
        this.id.style.display = 'block'
    }

    close() {
        this.id.style.display = 'none'
    }
}