function fetchBook() {
  $.ajax({
    type: "POST",
    url: `/fetchBook`,
    async: false,
    success: function (data) {
      if (data.status === 200) {
        $.confirm({
          title: "Info!",
          content: "Record successfully fetched",
          buttons: {
            ok: function () {},
          },
        });
      }
    },
  });
}

function backToHome() {
  window.location = "http://localhost:1300/";
}
