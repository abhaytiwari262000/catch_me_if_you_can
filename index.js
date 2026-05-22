function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

let isMobileResponse = isMobile()


let count = 0;

function handleFirstHover(event){

    let target = event.target;

    target.style.position="absolute";

    target.style.top="100px";

    target.style.left="100px";

}

function handleSecondHover(event){

    let target = event.target;

    target.style.position="absolute";

    target.style.top="10px";

    target.style.left="100px";

}

function handleThirdHover(event){

    let target = event.target;

    target.style.position="absolute";

    target.style.top="100px";

    target.style.left="100px";

}

function handleFourthHover(event){

    let target = event.target;

    target.style.position="absolute";

    target.style.top="0px";

    target.style.left="0px";

}

function handleFifthHover(event){

    let target = event.target;

    target.style.position="absolute";

    target.style.top="100px";

    target.style.left="10px";

}
function handleHover(event){

    if (count == 7){
        alert("buddhu banaya bada maza aya!, happy birthday :P")
        location.reload()
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