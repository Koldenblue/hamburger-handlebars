"use strict"
const burgerBtn = $("#burger-submit");
$(document).ready(main);

/** Main controller function, runs upon page load. */
function main() {
    listen();
}

/** Adds event listeners to page. */
function listen() {
    burgerBtn.on("click", function (event) {
        event.preventDefault();

        // get value from form and checkbox
        let newBurg = $("#new-burger").val().trim();
        console.log(newBurg);
        let devCheck = document.getElementById("devour-check");
        console.log(devCheck.checked);

        // post a new burger to the api upon submittal
        $.post("/api/burgers/new", {
            burger_name: newBurg,
            devoured: devCheck.checked
        }).then(() => {
            location.reload();
        })
    });

    $(".burger-devour-btn").on("click", function() {
        console.log("ckucclkd")
        let devourId = $(this).attr("data-value")
        console.log(devourId);
        $.ajax({
            url: "/api/burgers/" + devourId,
            method: "PUT"
        }).then(() => {
            location.reload();
        })
    })
}

function renderPage() {

}
