function GetValue() {
    const name = document.querySelector('.name').value;
    const topic = document.querySelector('.topic').value;
    const information = document.querySelector('.information').value;

    let SentData = JSON.parse(localStorage.getItem("SentData")) || [];

    SentData.push({
        topic: topic,
        information: information
    });

    localStorage.setItem("SentData", JSON.stringify(SentData));
}

function displayStoredData() {
    let SentData = JSON.parse(localStorage.getItem("SentData")) || [];

    if (SentData.length === 0) {
        document.querySelector('.sent').innerHTML = `<p>No data available</p>`;
        return;
    }

    document.querySelector('.sent').innerHTML = SentData.map(entry => `
        <div class="card">
            <h2>${entry.topic}</h2>
            <p>${entry.information}</p>
        </div>
    `).join("");
}

displayStoredData();