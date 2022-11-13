window.onload = function () {
  const filters = document.querySelectorAll(".filters__item");
  console.log(filters);
  const galleryTypes=["gallery_all","gallery_turnkey-website","gallery_development","gallery_design"];
  const gallery=document.querySelector(".gallery");
  let currentGalleryType="gallery_all";
  let filter =document.querySelector(".filters__item_active");
  //Фильтры - всё, сайт под ключ, разработка, дизайн
  filters.forEach((element,index) => {
    element.addEventListener("click", (e) => {
      filter.classList.toggle("filters__item_active");
      e.target.classList.toggle("filters__item_active");
      filter=e.target;
      gallery.classList.remove(currentGalleryType);
      gallery.classList.add(galleryTypes[index]);
      currentGalleryType=galleryTypes[index];
      
    });
  });
};
const questions=document.querySelectorAll(".question");
let opened_question=null;
questions.forEach((element) => {
   element.addEventListener("click", (e) => {
      if(opened_question!=null){
        opened_question.classList.replace("question_opened","question_closed");
        const img=opened_question.querySelector("img");
        img.style.transform="none";
        
      }
      if(e.currentTarget!=opened_question){
        e.currentTarget.classList.replace("question_closed","question_opened");
        opened_question=e.currentTarget;
        const img=e.currentTarget.querySelector("img");
        img.style.transform="rotate(45deg)";
      }else{
        opened_question=null;
      }
     

      
    });

 
});
const countPrice=document.querySelector(".count-price");
countPrice.addEventListener("submit", (e)=>{
  e.preventDefault();
});
let countPriceData=[null,null];
const countPriceWorkType=document.querySelector(".count-price__work-type");
const countPriceProjectSize=document.querySelector(".count-price__project-size");
countPriceWorkType.addEventListener('change', ()=>{
  countPriceWorkType.classList.add("select_choosen");
  countPriceProjectSize.style.opacity="1";
  countPriceProjectSize.removeAttribute("disabled");
  countPriceData[0]=countPriceWorkType.options[countPriceWorkType.selectedIndex].text;

});
countPriceProjectSize.addEventListener('change', ()=>{
  countPriceProjectSize.classList.add("select_choosen");
  countPriceData[1]=countPriceProjectSize.options[countPriceProjectSize.selectedIndex].text;
});

const checkbox=document.querySelector("#checkbox");
checkbox.addEventListener("click",(e)=>{
if(!checkbox.checked){
 //countPriceEval.style.marginTop="-360px"; -не знал, надо ли при снятии чекбокса убирать подсчет, но если раскомментировать, то это будет работать
}
});
const countPriceEval=document.querySelector(".count-price-eval");
const countPriceButton=document.querySelector(".count-price__button");
countPriceButton.addEventListener("click", (e)=>{
if(countPriceData[0]!=null&&countPriceData[1]!=null&&checkbox.checked){

countPriceEval.style.marginTop="-8px";
}

});






// Сайт под ключ 1 и 6
// Разработка 4
// Дизайн 2 3 5
