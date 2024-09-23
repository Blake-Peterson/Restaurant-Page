export { createHome };

function createHome(){
    let array= [addReviewToContent(),addHoursToContent(), addLocationToContent()];
    return array;
}

function addReviewToContent(){
    const reviewDiv = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "Sky Scoops is a fantabulous restaurant for getting any kind of ice cream for all ages";
    const h3 = document.createElement("h3");
    h3.textContent="-Aquaman";
    p.appendChild(h3);
    reviewDiv.appendChild(p);
    return reviewDiv;
}

function addHoursToContent(){
    const hoursDiv = document.createElement("div");
    const hoursH2 = document.createElement("h2");
    hoursH2.textContent = "Hours";
    const ulist = document.createElement("ul");
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
        ulist.appendChild(listItem);
    }
    hoursH2.appendChild(ulist);
    return hoursDiv.appendChild(hoursH2);
}

function addLocationToContent(){
    const locationDiv = document.createElement("div");
    const locationH2 = document.createElement("h2");
    locationH2.textContent="Location";
    const p = document.createElement("p");
    p.textContent = "345 Atlantis, Bermuda Triangle, Pacific Ocean";
    locationH2.appendChild(p);
    return locationDiv.appendChild(locationH2);
}   