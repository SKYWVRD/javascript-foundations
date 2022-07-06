const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = 'I am red';
paragraph.style.cssText = 'color: red;';

const levelThreeHeading = document.createElement('h3');
levelThreeHeading.textContent = 'I\'m a blue h3!';
levelThreeHeading.style.cssText = 'color: blue';

const newDiv = document.createElement('div');
newDiv.style.cssText= 'background-color: pink; border-style: solid'

const levelOneHeading = document.createElement('h1');
levelOneHeading.textContent = 'I\m in a div';
newDiv.appendChild(levelOneHeading);

const divParagraph = document.createElement('p');
divParagraph.textContent = 'ME TOO!';
newDiv.appendChild(divParagraph)


container.appendChild(paragraph);
container.appendChild(levelThreeHeading)
container.appendChild(newDiv)
