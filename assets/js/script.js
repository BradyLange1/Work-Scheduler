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

  //applies past, present, or future class
  var currentHour = currentTime.format('H')
  currentHour = Number(currentHour)
  timeBlock = $("#top").children().each(function(){
    var hourBlock = this.id.slice(5)
    hourBlock = Number(hourBlock)
    if (hourBlock === currentHour){
      $(this).addClass('present')
    } else if (hourBlock < currentHour){
      $(this).addClass('past')
    } else if (hourBlock > currentHour){
      $(this).addClass('future')
    }
  })
});
