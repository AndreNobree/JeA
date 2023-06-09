document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const images = carouselContainer.querySelectorAll('img');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach(function(img) {
        img.style.display = 'none';
      });
      images[index].style.display = 'block';
    }
  
    function goToPrevImage() {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      showImage(currentIndex);
    }
  
    function goToNextImage() {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      showImage(currentIndex);
    }
  
    prevButton.addEventListener('click', goToPrevImage);
    nextButton.addEventListener('click', goToNextImage);
  
    showImage(currentIndex);
  });
  