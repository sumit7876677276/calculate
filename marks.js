// var sumit_mass=65;
// var sumit_height=300;

// var aryan_mass=60;
// var aryan_height=180;

// var bmi_sumit=sumit_mass/sumit_height**2;

// var bmi_aryan=aryan_mass/
// aryan_height**2;

// document.write("<br>");
// document.write(bmi_sumit);
// document.write("<br>");
// document.write("<br>");
// document.write(bmi_aryan);

// document.write("<br>");
// document.write("<br>");
// if(bmi_sumit>bmi_aryan){
//     document.write("bmi_sumit is greater");
    
// }

// else{
//     document.write("bmi_aryan is smaller");
// }



function sum (a,b,c,d,e,){

var a=document.querySelector(".english").value
var b=document.querySelector(".math").value
var c=document.querySelector(".hindi").value
var d=document.querySelector(".scie").value

var e=document.querySelector(".sst").value

    
var f= (+a) + (+b) + (+c) + (+d)+ (+e);

var m=document.querySelector("p").innerHTML=f;

var n=f/500*100;

var s=document.querySelector("h2").innerHTML=n;


}



// var dolphin_score=96;
// var koalas_score=88;
// var dolphin_score_bonus1=97;
// var koalas_score_bonus1=109



// var dolphin_score2=96;
// var koalas_score2=88;
// var dolphin_score_bonus2=97;
// var koalas_score_bonus2=109;


// var dolphin_score3=96;
// var koalas_score3=88
// var dolphin_score_bonus3=97;
// var koalas_score_bonus3=109;

// var team1= dolphin_score+ dolphin_score_bonus1+dolphin_score2+dolphin_score_bonus2+dolphin_score3+dolphin_score_bonus3+100/6

// var rt1=Math.round(team1);


// var team2= koalas_score + koalas_score_bonus1+koalas_score2+ koalas_score_bonus2+ koalas_score3+ koalas_score_bonus3+100/6

// var rt2=Math.round(team2);



// document.write("<h2>")
// document.write("<br>");
// document.write( "Team1___Dolphins__"+ "    "+rt1+"<br>");
// document.write("<br>");
// document.write( "Team2___koalas__"+ "    "+rt2+"<br>");
// document.write("<br>");
// document.write("winners");

// document.write("<br>")
// ;document.write("<br>");

// if(team1>team2){
// document.write("Dolphins are winner");

// }

// else if 
// (team1<team2){

// document.write("Koalas are winner");

// }



// else{
//     document.write("Draw");  
// }






function team(){

var a=document.querySelector("#score1").value;
var b=document.querySelector("#score2").value;
var c=document.querySelector("#score3").value;
var d=document.querySelector("#score4").value;
var e=document.querySelector("#score5").value;
var f=document.querySelector("#score6").value;


var sumit= (+a)+(+b)+(+c)+100/6;
var sumit2=+(+d)+(+e)+(+f)+100/6;

var t=document.querySelector("p").textContent=sumit;


var t2=document.querySelector("b").textContent=sumit2;




if (sumit>sumit2) {

var t3=document.querySelector("#win").textContent="Team-1 wins";

}


 else if (sumit<sumit2) {

    var t3=document.querySelector("#win").textContent="Team-2 wins";
}


else{
    var t3=document.querySelector("#win").textContent="Draw";
}

}