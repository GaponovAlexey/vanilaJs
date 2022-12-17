const b = $(".jq-buttons");
const b1 = $("<button class='jq-button'>green</button>");
const b2 = $("<button class='jq-button'>yellow</button>");
const b3 = $("<button class='jq-button'>red</button>");
const b4 = $("<button class='jq-button'>pink</button>");
const f = $(".jq-first");

$(document).ready(function () {
  $(b).append($(b1), $(b2), $(b3), $(b4));
  $(b1).click(() => $(f).css({ background: "#234512" }));
  $(b2).click(() => $(f).css({ background: "#266612" }));
  $(b3).click(() => $(f).css({ background: "#255512" }));
  $(b4).click(() => $(f).css({ background: "#144412" }));
});
