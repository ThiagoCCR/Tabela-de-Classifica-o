let listOfTeams = [];
let newListOfTeams = [];

function calculatePoints(team){
    let points = team.vitorias*3 + team.empates
    return points;
}

function displayTeams (listOfTeams){
    let element = "";
    for (let i=0; i<listOfTeams.length; i++){
        element += `<tr><td>${listOfTeams[i].nome}</td>`
        element += `<td>${listOfTeams[i].vitorias}</td>`
        element += `<td>${listOfTeams[i].empates}</td>`
        element += `<td>${listOfTeams[i].derrotas}</td>`
        element += `<td>${listOfTeams[i].pontos}</td>`
        element += `<td><button onClick="addWin(${i})">Vitória</button></td>`
        element += `<td><button onClick="addDraw(${i})">Empate</button></td>`
        element += `<td><button onClick="addLoss(${i})">Derrota</button></td>`
        element += `</tr>`
    }
    let displayText = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = element;
}

displayTeams(listOfTeams);


function addWin (i){
    let team = listOfTeams[i];
    team.vitorias++
    team.pontos = calculatePoints(team);
    displayTeams(listOfTeams);

}


function addDraw (i){
    let team = listOfTeams[i];
    team.empates++
    team.pontos = calculatePoints(team);
    displayTeams(listOfTeams);

}


function addLoss (i){
    let team = listOfTeams[i];
    team.derrotas++
    team.pontos = calculatePoints(team);
    displayTeams(listOfTeams);

}

function addTeam(){
    let newTeam = {nome:"", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
    newTeam.nome += document.getElementById("addNewName").value
    newTeam.vitorias += Number(document.getElementById("addNewWin").value)
    newTeam.empates += Number(document.getElementById("addNewDraw").value)
    newTeam.derrotas += Number(document.getElementById("addNewLoss").value)
    listOfTeams.push(newTeam);
    newTeam.pontos = calculatePoints(newTeam);
    displayTeams(listOfTeams);
    document.getElementById('addNewName').value = ''
    document.getElementById('addNewWin').value = ''
    document.getElementById('ddNewDraw').value = ''
    document.getElementById('addNewLoss').value = ''
}

function eraseData(){
    listOfTeams = [];
    displayTeams (listOfTeams);
}

// function getNewListOfTeams(){
//     let listaProvisoria = []; 
//     let maiorPontuação = 0;
//     for (let i = 0; i< listOfTeams.length; i++){
//         if (Number(listOfTeams[i].pontos) >= listaprovisoria)
//     }

// }