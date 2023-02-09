    let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    let faces = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    let deck = [];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < faces.length; j++) {
        let v = j + 1;
        if (v > 10) {
          v = 10;
        }
        deck.push({'face': faces[j], 'suit': suits[i], 'value': v})
      }
    }
    
    console.log(deck[0].value);
    
    for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
    for(let u = 0; u < 5; u++){
        console.log(`${deck[u].value} of ${deck[u].suit}`)
    }
