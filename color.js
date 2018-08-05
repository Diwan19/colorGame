var numsquares = 9;
var colors = [];
var pickedColor = pickColor();
var header=document.querySelector("#header1")
var square = document.querySelectorAll(".sq");
var resetButton = document.querySelector("#reset");
var messageDisplay = document.querySelector("#msg");
var colorDisplay = document.getElementById("colorDisplay");
var modeButtons = document.querySelectorAll(".mode");
    
init();

function init()
  {
    setupModeButton();
    setupSquares();
    reset();	
  }
    
function setupSquares(){
  for(var i=0; i< square.length; i++)
 		{
 		square[i].addEventListener("click", function(){
 		var clickedColor = this.style.backgroundColor;
 			if(clickedColor === pickedColor)
 				{
 				messageDisplay.textContent = "correct";
 				resetButton.textContent = "play again";
 				changeColors(clickedColor);
 				}
 			else
 				{
 				this.style.backgroundColor = "#efeaec";
 				messageDisplay.textContent = "try again";
 				}
 		 });	
    }
}
function setupModeButton(){
  for(var i=0;i<modeButtons.length;i++)
    {
    	modeButtons[i].addEventListener("click",function(){
    	modeButtons[0].classList.remove("selected");
    	modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");

    	this.classList.add("selected");
    	
      if(this.textContent === "easy")
    		{
    			numsquares=3;
    		}
    	else if(this.textContent === "medium")
    		{
    			numsquares=6;
    		}
      else
        {
          numsquares=9;
        }
    	reset();
    	});
    }	
}
    
function reset(){
    	
    colors = generateRandomColors(numsquares);
 		pickedColor = pickColor();
 		colorDisplay.textContent = pickedColor;
 		resetButton.textContent = "New Color"
 		messageDisplay.textContent = "";
 		header1.style.background="steelblue";
	 	for(var i = 0; i<square.length; i++)
 		{
 			if(colors[i])
 			{
 			square[i].style.display="block";
 			square[i].style.backgroundColor = colors[i];			
 			}
 			else
 			{
 			square[i].style.display="none";
 			}
 	
 		}
  }	
    
  
resetButton.addEventListener("click", function(){
  	reset();
 	});

 
function changeColors(color)
{
	for(var i = 0; i<colors.length; i++)
	{
		square[i].style.backgroundColor = color;
		header.style.backgroundColor = color;
  }
}

function pickColor()
 {
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random]
 }
  
 
 function generateRandomColors(num)
 {
 	var arr = []
 	
 	for(var i = 0; i < num; i++)
 	{
 		arr.push(randomColor());
 	}
 	return arr;
  }
 
 function randomColor()
 {
 	//select rgb values from 0-255
 	var r = Math.floor(Math.random() * 256);
 	var g = Math.floor(Math.random() * 256);
 	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")" ;
 }	


