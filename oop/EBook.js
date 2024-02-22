import Book from './Book.js';

export default class EBook extends Book {
  #allowedFormats = ['PDF', 'TXT', 'HTML'];

  constructor(title, author, year, fileFormat) {
    super(title, author, year),
    this._fileFormat = fileFormat;
  }

  printInfo() {
    console.log(`The ebook title is ${this._title}, author is ${this._author}, year of publishing is ${this._year}, file format is ${this._fileFormat}`);
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (!this.#allowedFormats.includes(value.toUpperCase())) {
      console.error('Error: File format is not supported. It should be PDF, TXT or HTML');
      return;
    }
    this._fileFormat = value.toUpperCase();
  }

  static fromBookAndFileFormat(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}
