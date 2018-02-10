function sumMultpOfThreeAndFive(){ 
    var array = [];
    for(var i = 3; i<=1000; i++){
        if(i%3 ==0 || i%5 ==0){
            array.push(i);
        }
    }
    var sum = arr.reduce(function(acc, val){return acc+val});
    return sum;
}   

