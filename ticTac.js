var i;
	var status1 = document.getElementById('status');
	var images = document.getElementsByTagName('img');
	for(i=0;i<images.length;i++){
		images[i].addEventListener("click",iamgeTap);
	}

	var isGameActive = true;
	var activeUser = 0;
	/*
		o->0
		null->2
	*/
	var gameState = [2,2,2,2,2,2,2,2,2];
	var winPositions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


	function iamgeTap() {
		var imaVal = parseInt(this.getAttribute("tag"));
		
		if(isGameActive==false || gameState[imaVal]!=2)
		{
			
			return;
		}
		if(activeUser==0){
			this.src = "O.png";
			gameState[imaVal] = 0;
			status1.innerHTML = "X's turn to play"	
			activeUser =1;
		}
		else{
			this.src = "x.png";
			gameState[imaVal] = 1;
			activeUser = 0;
			status1.innerHTML = "O's turn to play"	
		}
		win();
	}

	function win() {
		let i;
		for(i=0;i<winPositions.length;i++)
		{
            let position = winPositions[i];
            if(gameState[position[0]]==gameState[position[1]] && gameState[position[1]]==gameState[position[2]] && gameState[position[1]]!=2)
            {
            	isGameActive = false;
            	if(activeUser==0)
            	{
            		status1.innerHTML = "X has won!";
            	}
            	else
            	{
            		status1.innerHTML = "O has won!";

            	}
            }
		}
	}