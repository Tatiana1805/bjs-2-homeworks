class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}
	get state() {
		return this._state;
	}

}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic'
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective'
	}
}

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}
    giveBookByName(bookName) {
        const bookUser = this.findBookBy('name', bookName);
        if (bookUser) {
          this.books.splice(this.books.indexOf(bookUser), 1);
        }
        return bookUser;
      }
    }


    //******

    // class Student {
    //     constructor(name, gender, age, marks){
    //     this.name = name;
    //     this.gender = gender;
    //     this.age = age;
    //     this.marks = {lesson: marks};
    // }}
    
//     // Student.prototype.setSubject = function(subjectName) {
//     //     this.subject = subjectName;
//     // }
    
//    addMarks(...mark) {
//     if(marks > 2 && marks < 5) {
//         marks.push;
//     } else {
//         return;
//     }
//     if(marks.indexOf === -1){
// 		return marks.push;
//     }
//     }
    
    
    // Student.prototype.getAverage = function() {
    //     if (this.marks === undefined || this.marks.length === 0) {
    //         return 0;
    //     } else {
    //         const mark = this.marks.reduce((acc, m) => acc + m, 0) / this.marks.length;
    //         return mark;
    //     }
    // }
    
    // Student.prototype.exclude = function(reason) {
    //     delete this.subject;
    //     delete this.marks;
    //     this.excluded = reason;
    // }