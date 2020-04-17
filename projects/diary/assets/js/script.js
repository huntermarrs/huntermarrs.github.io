$(function() {

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.popup').fadeIn();
		$('.close').fadeIn();
    } else {
        $('.popup').fadeOut();
		$('.close').fadeOut();
    }

});
$(document).mouseup(function (e){

	var container = $(".popup");

	if (!container.is(e.target) && container.has(e.target).length === 0){

		container.fadeOut();

	}
	$( ".close" ).click(function() {
  $( ".popup" ).remove();
  $( ".close" ).remove();
});
$('.open-lightbox').click(function() {
  $('body').addClass('lightbox-is-open');
});
$('.close-lightbox').click(function() {
  $('body').removeClass('lightbox-is-open');
});
});
});
const lightBoxContainer=document.querySelector(".lightbox");
const lightboxImage=document.querySelector(".lightbox-img");
const counter=document.querySelector(".lightbox-counter");
const prevButton=document.querySelector(".prev");
const nextButton=document.querySelector(".next");
const lightboxText=document.querySelector(".lightbox-text");
const portfolioItems=document.querySelector(".portfolio-items").children;
console.log(portfolioItems);
let index;
let imgSrc;

lightBoxContainer.addEventListener("click",function(event){
	if(event.target!==lightboxImage && event.target!==prevButton && event.target!==nextButton){
		lightBox();
	}
})
for(let i=0; i<portfolioItems.length; i++){
	portfolioItems[i].querySelector("h2").addEventListener("click",function(){
		index=i;
		changeImage();
		lightBox();
	})
}
function next(){
	if(index==portfolioItems.length-1){
		index=0
	}
	else{
		index++;
	}
	changeImage();
	}

function prev(){
if (index==0){
	index=portfolioItems.length-1;
}
	else{
		index--;
	}
	changeImage();
}

function lightBox(){
	lightBoxContainer.classList.toggle("open");
}
function changeImage(){
	imgSrc=portfolioItems[index].querySelector("img").getAttribute("src");
	lightboxImage.src=imgSrc;
	counter.innerHTML=(index+1)+" of "+ portfolioItems.length;
	lightboxText.innerHTML=portfolioItems[index].querySelector(".hidden-lightbox-caption").innerHTML;
}
