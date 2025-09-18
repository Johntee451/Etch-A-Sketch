let size = parseInt(prompt("Enter the size for your sketch pad\ne.g Enter 20\nIt means the sketch pad will be of size:\n20 ROWS and 20 COLUMNS."));

let mainDiv = document.querySelector("#mainDiv");
let firstContainerDiv = document.querySelector("#firstContainerDiv");
let newSketchButtonDiv = document.querySelector("#newSketchButtonDiv");

let newSketchButton;
let secondContainerDiv;
let thirdContainerDiv;
let refThirdContainerDiv;
let arrayThirdContainerDiv;

if (size <= 100) {
    let widthHeight = prompt("Enter the Width and Height for each squares of your sketch pad");
    for (let i = 0; i < size; i++) {
        secondContainerDiv = document.createElement("div");
        secondContainerDiv.setAttribute("class", "secondContainerDiv");
        firstContainerDiv.appendChild(secondContainerDiv);

        for (let j = 0; j < size; j++) {
            thirdContainerDiv = document.createElement("div");
            thirdContainerDiv.style.backgroundColor = "black";
            thirdContainerDiv.style.border = "1px solid grey";
            thirdContainerDiv.style.width = widthHeight + "px";
            thirdContainerDiv.style.height = widthHeight + "px";
            thirdContainerDiv.setAttribute("class", "thirdContainerDiv");
            secondContainerDiv.appendChild(thirdContainerDiv);
        }
    }
} else {
    alert("ENTER SIZE RANGING FROM 1 - 100");
}


refThirdContainerDiv = document.querySelectorAll(".thirdContainerDiv");
arrayThirdContainerDiv = Array.from(refThirdContainerDiv);

newSketchButton = document.createElement("button");
newSketchButton.setAttribute("id", "newSketchButton");
newSketchButton.textContent = "New SketchPad";
newSketchButtonDiv.appendChild(newSketchButton);

for (const el of arrayThirdContainerDiv) {
    el.addEventListener("mouseover", ()=>{el.style.backgroundColor = "white"});
    newSketchButton.addEventListener("click", ()=>{el.style.backgroundColor = "black"});
}