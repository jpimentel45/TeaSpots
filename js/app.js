$(document).ready(function() {
  $(".container").hide();
  $("#welcome").show();
  //click events for nav bar
  $("#links").click(function(e) {
    $(".container").hide();
    show: $(`#${e.target.dataset.targetid}`).show();
  });
  //click event for buttonz
  $(".container2").hide();
  $("#buttonz").click(function(e) {
    $(".container2").hide();
    show: $(`#${e.target.dataset.targetid}`).show(e);
  });
});
