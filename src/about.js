export { createAbout};

function createAbout(){

}

function createAboutEmployeeCard(employee_name,position,phone, email){
    const nameH2 = document.createElement("h2");
    nameH2.textContent=employee_name;
    
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
    }
    


    
}