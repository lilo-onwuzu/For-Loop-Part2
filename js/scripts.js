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

// For Each Icecream Implementation
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
var enterWord = $("input#word").val();
var res = enterWord.split("");
var blank = [];

blank.push(res);
 alert(blank);
 for (var index = 0; index <= blank.length; index++){
      console.log(index);
    if (blank[index] === "a"||"e"||"i"||"o"||"u"){
      console.log("found vowel");
    } else {
        alert("hxxx");
    };
  };
});
});












































// Word Puzzle

// var str = $("input#word").val();
// var vowels = []
//
// vowels.forEach(function(vowel)) {
//   $('str').replace("a","-");
// }
