document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".image");
  
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Remove "active" class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });
  
            // Add "active" class to the clicked button
            button.classList.add("active");
  
            const filterValue = button.getAttribute("data-filter");
  
            galleryItems.forEach(function (item) {
                const itemFilters = item.classList;
  
                if (filterValue === "all" || itemFilters.contains(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
  });