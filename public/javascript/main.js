/* eslint-disable */

var join = document.getElementById("join");
var joinBoardInput = document.getElementById("board_name");

var joinTable = function() {
  if (joinBoardInput.value) {
    var boardName = joinBoardInput.value;
    window.location.href = "/board/" + boardName;
  }
};

joinBoardInput.addEventListener("click", function(event) {
  event.stopPropagation();
});

joinBoardInput.addEventListener("keypress", function(event) {
  var key = event.which || event.keyCode;
  if (key === 13) {
    joinTable();
  }
});

join.addEventListener("click", function(event) {
  joinTable();
});
