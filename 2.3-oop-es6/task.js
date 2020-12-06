'use strict';

// Task 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = 'magazine') {
    super(name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type = 'book') {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = type;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'novel') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class FantasticBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type = 'fantastic'
  ) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class DetectiveBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type = 'detective'
  ) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

// Task 2

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const book = this.books.find((currentBook) => currentBook[type] === value);

    return book ? book : null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(
      (currentBook) => currentBook.name === bookName
    );

    if (index >= 0) {
      const book = this.books[index];
      this.books.splice(index, 1);
      return book;
    } else {
      return null;
    }
  }
}

// Task 3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.data = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    const grades = this.data[subject] || [];

    if (grade < 1 || grade > 5) {
      console.log(
        `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
      );
    } else {
      grades.push(grade);
      this.data[subject] = grades;
    }

    return this.data[subject].length;
  }

  countAverage(grades) {
    if (grades.length === 0) {
      return 0;
    }

    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
      sum += grades[i];
    }

    return sum / grades.length;
  }

  getAverageBySubject(subject) {
    const grades = this.data[subject] || [];

    return this.countAverage(grades);
  }

  getTotalAverage() {
    const averageGrades = [];

    for (let subject in this.data) {
      averageGrades.push(this.getAverageBySubject(subject));
    }

    return this.countAverage(averageGrades);
  }
}
