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
