let cache = [];

function makeNewNode(text) {
    newNode = document.createElement('p')
    newNode.innerText = text
    return newNode
}

fetch('https://exceed14.cpsk-club.xyz/', {
  method: 'GET',
})
    .then((data) => data.json())
    .then((datas) => {
        datas.forEach(data => {
            if(!cache.includes(data.time_parked)) {
                app.appendChild(makeNewNode(data.time_parked));
                cache.push(data.time_parked)
            }
        });
    });