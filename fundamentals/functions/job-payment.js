/* 
En una empresa hay proceso donde cada trabajador debe registrar las horas de entrada y salida diariamente. 
De esta forma, al final de cada dia, su empleador sabrá cuanto tiene que pagarles por sus horas trabajadas. 
Pero, si una persona trabajó más de ocho horas, se le debe de pagar un costo extra por las horas adicionales, que es 
igual a 1.5 veces el monto de su tarifa por hora. Haz un programa que, recibiendo la tarifa por hora, la hora de entrada
y la hora de salida, imprima el monto de dinero que ese empleado recibió ese día. 

Tarifa por hora: $10
Hora de entrada: 9:00
Hora de salida: 18:00

Respuesta: $95
*/

function calcularSalarioDiario(tarifaPorHora, horaEntrada, horaSalida) {
    const [horaInicio] = horaEntrada.split(":").map(Number);
    const [horaFinal] = horaSalida.split(":").map(Number);
    const horasTrabajadas = horaFinal - horaInicio;

    if(horasTrabajadas <= 8) {
        return horasTrabajadas * tarifaPorHora;
    } else if(horasTrabajadas > 8) {
            const horasHorarioNormal = 8;
            const horasAdicionales = horasTrabajadas - horasHorarioNormal;
            const montoAdicional = horasAdicionales * (tarifaPorHora * 1.5);

            return (horasHorarioNormal * tarifaPorHora) + montoAdicional;
    }
}

function main() {
    const prompt = require("prompt-sync")();

    const tarifaPorHora = parseFloat(prompt("Digite la tarifa por hora del salario diario: "));
    const horaEntrada = prompt("Digite la hora de entrada de la jornada, en formato HH:MM (ej: 9:00): ");
    const horaSalida = prompt("Digite la hora de salida de la jornada, en formato HH:MM (ej: 9:00): ");

    const salarioDiario = calcularSalarioDiario(tarifaPorHora, horaEntrada, horaSalida);

    console.log(`
    Tarifa por hora: $${tarifaPorHora}\n
    Hora de entrada: ${horaEntrada}\n
    Hora de salida: ${horaSalida}\n
    Resultado: $${salarioDiario}
    `)
}

main()