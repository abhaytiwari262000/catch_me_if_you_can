function handleClick(){

    console.log('button clicked');
}

let count = 0;

function handleFirstHover(event){

    let target = event.target;

    let x = Math.floor(Math.random(0,1) * 100);

    let y = Math.floor(Math.random(0,1) * 100);

    target.style.position="absolute";

    target.style.top="100px";

    target.style.left="100px";

}

function handleSecondHover(event){

    let target = event.target;

    let x = Math.floor(Math.random(0,1) * 100);

    let y = Math.floor(Math.random(0,1) * 100);

    target.style.position="absolute";

    target.style.top="10px";

    target.style.left="100px";

}

function handleThirdHover(event){

    let target = event.target;

    let x = Math.floor(Math.random(0,1) * 100);

    let y = Math.floor(Math.random(0,1) * 100);

    target.style.position="absolute";

    target.style.top="100px";

    target.style.left="100px";

}

function handleFourthHover(event){

    let target = event.target;

    let x = Math.floor(Math.random(0,1) * 100);

    let y = Math.floor(Math.random(0,1) * 100);

    target.style.position="absolute";

    target.style.top="0px";

    target.style.left="0px";

}

function handleFifthHover(event){

    let target = event.target;

    let x = Math.floor(Math.random(0,1) * 100);

    let y = Math.floor(Math.random(0,1) * 100);

    target.style.position="absolute";

    target.style.top="100px";

    target.style.left="10px";

}
function handleHover(event){

    if (count == 7){
        alert("haha budhdhu! mummy ka favourite bachcha mein hoon! :P")
    }

    if(count % 5 == 0){
        handleFirstHover(event);
    }

    if(count % 5 == 1){
        handleSecondHover(event);
    }

    if(count % 5 == 2){
        handleThirdHover(event);
    }

    if(count % 5 == 3){
        handleFourthHover(event);
    }

    if(count % 5 == 4){
        handleFifthHover(event);
    }

    count += 1;
    


}