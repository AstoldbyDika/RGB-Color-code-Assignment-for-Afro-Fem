const rElement = document.getElementById("r");
const gElement = document.getElementById("g");
const bElement = document.getElementById("b");
const colorDisplayElement = document.getElementById("color-display")

const levels = Array.from (document.getElementsByClassName("mode"));
const squares = Array.from (document.getElementsByClassName("square"));

let selectedLevelButton = levels.find((level) => {
    const classlist = Array.from(level.classList)
   return classlist.includes("selected")
});

let gamelevel = selectedLevelButton.innerHTML;

levels.forEach(level=> {
    level.addEventListener("click", function () {
levels.forEach(mode => mode.classList.remove("selected"));
this.classList.add("selected");

gamelevel = this. innerHTML;
setTilesAccordingToLevel(gamelevel)
 });
}); 
function setTilesAccordingToLevel(currentGameLevel) {
    if (currentGameLevel == "Easy") {
    //set three squares on the screen
    } else if (currentGameLevel == "Hard") {
        //set 6 squares on the screen
    }
}
//Attempt to make all the square have background color: rgb(200, 55, 200)
const startButton = document.getElementById("reset");

startButton.addEventListener("click",function() {
    this.innerHTML = "New Colors"
    // assign each individual square a background color
    for (let i = 0; i < squares.length; i = i + 1) {
        const red = Math.floor(Math.random() * 250);
        const green = Math.floor(Math.random() * 250); 
        const blue = Math.floor(Math.random() * 250);

        const rgbString = "rgb(" + red + "," + green + "," + blue + ")";

        const square = squares[i];

        square.dataset.rgb_value = JSON.stringify([red, green, blue]);
        square.style.backgroundColor = rgbString;   
  }

  // assign the Header a random rgb value from one of the square values.
  const randomSquareIndex = Math.floor(Math.random() * 6);
  const headerColorSquare = squares[randomSquareIndex];
    setHeaderRgbBackgroundColor(headerColorSquare);
  }); 

    function setHeaderRgbBackgroundColor (squareElement) {
    const setHeaderelementbackgroundcolor = (rgbValues, element) => {
        const [r, b, g] = rgbValues;
        const rgbString = 'rgb(${r}, ${g}, ${b})';
        element.style.backgroundColor = rgbString; 
    element.innerHTML = rgbValues.find((rgbValue) => {
    return rgbValue > 0;
    });
    };
    const rgbString = squareElement.dataset.rgb_value;
    colorDisplayElement.dataset.rgb_value = rgbString;
    const [red, green, blue] = JSON.parse(rgbString);

const redBackground = [red, 0, 0]; 
const greenBackground = [0, green, 0]; 
const blueBackground = [0, 0, blue]; 

setHeaderelementbackgroundcolor(redBackground, rElement);
setHeaderelementbackgroundcolor(greenBackground, gElement);
setHeaderelementbackgroundcolor(blueBackground, bElement);
};

// add event listner so to each square, so that it either disappears or changes color. 

squares.forEach((square) => { 
    square.addEventListener("click",  function () {
const headerRgbvalue = colorDisplayElement.dataset.rgb_value;
const squareRgbvalue = this.dataset.rgb_value;  

if (headerRgbvalue == squareRgbvalue) {
setSquareBackgroundColorafterWin(headerRgbvalue); 
} else { 
this.classList.add("hidden");
}
    });
});

function setSquareBackgroundafterWin(headerRgbString) {
    const [r, g, b] = JSON.parse(headerRgbString); 
    const rgbString = 'rgb(${r}, ${g}, ${b})';

    squares.forEach(function (sq) {
            sq.classList.remove("hidden");
            sq.style.backgroundColor = rgbString;
        });
}