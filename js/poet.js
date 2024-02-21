// JavaScript code to handle fullscreen display
document.addEventListener("DOMContentLoaded", function() {
    var wrapper = document.getElementById("wrapper");
    var container = document.getElementById("container");
    var fullscreenOverlay = document.getElementById("fullscreen-overlay");
    var fullscreenContent = document.getElementById("fullscreen-content");
    var closeFullscreenBtn = document.getElementById("close-fullscreen-btn");
  
    // Attach click event to each content div
    var contentDivs = container.querySelectorAll(".content");
    contentDivs.forEach(function(div) {
      div.addEventListener("click", function() {
        var title = this.querySelector("h2").textContent;
        var poetry = this.querySelector("p").textContent;
        fullscreenContent.innerHTML = "<h2>" + title + "</h2><p>" + poetry + "</p>";
        wrapper.classList.add("blurred"); // Add blur effect
        fullscreenOverlay.style.display = "flex";
      });
    });
  
    // Close fullscreen overlay
    closeFullscreenBtn.addEventListener("click", function() {
      fullscreenOverlay.style.display = "none";
      wrapper.classList.remove("blurred"); // Remove blur effect
    });
  });