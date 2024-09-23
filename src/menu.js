export {createMenu};

function createMenu(){
    const menuItems = [
        createMenuItem("Taco Supreme","A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream",1,""),
        createMenuItem("Taco Supreme","A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream",2,""),
        createMenuItem("Taco Supreme","A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream",3,""),
        createMenuItem("Taco Supreme","A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream",4,""),
        createMenuItem("Taco Supreme","A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream",5,""),
        createMenuItem("Taco Supreme","A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream",6,""),
        createMenuItem("Taco Supreme","A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream",7,""),
        createMenuItem("Taco Supreme","A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream",8,""),
    ];
    return menuItems;
}

function createMenuItem(foodName,description,cost,imagePath){
    const menuItemDiv = document.createElement("div");
    const foodNameHeader = document.createElement("h2");
    foodNameHeader.textContent = foodName;
    menuItemDiv.appendChild(foodNameHeader);

    const descriptPara = document.createElement("p");
    descriptPara.textContent = description;
    foodNameHeader.appendChild(descriptPara);

    const costPara = document.createElement("p");
    costPara.textContent = "$"+cost;
    descriptPara.appendChild(costPara);

    const foodImage = document.createElement("image");
    descriptPara.appendChild(foodImage);

    return menuItemDiv;
}