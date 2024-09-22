import "./style.css";

import { createHome } from "./home";
import { createMenu} from "./menu";
import { createAbout} from "./about";
import { createCards } from "./card";

console.log("Hello Customer");

const container = document.querySelector("#container");
const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

function displayContent(btn){
    let page = [];
    switch(btn){
        case homeBtn:
            console.log("home button clicked");
            page = createCards(0,3);
            for(let i=0;i<3;i++){
                contentDiv.appendChild(page[i]);
            }
            break;
        case menuBtn:
            console.log("menu button clicked");
            page = createCards(1,8);
            for(let i=0;i<3;i++){
                contentDiv.appendChild(page[i]);
            }
            break;
        case aboutBtn:
            console.log("about button clicked");
            page = createCards(2,3);
            for(let i=0;i<3;i++){
                contentDiv.appendChild(page[i]);
            }
            break;
        default:
            console.log("hello world");
            page = createCards(0,3);
            for(let i=0;i<3;i++){
                contentDiv.appendChild(page[i]);
            }
            break;
    }
}

homeBtn.addEventListener("click", () =>displayContent(homeBtn));
menuBtn.addEventListener("click", () =>displayContent(menuBtn));
aboutBtn.addEventListener("click", () =>displayContent(aboutBtn));


function clearContentDiv(){

}


displayContent();





