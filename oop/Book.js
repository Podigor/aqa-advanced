export default class Book {

    constructor(title, author, year) {
        this._title = title,
        this._author = author,
        this._year = year
    }

    printInfo() {
        console.log(`The book ${this._title} was written by ${this._author} in ${this._year} year`)
    }
    
    get title() {
        return this._title
    }

    get author() {
        return this._author
    }

    get year() {
        return this._year
    }

    set title(titleName) {
        if(typeof titleName !== "string" || titleName.trim().length < 1) {
            console.error("Error: Title is invalid, it should a non-empty string")
            return
        }
        this._title = titleName
    }

    set author(authorName) {
        if(typeof authorName !== "string" || authorName.trim().length < 1) {
            console.error("Error: Author is invalid, it should a non-empty string")
            return
        }
        this._author = authorName
    }

    set year(value) {
        if(typeof value !== "number") {
            console.error("Error: Year is invalid, it should a number")
            return
        }
        if(value < 1800 || value > new Date().getFullYear()) {
            console.error("Error: Year can't be less than 1800 year and more than current year")
            return
        }
        this._year = value
    }

    static findOldestBook(books) {
        return books.sort((a, b) => a.year - b.year)[0]
    }

}