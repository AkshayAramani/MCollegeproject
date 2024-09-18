let btns=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgamebtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
reset.addEventListener("click",()=>{
    resetgame();
});
let a=1;
let turnX=true;
const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetgame=()=>{
turnX=true;
enablebtns();
for(btn of btns){
    btn.innerText="";
}
}
const enablebtns=()=>{
    for(let btn of btns){
        btn.disabled=false;
    }
}


const disablebtns=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}
let btn=document.querySelector("button");
newgamebtn.addEventListener("click",()=>{
resetgame();
})
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       if(turnX){
        btn.innerText="X";
        turnX=false; 
      }
      else{
        btn.innerText="O"
        turnX=true;
      }
      btn.disabled=true;
      checkwinner();
    })
})
const showwinner=(winner)=>{
    msg.innerText=`Congratulations !! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}
const checkwinner=()=>{
 for(let pattern of winpattern){
    let pos1val = btns[pattern[0]] ? btns[pattern[0]].innerText : undefined;
    let pos2val = btns[pattern[1]] ? btns[pattern[1]].innerText : undefined;
    let pos3val = btns[pattern[2]] ? btns[pattern[2]].innerText : undefined;
     if(pos1val !=""&& pos2val !="" &&pos3val!=""){
    if(pos1val===pos2val&&pos2val===pos3val){
        console.log("winner " +pos1val);
       showwinner(pos1val);
    }
 }    
}  
}