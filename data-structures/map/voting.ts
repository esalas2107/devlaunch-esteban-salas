/*

Desarrolla una función que procese un array de votos en una campaña electoral.

Cada voto se representa mediante un objeto que contiene un id del votante y el nombre del candidato al que ha votado.

La función debe contar cuántos votos ha recibido cada candidato y, al final, mostrar quién fue el candidato con más votos.

La función debe realizar lo siguiente:

Recibir un array de objetos, donde cada objeto tiene la siguiente structura: 

{id: <votante_id>, candidate: <nombre_del_candidato>}

Utilizar un Map para contar los votos por candidato.

Determinar el candidato con más votos.

Retornar un objeto que contenga el nombre del candidato ganador y la cantidad de votos recibidos.

VOTOS [
    {id: '118480995', candidate: "Alice"},
    {id: '118480996', candidate: "Bob"},
    {id: '118480997', candidate: "Alice"},
    {id: '118480998', candidate: "Charlie"},
    {id: '118480999', candidate: "Bob"},
    {id: '118480990', candidate: "Alice"}
]

*/

interface Votes {
    id: string;
    candidate: string
}

const votes = [
    { id: '118480995', candidate: "Alice" },
    { id: '118480996', candidate: "Bob" },
    { id: '118480997', candidate: "Alice" },
    { id: '118480998', candidate: "Charlie" },
    { id: '118480999', candidate: "Bob" },
    { id: '118480990', candidate: "Alice" }
]

function candidateWithMostVotes(votes: Votes[]) {
    /* Solución que yo hice que no me gustó 
    
    const candidateVotes: Map<string, number> = new Map();
    let counterAlice = 0;
    let counterBob = 0;
    let counterCharlie = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i].candidate === "Alice") {
            candidateVotes.set(votes[i].candidate, counterAlice += 1)
        } else if (votes[i].candidate === "Bob") {
            candidateVotes.set(votes[i].candidate, counterBob += 1)
        } else if (votes[i].candidate === "Charlie") {
            candidateVotes.set(votes[i].candidate, counterCharlie += 1)
        }
    }

    const votesPerCandidate = Array.from(candidateVotes.values());
    
    const maxValueOfVotes = Math.max(...votesPerCandidate);

    let winner = ""

    candidateVotes.forEach((votes, candidate) => {
        if(votes === maxValueOfVotes) {
            winner = candidate;
        }
    });

    return {
        winner: winner,
        votes: maxValueOfVotes
    }

    */

    const candidateVotes: Map<string, number> = new Map();

    votes.forEach(vote => {
        const current = candidateVotes.get(vote.candidate) || 0;
        candidateVotes.set(vote.candidate, current + 1);
    });

    let winner = "";
    let maxVotes = 0;

    candidateVotes.forEach((count, candidate) => {
        if (count > maxVotes) {
            winner = candidate;
            maxVotes = count;
        }
    });

    return { winner, votes: maxVotes };
}

console.log(candidateWithMostVotes(votes));
