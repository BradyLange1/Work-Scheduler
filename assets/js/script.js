// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  //gets current day from dayjs
  var currentTime = dayjs()
  $('#currentDay').text(currentTime.format('dddd, MMMM DD'))

  //setting variables
  var saveBtnEl = $('.saveBtn')
  var scheduleContent = JSON.parse(localStorage.getItem('localSchedule'))
  if (scheduleContent === null){
    scheduleContent = {}
  }
  var scheduleLength = Object.keys(scheduleContent).length
  var scheduleKeys = Object.keys(scheduleContent)

  //printing localstorage to page
  for (var i = 0; i < scheduleLength; i++){
    var hourSet = $("#" + scheduleKeys[i]).find("textarea")
    var keySet = scheduleKeys[i]
    var description = scheduleContent[keySet]
    hourSet.val(description)
  }
  
  //saves users input to localstorage
  saveBtnEl.on('click', function(e){
    var selectedBtn = this.parentElement.id
    var userInput = this.previousElementSibling.value
    scheduleContent[selectedBtn] = userInput
    localStorage.setItem('localSchedule', JSON.stringify(scheduleContent))
  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
