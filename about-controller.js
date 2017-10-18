// Parse data from local storage
const aboutParse = JSON.parse(localStorage.getItem("aboutHolder"))

//Connect with HTML class name
let aboutEl = document.getElementsByClassName("about-contents")[0]

//for loop nested in the for in loop, to iterated through and define each detail for each pair of glasses
    for (var i = 0; i < aboutParse.length; i++) {
        var currentObject = aboutParse[i];
        console.log(aboutParse)

    aboutEl.innerHTML += `
    <div class="about">
        
        <p class="about-content">${currentObject.content}</p>
    </div>
     `
    }  