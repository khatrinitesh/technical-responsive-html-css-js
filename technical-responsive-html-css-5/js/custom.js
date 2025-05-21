const revealBtn = document.getElementById('revealBtn');
const bio = document.getElementById('bio');

revealBtn.addEventListener("click", () => {
  if (bio.style.display === "none") {
    bio.style.display = "block";
    revealBtn.textContent = "Hide Bio";
  } else {
    bio.style.display = "none";
    revealBtn.textContent = "Reveal Bio";
  }
});