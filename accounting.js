let sumAdmistorer = 0;
let sumMarket = 0;
let sumDevelopmet = 0;
let sumFicnical = 0;

let salaryAdminstor = 0;
let salaryMarket = 0;
let salaryDevelpment = 0;
let salaryFinical = 0;

let avgAdmin = 0;
let avgDev = 0;
let avgMarket = 0;
let avgFin = 0;

let employees = JSON.parse(localStorage.getItem("Employees"));

function render2() {
    // document.write(Employee Name is : ${this.fullName} and salary is = ${netSalary}<br/>);
    //let employeesContainer = document.getElementById("Employees");
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department == "Administration") {
            sumAdmistorer++;
            salaryAdminstor += employees[i].netSalary;
            avgAdmin = salaryAdminstor / sumAdmistorer;
        }
        else if (employees[i].department == "Marketing") {
            sumMarket++;
            salaryMarket += employees[i].netSalary;
            avgMarket = salaryMarket / sumMarket;

        }
        else if (employees[i].department == "Development") {
            sumDevelopmet++;
            salaryDevelpment += employees[i].netSalary;
            avgDev = salaryDevelpment / sumDevelopmet;
        }
        else {
            sumFicnical++;
            salaryFinical += employees[i].netSalary;
            avgFin = salaryFinical / sumFicnical;
        }
    }

    let trEl = document.getElementById('rowAdministration');
    let tdEl1 = document.createElement('td')
    trEl.appendChild(tdEl1);
    tdEl1.textContent = `${sumAdmistorer}`;
    let td1El2 = document.createElement('td')
    trEl.appendChild(td1El2);
    td1El2.textContent = `${salaryAdminstor}`;
    let td1El3 = document.createElement('td')
    trEl.appendChild(td1El3);
    td1El3.textContent = `${avgAdmin}`;


    let trEl2 = document.getElementById('rowMarketing');
    let td2El = document.createElement('td')
    trEl2.appendChild(td2El);
    td2El.textContent = `${sumMarket}`;
    let tdEl2 = document.createElement('td')
    trEl2.appendChild(tdEl2);
    tdEl2.textContent = `${salaryMarket}`;
    let td2El3 = document.createElement('td')
    trEl2.appendChild(td2El3);
    td2El3.textContent = `${avgMarket}`;

    let trEl3 = document.getElementById('rowDevelopment');
    let td3El = document.createElement('td')
    trEl3.appendChild(td3El);
    td3El.textContent = `${sumDevelopmet}`;
    let tdEl3 = document.createElement('td')
    trEl3.appendChild(tdEl3);
    tdEl3.textContent = `${salaryDevelpment}`;
    let td3El3 = document.createElement('td')
    trEl3.appendChild(td3El3);
    td3El3.textContent = `${avgDev}`;

    
    let trEl4 = document.getElementById('rowFinance');
    let td4El = document.createElement('td')
    trEl4.appendChild(td4El);
    td4El.textContent = `${sumFicnical}`;
    let tdEl4 = document.createElement('td')
    trEl4.appendChild(tdEl4);
    tdEl4.textContent = `${salaryFinical}`;
    let td3El4 = document.createElement('td')
    trEl4.appendChild(td3El4);
    td3El4.textContent = `${avgFin}`;

    let trEl5 = document.getElementById('total');
    let td5El = document.createElement('td')
    trEl5.appendChild(td5El);
    td5El.textContent=`${employees.length}`
    let td6El = document.createElement('td')
    trEl5.appendChild(td6El);
    td6El.textContent=`${salaryAdminstor+salaryDevelpment+salaryFinical+salaryMarket}`

    let td7El = document.createElement('td')
    trEl5.appendChild(td7El);
    td7El.textContent=`${(salaryAdminstor+salaryDevelpment+salaryFinical+salaryMarket)/employees.length}`
    
};

render2();




console.log(employees[0].department);


