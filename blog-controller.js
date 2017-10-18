// Parse data from local storage
const accessParse = JSON.parse(localStorage.getItem("blogHolder"))

//Connect with HTML class name
let blogEl = document.getElementsByClassName("blog-contents")[0]

/*
for (var key in accessParse) {
    const currentBlog = accessParse[key]; */
    //for loop nested in the for in loop, to iterated through and define each detail for each pair of glasses
    for (var i = 0; i < accessParse.length; i++) {
        var currentObject = accessParse[i];
        console.log(accessParse)

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
