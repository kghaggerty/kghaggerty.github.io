let projects = {
"name" : "Projects",
"content": "During my time at NSS, I have uploaded all the exercises we do onto GitHub.",
"link": "https://github.com/kghaggerty"
}

const projectHolder = []

//Push each blog into the array
projectHolder.push(projects)

const projectsString = JSON.stringify(projectHolder);
localStorage.setItem('projectHolder', projectsString)


