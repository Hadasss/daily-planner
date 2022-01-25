let currentDay = document.querySelector("#currentDay");
const slotsObjsArr = [];
const arrTime = [
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

currentDay.textContent = moment().format("MMM Do YYYY HH:00");

// TODO loading existing time slots
let slotsParsed = JSON.parse(localStorage.getItem("slotsObjsArr"));
console.log(slotsParsed);

for (i = 0; i < arrTime.length; i++) {
  const newRow = $("<div>").attr("class", "row");

  const newP = $("<p>")
    .attr("class", "list-group-item box hour col-1")
    .text(arrTime[i]);
  const newTextA = $("<textarea>").val(localStorage.getItem(arrTime[i]));
  const newBtn = $("<button>")
    .attr("class", "list-group-item box saveBtn col-1")
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

function saveToLocal(e) {
  console.log(e.target);
  console.log($(this).prev().val());
  const value = $(this).prev().val();
  console.log($(this).prev().prev().text());
  const key = $(this).prev().prev().text();

  let slotsObj = {
    hour: key,
    text: value,
  };

  slotsObjsArr.push(slotsObj);

  localStorage.setItem("slotsObjsArr", JSON.stringify(slotsObjsArr));
}
