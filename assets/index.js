let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "halu") {
            event.target.setAttribute("src", "assets/image/mockup.png");
            return;
        } else if (event.target.id === "lvrs") {
            event.target.setAttribute("src", "assets/image/lvrs.png");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "halu") {
            event.target.setAttribute("src", "assets/image/mockup.png");
            return;
        }
        if (event.target.id === "lvrs") {
            event.target.setAttribute("src", "assets/image/lvrs.png");
            return;
        }
    });
}