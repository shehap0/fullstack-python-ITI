var books = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
  }
];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  if (book.readingStatus) {
    console.log(`already read '${book.title}' by ${book.author}.`);
  } else {
    console.log(`you still need to read '${book.title}' by ${book.author}.`);
  }
}
