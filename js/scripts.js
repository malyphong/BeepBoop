var zero = "Beep!";
var one = "Boop!";
var phrase = "I'm sorry, ";
var phrase2 = " I am afraid I cannot do this";



var result = function(numericalInput) {
  if (numericalInput % 3 === 0) {
    return (phrase + userName + phrase2);
  } else {
    return true;
  }
}



$(document).ready(function() {
  $("form.form-class").submit(function(event) {
    event.preventDefault();
  var userName = ('.userName');
  var input = parseInt($(".userInput").val());
  var resultOutput = result(input);


    $("ul.ulOutput").append("<li>" + resultOutput + "</li>");

  });
});
