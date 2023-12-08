


let dateContainer = document.querySelector(".container-date");
const weekdays = [
  "Zondag",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
];
const monthNames = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December",
];

function updateDateTime() {
  const today = new Date();
  let date = today.getDate();
  let day = weekdays[today.getDay()];
  let month = monthNames[today.getMonth()];
  let year = today.getFullYear();
  let hours = String(today.getHours()).padStart(2, '0');
  let minutes = String(today.getMinutes()).padStart(2, '0');

  dateContainer.innerHTML = `
    <p class="day">${day}</p>
    <p class="date">${date} ${month} ${year}</p>
    <p class="time">${hours}:${minutes}</p>
  `;
}

const dateClock = setInterval(updateDateTime, 100);


// Login scherm

$(".message a").click(function () {
  $(".register-form").toggle("slow");
});
$(".message a").click(function () {
  $(".login-form").toggle("slow");
});








