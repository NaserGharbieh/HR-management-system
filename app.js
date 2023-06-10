'use stict';
var EmployeesArray=[]

function Employee(employeeID, fullName, department, level) {
    this.employeeID = employeeID;
        this.fullName = fullName;
        this.department = department;
        this.level = level;
        this.imageURL; 
        this.randomSalary = 0
        this.netSalary = 0
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

Employee.prototype.renderEpmloyee=function(){
    
        document.write(`<p class="info">Employee name : ${this.fullName} , Employee Salary :${this.randomSalary}, Employee Net Salary :${this.netSalary}`);
    }

    
let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let safi = new  Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
let rana= new Employee(1005, "Rana Saleh", "Development", "Junior");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior"); 

for (let i = 0; i < EmployeesArray.length; i++) {
    //console.log(EmployeesArray[i]);
    EmployeesArray[i].calculateRandoomSalary();
    EmployeesArray[i].calculateNetSalary();
    EmployeesArray[i].renderEpmloyee();
}


