document.addEventListener("DOMContentLoaded", function() {
  const photos = document.querySelectorAll(".photo");
  let currentIndex = 0;

   // Add event listener for keyboard key press
   document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) { // Left arrow key
      navigatePrevious();
    } else if (event.keyCode === 39) { // Right arrow key
      navigateNext();
    }
  });
  // Add click event listener to each photo to display fullscreen
  photos.forEach((photo, index) => {
    photo.addEventListener("click", () => {
      currentIndex = index;
      displayFullScreen(photo.src, currentIndex);
    });
  });

  // Close fullscreen when close button is clicked
  document.getElementById("close-fullscreen-btn").addEventListener("click", closeFullScreen);

  // Add event listeners for swipe gestures on mobile devices
  // let startX = 0;
  // let startY = 0;
  // let endX = 0;
  // let endY = 0;

  // document.getElementById("fullscreen-image").addEventListener("touchstart", touchStart, false);
  // document.getElementById("fullscreen-image").addEventListener("touchmove", touchMove, false);

  // function touchStart(event) {
  //   startX = event.touches[0].clientX;
  //   startY = event.touches[0].clientY;
  // }

  // function touchMove(event) {
  //   endX = event.touches[0].clientX;
  //   endY = event.touches[0].clientY;
  // }

  // document.getElementById("fullscreen-image").addEventListener("touchend", function(event) {
  //   if (endX < startX) {
  //     navigateNext();
  //   } else if (endX > startX) {
  //     navigatePrevious();
  //   }
  // });

  // Navigate to the previous photo
  document.getElementById("prev-photo-btn").addEventListener("click", navigatePrevious);

  // Navigate to the next photo
  document.getElementById("next-photo-btn").addEventListener("click", navigateNext);
});

// Function to navigate to the previous photo
function navigatePrevious() {
  const photos = document.querySelectorAll(".photo");
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  displayFullScreen(photos[currentIndex].src, currentIndex);
}

// Function to navigate to the next photo
function navigateNext() {
  const photos = document.querySelectorAll(".photo");
  currentIndex = (currentIndex + 1) % photos.length;
  displayFullScreen(photos[currentIndex].src, currentIndex);
}

// Function to display image in fullscreen
function displayFullScreen(imageSrc, index) {
  const fullscreenImage = document.getElementById("fullscreen-image");
  fullscreenImage.src = imageSrc;
  currentIndex = index;
  document.getElementById("fullscreen-overlay").style.display = "block";
  document.body.style.overflow = "hidden"; // Hide scrollbar
  fullscreenImage.setAttribute("data-index", currentIndex);
}

// Function to close fullscreen
function closeFullScreen() {
  document.getElementById("fullscreen-overlay").style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrollbar
}
// Function to navigate to the previous photo with smooth sliding animation
function navigatePrevious() {
  const photos = document.querySelectorAll(".photo");
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updateFullscreenImage(-100); // Slide to the left (previous)
}

// Function to navigate to the next photo with smooth sliding animation
function navigateNext() {
  const photos = document.querySelectorAll(".photo");
  currentIndex = (currentIndex + 1) % photos.length;
  updateFullscreenImage(100); // Slide to the right (next)
}

// Function to update the fullscreen image source and apply sliding animation
function updateFullscreenImage(translateXValue) {
  const fullscreenImage = document.getElementById("fullscreen-image");
  fullscreenImage.style.transform = `translate(-50%, -50%) translateX(${translateXValue}%)`;
  setTimeout(() => {
    fullscreenImage.src = document.querySelectorAll(".photo")[currentIndex].src;
    fullscreenImage.style.transform = "translate(-50%, -50%)"; // Reset transform
  }, 300); // Delay to match the transition duration
}




