const accessParse = JSON.parse(localStorage.getItem("blogHolder"))
const totalItems = blogHolder.length
const itemsPerPage = 2
const numberOfPages = Math.ceil(totalItems / itemsPerPage)
const paginationEl = document.getElementsByClassName("blog-pagination")[0]
const blogEl = document.getElementsByClassName("blog-contents")[0]


// Build the DOM string for the pagination links in the footer
let paginationString = "<ul class='page-ul'>"
paginationString += "<a id='previous' href='#'>&lt;</a>"                
for (var i = 0; i < numberOfPages; i++) {
    paginationString += ` <li class='page-li'><a class="cheesePage page-${i+1}" href="#">${i+1}</a></li>`
}
paginationString += "<a id='next' class='page-2' href='#'>&gt;</a>"
paginationString += "</ul>"

// Update the DOM with the unordered list we just built
paginationEl.innerHTML = paginationString

// Store references to the next and previous arrows we just added
const previousEl = document.getElementById("previous")
const nextEl = document.getElementById("next")

/*
    Function that will be invoked each time the user clicks
    on one of the pagination links at the bottom of the page
*/
function produceBlog (event) {    
    // Clear the cheeses first before displaying the new ones
    blogEl.innerHTML = ""

    // Which number did the user click on?

    // Convert DOMTokenList to Array
    const classes = event.target.classList
    const classArray = Array.from(classes)

    // Find the class we want that match pattern "page-n"
    const targetClass = classArray.find(clazz => {
        if (clazz.startsWith("page-")) return clazz
    })

    // Split the class into an array on the dash
    const pageNumberArray = targetClass.split("-")

    // Get the actual page number ["page", "1"]
    const actualPageNumber = pageNumberArray[1]

    // Convert the string into an integer
    const integerPageNumber = parseInt(actualPageNumber)

    const pageNumber = parseInt(
        Array.from(event.target.classList)
        .find(clazz => {
            if (clazz.startsWith("page-")) return clazz
        })
        .split("-")[1]
    )

    // Change the class name of the previous arrow
    if ((pageNumber - 1) === 0) {
        previousEl.style.display = "none"
    } else {
        previousEl.style.display = "inline"
        previousEl.className = `page-${pageNumber - 1}`
    }

    // Change the class name of the next arrow
    if ((pageNumber + 1) > numberOfPages) {
        nextEl.style.display = "none"
    } else {
        nextEl.style.display = "inline"
        nextEl.className = `page-${pageNumber + 1}`
    }

    // Determine which items to display by slicing the array
    const itemsToDisplay = blogHolder.slice(
        (pageNumber - 1) * itemsPerPage, 
        pageNumber * itemsPerPage
    )

    // Display a <section> representation of each data object
   /* for (var key in accessParse) {
        const currentBlog = accessParse[key]; 
        //for loop nested in the for in loop */

        for (var u = 0; u < itemsToDisplay.length; u++) {
            var currentObject = itemsToDisplay[u];
            
    
        blogEl.innerHTML += `
        <div class="blog">
          <div class="card-body">
            <h4 class="blog-title">${currentObject.name}</h4>
            <p class="blog-date">${currentObject.date}</p>
            <p class="blog-content">${currentObject.content}</p>
          </div>
        </div>
    
        ` 
        }
      

    }
// Get the array of pagination anchor tags we added to the DOM
const cheeseLinks = document.getElementsByClassName("cheesePage")

// Add event listeners to each <a> element in the pagination
for (let j = 0; j < cheeseLinks.length; j++) {
    let thisCheeseEl = cheeseLinks[j];
    thisCheeseEl.addEventListener("click", produceBlog, false);
}

produceBlog({
    "target": {
        "classList": ["page-1"]
    }
})

previousEl.addEventListener("click", produceBlog)
nextEl.addEventListener("click", produceBlog)
