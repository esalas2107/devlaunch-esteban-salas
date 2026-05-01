/*

Horizon Innovations, una destacada empresa enfocada en el bienestar de los empleados, está desarrollando un sistema de
seguimiento que busca mantener registros precisos de las remuneraciones de los empleados, incluyendo actualizaciones y 
modificaciones salariales. 

Para gestionar y manipular los datos salariales de manera eficiente, es útil encapsularlos en un sistema de clases. Este enfoque
proporciona una estructura clara y organizada para manejar las operaciones relacionadas con los salarios, asegurando la 
modularidad y la mantenibilidad del código.

Para implementar esto, creamos una clase Employee con una variable especial llamada _salary, que servirá como la base para 
todos los cálculos de salario en el sistema. 

Esta clase incluirá dos métodos clave: un "getter" para recuperar el salario actual y un "setter" para modificarlo. Es importante 
que el "setter" valide que el nuevo valor del salario sea positivo, ya que no se permiten valores negativos.

Adicionalmente, se incluirá un método giveRaise para aumentar el salario en una cantidad específica.  

*/

class Employee {

    private _salary: number;

    constructor(salary: number){
        this._salary = salary;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(newSalary: number) {
        if(newSalary >= 0) {
            this._salary = newSalary
        } else {
            throw new Error('Invalid salary');
        }
    }

    public giveRaise(amount: number) {
        this._salary += amount;
        return this._salary;
    }
}

const employee = new Employee(5000);
console.log(employee.salary);
// employee.salary = -2500;
console.log(employee.salary);
employee.salary = 3500;
console.log(employee.salary);
employee.giveRaise(6500);
console.log(employee.salary);