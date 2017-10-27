const resumeParse = JSON.parse(localStorage.getItem("resumeHolder"))

//Connect with HTML class name
let resumeEl = document.getElementsByClassName("resume-contents")[0]


    for (var i = 0; i < resumeParse.length; i++) {
        var currentArray = resumeParse[i];
        console.log(resumeParse)
    
    }

    for (var index = 0; index < currentArray.length; index++) {
        var element = currentArray[index];
        console.log(currentArray)

    resumeEl.innerHTML += `
      <div class="resume-body">
        <h4 class="resume-title">${element.title}</h4>
        <p class="resume-dates">${element.dates}</p>
        <p class="resume-company">${element.company}</p>
        <p class="resume-dates">${element.description}</p>
      </div>

    `
    }  