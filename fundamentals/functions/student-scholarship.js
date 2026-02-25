/* 

La Universidad de Harvard se ha dado cuenta de que manejar manualmente los criterios de becas no es suficiente.
Ahora buscan una forma mejor de evaluar las numerosas solicitudes de estudiantes que reciben.

El nuevo sistema que planean implementar decidirá eficientemente quién califica para las becas. Normalmente, los 
estudiantes saben ayudar en clases de laboratorio y aprobar cuatro materias, con sus calificaciones promediadas para
verificar la elegibilidad.

Las reglas de elegibilidad son estrictas:

- Los estudiantes necesitan tener un promedio de calificaciones de 9 o más en todas las materias, sin ninguna
calificación individual menor a 8, independientemente de cómo les fue como asistentes de laboratorio.

- Alternativamente si tienen un promedio de 8.5 o más, aún pueden calificar si obtuvieron una calificación de "A"
o "B" como asistentes de laboratorio.

- Sin embargo, si obtuvieron una calificación de "C" como asistentes de laboratio, no calificarán para la beca, incluso si sus calificaciones
son buenas.

*/

// nada más me faltó meter todas las entradas de datos en la función main

const prompt = require("prompt-sync")();

const subject1 = parseFloat(prompt("Digite la nota final de la primera materia: "));

const subject2 = parseFloat(prompt("Digite la nota final de la segunda materia: "));

const subject3 = parseFloat(prompt("Digite la nota final de la tercera materia: "));

const subject4 = parseFloat(prompt("Digite la nota final de la cuarta materia: "));

const labGrade = prompt("Digite la calificación del estudiante como asistente de laboratorio: ").toUpperCase();

function calculateSubjectAverage(s1, s2, s3, s4) {
    const average = (s1 + s2 + s3 + s4) / 4;

    return average;
}

const subjectAverage = calculateSubjectAverage(subject1, subject2, subject3, subject4)

function subjectAverageRule(s1, s2, s3, s4, average) {
    if (s1 > 8 && s2 > 8 && s3 > 8 && s4 > 8 && average >= 9) {
        return true;
    } else {
        return false;
    }
}

const subjectAverageRuleResult = subjectAverageRule(subject1, subject2, subject3, subject4, subjectAverage);

function getScholarship(subAvgRule, subjectAverage, labGrade) {
    if(labGrade === "C") {
        return "Denied";
    } else if (subAvgRule || (subjectAverage >= 8.5 && (labGrade === "A" || labGrade === "B"))) {
        return "Approved";
    } else {
        return "Denied";
    }
}

console.log(getScholarship(subjectAverageRuleResult, subjectAverage, labGrade))

