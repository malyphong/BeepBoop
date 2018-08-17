var one = "Boop!";
var zero = "Beep!";
var phrase = "i'm sorry!";
var phrase2 = " i cannot do this!";






$(document).ready(function() {
  $("form.form-class").submit(function(event) {
    event.preventDefault();

  var input1 = parseInt($(".multiDigit").val());
  var input2 = parseInt($(".singleDigit").val());
  var inputArray = [];

  for (var i = 0; i <= input1; i += input2)
    inputArray.push(i);

    console.log(inputArray);

  });
});
