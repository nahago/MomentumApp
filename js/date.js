const elementDate = document.getElementById("date");

function getDate() {
    const today = new Date();
    const options = { month: 'long'};
    const date = today.getDate();
    const month = new Intl.DateTimeFormat('en-US', options).format(today);
    const year = today.getFullYear();
    
    elementDate.innerText = `${date} ${month} ${year}`;
}

getDate();
setInterval(getDate, 1000);
