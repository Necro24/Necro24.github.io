//#######################
//Buttons in About page-start
//#######################

//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");

var allpages = document.querySelectorAll(".page");

//select all subtopic pages
//console.log(allpages);
hideall();

function hideall() { //function to hide all pages
  for (let onepage of allpages) { //go through all subtopic pages
    onepage.style.display = "none"; //hide it
  }
}

function show(pgno) { //function to show selected page no
  hideall();
  //select the page based on the parameter passed in
  let onepage = document.querySelector("#page" + pgno);
  //show the page
  onepage.style.display = "grid";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
  show(1);
});

page2btn.addEventListener("click", function () {
  show(2);
});

page3btn.addEventListener("click", function () {
  show(3);
});

page4btn.addEventListener("click", function () {
  show(4);
});

//sub-page1
document.addEventListener("DOMContentLoaded", function () { //get page ID
  const page1btn = document.getElementById("page1btn");
  page1btn.addEventListener("click", scrollToPage1);
});

function scrollToPage1(event) {
  event.preventDefault();
  const targetElement = document.getElementById("page1"); //Implement smooth scrolling 
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}//sub-page1-End

//sub-page2
document.addEventListener("DOMContentLoaded", function () {
  const page2btn = document.getElementById("page2btn");
  page2btn.addEventListener("click", scrollToPage2);
});

function scrollToPage2(event) {
  event.preventDefault();
  const targetElement = document.getElementById("page2");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}//sub-page2-End

//sub-page3
document.addEventListener("DOMContentLoaded", function () {
  const page3btn = document.getElementById("page3btn");
  page3btn.addEventListener("click", scrollToPage3);
});

function scrollToPage3(event) {
  event.preventDefault();
  const targetElement = document.getElementById("page3");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}//sub-page3-End

//sub-page4
document.addEventListener("DOMContentLoaded", function () {
  const page4btn = document.getElementById("page4btn");
  page4btn.addEventListener("click", scrollToPage4);
});

function scrollToPage4(event) {
  event.preventDefault();
  const targetElement = document.getElementById("page4");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}//sub-page4-End
//#######################
//Buttons in About page-end
//#######################

//################################
//About-SlideShow-SubPage3-Start
//################################
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) 
  { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//################################
//About-SlideShow-SubPage3-End
//################################

//###############################
//for hamMenu-start 
//###############################
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");
function toggleMenus() { /*open and close menu*/
  if (menuItemsList.style.display == "block")
    menuItemsList.style.display = "none";
  else menuItemsList.style.display = "block";
}//can optimize using toggle class with css transition
//###############################
//for hamMenu-end 
//###############################

// function showImage() {
//   var image = document.getElementById('image');
//   image.style.display = 'block';
// }

// function hideImage() {
//   var image = document.getElementById('image');
//   image.style.display = 'none';
// }

//#####################################
//BackToTop-Button-start
//#####################################
// Add smooth scrolling behavior to navigation links and Back to Top button
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav ul li a');
  const backToTopButton = document.getElementById('back-to-top-button');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  backToTopButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show or hide the Back to Top button based on scrolling position
  function toggleBackToTopButton() {
    if (window.scrollY > 50) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }

  window.addEventListener('scroll', toggleBackToTopButton);
});
//#####################################
//BackToTop-Button-End
//#####################################

//#####################################
//Quiz-Section-Start
//Reference: https://simplestepscode.com/javascript-quiz-tutorial/
//#####################################
// Get references to the quiz elements
const quizSection = document.getElementById('quiz');
const quizQuestions = document.getElementById('quiz-questions');
const submitButton = document.getElementById('submit-quiz');
const quizResults = document.getElementById('quiz-results');
const scoreDisplay = document.getElementById('score');

//submit button
submitButton.addEventListener('click', calculateScore);

//calculate the quiz score
function calculateScore() {
  let score = 0;
  const questions = quizQuestions.getElementsByClassName('question');

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const selectedOption = question.querySelector('input:checked');

    if (selectedOption) {
      const selectedValue = selectedOption.value;
      const isCorrect = checkAnswer(i, selectedValue);
      if (isCorrect) {
        score++;
      }
    }
  }
  // Display the quiz results
  quizSection.style.display = 'block';
  quizResults.style.display = 'block';
  scoreDisplay.textContent = `Your score: ${score}/${questions.length}`; //backticks (` `) are used to define a template in JS
}

//check the correct answer for a given question
function checkAnswer(questionIndex, selectedValue) {
  const correctAnswers = [//Answers
    'a',
    'b',
    'a',
    'b',
    'c',
    'c',
    // Add more correct answers for subsequent questions
  ];

  return selectedValue === correctAnswers[questionIndex];
}
//#####################################
//Quiz-Section-End
//#####################################

// document.addEventListener("DOMContentLoaded", function() {
//   const pages = document.querySelectorAll(".page");

//   // Add click event listeners to each page container
//   pages.forEach(page => {
//     page.addEventListener("click", toggleContentVisibility);
//   });

//   function toggleContentVisibility(event) {
//     const content = event.currentTarget.querySelector(".content");
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   }
// });

//#############################
//Quiz-container-Start
//#############################
// Get the containers and sections
const quizContainer = document.getElementById("quiz-container");
const quizzSection = document.getElementById("quiz");
// Add click event listener to the container
quizContainer.addEventListener("click", () => 
{
  // Check the current display state of the contact section
  const isContactSectionVisible = quizzSection.style.display === "block";

  // Toggle the display state of the contact section
  if (isContactSectionVisible) {
    quizzSection.style.display = "none"; // Hide the contact section if it's visible
  } else {
    quizzSection.style.display = "block"; // Display the contact section if it's hidden
  }
});
//#############################
//Quiz-container-End
//#############################

//#############################
//Contact-container-start
//#############################
const contactContainer = document.getElementById("contact-container");
const contactSection = document.getElementById("Contact-content");

// Add click event listener to the container
contactContainer.addEventListener("click", () => {
  // Check the current display state of the contact section
  const isContactSectionVisible = contactSection.style.display === "block";

  // Toggle the display state of the contact section
  if (isContactSectionVisible) {
    contactSection.style.display = "none"; // Hide the contact section if it's visible
  } else {
    contactSection.style.display = "block"; // Display the contact section if it's hidden
  }
});
//#############################
//Contact-container-End
//#############################