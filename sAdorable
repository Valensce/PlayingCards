    let dishes = [{
        'name':"Yangrouchuaner",
        'price':6,
        'quantity': 3},
        {
        'name':'XiHongShiChaoJiDan',
        'price': 23},
        {'name':'Jisiliangmian',
        'price': 30},
        {'name':'Ximilu',
        'price': 12}
        ];
    
    for (let i = dishes.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = dishes[i];
    dishes[i] = dishes[j];
    dishes[j] = temp;
}
    for(let u = 0; u < 2; u++){
        let price = dishes[u].price
        console.log(`${dishes[u].name} has been ordered!`)
        console.log(price)
    }
