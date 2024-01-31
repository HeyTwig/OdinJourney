const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redPara = document.createElement('p');
redPara.textContent = "Hey I'm red!";
redPara.style.color = "red";

container.appendChild(redPara);

const blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";

container.appendChild(blueHeader);

const innerContainer = document.createElement("div");
innerContainer.classList.add('innerContainer');
innerContainer.style.cssText = "border: solid black; background-color:pink;";

container.appendChild(innerContainer);

const innerHeader = document.createElement("h1");
innerHeader.textContent = "I'm in a div";

innerContainer.appendChild(innerHeader);

const innerPara = document.createElement("p");
innerPara.textContent = "ME TOO!"

innerContainer.appendChild(innerPara)
