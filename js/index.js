$(document).ready(function (){
  
    // Declare a variable for the words that are being searched
    //let searchKeywords = [];
    
    //when the user clicks on search
    $(document).on("click", "#searchBook", function() {
              let bookName = $("#bookName").val();
         console.log(bookName)

      console.log("hello motto");
   
    let queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookName;
  
      fetch(queryURL)
  .then(
    function(response) {
      // Examine the text in the response
      response.json().then(
        function(books) {
        //console.log(data);
          for(let i = 0; i<books.items.length; i++){
            let bookItem = books.items[i]
            //console.log(books.items[i])
            console.log(bookItem.volumeInfo.title)
            
            // saving each data we need from the response to a variable
            //book's author, title, and publishing company, 
             let title = bookItem.volumeInfo.title;
             let author = bookItem.volumeInfo.authors;
             let publisher = bookItem.volumeInfo.publisher;
             let bookCover = bookItem.volumeInfo.imageLinks.thumbnail;
             let link = bookItem.volumeInfo.previewLink;
            
             console.log(title,author,publisher,bookCover)
            
            
            // Creating new Div and assigning to a newDiv variable and giving it a class of booksDiv   
            let newDiv = $("<div>").addClass("booksDiv");
    
        // New ImageDiv with a Class of BookCover and assigning a src of the bookCover variable
       let imageDiv = $("<img>").addClass("bookCover").attr("src", bookCover);
            
        
        // new Div with class of bookInfo and insert all the bookinfo in the Div
                let bookInfoDiv = $("<div>").addClass("bookInfo").html(
                        "<p> Author: " + author +  "</p>"+
                        "<p> Title: " + title + "</p>" + 
                        "<p> Published by: " + publisher + "</p>" +
                        "<a href="+link + ">" + 'find out more' + "</a>"
                      

                  
                        );
          


            
            // new Div with class of bookInfo and insert all the bookinfo in the Div
            
          
                 // append imageDiv & BookInfo to newDiv
                newDiv.append(imageDiv);
                newDiv.append(bookInfoDiv);
            
             
            // append newDiv to DOM
                $("#resultsDiv").append(newDiv);
                
            
    
            
          }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
      
      
      
      
      /*

       if ( $("#bookName").val() === ""){
           alert("Please Enter A Book Name to Search")
       } else {

        let bookName = $("#bookName").val();
        $("#bookName").empty();
        $("#resultsDiv").empty();
        //searchKeywords.push(bookName);
        
        //debug code 
        console.log(bookName);
        console.log(searchKeywords);
        

            
    let queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookName;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {

           console.log(response);

                for (var i = 0; i < 10; i++) {
                    // incase Book thumbnail isnt available, use BooGle Image
                    if (bookCover = undefined) {
                        bookCover = "../assets/images/boogleImage.png"; }
                        
                        if (categories === undefined || 
                            pageCount === undefined || 
                            description === undefined || 
                            publisher === undefined || 
                            publishedDate === undefined ) {
    
                            categories === "Not Available" || 
                            pageCount === "Not Available" ||
                            description === "Not Available" ||
                            publisher === "Not Available" ||
                            publishedDate === "Not Available"
                        };
                // saving each data we need from the response to a variable
                    var title = response.items[i].volumeInfo.title;
                    var author = response.items[i].volumeInfo.authors;
                    var categories = response.items[i].volumeInfo.categories;
                    var description = response.items[i].volumeInfo.description;
                    var pageCount = response.items[i].volumeInfo.pageCount;
                    var publishedDate = response.items[i].volumeInfo.publishedDate;
                    var publisher = response.items[i].volumeInfo.publisher;
                    var bookCover = response.items[i].volumeInfo.imageLinks.thumbnail;

// Creating new Div and assigning to a newDiv variable and giving it a class of booksDiv   
                var newDiv = $("<div>").addClass("booksDiv");
    
        // New ImageDiv with a Class of BookCover and assigning a src of the bookCover variable
                var imageDiv = $("<img>").addClass("bookCover").attr("src", bookCover);

        // new Div with class of bookInfo and insert all the bookinfo in the Div
                var bookInfoDiv = $("<div>").addClass("bookInfo").html(
                        "Author: " + author + 
                        "<p> Title: " + title + "</p>" + 
                        "<p> Category: " + categories + "</p>" + 
                        "<p> Number of Pages: " + pageCount + "</p>" + 
                        "<p> Published on: " + publishedDate + "</p>" + 
                        "<p> Published by: " + publisher + "</p>" + 
                        "<p> Description: " + description + "</p>"
                    );
                
            // append imageDiv & BookInfo to newDiv
                newDiv.append(imageDiv);
                newDiv.append(bookInfoDiv)
            // append newDiv to DOM
                $("#resultsDiv").append(newDiv);
                
            }
                
               
            });
     } 
    
    */
    })



});