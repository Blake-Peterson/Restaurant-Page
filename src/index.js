import "./style.css";

console.log("Hello Customer");

const container = document.querySelector("#container");




function createHomePage(){
    createSection();
}

function createSection(){

    const outerDiv  = document.createElement("div");
    outerDiv.classList.add("outer")
    outerDiv.style.backgroundColor="purple";
    outerDiv.textContent = "first dummy";
    
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner");
    innerDiv.style.backgroundColor="red";
    innerDiv.textContent="Dummy lines";
    outerDiv.appendChild(innerDiv);

    container.appendChild(outerDiv);

}


function addReviewToHomePage(){

}

function addHoursToHomePage(){

}

function addLocationToHomePage(){
    const locationDiv = document.createElement("div");
    const locationh2 = document.createElement("h2");
}

createHomePage();