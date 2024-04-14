$(document).ready(function () {
  $(".event").on("click", function () {
    var year = $(this).data("year");
    scrollToYear(year);
  });

  function scrollToYear(year) {
    var timelineWidth = $("#timeline").width();
    var eventYear = parseInt(year);
    var totalYears = 2024 - 2000; // Assuming the current year is 2024 and the timeline starts from 2000
    var position = ((eventYear - 2000) / totalYears) * timelineWidth;

    $("#timeline").animate({ scrollLeft: position }, "slow");
  }
});
