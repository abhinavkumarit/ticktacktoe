console.log("hello world");
let music= new Audio("music.mp3");
let audioTurn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let isgameover=false;
// let reset=document.getElementsByClassName("reset");
//fun to change turn
let turn="X";
const changeturn = ()=>{
    return turn==='X' ? '0' : 'X';
}

// FUNC TO CHECK for win

const checkwin = () =>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="") ){
            document.querySelector(".info").innerText=boxtext[e[0]].innerText +" wons";
            isgameover=true;
            document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width="200px";
            gameover.play();
        }
    })
}

// fun to change text
//Game logic
music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML===""){
            boxtext.innerText=turn;
            turn=changeturn();
            audioTurn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for" + turn;
            }
        }
    })
})


// we will add event listener on rest

reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn ="X";
    if( isgameover){
        document.getElementsByClassName("info")[0].innerText="Turn for" + turn;
        document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width="0px";
    }
})