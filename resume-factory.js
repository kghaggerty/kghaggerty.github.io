//<(^ -^)>
//Storing arrays within arrays
const schoolArray = []
const jobArray = []

//listing out jobs.. and pushing them into an array
let jobOne = {
    "title": "Alumni Coordinator",
    "dates": "January 2017-June 2017",
    "company": "Integrative Life Center",
    "description": "This job.."
}

let jobTwo = {
    "title": "Case Manager",
    "dates": "April 2016-January 2017",
    "company": "Cumberland Heights",
    "description": "This job.."
}

let jobThree = {
    "title": "Alumni Coordinator",
    "dates": "January 2016-April 2016",
    "company": "Hope Homes",
    "description": "This job.."
}
//Push job objects into an array
jobArray.push(jobOne, jobTwo, jobThree)


const resumeHolder = []
//Push job,school array into resume holder
resumeHolder.push(jobArray)





const resumeString = JSON.stringify(resumeHolder);
localStorage.setItem('resumeHolder', resumeString);