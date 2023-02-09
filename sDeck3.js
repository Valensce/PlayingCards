    let suits = ['c', 'd', 'h', 's'];
    let faces = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
    let deck = [];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //create arrays to store the different suit and face values
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < faces.length; j++) {
        //suits.length is more maintainable code, beacuse if more suits were added, this code would still work
        //calculate the value
        let v = j + 1;
        //if the value of 'value' is greater than 10, set it to 10 (ie j, q, k have a value of 10 and not 11, 12, 13)
        //j cannot begin with 1 because the faces would not match correctly to their respective values
        if (v > 10) {
          v = 10;
        }
        //create card object and add to the deck array
        deck.push({'face': faces[j], 'suit': suits[i], 'value': v})
      }
    }
    //i is a local counter, but because the second loop is inside the loop, the second counter must not be i
    console.log(deck);
