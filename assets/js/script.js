const API_KEY = "--DMrgKqKx8-4Al8ir9DkLxi6gE";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok){
        //console.log(data); display expiry: data.
        //console.log(data.expiry);displays only date.
        displaySatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displaySatus(data){
     
    let heading = "Api Key Status";
    let results = `<div>Your Key Is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;


    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;

    resultsModal.show();
}