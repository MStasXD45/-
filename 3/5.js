var employee = new Object();
{
employee.name;
employee.block;
employee.phone;
employee.salary;

function employee(name,block,phone,salary)
{
    this.name="John";
    this.block="A3";
    this.phone="0971345667";
    this.salary="100$";
    this.employeeOutput=output;
    }

function output()
{
    console.log("Имя: "+this.name+", Отдел: "+this.block+", телефон: "+this.phone+", зарплата: "+this.salary+" грн.");
}

}

var johnEmployee=new employee();

johnEmployee.employeeOutput();