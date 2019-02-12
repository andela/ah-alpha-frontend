// eslint-disable-next-line import/no-extraneous-dependencies
import $ from "jquery";

$(".message .close")
  // eslint-disable-next-line func-names
  .on("click", function () {
    $(this)
      .closest(".message")
      .transition("fade");
  });
