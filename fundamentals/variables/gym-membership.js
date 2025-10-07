/*

El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California,
que ofrece membresías por $150 al mes.
Opera de 6 AM a 10 PM, emplea a 10 entrenadores certificados y cuenta con comodidades como
sauna, piscina y clases grupales.

*/

const gymName = "Elite Fitness Center"
const gymType = "boutique"
const gymLocation = "Palo Alto, California"
const gymMembership = 150
const gymCurrency = "$"
const gymMembershipduration = "monthly"

const gymOpenhour = 6
const gymClosehour = 22

const gymFormatclosehour = gymClosehour - 12

const gymSchedule = `${gymOpenhour}:00 AM - ${gymFormatclosehour}:00 PM`

const gymStaff = 10

const gymService1 = "sauna"
const gymService2 = "piscina"
const gymService3 = "clases grupales"

console.log(`
    Gimnasio: ${gymName}\n
    Ubicación: ${gymLocation}\n
    Type: ${gymType}\n
    Membresía: ${gymCurrency}${gymMembership}/${gymMembershipduration}\n
    Horario: ${gymSchedule}\n
    Staff: ${gymStaff}\n
    Servicios: ${gymService1}, ${gymService2}, ${gymService3}\n
    `)