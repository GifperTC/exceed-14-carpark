let cache = [];

function makeNewNode(text) {
    newNode = document.createElement('p')
    newNode.innerText = text
    return newNode
}

app = document.getElementById("center");

function is_empty() {
    setInterval(() => {
    fetch('https://exceed14.cpsk-club.xyz/')
    .then((data) => data.json())
    .then((datas) => {
        datas.forEach(data => {
            if(data.is_empty == true) {
                
            }
        });
    });
    }, 5000);
}



