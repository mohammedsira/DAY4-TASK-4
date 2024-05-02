//1)Do the below programs in anonymous function & IIFE

//a)Print odd numbers in an array
// anonymous Function=>:
var result = [];
var a = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output
//[ 1,3,5,7,9 ]

// IIFE Function=>:
var result1 = [];
(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result1.push(arr[i]);
        }
    }
    console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//output
//[ 1,3,5,7,9 ]

// Arrow Function =>
var result2 = [];
var a = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output
//[ 1,3,5,7,9 ]

//  --------------------> END <-------------------- //

//b)Convert all the strings to title caps in a string array
// Anonymous Function=>:
var result = [];
var caps = function (array) {
    for (var i = 0; i < array.length; i++) {
        var a = array[i].toLowerCase();
        var s = a.split("");
        var res = s[0].toUpperCase() + s.slice(1).join("");
        result.push(res);
    }
    return result;
};
console.log(caps(["APPLE", "ORANGE"]));
//Output
//['Apple','Orange']
// IIFE Function=>

var result = [];
(function (array) {
    for (var i = 0; i < array.length; i++) {
        var a = array[i].toLowerCase();
        var s = a.split("");
        var res = s[0].toUpperCase() + s.slice(1).join("");
        result.push(res);
    }
    console.log(result);
})(["guvi", "geek"]);
//Output
//['Guvi','Geek']

//Arrow Function =>

var result = [];
var caps = (array) => {
    for (var i = 0; i < array.length; i = i + 1) {
        var a = array[i].toLowerCase();
        var s = a.split("");
        var res = s[0].toUpperCase() + s.slice(1).join("");
        result.push(res);
    }
    return result;
};
console.log(caps(["apple", "orange"]));
//Output
//['Apple','Orange']
//  --------------------> END <-------------------- //

//c)Sum of all numbers in an array

// Anonymous Function=>:
var sum = 0;
var a = function (array) {
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//Output
//55

// IIFE Function=>

var sum = 0;
(function (array) {
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//Output
//55

// Arrow Function=>
var sum = 0;
var a = (array) => {
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//Output
//55
//  --------------------> END <-------------------- //

//d)Print all prime numbers.
// Anonymous Function=>:
var result = [];
var prime = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (j = 1; j <= arr[i]; j++) {
            if (arr[i] % j === 0) {
                count++;
            }
        }
        if (count == 2) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]));
//Output
//[2,3,5,7,11]

// IIFE Function=>

var result1 = [];
(function (arr1) {
    for (var i = 0; i < arr1.length; i++) {
        var count1 = 0;
        for (j = 1; j <= arr1[i]; j++) {
            if (arr1[i] % j === 0) {
                count1++;
            }
        }
        if (count1 == 2) {
            result1.push(arr1[i]);
        }
    }
    console.log(result1);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]);
//Output
//[2,3,5,7,11]

//Arrow Function =>
var result2 = [];
var prime = (arr2) => {
    for (var i = 0; i < arr2.length; i++) {
        var count2 = 0;
        for (j = 1; j <= arr2[i]; j++) {
            if (arr2[i] % j === 0) {
                count2++;
            }
        }
        if (count2 == 2) {
            result2.push(arr2[i]);
        }
    }
    return result2;
};
console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]));
//Output
//[2,3,5,7,11]

//  --------------------> END <-------------------- //

//e)Return all the palindromes in an array
// Anonymous function=>:
var result = [];
var palindrome = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var final = arr[i];
        var str = final.split("").reverse().join("");
        if (str == arr[i]) result.push(arr[i]);
    }
    return result;
};
console.log(palindrome(["abc", "mom", "dad", "madam", "teacher"]));
//Output
//['mom','dad','madam']

// IIFE function=>

var result = [];
(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var final = arr[i];
        var str = final.split("").reverse().join("");
        if (str == arr[i]) result.push(arr[i]);
    }

    console.log(result);
})(["abc", "mom", "dad", "madam", "teacher"]);
//Output
//['mom','dad','madam']

//Arrow Function =>
var result = [];
var palindrome = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        var final = arr[i];
        var str = final.split("").reverse().join("");
        if (str == arr[i]) result.push(arr[i]);
    }
    return result;
};
console.log(palindrome(["abc", "mom", "dad", "madam", "teacher"]));
//Output
//['mom','dad','madam']

//  --------------------> END <-------------------- //

// f).Return median of two sorted arrays of the same size.

// Anonymous function=>:
var arr1 = [3, 2, 1, 4, 5];
var arr2 = [8, 6, 7, 9, 10];
var median = function (arr1, arr2) {
    var arr = [...arr1, ...arr2];

    arr.sort((a, b) => a - b);
    var len = arr.length;

    if (len % 2 !== 0) {
        var ans = arr[Math.round(len / 2) - 1];
        var final = ans;
    } else {
        ans = arr[Math.round(len / 2) - 1] + arr[Math.round(len / 2)];
        final = ans;
    }
    console.log(final);
};
median(arr1, arr2);
//Output
//11

// IIFE function=>

var arr1 = [3, 2, 1, 4, 5];
var arr2 = [8, 6, 7, 9, 10];
(function () {
    var arr = [...arr1, ...arr2];

    arr.sort((a, b) => a - b);
    var len = arr.length;

    if (len % 2 !== 0) {
        var ans = arr[Math.round(len / 2) - 1];
        var final = ans;
    } else {
        ans = arr[Math.round(len / 2) - 1] + arr[Math.round(len / 2)];
        final = ans;
    }
    console.log(final);
})(arr1, arr2);
//Output
//11
//  --------------------> END <-------------------- //

//g.Remove duplicates from an array

// Anonymous function=>:

var dup = function (arr) {
    var frequency = {};

    for (var i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]] = frequency[arr[i]] + 1;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    var final = [];
    for (var x in frequency) {
        if (frequency[x] === 1) {
            final.push(x);
        }
    }

    console.log(final);
};
dup([1, 12, 11, 3, 4, 5, 12]);
//Output
//['1','3','4','5','11']

// IIFE function=>
(function (arr) {
    var frequency = {};

    for (var i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]] = frequency[arr[i]] + 1;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    var final = [];
    for (var x in frequency) {
        if (frequency[x] === 1) {
            final.push(x);
        }
    }

    console.log(final);
})([1, 12, 11, 3, 4, 5, 12]);
//Output
//['1','3','4','5','11']

//  --------------------> END <-------------------- //

//h)Rotate an array by K times
//Anonymous Function=>
var rotation = function (arr, n, d) {
    var p = 1;
    while (p <= k) {
        var last = arr[0];
        for (var i = 0; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[n - 1] = last;
        p++;
    }
    var out = [];
    for (var i = 0; i < n; i++) {
        out.push(arr[i]);
    }
    console.log(out);
};
var arr = [4, 5, 6, 1, 2, 3];
var n = arr.length;
var k = 6;

rotation(arr, n, k);
//Output
// [4, 5, 6, 1, 2, 3]

// IIFE function=>

var arr = [4, 5, 6, 1, 2, 3];
var n = arr.length;
var k = 6;

(function (arr, n, k) {
    var p = 1;
    while (p <= k) {
        var last = arr[0];
        for (var i = 0; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[n - 1] = last;
        p++;
    }
    var out = [];
    for (var i = 0; i < n; i++) {
        out.push(arr[i]);
    }
    console.log(out);
})(arr, n, k);
//output
// [4, 5, 6, 1, 2, 3]