const Gameboard = {
  arr: [['','',''],['','',''], ['','','']],
  marking: function(player,choiceNumber) {
      const row  = Math.floor((choiceNumber-1) / 3)
      const column = (choiceNumber - 1) % 3 
      if(this.arr[row][column] == '') {
    this.arr[row][column] = player.symbol;
     };

    },
     trackSymbol(symbol,player1, player2) {
       if (symbol == player1.symbol) return player1
       else return player2
     },
     checkArrFull(arr) {
        for(let i = 0; i < 3; i++) {
            for( let j = 0; j < 3; j++) {
                return  this.arr[i][j] == ''? false: true;
            }
        }
     },

    giveResult:  function(player1,player2) {
      
        let rowCount = 0, columnCount = 0, diagonalCount = 0;

        for(let i = 0; i < 3; i++) {
            for(let j = 1; j < 3; j++) {
                 if (this.arr[i][j] == this.arr[i][j - 1])
                 rowCount++
                else rowCount = 0;
                 if (rowCount == 2) return this.trackSymbol(this.arr[i][j],player1,player2) 

               if ( this.arr[j][i] == this.arr[j - 1][i])
                columnCount++;
            else rowCount = 0;
               if(columnCount == 2) return this.trackSymbol(this.arr[i][j],player1,player2);
            
            }

        }
       for(let i = 1; i < 3; i++) {

        if (this.arr[i][i] = this.arr[i-1][i-1])
          diagonalCount++;
        else diagonalCount = 0;
        if (diagonalCount == 2) return this.trackSymbol(arr[i][i],player1,player2)
       }
       if (this.arr[0][2] === this.arr[1][1] && this.arr[1][1] === this.arr[2][0]) {

        return this.trackSymbol(this.arr[1][1], player1, player2);
      }
      if(this.checkArrFull) {
          return console.log('this is a draw'); 
      }
    }
}
  function Player(name, marker) {
    let score = 0;
      const getScore = function() {
        return score
      }

      return {
        getScore,
          name, 
          symbol: marker,
        }
    }

    const player1 = Player('noBody', 'X');
    const player2 = Player('Master', 'O');
    Gameboard.marking(player1, 1);
    Gameboard.marking(player2,2);
    Gameboard.marking(player1,3);
    Gameboard.marking(player2,4);
    Gameboard.marking(player2,5);
    Gameboard.marking(player1,6);
    Gameboard.marking(player1,7);   
    Gameboard.marking(player1,8);
    Gameboard.marking(player2,9);     
   console.log(Gameboard.arr);
   console.log(Gameboard.giveResult(player1,player2))
// an object name control to works with it method instead of polluting global scope.
const control = (function() { // IIFE
    const resetGameboard = (Gameboard) => {// array function or function()?
         Gameboard.arr = [['','',''],['','',''], ['','','']]
    }
    const scoring = () => { // logic for scoring 

    } 
    const displayWinner = () => {
        //logic for displaying
    }
})();
