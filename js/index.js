var $ = (s, d = document) => Array.from(d.querySelectorAll(s));
$.one = (s, d = document) => d.querySelector(s);
$.create = tag => document.createElement(tag);

var resultsDiv = $.one("#resultsDiv");

//when the user clicks on search
$.one("#searchBook").addEventListener("click", async function (e) {
  e.preventDefault();

  let bookName = $("#bookName").val();
  resultsDiv.innerHTML = "";

  let queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookName;

  let response;
  try {
    response = await fetch(queryURL);
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }
        // Examine the text in the response
  let books = await response.json();
  console.log(books)
  for (let bookItem of books.items) {

    // saving each data we need from the response to a variable
    //book's author, title, and publishing company, 
    let { title, authors, publisher, previewLink } = bookItem.volumeInfo;
    if (!title) continue;
    let bookCover = bookItem.volumeInfo.imageLinks.thumbnail;

    let bookDiv = $.create("div")
    bookDiv.classList.add("booksDiv");
    bookDiv.classList.add("col-4");

    // New ImageDiv with a Class of BookCover and assigning a src of the bookCover variable
    let imageDiv = $.one("img");
    imageDiv.classList.add("bookCover");
    imageDiv.setAttribute("src", bookCover);

    let bookInfoDiv = $.create("div")
    bookInfoDiv.classList.add("bookInfo")
    bookInfoDiv.innerHTML = `
      <p> Title: ${title}  </p> 
      <p> Author: ${authors}</p>
      <p> Published by: ${publisher}</p>
      <a href= "${previewLink}">Find out more about ${title}</a>`;

    bookDiv.appendChild(imageDiv);
    bookDiv.appendChild(bookInfoDiv);


    // append newDiv to DOM
    resultsDiv.appendChild(bookDiv);

  }

})