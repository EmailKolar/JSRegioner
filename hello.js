

// fetchRegioner()
fetchKommuner()
// function fetchRegioner(){
//
//     fetch("localhost:8080/getregioner")
//         .then(result =>{
//             if (result >= 400){
//                 throw new Error();
//             }
//             return result.json()
//         })
//         .then(body =>{
//             populateRegionTable(body)
//         })
//
// }
//
//
// function populateRegionTable(body){
//     const regioner = document.getElementById("regionTable")
//
//     regioner.innerHTML ='';
//
//     body.forEach(region =>{
//
//         const row = document.createElement('tr')
//
//         const nameCell = document.createElement('td')
//         nameCell.textContent = region.navn;
//         row.appendChild(nameCell)
//
//         const hrefCell = document.createElement('td')
//         hrefCell.textContent = region.href;
//         row.appendChild(hrefCell)
//
//         const kodeCell = document.createElement('td')
//         kodeCell.textContent = region.kode;
//         row.appendChild(kodeCell)
//
//         region.appendChild(row)
//
//     })
//
//
// }
function fetchRegioner(){
    fetch("http://localhost:3333/getregioner")
        .then(result => {
            if (result.status >= 400) {
                throw new Error("Server returned an error");
            }
            return result.json();
        })
        .then(body => {
            console.log(body)
            populateRegionTable(body);
        })
        .catch(error => {
            console.error("There was an error fetching the data:", error);
        });
}
function fetchKommuner(){
    fetch("http://localhost:3333/getkommuner")
        .then(result => {
            if (result.status >= 400) {
                throw new Error("Server returned an error");
            }
            return result.json();
        })
        .then(body => {
            console.log(body)
            populateKommuneTable(body);
        })
        .catch(error => {
            console.error("There was an error fetching the data:", error);
        });
}

function populateRegionTable(body){
    const regioner = document.getElementById("regionTable");
    regioner.innerHTML = '';

    body.forEach(region => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = region.navn;
        row.appendChild(nameCell);

        const hrefCell = document.createElement('td');
        hrefCell.textContent = region.href;
        row.appendChild(hrefCell);

        const kodeCell = document.createElement('td');
        kodeCell.textContent = region.kode;
        row.appendChild(kodeCell);

        regioner.appendChild(row);
    });
}

function populateKommuneTable(body){
    const kommuner = document.getElementById("kommuneTable");
    kommuner.innerHTML = '';

    body.forEach(kommune => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = kommune.navn;
        row.appendChild(nameCell);

        const hrefCell = document.createElement('td');
        hrefCell.textContent = kommune.href;
        row.appendChild(hrefCell);

        const kodeCell = document.createElement('td');
        kodeCell.textContent = kommune.kode;
        row.appendChild(kodeCell);

        const rNavnCell = document.createElement('td');
        kodeCell.textContent = kommune.region.navn;
        row.appendChild(kodeCell);

        kommuner.appendChild(row);
    });
}


window.addEventListener('DOMContentLoaded', (event) => {
    fetchRegioner();
});




