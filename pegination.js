// const Pagination = {
//     init(array, pageSize) {
//       let book = [];
//       let page = [];
//       for (let i = 0; i <= array.length; i++) {
//         if (page.length === pageSize || i === array.length) {
//           book.push(page);
//           page = [];
//         }
//         page.push(array[i]);
//       }
//       console.log(book);
//     },
//   };
//   Pagination.init([1, 2, 3, 4, 5, 6, 7], 2);

function createPagination(array, pageSize) {
  let book = []
  let currentPage = 0
  for (let i = 0; i < array.length; i++) {
    let page = array.slice(i, i + pageSize)
    book.push(page)
  }
  let total = book.length;
  let getPageItems = function() {
    return book[currentPage]
  };
  
  let nextPage = function() {
    if (currentPage < total - 1) {
      currentPage++
    }
    return nextPage
  };
  
  let prevPage = function() {
    if (currentPage > 0) {
      currentPage--
    }
    return prevPage()
  };
  
  let firstPage = function() {
    currentPage = 0
    return firstPage()
  };
  
  let lastPage = function() {
    currentPage = totalPages - 1
    return lastPage()
  };
  
  let goToPage = function(page) {
    if (page >= 1 && page <= total) {
      currentPage = page - 1
    }
    return goToPage()
  };
  
  // return {
  //   getPageItems,
  //   nextPage,
  //   prevPage,
  //   firstPage,
  //   lastPage,
  //   goToPage
  // };
}

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const pagination = createPagination(alphabetArray, 4);
console.log(pagination.getPageItems()); // ["a", "b", "c", "d"]
// console.log(pagination.nextPage().getPageItems()); // ["e", "f", "g", "h"]
// console.log(pagination.nextPage().nextPage().getPageItems()); // ["i", "j", "k", "l"]
// console.log(pagination.prevPage().getPageItems()); // ["e", "f", "g", "h"]
// console.log(pagination.firstPage().getPageItems()); // ["a", "b", "c", "d"]
// console.log(pagination.lastPage().getPageItems()); // ["y", "z"]
// console.log(pagination.goToPage(5).getPageItems()); // ["s", "t", "u", "v"]

