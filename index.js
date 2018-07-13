// 向函数传递大量可选参数

function displayInfo(args) {
    var output = "";

    if(typeof args.Name === "string") {
        output += "name:" + args.Name +"\n";
    }
    if (typeof args.Age === "number") {
        output += "age: " + args.Age +"\n";
    }

    console.log(output);
}

displayInfo({
    Name: "dailianzhi",
    Age: 27
});

displayInfo({
    Name: "Joe"
});


var colors = ["purple","pink", "orange"];

console.log(colors.toString());
console.log(colors.join(" * "));
console.log(Array.isArray(colors.valueOf()));


var numbers = [2,4,3,5,1,10,23,17,13,0];
function compare(num1, num2) {
    return num1 - num2
}

//返回新的数组 不改变原数组
console.log(numbers.concat(colors));
console.log(numbers.slice(2, 6));

//改变原数组
console.log(numbers.reverse());
console.log(numbers.sort().reverse());
console.log(numbers.sort(compare));
console.log(numbers.sort(compare).reverse());  // [23,17,13,10,5,4,3,2,1,0]
console.log(numbers.splice(3,4)); // 返回[10,5,4,3] 原数组[23,17,13,2,1,0]
console.log(numbers.splice(3,0,colors)); //返回[]  原数组[23,17,13,['purple],'pink','orange',2,1,0]

//forEach()没有返回值 类似于for循环




