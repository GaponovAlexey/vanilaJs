document.querySelector("h1").innerHTML = `<div>name</div>`;

jQuery(document).ready(function () {
  $("h1").click(function() {
    $(this).hide()
  })

});
