const optionsBox = document.querySelector(".options");
const searchBox = document.querySelector(".search input");
const optionsList = document.querySelectorAll(".option");

function onSelect() {
  optionsBox.classList.toggle("active");
  selected.classList.remove("error")
  searchBox.value = "";
  filterList("");

  if (optionsBox.classList.contains("active")) {
    searchBox.focus();
  }
}

optionsList.forEach(item => {
  item.addEventListener("click", () => {
    selected.innerHTML = item.querySelector("label").innerHTML;
    selected.dataset.id = item.querySelector("label").getAttribute('for')
    optionsBox.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = inputValue => {
  inputValue = inputValue.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(inputValue) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};