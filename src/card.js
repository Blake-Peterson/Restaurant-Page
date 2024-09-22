export {createCards};

import { createHome } from "./home";

function createCard(cardInfo){

    const outerDiv  = document.createElement("div");
    outerDiv.classList.add("outer")
    outerDiv.style.backgroundColor="lightblue";
    outerDiv.textContent = "outer";

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner");
    innerDiv.style.backgroundColor="turquoise";
    innerDiv.textContent="inner";
    outerDiv.appendChild(innerDiv);
    innerDiv.appendChild(cardInfo);

    return outerDiv;
}

function createCards(index, cardsNeeded){
    let cardArray = [cardsNeeded];
    for(let i=0;i<cardsNeeded;i++){
        if(index ===1){
            const home = createHome();
            cardArray [0]=createCard(home[0]);
            cardArray [1]=createCard(home[1]);
            cardArray [2]=createCard(home[2]);
        }
    }

    return cardArray;
}