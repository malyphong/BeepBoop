var zero = "Beep!";
var one = "Boop!";
var phrase = "I'm sorry, Dave. I cannot do that";
var numberArray = [];


 var result = function(input) {
  if (input % 3 === 0) {
    alert("divisible");
  } else if (input === 1) {
    return one;
  } else if (input === 0) {
    return zero;
  }
}


 $(document).ready(function() {
  $("form.form-class").submit(function(event) {
    event.preventDefault();

   var input = parseInt($(".inputNumber").val());
   var resultOutput = result(input);

     $("#output").append(resultOutput);

   });
});
