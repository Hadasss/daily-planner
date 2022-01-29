let currentDay = document.querySelector("#currentDay");
let tempSlotsArr = [];

currentDay.textContent = moment().format("MMM Do YYYY HH:00");

let slots = localStorage.getItem("storedSlotsArr");

if (!slots) {
  console.log("No slots");
  tempSlotsArr = [
    { hour: "7:00", text: "" },
    { hour: "8:00", text: "" },
    { hour: "9:00", text: "" },
    { hour: "10:00", text: "" },
    { hour: "11:00", text: "" },
    { hour: "12:00", text: "" },
    { hour: "13:00", text: "" },
    { hour: "14:00", text: "" },
    { hour: "15:00", text: "" },
    { hour: "16:00", text: "" },
    { hour: "17:00", text: "" },
    { hour: "18:00", text: "" },
  ];
} else {
  tempSlotsArr = JSON.parse(slots);
}

for (i = 0; i < tempSlotsArr.length; i++) {
  let timeId = parseInt(tempSlotsArr[i].hour);
  const newRow = $("<div>").attr("class", "row");

  const newP = $("<p>")
    .attr("class", "list-group-item box hour col-1")
    .text(tempSlotsArr[i].hour);
  let newTextA = $("<textarea>").attr("data-hour", tempSlotsArr[i].hour);
  newTextA.val(tempSlotsArr[i].text);

  const newBtn = $("<button>")
    .attr("class", "list-group-item box saveBtn col-1")
    .attr("data-hour", tempSlotsArr[i].hour)
    .text("Save");

  if (moment().format("k") > i + 7) {
    newTextA.attr("class", "list-group-item box past col-10");
  } else if (moment().format("k") < i + 7) {
    newTextA.attr("class", "list-group-item box textarea future col-10");
  } else {
    newTextA.attr("class", "list-group-item box present col-10");
  }

  newBtn.on("click", saveToLocal);

  newRow.append(newP);
  newRow.append(newTextA);
  newRow.append(newBtn);

  $(".container").append(newRow);
}

function saveToLocal(event) {
  console.log($(this).prev().val());
  const value = $(this).prev().val();
  console.log($(this).prev().prev().text());
  // const key = $(this).prev().prev().text();
  const key = $(this).attr("data-hour");
  console.log(key);

  for (i = 0; i < tempSlotsArr.length; i++) {
    console.log(tempSlotsArr[i]);
    if (tempSlotsArr[i].hour === key) {
      tempSlotsArr[i].text = value;
      console.log(tempSlotsArr[i]);
      break;
    }
  }

  console.log(tempSlotsArr);

  localStorage.setItem("storedSlotsArr", JSON.stringify(tempSlotsArr));
}
