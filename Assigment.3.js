//01.ractice comparing different values
function compareEquality(a, b) {
    if (a === b) {
      return "Equal";
    } return "Not Equal";
  }
  compareEquality(10, "10");
  
  //02.Comparison with the Inequality Operator
  function testNotEqual(val) {
      if (val != 99) {
        return "Not Equal";
      }
      return "Equal";
    }
    testNotEqual(10);
  
    //03.Comparison with the Strict Inequality Operator
    function testStrictNotEqual(val) {
      if (val !== 17) {
        return "Not equal";
      } return "Equal";
    }
    testStrictNotEqual(10);
  
    //04.Comparison with the Greater Than Operator
    function testGreaterThan(val) {
      if (val > 100) {
        return "Over 100";
      } if (val > 10) {
        return "Over 10";
      } return "10 or under";
    }
    testGreaterThan(10);
  
    //05.Comparison with the Greater Than Or Equal To Operator
    function testGreaterOrEqual(val) {
      if (val >= 20) return "20 or Over";
      if (val >= 10) return "10 or Over";
      return "Less than 10";
    }
    
    //06.Comparison with the Less Than Or Equal To Operator
    function testLessOrEqual(val) {
      if (val <= 12) return "Smaller Than or Equal to 12";
      if (val <= 24) return "Smaller Than or Equal to 24";
      return "More Than 24";
    }
  
  //07. Comparisons with the Logical And Operator
  function testLogicalAnd(val) {
      if (val <= 50 && val >= 25) {
        return "Yes";
      } return "No";
    }
    testLogicalAnd(10);
  
  //08.Comparisons with the Logical Or Operator
  function testLogicalOr(val) {
  if (val < 10 || val > 20) {
      return "Outside";
    }
  }
  
  //09.Introducing Else Statements
  function testElse(val) {
      var result = "";
      if (val > 5) {
        result = "Bigger than 5";
      } else {
        result = "5 or Smaller";
      } return result;
    }
    testElse(4);
  
  //10.Introducing Else If Statements
  function testElseIf(val) {
      if (val > 10) {
        return "Greater than 10";
      } else if (val < 5) {
        return "Smaller than 5";
      } else {
        return "Between 5 and 10";
      }
    }
    testElseIf(7);


// 11.Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
    
  }
  testElseIf(10);
console.log(testElseIf);
// 12. Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  // Change this value to test
  console.log(orderMyLogic(4));
// 13.Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
      return "Tiny"
    } else if (num < 10) {
      return "Small"
    } else if (num < 15) {
      return "Medium"
    } else if (num < 20) {
      return "Large"
    } else {
      return "Huge"
    }
  }
  
  console.log(testSize(19));
// 14.Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }
}
console.log(golfScore(4, 7));
// 15.Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
  
    return answer;  
  }
  console.log(caseInSwitch(2));
// 16.Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
    }
      return answer;  
    }
  console.log(switchOfStuff("b"));
// 17.Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
    return answer;  
  }

  console.log(sequentialSizes(4));
// 18.Replacing If Else Chains with Switch
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    
    switch(val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }
    return answer;  
  }
  chainToSwitch("bob");
// 19. Returning Boolean Values from Functions
function isLess(a, b) {
    return a < b;
  }
  console.log(isLess(40, 12));
// 20.Return Early Pattern for Functions
Setup
function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  console.log(abTest(-2,2));

