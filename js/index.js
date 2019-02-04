$(document).ready(function (){
  
    // Declare a variable for the words that are being searched
    //let searchKeywords = [];
    
    //when the user clicks on search
    $(document).on("click", "#searchBook", function() {
              let bookName = $("#bookName").val();

   
    let queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookName;
  
      fetch(queryURL)
  .then(
    function(response) {
      // Examine the text in the response
      response.json().then(
        function(books) {
          for(let i = 0; i<books.items.length; i++){
            let bookItem = books.items[i]
            
            // saving each data we need from the response to a variable
            //book's author, title, and publishing company, 
             let title = bookItem.volumeInfo.title;
             let author = bookItem.volumeInfo.authors;
             let publisher = bookItem.volumeInfo.publisher;
             let bookCover = bookItem.volumeInfo.imageLinks.thumbnail;
             let link = bookItem.volumeInfo.previewLink;
            
            
            
            // Creating new Div and assigning to a newDiv variable and giving it a class of booksDiv   
            let bookDiv = $("<div>").addClass("booksDiv").addClass("col");
    
        // New ImageDiv with a Class of BookCover and assigning a src of the bookCover variable
       let imageDiv = $("<img>").addClass("bookCover").attr("src", bookCover);
            
        
        // new Div with class of bookInfo and insert all the bookinfo in the Div
                let bookInfoDiv = $("<div>").addClass("bookInfo").html(
                        "<p> Title: " + title + "</p>" + 
                        "<p> Author: " + author +  "</p>"+
                        "<p> Published by: " + publisher + "</p>" +
                        "<a href="+link + ">" + 'Find out more about '+ title + "</a>"
                  
                        );
          


            
            // new Div with class of bookInfo and insert all the bookinfo in the Div
            
          
                 // append imageDiv & BookInfo to newDiv

                bookDiv.append(imageDiv);
                bookDiv.append(bookInfoDiv);
            
             
            // append newDiv to DOM
                $("#resultsDiv").append(bookDiv);
                
            
    
            
          }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
      
      
      
      
     
    })



});