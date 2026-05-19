/*

Desarrolla uan función que procese una lista de correos electrónicos y elimine cualquier duplicado para evitar que se envíen
mensajes múltiples a la misma dirección.

La función debe devolver una lista de objetos, donde cada objeto contiene un correo electrónico único y un mensaje personalizado
dirigido al destinatario.

Cada mensaje debe redirigirse al usuario según la primera parte de su correo electrónico (la sección antes del @).

Por ejemplo, si el correo es ana.smith@gmail.com, el mensaje deberia comenzar con "Hola Ana Smith".

Esta funcionalidad es útil en aplicaciones donde es necesario enviar mensajes personalizados a una lista de contactos, asegurando
que cada persona reciba un solo mensaje sin duplicados.

Lista de correos electrónicos:

[
    'ana.smith@gmail.com',
    'juan.perez@yahoo.com',
    'maria.garcia@hotmail.com',
    'ana.smith@gmail.com',
    'carlos.lopez@gmail.com',
    'maria.garcia@hotmail.com',
    'laura.martinez@outlook.com'
]

[
    {email: 'ana.smith@gmail.com', message: "Hello Ana Smith. Thank you for being part of our community!"},
    {email: 'juan.perez@yahoo.com', message: "Hello Juan Perez. Thank you for being part of our community!"},
    {email: 'maria.garcia@hotmail.com', message: "Hello Maria Garcia. Thank you for being part of our community!"},
    {email: 'carlos.lopez@gmail.com', message: "Hello Carlos Lopez. Thank you for being part of our community!"},
    {email: 'laura.martinez@outlook.com', message: "Hello Laura Martinez. Thank you for being part of our community!"},
]

*/

const emails = [
    'ana.smith@gmail.com',
    'juan.perez@yahoo.com',
    'maria.garcia@hotmail.com',
    'ana.smith@gmail.com',
    'carlos.lopez@gmail.com',
    'maria.garcia@hotmail.com',
    'laura.martinez@outlook.com'
]

function sendMessage(emails: string[]) {
    const uniqueEmails = [...new Set(emails)];

    let messages = [];

    for(let i=0; i < uniqueEmails.length; i++) {
        let userName = uniqueEmails[i].split("@")[0];
        let name = userName.split(".")[0];
        let capitalizeName = name[0].toUpperCase() + name.slice(1);
        let lastName = userName.split(".")[1];
        let capitalizeLastName = lastName[0].toUpperCase() + lastName.slice(1);
        let object = {
            email: uniqueEmails[i],
            message : `Hello ${capitalizeName} ${capitalizeLastName}. Thank you for being part of our community`
        }
        messages.push(object);
    }

    return messages;
}

console.log(sendMessage(emails));