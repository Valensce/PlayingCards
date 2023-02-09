  ////Create a variable for each card
    let card1 = 'ac';
    let card2 = '2c';
  ////and so forth, but this would be cumbersome

  ////Better to store cards in an array
     let deck = [
       'ac','2c','3c','4c','5c','6c','7c','8c','9c','10c','jc','qc','kc',
       'ad','2d','3d','4d','5d','6d','7d','8d','9d','10d','jd','qd','kd'
     ] 
  ////and so on

  ////displays the entire array in a paragraph-like structure
    console.log(deck);

  ////displays first card in array
    console.log(deck[0]);
  
     for(let i = 0; i < deck.length; i++){
       console.log(deck[i]);
    }
  ////To display each element individually as well as the entire array above, use a for loop
  ////syntax is: for(start value; condition; increment)
  ////deck.length (26) is exactly 1 more than the last card's index (25), so the condition (i < deck.length) is perfect as the upper boundary
