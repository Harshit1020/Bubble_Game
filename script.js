    var scor=0;
    var timer=60;
    var hit;
 function ShowNScore(newscore){

        scor=newscore;
        document.querySelector("#score").textContent=scor;

 }

function SetIncreasescore(){

      scor= scor+10;
      document.querySelector("#score").textContent=scor;

}



function ShownNtimer(){

      setInterval(function(){
if(timer>0){
   timer--;
   document.querySelector("#Tm").textContent=timer;

   }
   else{

document.querySelector("#btm").innerHTML=`<h1>Game Over<br>&nbsp &nbspscore: ${scor}</h1>`

   }
},1000);

}

function ShowNhit(){

   hit =Math.floor(Math.random()*10);
   document.querySelector("#hitt").textContent=hit;


}




function ShowNum(){
var clutter="";

for(var i=0; i<80; i++){
     var rn=Math.floor(Math.random()*10)
        clutter +=`
            
        <div class="buble">${rn}</div>
        
        `

}


document.querySelector("#btm").innerHTML=clutter;

}

document.querySelector("#btm").addEventListener("click",function(dets){

   if(Number(dets.target.textContent) === hit){

      SetIncreasescore();
      ShowNum();
      ShowNhit();


   }


});

ShowNum();
ShowNScore(0);
ShownNtimer();
ShowNhit();
SetIncreasescore();


