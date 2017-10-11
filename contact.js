let contact = 
{
"name" : "contact",
"facebook_contact" : "https://www.facebook.com/kghaggerty",
"linked_in_contact": "https://www.linkedin.com/in/kevin-haggerty-ab310b56/"
}


const contactString = JSON.stringify(contact);
localStorage.setItem('contact', contactString);