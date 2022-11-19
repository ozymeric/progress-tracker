let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let progress = document.querySelector(".progress");
let circles = document.querySelectorAll(".number");

let currentActive = 1;

nextButton.addEventListener("click", ()=>{
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  };
})

prevButton.addEventListener("click", ()=>{
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  };
})

function deactivator() {
  if (currentActive === 4) {
    nextButton.classList.add("deactive");
  } else if (currentActive === 1){
    prevButton.classList.add("deactive");
  } else {
    nextButton.classList.remove("deactive");
    prevButton.classList.remove("deactive");
  }
}

function progressTracker() {
  if(currentActive === 1) {
    for (let circle of circles) {
      circle.classList.remove("active");
      progress.style.width = "0%";
    }
    circles[0].classList.add("active");
  } else if (currentActive === 2) {
    for (let circle of circles) {
      circle.classList.remove("active");
    }
    circles[0].classList.add("active");
    circles[1].classList.add("active");
    progress.style.width = "33%";

  } else if (currentActive === 3) {
    for (let circle of circles) {
      circle.classList.remove("active");
    }
    circles[0].classList.add("active");
    circles[1].classList.add("active");
    circles[2].classList.add("active");
    progress.style.width = "66%";

  } else if (currentActive === 4) {
    for (let circle of circles) {
      circle.classList.remove("active");
    }
    circles[0].classList.add("active");
    circles[1].classList.add("active");
    circles[2].classList.add("active");
    circles[3].classList.add("active");
    progress.style.width = "100%";
  }
}

setInterval(deactivator, 1);
setInterval(progressTracker, 1);


/*

###############################################################################################################################################
############################################ THIS IS THE UDEMY SOLUTION OF THIS PROJECT #######################################################
###############################################################################################################################################
##################################################################################################################
###############################################################################################################################################
###############################################################################################################################################
###############################################################################################################################################


const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

*/
