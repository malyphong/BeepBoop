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
      // skips 0, 2, 4, 5, 7,// numbers that are not 1 or divisible by 3
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
