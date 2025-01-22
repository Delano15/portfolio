let mouseX = 0,
  mouseY = 0; // Actual mouse position
let glowX = 0,
  glowY = 0; // Glow element position

// Update mouse position on mousemove
window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// Smoothly animate the glow position
function animateGlow() {
  const mouseDiv = document.querySelector(".mouseglow");
  if (!mouseDiv) return;

  // Add delay by interpolating positions
  glowX += (mouseX - glowX) * 0.07; // 0.1 controls the speed of delay
  glowY += (mouseY - glowY) * 0.07;

  // Update glow position
  mouseDiv.style.transform = `translate(${glowX - 50}px, ${glowY - 50}px)`; // Centering fix

  requestAnimationFrame(animateGlow); // Keep the animation loop going
}

// Start the animation loop
animateGlow();
