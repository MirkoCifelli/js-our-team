// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


const team = [
    {
        name: 'Wayne Bernett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

// console .log(team);
const cardContainer = document.getElementById('card-container');
console.log('cardContainer', cardContainer, typeof cardContainer)


// for (let i = 0; i < team.length; i++) {
//     for (const key in team[i]) {
//         console.log(key + ':', team[i][key])
//         cardContainer.innerHTML += team[i][key];
//     }
// }

// team.forEach(member => {
//     console.log(`Name: ${member.name}, Role: ${member.role}, Image: ${member.image}`);
//   });

// team.forEach(member => {
//     const info = document.createElement("div");
//     info.innerHTML = `<p>Name: ${member.name}</p><p>Role: ${member.role}</p><p>Image: ${member.image}</p>`;
//     cardContainer.appendChild(info);
//   });

for (let i = 0; i < team.length; i++) {
    const element = team[i];
    cardContainer.innerHTML += `
    <div class="col-4 my-5">
        <div class="card">
            <img src="./img/${element.image}" alt="${element.name}'s picture">
        </div>
        <div class="card-description p-2">
            <h3 class="card-name mb-1">
                ${element.name}
            </h3>
            <p class="card-role mb-2">
                ${element.role}
            </p>
        </div>
    </div>
    
    
    `
    
}