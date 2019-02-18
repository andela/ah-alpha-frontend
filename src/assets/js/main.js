import $ from "jquery";

$(".message .close")
  .on("click", function () {
    $(this)
      .closest(".message")
      .transition("fade");
  });
