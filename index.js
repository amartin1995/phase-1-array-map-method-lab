const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  //console.log(tutorials.map(tutorial => tutorial.toUpperCase() + tutorials.slice(1)))
  return tutorials.map(tutorial => tutorial.split(` `).map(word => word[0].toUpperCase() + word.slice(1)).join(` `));
    //.toUpperCase() + tutorials.slice(1))
  //return tutorials.map(tutorials.charAt(0).toUpperCase() + tutorials.slice(1))
}
