import _ from "lodash";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack 123"], " ");

  return element;
}

document.body.appendChild(component());
