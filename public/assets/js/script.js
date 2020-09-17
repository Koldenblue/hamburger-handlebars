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
            // to avoid reloading the page every time, this could be refactored to simply replace and append the div
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


// todo: perhaps add flip cards to burgers
// add random description of burgers on flip
// add video background
// correct borders?
// instead of reloading page every time, append div?
