function typeWriter(elem, text, time, u = 0){
    var i = 0;
    elem.innerHTML = "";
    function write(){
        elem.innerHTML += text.charAt(i);
        if (i<text.length - 1){
            i++;
            setTimeout(write, time);
        }
    }
    write();
}


function switchOn(){
    document.getElementById("bulb_image").src = "pic_bulbon.gif";
    window.bulbState = 1;
}

function switchOff(){
    document.getElementById("bulb_image").src = "pic_bulboff.gif";
    window.bulbState = 0;
}

function toggleFunc(){
    if (window.bulbState == 0){
        switchOn();
    }else{
        switchOff();
    }
}

function nextV(){
    document.getElementById("nextDiv").style.display = "block";
}