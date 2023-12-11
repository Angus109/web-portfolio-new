// Get the element to increment
const counterElement = document.querySelector('#counter');
const counterYears = document.getElementById("counterYear");
const counterUsers = document.getElementById("counterUsers");
const counterTotal = document.getElementById("counterTotal");
const counterReviews = document.getElementById("counterReviews");
const userELS = document.getElementById("users_count");



// Set the target value
const targetValue = 100; // Change this to your desired final number

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start the animation when the element is in view
            animateCounter(0, 2000, 200);
            yearCounter(0, 2000, 15);
            userCounter(0, 2000, 740);
            totalCounter(3200, 2000, 3500);
            reviewcounter(0, 2000, 584)

            observer.unobserve(entry.target); // Stop observing once it's in view
        }
    });
});

// Observe the element
observer.observe(counterElement);
observer.observe(userELS);



// Function to animate the counter
function animateCounter(currentValue, animationDuration, targetValue) {


    const updateInterval = animationDuration / targetValue;

    const animation = setInterval(() => {
        if (currentValue < targetValue) {
            currentValue++;
            counterElement.textContent = currentValue;
        } else {
            clearInterval(animation);
        }
    }, updateInterval);
}


function yearCounter(currentValue, animationDuration, targetValue) {
       

    const updateInterval = animationDuration / targetValue;

    const animation = setInterval(() => {
        if (currentValue < targetValue) {
            currentValue++;
            counterYears.textContent = currentValue;
        } else {
            clearInterval(animation);
        }
    }, updateInterval);
}

function userCounter(currentValue, animationDuration, targetValue) {
       

    const updateInterval = animationDuration / targetValue;

    const animation = setInterval(() => {
        if (currentValue < targetValue) {
            currentValue++;
            counterUsers.textContent = currentValue;
        } else {
            clearInterval(animation);
        }
    }, updateInterval);
}


function totalCounter(currentValue, animationDuration, targetValue) {
    

    const updateInterval = animationDuration / targetValue;

    const animation = setInterval(() => {
        if (currentValue < targetValue) {
            currentValue++;
            counterTotal.textContent = currentValue;
        } else {
            clearInterval(animation);
        }
    }, updateInterval);
}


function reviewcounter(currentValue, animationDuration, targetValue) {
    

    const updateInterval = animationDuration / targetValue;

    const animation = setInterval(() => {
        if (currentValue < targetValue) {
            currentValue++;
            counterReviews.textContent = currentValue;
        } else {
            clearInterval(animation);
        }
    }, updateInterval);
}












