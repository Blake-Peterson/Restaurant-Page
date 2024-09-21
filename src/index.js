import "./style.css";

console.log("Hello Customer");

const container = document.querySelector("#container");




function createHomePage(){
    for(let i=0;i<3;i++){
        switch(i){
            case 0:
                createSection("headline");
                break;
            case 1:
                createSection("hours");
                break;
            case 2:
                createSection("location");
                break;
        }
    }
}

function createSection(section){

    const outerDiv  = document.createElement("div");
    outerDiv.classList.add("outer")
    outerDiv.style.backgroundColor="purple";
    outerDiv.textContent = "first dummy";

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner");
    innerDiv.style.backgroundColor="red";
    innerDiv.textContent="Dummy lines";
    outerDiv.appendChild(innerDiv);

    const h2 = document.createElement("h2");
    h2.textContent=section;
    innerDiv.appendChild(h2);

    container.appendChild(outerDiv);

}


function addReviewToHomePage(){

}

function addHoursToHomePage(){
    const HoursDiv = createSection();
    const list = document.createElement("ul");

    for(let i=0;i<7;i++){
        const listItem = document.createElement("li");
        switch(i){
            //Sunday -> Saturday
            case 0:
                listItem.textContent= "Sunday: 8am - 8pm";
                break;
            case 1:
                listItem.textContent= "Monday: 7am - 10pm";
                break;
            case 2:
                listItem.textContent= "Tuesday: 7am - 10pm";
                break;
            case 3:
                listItem.textContent= "Wednesday: 7am - 10pm";
                break;
            case 4:
                listItem.textContent= "Thursday: 7am - 10pm";
                break;
            case 5:
                listItem.textContent= "Friday: 7am - 10pm";
                break;
            case 6:
                listItem.textContent= "Saturday: 7am - 10pm";
                break;



        
        }
    }

}

function addLocationToHomePage(){
    const locationDiv = document.createElement("div");
    const locationh2 = document.createElement("h2");
}

createHomePage();