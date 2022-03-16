   
       const choices = ["pedra","papel","tesoura"];


       function setPlay(selection){
           let computerSelection = computerPlay(choices);

           round(selection,computerSelection);
       }
      
                   
       function computerPlay(arr){
            const randomIndex = Math.floor(Math.random() * arr.length);
            const item = arr[randomIndex];
            
            return item;
       }

       
       function round (playerSelection, computerSelection){
            if (playerSelection === computerSelection){
                alert("Empate")
            }
            else if(playerSelection == 'pedra'){
                if(computerSelection == 'papel'){
                    alert("Computer won");
                } else {
                    alert("Player won");
                }
            }
            else if(playerSelection  == 'tesoura'){
                if(computerSelection == 'pedra'){
                    alert ('Computer Won');                
                }else{
                        alert('Player Won');
               
                }
            }
            else if(playerSelection  == 'papel'){
                if(computerSelection == 'tesoura'){
                alert('Computer Won');                
                }else{
                alert('Player Won');               
            }
        }
    }

  


       