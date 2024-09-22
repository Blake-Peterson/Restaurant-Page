export { createAbout};

function createAbout(){
    let employeeCardInfo = [
        createAboutEmployeeCard("Bob Bossy", "Store Manager","(123) 456-7890","@skyscoops.com"),
        createAboutEmployeeCard("Scott Scotter", "Lead Scooper","(123) 456-7891","@skyscoops.com"),
        createAboutEmployeeCard("Jackson Weller", "Scoop Associate","(123) 456-7892","@skyscoops.com"),
    ];
    return employeeCardInfo; 
}

function createAboutEmployeeCard(employee_name,position,phone, email){
    const nameHeader = document.createElement("h2");
    nameHeader.textContent=employee_name;
    
    for (let i=0;i<3;i++){
        const p = document.createElement("p");
        const infoDiv = document.createElement("div");
        switch (i){
            case 0:
                p.textContent=position;
                break;
            case 1:
                p.textContent=phone;
                break;
            case 2:
                p.textContent=email;
                break;
        }
        infoDiv.appendChild(p);
        nameHeader.appendChild(infoDiv);
    }
    return nameHeader;
}