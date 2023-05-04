const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  let btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

const name = document.querySelector("#name");
const amount = document.querySelector("#amount");
const container = document.querySelector(".booking-container");
const bookingDate = document.querySelector("#booking-date");
const bookingTime = document.querySelector("#booking-time");
const form = document.querySelector(".booking-form");
const closeBtn = document.querySelector(".close-btn");
const content = document.querySelector(".modal-content");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const todayDate = today.getDate();

const futureDay = new Date(year, month, todayDate + 30);
const futureYear = futureDay.getFullYear();
const futuremonth = futureDay.getMonth();
const futureDate = futureDay.getDate();

window.addEventListener("DOMContentLoaded", function () {
  dateDefault();
});
function format(item) {
  if (item < 10) {
    item = `0${item}`;
  }
  return item;
}

function dateDefault() {
  bookingDate.value = `${year}-${format(month)}-${format(todayDate)}`;
  bookingDate.min = `${year}-${format(month)}-${format(todayDate)}`;
  bookingDate.max = `${futureYear}-${format(futuremonth)}-${format(
    futureDate
  )}`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (name.value == "" || amount.value == "") {
    content.innerHTML = `<p class="modal-text">Please enter all infomation required</p>`;
  } else {
    const dateValue = bookingDate.value;
    const yy = dateValue.split("-")[0];
    const mm = dateValue.split("-")[1];
    const dd = dateValue.split("-")[2];
    content.innerHTML = `<p class="modal-text">Welcome to Delicious Days!</p><p class="modal-text">We confirm that you have book a table for ${amount.value} people on ${dd}/${mm}/${yy} at ${bookingTime.value}.</p> <p class="modal-text">Thank you! We are glad to see you soon!</p>`;
  }

  container.classList.add("show-modal");
});

closeBtn.addEventListener("click", function (e) {
  container.classList.remove("show-modal");

  dateDefault();
  name.value = "";
  amount.value = "";
});
