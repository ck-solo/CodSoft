const slides = document.querySelectorAll(".slide");
var counter = 0;
var hasNext = true;
var hasPrev = true

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
 
const goNext =()=>{ 
  if(hasNext){
    counter++;
    slideImage()
    hasNext = false
  }
    
}
const goPrev =()=>{
     if(hasPrev){
       counter--;
       slideImage()
       hasPrev = false
      }
}
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};


