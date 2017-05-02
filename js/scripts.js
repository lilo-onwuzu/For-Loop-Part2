    // var icecreams = []
    // var ice1Name = $("input#icecream1").val();
    // var ice2Name = $("input#icecream2").val();
    // var ice3Name = $("input#icecream3").val();
    // icecreams.push(ice1Name);
    // icecreams.push(ice2Name);
    // icecreams.push(ice3Name);

// For Each Loop Icecream Implementation
    // icecreams.forEach(function(icecream){
    //  alert(icecream);
    // });

// For Loop Icecream Implementation
    // for (var index = 0; index < icecreams.length; index += 1){
    //   $("#flavor" + index).text(icecreams[index]);
    // };

$(document).ready(function(){
  $("form#count").submit(function(event){
    event.preventDefault();
    
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
