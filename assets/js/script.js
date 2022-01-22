let currentDay = document.querySelector("#currentDay");
const container = document.querySelector(".container");
const hourColumnUl = document.querySelector(".hour-column");
let hour = document.querySelector(".box hour");
const slotsColumnUl = document.querySelector(".slot-column");
let slotItemLi = document.querySelector(".list-group-item box slot");
const saveBtnColumn = document.querySelector(".save-btn-column");
let saveBtnLi = document.querySelector(".list-group-item box saveBtn");

// const generateCalander = function () {
//   for (let i = 0; i <= 23; i++) {
//     // dynamically generate 24hour day
//   }
// };

const displayCalendar = function () {
  currentDay.textContent = moment().format("MMM Do YYYY HH:MM");
  // TODO load slots from localStorage
  setInterval(function () {
    $(currentDay) = moment().format("DD Do YYYY");
    // TODO color-code to indicate whether it is past, present, or future

let currentTime = "";
    for (let i=0; i<slotItemLi.length; i++) {

      if (moment().isAfter(slotItemLi.id)) {
        $(slotItemLi).addClass("past");
      } else if (moment()) {
      
      } else {

      }






    }
  }, 1800000);
slotColorCheck();

};

const slotColorCheck = function() {
  const timeSlots = document.querySelectorAll(".list-group-item box slot")
timeSlots.forEach((slotItemLi) => {

  let slotTimeId = $(slotItemLi).attr("id");
  console.log(parseInt(slotTimeId));

})




}



const changeSlot = function () {
  // TODO enable text change in slot
  // TODO enable save on blur after writing in slot
  // TODO save saved slot to localStorage
};

// TODO

displayCalendar();
