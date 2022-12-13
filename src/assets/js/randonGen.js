genRandomNumbers = function() {
    console.log(Array.from({length: 40}, () => Math.floor(Math.random() * 40)));
    arr = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
    return arr;
}