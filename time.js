

let cache = [];

function makeNewNode(text) {
    newNode = document.createElement('p')
    newNode.innerText = text
    return newNode
}

app = document.getElementById("center");

function isEmpty() {
    setInterval(() => {
    fetch('https://exceed14.cpsk-club.xyz/parking')
    .then((data) => data.json())
    .then((datas) => {
        datas.forEach(data => {
            if(data.parking_number == 1) {
                if(data.is_empty != true) {
                document.getElementsById("box1").style.backgroundColor = "red";
                }
            }
            if(data.parking_number == 2) {
                if(data.is_empty != true) {
                document.getElementsById("box2").style.background = "red";
                }
            }
            if(data.parking_number == 3) {
                if(data.is_empty != true) {
                document.getElementsById("box3").style.background = "red";
                }
            }
            if(data.parking_number == 4) {
                if(data.is_empty != true) {
                document.getElementsById("box4").style.background = "red";
                }
            }
        });
    });
    }, 5000);
}

window.setInterval(isEmpty(), 2000);



