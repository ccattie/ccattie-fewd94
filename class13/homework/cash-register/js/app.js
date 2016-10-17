$(function(){
  var total = 0;
  
  $("#entry").submit(function(event){
    event.preventDefault();

    var enteredAmount = $("#newEntry").val();

    var parsedAmount = parseFloat(enteredAmount);

    total = total + parsedAmount;

    $("#newEntry").val("");

    $("#entries").append("<tr><td></td><td>$" + parsedAmount.toFixed(2) + "</td></tr>")

    $("#total").text("$" + total.toFixed(2));
  });
});
