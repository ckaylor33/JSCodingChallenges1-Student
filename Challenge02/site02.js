//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
function checkBrackets() {

    //change testbrackets here. makes easier to change in one place.
    let testbrackets = testbrackets1;

    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalancedB(testbrackets);

    //used for display no need to change
    let msg = "";

    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;

}

//takes an array of strings and returns the longest one. 
function isBalanced(brackets) {

    //1. declare an array
    let stack = [];

    //2. loop over string
    for (let index = 0; index < brackets.length; index++) {
       
        let item = brackets[index];
        
        //3. is item an open bracket?
        if(item == '(' || item == '[' || item == '{'){
            stack.push(item);
            continue;
        } 
        //4. is item a closed bracket?
        else if (item == ')' || item == ']' || item == '}'){

            //so I don't pop off of an empty array
            if(item.length == 0){
                return false;
            }

            //5. compare closed bracket to open bracket in stack
            check = stack.pop();
            switch (item) {
                case ')':
                    if(check != '('){
                        return false;
                    }
                    break;
                case ']':
                    if(check != '['){
                        return false;
                    }
                    break;
                case '}':
                    if(check != '{'){
                        return false;
                    }
                    break;
                default:
                    break;
            }
        }   
    }

//if any items in stack then return false
return stack.length == 0;

}

function isBalancedB(brackets){
    let stack = [];

    //all possible iterations of open brackets
    let openBrackets = ["(", "{", "["];
    //all possible iterations of close brackets
    let closeBrackets= [")", "}", "]"];

    //object - key value pairs to look up with an open bracket, then get corresponding closing bracket
    let balancedBrackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };

    //loop over
    for (let index = 0; index < brackets.length; index++) {
        let item = brackets[index];
        if(openBrackets.includes(item)){
            stack.push(item);
            continue;
        } else if(closeBrackets.includes(item)){
            if(stack.length == 0){
                return false;
            }

            check = stack.pop();
            
            if(balancedBrackets[check] != item){
                return false;
            }
        }
        
    }

    return stack.length == 0;
}