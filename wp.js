var likeCounter = 1;

function commentHere() {
  let userComment = document.querySelector("#inputId1").value; // we are not using innerHTML wy bcz this is a form element

  // create new element
  const newElement = document.createElement("div");
  newElement.textContent = userComment; // removed the hardcode with user comment

  // add styling to new element
  newElement.style.background = "#32CD32"; // values must be in double quotes or single quote
  newElement.style.color = "white";
  newElement.style.margin = "10px";

  // comment box elment
  const commentBox = document.querySelector("#commentBox");

  // now we want to add the element at the top.
  // commentBox.appendChild(newElement);
  commentBox.appendChild(newElement);

  // clean the input box
  document.querySelector("#inputId1").value = "";
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;
}


function commentHere1() {
  let userComment1 = document.querySelector("#inputId2").value; // we are not using innerHTML wy bcz this is a form element

  // create new element
  const newElement1 = document.createElement("div");
  newElement1.textContent = userComment1; // removed the hardcode with user comment

  // add styling to new element
  newElement1.style.background = ""; // values must be in double quotes or single quote
  newElement1.style.color = "white";
  newElement1.style.margin = "10px";

  // comment box elment
  const commentBox1 = document.querySelector("#commentBox1");

  // now we want to add the element at the top.
  // commentBox.appendChild(newElement);
  commentBox1.appendChild(newElement1);

  // clean the input box
  document.querySelector("#inputId2").value = "";
}

