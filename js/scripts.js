$(document).ready(function(){
// For Loop Multiplying Arbitrary # of #s
// var blanks = [1];
  $("form#count").submit(function(event){
    event.preventDefault();

    // var icecreams = []
    // var ice1Name = $("input#icecream1").val();
    // var ice2Name = $("input#icecream2").val();
    // var ice3Name = $("input#icecream3").val();
    // icecreams.push(ice1Name);
    // icecreams.push(ice2Name);
    // icecreams.push(ice3Name);

// For Each Loop Icecream Implementation
    // icecreams.forEach(function(icecream){
    // alert(icecream);
    // });

// For Loop Icecream Implementation
    // for (var index = 0; index < icecreams.length; index += 1){
    //   $("#flavor" + index).text(icecreams[index]);
    // };

// For Loop Multiplying Arbitrary # of #s
    // var intNumber = parseInt($("input#number").val());
    //
    // for (var index = 0; index < blanks.length; index += 1){
    //   var total = intNumber * blanks[index];
    //   blanks.pop();
    //   blanks.push(total);
    //   console.log(total);
    // };

// WORD PUZZLE
// Pushing one array into another as in var blank = [1];blank.push(strSplit); will push the "length" of the strSplit as blank[0]. The modified array blank  will be [1,length of strSplit]. But the other array (strSplit) stays the same as an array.
// Pushing elements of an array one by one will modify the other array into an array with the elements of the new array included.
// || or logic "OR" demarcates the left side from the right side.

// User Interface Logic
      var enterWord = $("input#word").val();
      var strSplit = enterWord.split("");

// Business Logic
      for (var index = 0; index < strSplit.length; index += 1){
        if (strSplit[index]=="a"||strSplit[index]=="e"||strSplit[index]=="i"||
          strSplit[index]=="o"||strSplit[index]=="u"){
            strSplit[index] = "-";
        };
      };

// User Interface Logic Continued
      var outputString = strSplit.join([separator = ""]);
      console.log(outputString);
  });
});












































// Word Puzzle

// var str = $("input#word").val();
// var vowels = []
//
// vowels.forEach(function(vowel)) {
//   $('str').replace("a","-");
// }
