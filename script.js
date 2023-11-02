// document.querySelector("#bottomarea").innerHTML=string;
// document.querySelector("#bottomarea").innerHTML+=string;
// document.querySelector("#bottomarea").innerHTML+=string;
function bubble(){
    document.querySelector("#bottomarea").innerHTML="";
for(let i=0;i<=101;i++)
{
    var rn=Math.floor(Math.random()*10);
    document.querySelector("#bottomarea").innerHTML+=`<div class="bubble">${rn}</div>`;
}
}

var timer=60;

function timering(){
    setInterval(()=>{
        if(timer>0)
        {
        timer--;
        document.querySelector("#timer").innerHTML=timer;
        }
        else{
            let scoring=document.querySelector("#score").innerHTML;
            document.querySelector("#bottomarea").style.fontSize="48px";
            document.querySelector("#bottomarea").innerHTML=`Game Over<br> Your score is ${scoring}`;

        }
    },1000)
}

let hit;
function getNewhit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#target").innerHTML=hit;
}

document.querySelector("#playarea").addEventListener("click",function(dets){
    let temp=dets.target.textContent;
    console.log(Number(dets.target.textContent));
    temp=Number(temp);
    if(hit===temp){
        getNewhit();
        increaseScore();
        bubble();
    }
    else{
        decreaseScore();
    }
})

function increaseScore(){
    let number=Number(document.querySelector("#score").innerHTML);
    number+=10;
    document.querySelector("#score").innerHTML=number;
}

function decreaseScore(){
    let number=Number(document.querySelector("#score").innerHTML);
    number-=5;
    document.querySelector("#score").innerHTML=number;
}


bubble();
timering();
getNewhit();

