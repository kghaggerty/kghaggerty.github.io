const projectsParse = JSON.parse(localStorage.getItem("projectHolder"))

//Connect with HTML class name
let projectEl = document.getElementsByClassName("projects-contents")[0]


    for (var i = 0; i < projectsParse.length; i++) {
        var currentObject = projectsParse[i];
        console.log(projectsParse)

    projectEl.innerHTML += `
      <div class="project-body">
        <h4 class="project-name">${currentObject.name}</h4>
        <p class="project-content">${currentObject.content}</p>
        <p class="project-link"><a href="https://github.com/kghaggerty">${currentObject.link}</a></p>
      </div>

    `
    }  