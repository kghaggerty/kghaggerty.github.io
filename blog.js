let blog = [
{
    "name": "Blog One. 1st Week at NSS",
    "date": "October 6, 2017",
    "content": "Reflecting through the past week, I've noticed the whirlwind of emotions I went through.  Anger, happiness, excitement, hopelessness.  While feeling so lost and confused most of the time, looking back, I realize how much I've learned.  Being introduced to and feeling a little bit more comfortable with Git is something I need to recognize.  Javascript is still making my head spin faster than a hamster wheel.  My instructors and classmates have been amazing.  Everyone is always open to helping me IF I reach out and ask.  Even the upperclassman are always asking if I need any help. I'm trying to be comfortable with being uncomfortable.  I'm trying to be okay with where I am at in this process and to trust that my instructors know what they are doing.  Most importantly, I'm trying to reach out and ask for help when I need it, which is all the time.  I hope to write next week saying that I learned at least a few more things or understood the overly-excited exercise that has caused me great frustration this past week.  I will keep track of small victories.  There have been a few times the thought of 'I can't do this' or 'I may quit' has rolled through my head.  I recognize those thoughts, but I won't let them have any more power than that.  See you next week!" 
}
];

const blogString = JSON.stringify(overallBlog);

localStorage.setItem('overallBlog', blogString);

