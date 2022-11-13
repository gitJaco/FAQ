// Grab DOM elements
const faqQuestion = document.querySelectorAll(".faq_question")
const image = document.querySelector(".image_element")

//Varibles
let activeIndex = 0;
const breakPoint = 768;

//Poner clase activa al index activo
faqQuestion[activeIndex].classList.add("active")

// Listen clicks in questions

faqQuestion.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Actualizar index
    faqQuestion[activeIndex].classList.remove("active")
    activeIndex = index
    faqQuestion[activeIndex].classList.add("active")
    
  })
})

//Functions

function changeImage() {
  // if (window.innerWidth > 768) {
    // image.src = "/images/illustration-woman-online-desktop.svg"
  // } else {
    // image.src ="/images/illustration-woman-online-mobile.svg"
  // }

  image.src = `images/illustration-woman-online-${(window.innerWidth > breakPoint) ? "desktop" : "mobile"}.svg`
}

//addEventListener when resize

window.addEventListener("resize", changeImage)

//When load
window.onload = changeImage



