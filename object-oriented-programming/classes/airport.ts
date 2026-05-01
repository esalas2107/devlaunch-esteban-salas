/*

El objetivo es crear una clase Airpot que modele las características y operaciones de un aeropuerto de forma más avanzada. 

Cada aeropuerto tiene: 

Un nombre.
Una ubicación.
Una pista de aterrizaje (runway).
Un nivel de tráfico aéreo (bajo, medio, alto).
La clase debe incluir:

Un método changeTrafficLevel que permita cambiar el nivel de tráfico aéreo.
Un método emergencyLanding que cierre la pista de aterrizaje y marque el nivel de tráfico como alto.
Un método displayInfo que muestre el nombre del aeropuerto, la ubicación y el estado actual de la pista y el nivel de tráfico.
Crea una instancia de la clase Airport y demuestra el uso de estos métodos con distintas operaciones

*/

type trafficLevel = 'low' | 'medium' | 'high';
class Airport {
    public name: string;
    public location: string;
    public runway: boolean;
    public trafficLevel: trafficLevel;

    constructor(name: string, location: string, runway: boolean, trafficLevel: trafficLevel) {
        this.name = name;
        this.location = location;
        this.runway = runway;
        this.trafficLevel = trafficLevel;
    }

    public changeTrafficLevel(newTrafficLevel: trafficLevel): trafficLevel {
        this.trafficLevel = newTrafficLevel;
        return this.trafficLevel;
    }

    public emergencyLanding(): string{
        this.runway = false;
        this.trafficLevel = 'high'
        return this.displayInfo()
    }

    public displayInfo(): string {
        return (`
            *** AIRPORT INFORMATION ***
            NAME: ${this.name}
            LOCATION: ${this.location}
            RUNWAY: ${this.runway}
            TRAFFIC LEVEL: ${this.trafficLevel}
            `)
    }
}

const airport = new Airport("Juan Santamaría", "San José, Costa Rica", true, 'medium');
console.log(airport.displayInfo())
console.log(airport.changeTrafficLevel("low"))
console.log(airport.displayInfo())
console.log(airport.emergencyLanding())