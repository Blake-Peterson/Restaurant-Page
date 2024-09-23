export {createCards};

import { createHome } from "./home";
import { createMenu} from "./menu";
import { createAbout} from "./about";

function createCard(cardInfo){

    const outerDiv  = document.createElement("div");
    outerDiv.classList.add("outer-card")
    outerDiv.style.backgroundColor="lightblue";

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-card");
    innerDiv.style.backgroundColor="turquoise";
    outerDiv.appendChild(innerDiv);
    innerDiv.appendChild(cardInfo);

    return outerDiv;
}

function createCards(index, cardsNeeded){
    let cardArray = [cardsNeeded];
    for(let i=0;i<cardsNeeded;i++){
        if(index ===1){ //menu
            const menu = createMenu();
            for(let i=0;i<cardsNeeded;i++){
                cardArray[i] = createCard(menu[i]);
            }
        } else if (index ===2){ //about
            const about = createAbout();
            for(let i=0;i<cardsNeeded;i++){
                cardArray[i] = createCard(about[i]);
            }
        } else {//default home page
            const home = createHome();
            cardArray [0]=createCard(home[0]);
            cardArray [1]=createCard(home[1]);
            cardArray [2]=createCard(home[2]);
        }
    }

    return cardArray;
}