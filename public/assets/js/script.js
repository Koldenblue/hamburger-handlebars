"use strict"
$(document).ready(main);


const burgerBtn = $("#burger-submit");

function main() {
  burgerBtn.on("click", function(event) {
    event.preventDefault();

    let newBurg = $("#new-burger").val().trim();
    console.log(newBurg);

    let devCheck = document.getElementById("devour-check");
    console.log(devCheck.checked);

    // post a new burger upon submittal
    $.post("/api/burgers/new", {
      burger_name : newBurg,
      devoured : devCheck.checked
    });
  });
}