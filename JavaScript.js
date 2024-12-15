function timeZones() {
  let timeZone = moment();
  let Bangkok = document.querySelector("#bangkok");
  Bangkok.innerHTML = moment.tz("Asia/Bangkok").format("dddd, MMMM D, YYYY ");
  let bangkokTime = document.querySelector("#bangkok-time");
  bangkokTime.innerHTML = `${moment
    .tz("Asia/Bangkok")
    .format("hh:mm:ss")} <small>${timeZone.format("a")}</small>`;

  let Johannesburg = document.querySelector("#johannesburg");
  Johannesburg.innerHTML = moment
    .tz("Africa/Johannesburg")
    .format("dddd, MMMM D, YYYY ");
  let johannesburgTime = document.querySelector("#johannesburg-time");
  johannesburgTime.innerHTML = `${moment
    .tz("Africa/Johannesburg")
    .format("hh:mm:ss")} <small>${timeZone.format("a")}</small>`;

  let newYork = document.querySelector("#new-york");
  newYork.innerHTML = moment
    .tz("America/New_York")
    .format("dddd, MMMM D, YYYY ");
  let newYorkTime = document.querySelector("#new-york-time");
  newYorkTime.innerHTML = `${moment
    .tz("America/New_York")
    .format("hh:mm:ss")} <small>${timeZone.format("a")}</small>`;

  let portAuPrince = document.querySelector("#prince");
  portAuPrince.innerHTML = moment
    .tz("America/Port-au-Prince")
    .format("dddd, MMMM D, YYYY ");
  let portAuPrinceTime = document.querySelector("#prince-time");
  portAuPrinceTime.innerHTML = `${moment
    .tz("America/Port-au-Prince")
    .format("hh:mm:ss")} <small>${timeZone.format("a")}</small>`;
}
setInterval(timeZones, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  console.log(cityTimeZone);
  if (cityTimeZone === "current-location") {
    {
      cityTimeZone = moment.tz.guess();
    }
    {
      console.log(cityTimeZone);
    }
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let timeZone = moment.tz(cityTimeZone);
  let cityUpdate = document.querySelector("#cities");
  cityUpdate.innerHTML = `<div class="city" >              
        <div><h2>${cityName}</h2>
        <div id="${cityTimeZone}" class="date">${timeZone.format(
    "ddd, MMMM D, YYYY"
  )}</div></div>
         <div  class="time">${timeZone.format(
           "h:mm:ss"
         )} <small>${timeZone.format("a")}</small></div></div>
         <div><a href="/">Return to All Cities</a?</div>
`;
}

let city = document.querySelector("#selection");
city.addEventListener("change", updateCity);
