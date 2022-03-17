player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn:"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn:"+player2_name;

function send(){
number1=document.getElementById("first_num_input").value;
number2=document.getElementById("second_num_input").value;
actual_answer=parseInt(number1)*parseFloat(number2);



question_num="<h4 id='num_display'>"+number1+"x"+number2+"</h4>";
input_box="<br> Answer:<input type='text' id='input_check_box'>";
check_button="<br><br> <button class='btn btn-success' onclick='check()' id='check'>Check</button>";
row=question_num+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("first_num_input").value="";
document.getElementById("second_num_input").value="";
}
