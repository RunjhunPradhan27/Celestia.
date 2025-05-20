document.addEventListener("DOMContentLoaded", () => {
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-bar");
const eventCards = document.querySelectorAll(".event-card");
let activeCategory = "all";
filterButtons.forEach((btn) => {
btn.addEventListener("click", () => {
activeCategory = btn.dataset.category;
  filterButtons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  filterEvents();
});
});
searchInput.addEventListener("input", () => {
filterEvents();
});
function filterEvents() {
const query = searchInput.value.toLowerCase().trim();
eventCards.forEach((card) => {
  const title = card.dataset.title.toLowerCase();
  const location = card.dataset.location.toLowerCase();
  const description = card.dataset.description.toLowerCase();
  const category = card.dataset.category.toLowerCase();
  const matchesCategory = activeCategory === "all" || category === activeCategory;
  const matchesSearch =
    title.includes(query) ||
    location.includes(query) ||
    description.includes(query);
  if (matchesCategory && matchesSearch) {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});
}
});