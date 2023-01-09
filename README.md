# Work-Planner

## Goals
The goal of this project was to add functionality to a pre-built application utilizing third pary APIs JQuery and Day.JS. The provided code gave structure to the HTML and all the necessary styling. The request functionality was as follows: 

- When the planner is opened, the current date is displayed. 
- When going down the page, there are timeblocks for the standard business hours 9am - 5pm.
- These time blocks are color coded to indicate whether they are past, present, or future based on the current time. 
- These time blocks have an input area where text can be entered. 
- When the save button for the associated time block is entered, the data is saved in local storage. 
- When the page refreshes, then the data persists. 

First, I completed the creation of the required style blocks so that there were text input areas for the hours of 9am through 5pm. Then using Jquery I targeted all the save buttons so that on click a funciton would run to save the text input into local storage. 

Then I stored the current hour using Day.JS in a variable. Using an `else if` statement, I compared the current hour to the numerical `id` tags assigned to the timeblock `div` tags to determine wheter they shoudld be styled as past, present, or future. 

![alt text](/assets/forReadme/timeblockwstyling.png)

![alt text](/assets/forReadme/timeblockwstyling.png)

Next, to ensure the text input persists after refresh, I used a `for` loop to set the text area of the divs as the `id` tags and `keys` of the stored date could be compared numerically. 

Finally, using Day.JS, I set a variable equal to the current date and modified the text area of a present header `div` to render the variable. 

You can view and test this application here: https://traveye.github.io/work-planner/

## License
MIT

## Instalation
NA

## Usage
NA

## Credits 
The entire CSS file and majority of the HTML file were provided as part of a course project.

