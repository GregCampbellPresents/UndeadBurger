// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function()
{
  $(".change-eaten").on("click", function(event)
  {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");

    var newEatenState =
    {
      eaten: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id,
    {
      type: "PUT",
      data: newEatenState
    }).then
    (
      function() {
        console.log("Changed eaten to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event)
  {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger =
    {
      name: $("#burger").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers",
    {
      type: "POST",
      data: newBurger
    }).then
    (
      function() {
        console.log("Created newBurger/new burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  /*
  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });  */
});