"use strict"
$(document).ready(main);


const burgerBtn = $("#burger-submit");

function main() {
  burgerBtn.on("click", function(event) {
    event.preventDefault();

    let newBurg = $("#new-burger").val().trim();
    console.log(newBurg);

    let devCheck = document.getElementById("devour-check").getAttribute("devour-check");
    console.log(devCheck)
    // post a new burger upon submittal
    $.ajax({
      url: "localhost:8080/api/burgers/new",
      method: "POST"
    }).then((response) => {
      console.log(response)
    })
  });
}
