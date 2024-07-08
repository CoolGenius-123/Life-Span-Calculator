// Getting all the elements using their ID

let settingCogEL = document.getElementById('settingIcon');
let settingContentEL = document.getElementById('settingContent');
let isDOBOpen = false;
let intialTextEL = document.getElementById('intialText');
let afterDOBButtonEL = document.getElementById('afterDOBButton');
let dateOfBirth;
let dobButtonEL = document.getElementById('dobButton');
let dobInputEL = document.getElementById('dobInput');
let yearEL = document.getElementById('year');
let monthEL = document.getElementById('month');
let dayEL = document.getElementById('day');
let hourEL = document.getElementById('hour');
let minuteEL = document.getElementById('minute');
let secondEL = document.getElementById('second');
let weekEL = document.getElementById('week');


// Function to toggle the Date of Birth Selector

const toggleDateofBirthSelector = () => {
    if (isDOBOpen) {
        settingContentEL.classList.add('hide');
    } else {
        settingContentEL.classList.remove('hide');
    }

    isDOBOpen = !isDOBOpen;
    console.log("Toggle", isDOBOpen);
}

// Function to set the Date of Birth

const setDOBHandler = () => {
    dateOfBirth = dobInputEL.value;
    if (dateOfBirth) {
        intialTextEL.classList.add('hide');
        afterDOBButtonEL.classList.remove('hide');
        updateAge(); // Call updateAge when DOB is set
        setInterval(updateAge, 1000); // Call updateAge every second
    } else {
        afterDOBButtonEL.classList.add('hide');
        intialTextEL.classList.remove('hide');
    }
}

// Function to update the Age

const updateAge = () => {
    if (!dateOfBirth) {
        console.log("Date of Birth is not set");
        return;
    }

    const now = new Date();
    const dob = new Date(dateOfBirth);

    const totalSeconds = Math.floor((now - dob) / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const year = Math.floor(totalDays / 365);
    const remainingDaysAfterYears = totalDays % 365;
    const month = Math.floor(remainingDaysAfterYears / 30);
    const remainingDaysAfterMonths = remainingDaysAfterYears % 30;
    const week = Math.floor(remainingDaysAfterMonths / 7);
    const day = remainingDaysAfterMonths % 7;
    const hour = totalHours % 24;
    const minute = totalMinutes % 60;
    const second = totalSeconds % 60;



    // Updating the elements with the calculated values to their respective elements in HTML page

    yearEL.textContent = year;
    monthEL.textContent = month;
    dayEL.textContent = day;
    hourEL.textContent = hour;
    minuteEL.textContent = minute;
    secondEL.textContent = second;
    weekEL.textContent = week;

    console.log("Your Age:", {
        year, month, day, hour, minute, second, week
    });
}


// Adding event listeners to the elements

setDOBHandler(); 
settingCogEL.addEventListener('click', toggleDateofBirthSelector);
dobButtonEL.addEventListener('click', setDOBHandler);
