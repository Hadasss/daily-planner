let currentDay = document.querySelector("#currentDay");
const container = document.querySelector(".container");
const hourColumnUl = document.querySelector(".hour-column");
let hour = document.querySelector(".box hour");
const slotsColumnUl = document.querySelector(".slot-column");
let slotItemLi = document.querySelector(".slot");
const saveBtnColumn = document.querySelector(".save-btn-column");
let saveBtnLi = document.querySelector(".saveBtn");
const timeSlots = document.querySelectorAll(".slot");
let textP = document.querySelector(".text-p");
let textPId = document.querySelector(".text-p").getAttribute("id");
let textarea = document.createElement("textarea");

let slotsObj = {};

// main function
const displayCalendar = function () {
  currentDay.textContent = moment().format("MMM Do YYYY HH:MM");
  slotColorCheck();
  loadSlots();
  setInterval(function () {
    slotColorCheck();
  }, 1000 * 60 * 30);
};

const slotColorCheck = function () {
  // color-coding slots
  timeSlots.forEach((slotItemLi) => {
    let slotTimeId = $(slotItemLi).attr("id");

    if (moment().format("k") > parseInt(slotTimeId)) {
      $(slotItemLi).addClass("past");
    } else if (moment().format("k") < slotTimeId) {
      $(slotItemLi).addClass("future");
    } else {
      $(slotItemLi).addClass("present");
    }
  });
};

// TODO (BUG) display night as future
// TODO enable text change in slot on click
$(".slot").on("click", function (event) {
  // let targetId = event.target.id;
  // let currentSlotLi = event.target;
  // let currentTextarea = currentSlotLi.textContent;
  // console.log(targetId);
  // console.log(currentSlotLi);

  // $(currentSlotLi).append(textarea);
  // console.log(currentTextarea);
  // $("textarea").addClass("textarea");
  // textarea.textContent = textP.textContent;

  // let updatedTextarea = $(textarea).val();
  // console.log(textarea.textContent);
  // // BUG next line changes sets the id of first slot to event.target.id
  // // let updatedSlotId = slotItemLi.setAttribute("id", targetId);

  // // $(textPId).replaceWith($(textarea));

  // saveSlotText();

  let pValue = $(event.target).closest("p").text();
  let textArea = $("<textarea>").val(pValue);
  $(event.target).append(textArea);

  console.log(pValue);
  console.log($(textArea).val());
  $(textP).replaceWith(textArea);
});

$(".slot").on("blur", function (event) {
  //
});

// save slotText to localStirage
const saveSlotText = function () {
  localStorage.setItem("slotsObj", JSON.stringify(slotsObj));
};

// TODO save slot to localStorage
const loadSlots = function () {
  slotsObj = JSON.parse(localStorage.getItem(slotsObj));

  if (!slotsObj) {
    slotsObj = {
      hour: "", // should be slot id
      text: "", // should be $(textarea).val()
    };
  }

  // TODO loop over slots object to display existing slots
};

displayCalendar();
