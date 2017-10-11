let projects = 
{
"name" : "projects",
"link" : "project link to go here"
}


const projectsString = JSON.stringify(projects);
localStorage.setItem('projects', projectsString);