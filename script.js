let listOfTeams = [];

function calculatePoints(team){
    let points = team.vitorias*3 + team.empates
    return points;
}

function displayTeams (listOfTeams){
    let element = "";
    const sortedList = listOfTeams.sort(mySort)
    for (let i=0; i<sortedList.length; i++){
        element += `<tr><td>${sortedList[i].nome}</td>`
        element += `<td>${sortedList[i].vitorias}</td>`
        element += `<td>${sortedList[i].empates}</td>`
        element += `<td>${sortedList[i].derrotas}</td>`
        element += `<td>${sortedList[i].pontos}</td>`
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
    document.getElementById("addNewName").value = ''
    document.getElementById("addNewWin").value = ''
    document.getElementById("addNewDraw").value = ''
    document.getElementById("addNewLoss").value = ''
}

function eraseData(){
    listOfTeams = [];
    displayTeams (listOfTeams);
}

function mySort(a,b){
    return b.pontos - a.pontos;
}
