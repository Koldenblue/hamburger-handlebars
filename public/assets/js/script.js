"use strict"
const burgerBtn = $("#burger-submit");
$(document).ready(main);

/** Main controller function, runs upon page load. */
function main() {
    listen();
    $("#new-burger").focus()
}

/** Adds event listeners to page. */
function listen() {
    burgerBtn.on("click", function (event) {
        event.preventDefault();

        // get value from form and checkbox
        let newBurg = $("#new-burger").val().trim();
        let devCheck = document.getElementById("devour-check");

        // post a new burger to the api upon submittal
        $.post("/api/burgers/new", {
            burger_name: newBurg,
            devoured: devCheck.checked
        }).then(() => {
            location.reload();
        })
    });

    // gets the id from the devour button, then updates the burger with the selected id to 'devoured: true'
    $(".burger-devour-btn").on("click", function () {
        let devourId = $(this).attr("data-value");
        $.ajax({
            url: "/api/burgers/" + devourId,
            method: "PUT"
        }).then(() => {
            location.reload();
            // got to the button at the bottom of the page
            location.href = "#burger-submit";
        })
    })

    // deletes the corresponding burger from the database on click
    $(".burger-destroy-btn").on("click", function () {
        let destroyId = $(this).attr("data-value");
        destroyId = Number(destroyId)
        $.ajax({
            url: "/api/burgers/delete/" + destroyId,
            method: "DELETE",
        }).then(() => {
            location.reload();
        })
    })
}

function renderPage() {

}


function appendDrinks() {
    $(".menu-container").html("")
    
    for (let i = 0; i < 8; i++) { 
        $(".menu-container").append(`
            <div class="col-lg-6 menu-item" id="${i}">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-front">
                            <img src="${filteredDrinks[i].thumbnail}" class="menu-img" alt="">
                            <div>${filteredDrinks[i].name}</div>
                            <div class="menu-ingredients" style="margin-top: 5px">
                                ${filteredDrinks[i].recipe}
                            </div>
                        </div>
                        <div class="flip-back">
                            <img src="${filteredDrinks[i].thumbnail}" class="menu-img" alt="">
                            <div class="menu-ingredients">
                                <div>${filteredDrinks[i].recipe}</div>
                                <br>
                                <div>${filteredDrinks[i].instructions}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `)
    }
}

// todo: perhaps add flip cards to burgers
// add random description of burgers on flip
// add video background
