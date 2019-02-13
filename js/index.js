var resultsDiv = $("#resultsDiv");

//when the user clicks on search
$(document).on("click", "#searchBook", async function (e) {
  e.preventDefault();

  let bookName = $("#bookName").val();
  resultsDiv.empty();

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

    let bookDiv = $("<div>").addClass("booksDiv").addClass("col-4");

    // New ImageDiv with a Class of BookCover and assigning a src of the bookCover variable
    let imageDiv = $("<img>").addClass("bookCover").attr("src", bookCover);

    let bookInfoDiv = $("<div>").addClass("bookInfo").html(`
      <p> Title: ${title}  </p> 
      <p> Author: ${authors}</p>
      <p> Published by: ${publisher}</p>
      <a href= "${previewLink}">Find out more about ${title}</a>`);

    bookDiv.append(imageDiv);
    bookDiv.append(bookInfoDiv);


    // append newDiv to DOM
    resultsDiv.append(bookDiv);

  }

})