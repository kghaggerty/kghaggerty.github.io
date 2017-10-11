let resume = 
    {
    "name" : "resume",
    "link" : "Kevin%20Haggerty%20Updated%20Resume.pdf"
}


const resumeString = JSON.stringify(resume);
localStorage.setItem('resume', resumeString);