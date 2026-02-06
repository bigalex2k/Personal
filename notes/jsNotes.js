/*      DOM Manipulation with JavaScript */

//We first have to use selectors to get the node that we want to add/change stuff.
//We do this by creating a variable that stores the query from the class "container"
const container = document.querySelector("#container");

//Create the element in memory
const content = document.createElement("p");
//Add the class "content" to the paragraph
content.classList.add("content");
//Edit the text within the paragraph thing
content.textContent = "I Created this with JavaScript";

//This actually puts the <p> within the document as a child of the query.
container.appendChild(content);



/*        Button ID         */
const btn = document.querySelector("#ButtonRaw")
btn.onclick = () => alert("Moves JS to other file, but not multi-event")
//http://javascript.info/arrow-functions-basics

const btn2 = document.querySelector("#ButtonActionEvent")
btn2.addEventListener("click", () => {
    alert("Event Listener");
    alert("allows multiple");
    alert("events.")
})

let isAltered = false;
const btn3 = document.querySelector("#ColorChange")
btn3.addEventListener("click", function/*Keyword  */ (e/* Parameter */) {
    isAltered = !isAltered;

    if (isAltered) {
        e.target.style.color = "red";
        e.target.style.background = "black";
        e.target.style.fontSize = "20px";
    } else {
        e.target.style.color = "";
        e.target.style.background = "";
        e.target.style.fontSize = "";
    }
});
