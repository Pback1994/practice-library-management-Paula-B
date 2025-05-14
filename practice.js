// Task #1 - Create a Base Class

class libraryItems {
  constructor(title, id, isAvailable) {
    this.title = title;
    this.id = id;
    this.isAvailable = isAvailable;
  }

  checkOut() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been checked out.`);
    } else {
      console.log(`${this.title} is already checked out.`);
    }
  }

  returnItem() {
    if (!this.isAvailable === false) {
      this.isAvailable = true;
      console.log(`${this.title} has been returned.`);
    } else {
      console.log(`${this.title} is already checked out`);
    }
  }
}

// Task #2 - Extend the Base Class

class Books extends libraryItems {
  constructor(title, id, isAvailable, author, genre) {
    super(title, id, isAvailable);
    this.author = author;
    this.genre = genre;
  }

  describe() {
    return `Book: ${this.title} by ${this.author}, Genre: ${this.genre}`;
  }
}

class DVD extends libraryItems {
  constructor(title, id, isAvailable, director, duration) {
    super(title, id, isAvailable);
    this.director = director;
    this.duration = duration;
  }

  describe() {
    return `DVD: ${this.title} by ${this.director}, Run time: ${this.duration} minutes`;
  }
}

class Magazine extends libraryItems {
  constructor(title, id, isAvailable, issueNumber, publisher) {
    super(title, id, isAvailable);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }

  describe() {
    return `Magazine: ${this.title} by ${this.publisher}, IssueNumber: ${this.issueNumber}`;
  }
}

// Task #3 - Instantiate Objects

let books = new Books(
  "The Great Gatsby",
  2,
  true,
  "F. Scott Fitzgerald",
  "fiction"
);

console.log(books);

let dvd = new DVD("Raiders of the Lost Arch", 1, true, "Steven Spielberg", 120);

console.log(dvd);

let magazine = new Magazine(
  "Sixteen Magazine",
  3,
  true,
  5,
  "16 Magazines, Inc."
);

console.log(magazine);

// Task #4 - Test the Inheritance

console.log(dvd.describe());
dvd.checkOut();
console.log(dvd.describe());
dvd.returnItem();
console.log(dvd.describe());

console.log(books.describe());
books.checkOut();
console.log(books.describe());
books.returnItem();
console.log(books.describe());

console.log(magazine.describe());
magazine.checkOut();
console.log(magazine.describe());
magazine.returnItem();
console.log(magazine.describe());
