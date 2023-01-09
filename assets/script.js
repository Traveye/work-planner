// line 3 was given - waits to run all code until page has fully rendered.

$(function () {

// this section adds an event listener to all the save buttons. once clicked the id associated with the clicked button is parsed into an integer and stored as the key in local storage with the submitted text as the value. 
 
  var saveBtn = $('.btn.saveBtn');
  var currentHour = dayjs().format('HH')


  saveBtn.click(function() {
    let taskInput = $(this).siblings('.description').val();
    let hourKey = $(this).closest('.row').attr('id');
    let keyAsNumber = parseInt(hourKey, 10);
    localStorage.setItem(keyAsNumber, taskInput);

  })

// this else if function sets the class for css stling. since the div ids are numbers they are used to compare to the current time using the operators > and ==. Depending on the current time the classes of past, present, and future will be added.



 
timeRowEl = document.querySelectorAll('div[id]')

  for (i = 0; i < timeRowEl.length; i++) {
    var currentDiv = timeRowEl[i];
    if (currentDiv.id > currentHour) {
      currentDiv.classList.add('future');
      console.log(currentDiv.id + "1")
     
      
    }
    else if (currentDiv.id == currentHour) {
      currentDiv.classList.add('present')
      console.log(currentDiv.id + "2")
    }
    else {
      currentDiv.classList.add('past')
      console.log(currentDiv.id + "3")
    }
  }




// this for loop checks the keys in local storage which are parsed to numbers. if a key exists then the text area of the div with the corresponding "numerical" id will be updated.

  for(i = 9; i < 18; i++) {
    var newTask = localStorage.getItem(i);
    document.getElementById(i).querySelector('textarea').textContent = newTask;
  
  }


//This code pulls the current day from day.js and modifies the text area of the header

var currentDate = dayjs().format('MMM D, YYYY');
var currentDayEl = document.querySelector('#currentDay')

currentDayEl.textContent = currentDate;

});
