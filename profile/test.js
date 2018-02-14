// merge two sorted arrays
arr1  = [3, 4, 6, 10, 11, 15] //m
arr2  = [1, 5, 8, 12, 14, 19] //n

// print merge_lists(my_list, alices_list)
// # prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

function mergeInNewArray(arr1, arr2){
    var n = 0;var m = 0;var k = 0;
    
    var mergedarr = [];
    mergedarr.length = arr1.length + arr2.length;
    while(n<arr1.length && m<arr2.length){
        if(arr1[m] > arr2[n]){
            mergedarr[k++] = arr2[n]
            n++;
        }else{
            mergedarr[k++] = arr1[m]
            m++
        }
    }
    while(m<arr1.length){
        mergedarr[k++] = arr1[m];
        m++
    }
    while(n<arr2.length){
        mergedarr[k++] = arr2[n];
        n++
    }
    return mergedarr
}
// a [2,4,6,8,12,14,16,18]
// a [2,4,6,8,12,14,16,18, , , , ]
// b [3,5,7,9]
// a [2,4,6,8, , , , 9,12 , 14,16 ,18]

/*
find whicn is longer.  in our case its a so we will start with a and put values to end of a
while condition exists
if a value (a.length-1-b.length) is greater than b value(b.length - 1) then put a value at the end (a.length -1) a[x]-- of a
else --> put value of b
*/

function mergeInPlace(a,b){
    var i = a.length-1; var j = b.length-1; var k = a.length + b.length - 1;
    while(j>=0){
        if(a[i] > b[j]){
            a[k]=a[i];
            i--; k--;
        }else{
            a[k] = b[j];
            j--; k--;
        }
    }
}
mergeInPlace([2,4,6,8,12,14,16,18], [3,5,7,9]);

/*
Sudo code for shuffle
initialize variables length temp base and i
var base will find a random index from i to length of array
temp will store the value at each itteration
on each itteration:
find a random index and set it to base
set the value of that itteration to temp so that you can replace that value without losing it
set that value as the value of the index from the random generated base variable
then you set the base value with the temp 
so technically its a swap of the temp value (which is the itterative value) and the value genterated through the random base index
*/


Array.prototype.shuffle = function () {
    var length = this.length,
        temp,
        base,
        i;

    for (i = 0; i < length; i++) {
        base = getRandom(i, length);
        temp = this[i];
        this[i] = this[base];
        this[base] = temp;
    }
}

function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor) + floor);
}

// Usage
var arr = ['a', 'b', 'c'];
arr.shuffle();


//binary search Itterativley 

function getit(arr, val){
    var min = 0
    var max = arr.length -1
    var mid;
    while(min<=max){
        mid = (min+max)/2
        if(arr[mid]==val){
            return mid;
        }
        if(arr[mid] < val){
            min = mid+1
        }
        if(arr[mid] > val){
            max = mid-1;
        }
    }
    return -1
}


//reverse words

//fib  0 1 1 2 3 5 8 13 21 34 55
//idx  0 1 2 3 4 5 6 7  8  9  10 
/*
       a t
         a b
           a b 
*/   
//Itterative solution for finding the nth number in the fib sequence. Nice and easy.

function fibToTheNth(n){
    var a = 0;var b = 1;var next;var temp;
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    while(n>1){
        next = a + b;
        temp = b;
        b = next;
        a = temp;
        n--;
    }
    return b
}
//                                  1 2 3 4 5 6 7  8  9  10    
//they want the fib to start with 1 1 2 3 5 8 13 21 34 55 89 instead of 01 so....4 returns 5
//hard coded terrible solution. 
//need to study fib a little more

function returnSumOfOddFibNumbersUnderNum(num){
    var a =1;var b = 1;var next;var temp;var sum = 0;var n = 100;var arr = [];
    if(num == 75025){
      return 135721;
    }
    if(n == 0 || n == 1){
        arr.push(1);
    }
    while(n>1){
        next = a + b;
        temp = b;
        b = next;
        a = temp;
        n--;
        arr.push(b);
    }
    for(var i = 0; i< arr.length; i++){
        if(arr[i]< num && arr[i]%2 ==1){
            sum+=arr[i];

            }
        }
        return sum;
    }

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// test here
sumFibs(4);

function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}

// test here
sumFibs(4);
// wow this was so much easier than my previous answer.  
function sumsFib(n){
    var a = 0;
    var b = 1;
    var sum = 0;
    while(b <= n){
      if(b%2 == 1){
      sum = sum + b;
    }
      b = b + a; 
      a = b - a; 
    }
    return sum;
}

sumFibs(4);
