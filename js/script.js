/* =========================================================
   VINI JOB ALERTS - CATEGORY PAGE SEARCH
   ========================================================= */

   document.addEventListener("DOMContentLoaded", function () {

    console.log("Vini Job Alerts website loaded successfully.");

    const searchInput = document.getElementById("categorySearch");
    const searchButton = document.getElementById("categorySearchButton");
    const cards = document.querySelectorAll(".category-card");
    const noResult = document.getElementById("noResult");

    function performSearch() {

        if (!searchInput) {
            return;
        }

        const searchText = searchInput.value
            .toLowerCase()
            .trim();

        let visibleCards = 0;

        cards.forEach(function (card) {

            const cardText = card.innerText.toLowerCase();

            if (searchText === "" || cardText.includes(searchText)) {

                card.style.display = "";

                visibleCards++;

            } else {

                card.style.display = "none";
            }

        });

        if (noResult) {

            if (visibleCards === 0 && searchText !== "") {

                noResult.style.display = "block";

            } else {

                noResult.style.display = "none";
            }
        }
    }

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            performSearch();

        });
    }

    if (searchInput) {

        searchInput.addEventListener("keyup", function (event) {

            if (event.key === "Enter") {

                performSearch();

            }

            if (searchInput.value.trim() === "") {

                performSearch();

            }

        });
    }

});