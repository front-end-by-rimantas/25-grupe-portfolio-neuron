function search(button, popup, closebtn) {

  const searchBtn = document.querySelector(button);
  const searchEngine = document.querySelector(popup);
  const closeBtn = document.querySelector(closebtn);

  searchBtn.onclick = function () {
    searchEngine.style.display = "block";
  }

  closeBtn.onclick = function () {
    searchEngine.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == searchEngine) {
      searchEngine.style.display = "none";
    }
  }

}

export { search };
