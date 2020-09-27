function fetchBook() {
  console.log("==========book valuw ======");
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
