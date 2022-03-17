function addUser(){
player1_name=document.getElementById("player1_name").value;
player2_name=document.getElementById("player2_name").value;

localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);

window.location="game.html";
}

player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("")