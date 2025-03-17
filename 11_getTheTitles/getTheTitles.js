function getTheTitle(book) {
  return book.title;
}

const getTheTitles = function (books) {
  return books.map(getTheTitle);
};

// Do not edit below this line
module.exports = getTheTitles;
