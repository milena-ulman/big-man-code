function createHelloWorldElement() {
  const element = document.createElement('h1');
  element.className = 'title';

  element.innerHTML = 'Hello World!';

  return element;
}

document.body.appendChild(createHelloWorldElement());
