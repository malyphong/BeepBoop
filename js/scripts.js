var zero = "Beep!";
var phrase = "I'm sorry, Dave. I cannot do that";
var numberArray = [];


 var result = function(input) {
   for(var index = 0; index <= input; index ++)
    (numberArray).push(index);
    if (input % 3 === 0) {
      return phrase;
    } else if (numberArray.toString().includes('1')) {
      numberArray.push("Boop!")
      console.log(numberArray);
    } else if (numberArray === 0) {
      return zero;
  }
}
$(document).ready(function() {
  $("form.form-class").submit(function(event) {
    event.preventDefault();

   var input = parseInt($(".inputNumber").val());
   var resultOutput = result(input);

     $("#output").text(resultOutput);

   });
});
