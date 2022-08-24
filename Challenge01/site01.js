const marvelHeroes = [
    "Ant-Man",
    "Black Panther",
    "Black Widow",
    "Captain America",
    "Doctor Strange",
    "Hawkeye",
    "Hulk",
    "Iron Man",
    "Luke Cage",
    "Moon Knight",
    "Ms. Marvel",
    "Scarlet Witch",
    "Spider-Man",
    "Thor",
    "Wasp"
]

//driver function used for display and passing values.
function findHero() {

    //implement the function findLongestString that returns the longest word.
    let lword = findLongestString(marvelHeroes);

    //used for display. no need to change
    document.getElementById("results").innerHTML = lword;

    //display all of the heroes to the page
    document.getElementById("namelist").innerHTML = marvelHeroes.join(" | ");

}

//takes an array of strings and returns the longest one. 
function findLongestString(namesArray) {

    //1. Declare a variable
    let lstring = "";

    //2. Loop over namesArray
    for (let index = 0; index < namesArray.length; index++) {
        //3. If current string longer than longest string, add to variable
        if (namesArray[index].length > lstring.length) {
            lstring = namesArray[index];
        }

    }

    return lstring;

}