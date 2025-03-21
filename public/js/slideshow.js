let slideIndex = 0;
let totalSlides = document.images.length
let currentSlide = document.getElementsByClassName("slides")[0].getElementsByTagName("a")[0]

currentSlide.style.display = 'block';

function next() {
		console.log("next")
		currentSlide.style.display = 'none';
		slideIndex = slideIndex + 1;
		console.log(slideIndex)
		
		if (slideIndex >= totalSlides) {
				slideIndex = 0
		}
		currentSlide = document.getElementsByClassName("slides")[0].getElementsByTagName("a")[slideIndex]
		currentSlide.style.display = 'block';
}

function previous() {
		console.log("previous")
		currentSlide.style.display = 'none';
		slideIndex = slideIndex - 1;
		console.log(slideIndex)
		
		//if (slideIndex >= totalSlides) {
		//		slideIndex = 0
		//}
		if (slideIndex == -1) {
				slideIndex = slideIndex + totalSlides
				console.log(slideIndex)
		}
		currentSlide = document.getElementsByClassName("slides")[0].getElementsByTagName("a")[slideIndex]
		console.log(currentSlide)
		currentSlide.style.display = 'block';
		
}

