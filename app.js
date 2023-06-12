'use stict';
var EmployeesArray=[];
var form=document.getElementById("form"); 
var secEle = document.getElementById("empinfo");

function Employee(fullName, department, level,imageURL) {
    
        this.fullName = fullName;
        this.department = department;
        this.level = level;
        this.imageURL=imageURL; 
        this.randomSalary = 0;
        this.netSalary = 0;
        this.employeeID = generateEmployeeID();
    EmployeesArray.push(this);

}
Employee.prototype.calculateRandoomSalary=function () {
    var randomSalary=1;
    if (this.level == "Junior") {
      randomSalary=  Math.floor(Math.random() * (1000 - 	500) + 	500);

    } else if (this.level == "Mid-Senior") {
        randomSalary=  Math.floor(Math.random() * (1500 - 1000) + 1000);

    } else if (this.level == "Senior"){
        randomSalary=  Math.floor(Math.random() * (2000 - 1500) + 1500);
}
this.randomSalary=randomSalary;}

Employee.prototype.calculateNetSalary=function(){ 
    //7.5/100
    var tax=0.075;
    this.netSalary= this.randomSalary-(this.randomSalary*tax);
    
} 
function generateEmployeeID(){
    var empID=1001; 
    console.log()
    if(EmployeesArray.length >=1)
    empID+= EmployeesArray.length;
   
return empID;}

Employee.prototype.renderEpmloyee=function(){
    


    let imgEle = document.createElement("img");
    imgEle.src = this.imageURL;
    secEle.appendChild(imgEle);
        document.write(`<p class="info">Employee name : ${this.fullName} , Employee Salary :${this.randomSalary}, Employee Net Salary :${this.netSalary}`);
    }

    Employee.prototype.printEpmloyee=function(){
    
        document.write(`<p class="info">Employee name : ${this.fullName} , Employee Salary :${this.randomSalary}, Employee Net Salary :${this.netSalary}`);
    }

form.addEventListener("submit",addedEployee);

function addedEployee(event){
    event.preventDefault(); 
    console.log(event);

    let fullname=event.target.fullname.value;
    let department=event.target.Department.value;
    let level=event.target.Level.value;
    let img=event.target.img.value;
    let newEmployee=new Employee(fullname,department,level,img) ;
    newEmployee.calculateRandoomSalary();
    newEmployee.calculateNetSalary(); 
     newEmployee.renderEpmloyee();




}
    
let ghazi = new Employee("Ghazi Samer", "Administration", "Senior");
let lana = new Employee("Lana Ali", "Finance", "Senior");
let tamara = new Employee( "Tamara Ayoub", "Marketing", "Senior");
let safi = new  Employee( "Safi Walid", "Administration", "Mid-Senior");
let omar = new Employee( "Omar Zaid", "Development", "Senior");
let rana= new Employee( "Rana Saleh", "Development", "Junior");
let hadi = new Employee( "Hadi Ahmad", "Finance", "Mid-Senior"); 
console.log(hadi.employeeID)

/*for (let i = 0; i < EmployeesArray.length; i++) {
    //console.log(EmployeesArray[i]);
    EmployeesArray[i].calculateRandoomSalary();
    EmployeesArray[i].calculateNetSalary();
    EmployeesArray[i].printEpmloyee();
}*/


