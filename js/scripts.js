var numberArray = [];

 var result = function(userInput) {
   var newArray = [];
   for(var index = 0; index <= userInput; index ++)
    if (index % 3 === 0 && index > 0) {
      newArray.push("I'm sorry, Dave. I cannot do that.");
      console.log(newArray);
    } else if (index === 1 || numberArray.toString().includes('1')) {
      newArray.push("Boop!")
      console.log(newArray);
    } else if (index === 0 || numberArray.toString().includes('0')) {
      newArray.push("Beep!");
      // 10 and 20 are still not changed"
    } else {
      newArray.push(index);
    }
  return newArray.join("");
  console.log(newArray);
}
$(document).ready(function() {
  $("form.form-class").submit(function(event) {
    event.preventDefault();

   var input = parseInt($(".inputNumber").val());
   var resultOutput = result(input);

     $("#output").text(resultOutput);
   });
});
