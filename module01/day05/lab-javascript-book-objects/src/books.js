// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

// Your code here:
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: `One of Hemingway's most famous works, it tells the story of Santiago...`,
    },
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: `This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...`,
    },
  },
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: `One of Hemingway's most famous works, it tells the story of Santiago...`,
    },
  },
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: `One of Hemingway's most famous works, it tells the story of Santiago...`,
    },
  },
];

// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language
booksArray.forEach((book) => {
  delete book.details.language;
});
// console.log(booksArray);

// Iteration 4 | Estimated Reading Time
booksArray.forEach((book) => {
  book.readingTime = Math.ceil((book.pages * 500) / 90);
});

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/

const dictionary = {
  "J. K. Rowling": [
    ["Harry Potter and the Philosopher's Stone", 223],
    ["Harry Potter and the Chamber of Secrets", 251],
    ["Harry Potter and the Prisoner of Azkaban", 317],
    ["Harry Potter and the Goblet of Fire", 636],
  ],
  "Neal Stephenson": [
    ["Cryptonomicon", 928],
    ["Anathem", 1008],
    ["Fall; or, Dodge in Hell", 896],
  ],
  "Malcolm Gladwell": [
    ["Outliers", 320],
    ["Blink", 287],
  ],
};

function booksByAuthor(arr) {
  let arrOfBooks = [];
  for (let author in arr) {
    //this is with a for loop
    // for (let i = 0; i < arr[author].length; i++) {
    //   const aBook = {
    //     title: arr[author][i][0],
    //     pages: dictionary[author][i][1],
    //     author: author,
    //   };
    //   arrOfBooks.push(aBook);
    // }

    //with a forEach
    arr[author].forEach((oneBook) => {
      const aBook = {
        title: oneBook[0],
        pages: oneBook[1],
        author,
      };
      arrOfBooks.push(aBook);
    });
  }
  return arrOfBooks;
}
console.log(booksByAuthor(dictionary));

// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
}
