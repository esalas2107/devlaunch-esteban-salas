/*

Cuando se trata de ventiladores, a menudo presentan características distintas como configuraciones de velocidad,
tamaño, potencia medida en vatios o caballos de fuerza, tipo y color.

Para manejar y modificar adecuadamente las características de un ventilador, es útil organizarlas en un sistema de clases.
De esta manera, se obtiene una estructura clara para trabajar con las propiedades del ventilador, facilitando la comprensión,
reutilización y mantenimiento del código. 

Para abordar esta tarea, creamos una clase que encapsule los diferentes atributos de un ventilador. Esta clase incluirá un 
constructor para inicializar dichos atributos y métodos como getters y setters para accerder y modificarlos según sea 
necesario.

Al implementar esta estructura de clase, podremos representar y gestionar de manera eficiente las características de los
ventiladores en nuestro sistema.

Esta clase está diseñada para proporcionar todas las características esenciales del ventilador desde el momento de su creación.

*/

class Fan {
    public _speed: number;
    public _size: string;
    public _power: number; 
    public _horsePower: number;
    public _type: string;
    public _color: string;

    constructor(speed: number, size: string, power: number, horsePower: number, type: string, color: string) {
        this._speed = speed;
        this._size = size;
        this._power = power;
        this._horsePower = horsePower;
        this._type = type;
        this._color = color;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(newSpeed: number) {
        this._speed = newSpeed;
    }

    get size(): string {
        return this._size;
    }

    set size(newSize: string) {
        this._size = newSize;
    }

    get power(): number {
        return this._power;
    }

    set power(newPower: number) {
        this._power = newPower;
    }

    get horsePower(): number {
        return this._horsePower;
    }

    set horsePower(newHorsePower: number) {
        this._horsePower = newHorsePower;
    }

    get type(): string {
        return this._type;
    }

    set type(newType: string) {
        this._type = newType;
    }

    get color(): string {
        return this._color;
    }

    set color(newColor: string) {
        this._color = newColor;
    }
}

const fan = new Fan(1, "mediano", 100, 120, "doméstico", "negro");
console.log(fan._color);
fan.type = "industrial";
console.log(fan);