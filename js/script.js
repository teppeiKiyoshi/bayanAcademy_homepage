//variables for nav header and side bar
const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

// EVENT TABS JS FUNCTIONS
let tabs = document.querySelectorAll(".tab-toggle"),
  contents = document.querySelectorAll(".tabs-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("is-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });
    contents[index].classList.add("is-active");
    tabs[index].classList.add("is-active");
  });
});

// SHOW MORE EVENTS ON CLICK FUNCTION
let editorPick = document.querySelectorAll(".more-events");
let showMore_btn = document.querySelector("#show-editorPicks");

showMore_btn.addEventListener("click", () => {
  if (showMore_btn.textContent === "View All Events") {
    editorPick.forEach((pick) => {
      pick.style.gridTemplateColumns = "4, 1fr";
      pick.classList.remove("more-events");
      showMore_btn.textContent = "Hide All Events";
    });
  } else {
    editorPick.forEach((pick) => {
      pick.classList.add("more-events");
      showMore_btn.textContent = "View All Events";
      showMore_btn.scrollIntoView(0, 400);
    });
  }
});

// View more partners on click 
let pView_btn = document.querySelector('#show-partners');
let pView = document.querySelectorAll('.view-contentP');

pView_btn.addEventListener('click', () => {
  if (pView_btn.textContent === "View All Our Partners") {
    pView.forEach((view) => {
    view.classList.remove('view-contentP');
    pView_btn.textContent = "Hide All";
    });
  } else {
    pView.forEach((view) => {
      view.classList.add('view-contentP');
      pView_btn.textContent = "View All Our Partners";
      pView_btn.scrollIntoView(0, 100);
      })
  }
});

//slider functions
const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    //image slider next button
    nextBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active-carousel");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active-carousel");
      });

      slideNumber++;

      if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active-carousel");
      slideIcons[slideNumber].classList.add("active-carousel");
    });

    //image slider previous button
    prevBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active-carousel");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active-carousel");
      });

      slideNumber--;

      if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
      }

      slides[slideNumber].classList.add("active-carousel");
      slideIcons[slideNumber].classList.add("active-carousel");
    });

    //image slider autoplay
    var playSlider;

    var repeater = () => {
      playSlider = setInterval(function(){
        slides.forEach((slide) => {
          slide.classList.remove("active-carousel");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active-carousel");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
          slideNumber = 0;
        }

        slides[slideNumber].classList.add("active-carousel");
        slideIcons[slideNumber].classList.add("active-carousel");
      }, 4000);
    }
    repeater();

    //stop the image slider autoplay on mouseover
    slider.addEventListener("mouseover", () => {
      clearInterval(playSlider);
    });

    //start the image slider autoplay again on mouseout
    slider.addEventListener("mouseout", () => {
      repeater();
    });


// tool tip function 
toolTip_btn = document.querySelector("#tooltip-fn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { behavior: 'smooth', scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toolTip_btn.style.display = "block";
  } else {
    toolTip_btn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
toolTip_btn.addEventListener('click', topFunction);

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
