const shareBtn = document.getElementById('share');
const shareIcon = document.getElementById('share-icon');
const shareContainer = document.querySelector('.tooltip');

shareBtn.addEventListener("click", () => {
  shareContainer.classList.toggle("hidden");

  shareBtn.classList.toggle("clicked");

  shareIcon.classList.toggle("color")
})


