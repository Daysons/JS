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

//返回新的数组 不改变原数组 concat() slice()
console.log(numbers.concat(colors));
console.log(numbers.slice(2, 6));

//改变原数组 reverse() sort() splice()
console.log(numbers.reverse());
console.log(numbers.sort().reverse());
console.log(numbers.sort(compare));
console.log(numbers.sort(compare).reverse());  // [23,17,13,10,5,4,3,2,1,0]
console.log(numbers.splice(3,4)); // 返回[10,5,4,3] 原数组[23,17,13,2,1,0]
console.log(numbers.splice(3,0,colors)); //返回[]  原数组[23,17,13,['purple,'pink','orange'],2,1,0]

//查找indexOf lastIndexOf
console.log(colors.indexOf("pink"));
console.log(numbers.indexOf("pink"));
console.log(numbers.indexOf(colors));// ???怎么查找数组中的数组项???  --定义一个变量 查找变量  对象的查找也是如此
// 说明示例
var person = {name: "dailianzhi"};
var perArr = [{name: "dailianzhi"}];
var pArr = [person];

console.log(perArr.indexOf(person)); // -1 两者没有任何的关系
console.log(pArr.indexOf(person));

//迭代方法  every() some() filter() map() forEach()
//forEach()没有返回值 类似于for循环

//归并方法  reduce() reduceRight()


console.log(new Date("1/1/2015 00:00:00")); //在webstorm上是2014/12/31
console.log(new Date(2015,0,1)); //显式用UTC得到的是8:00:00  而且在webstorm上是2014/12/31
console.log(new Date(Date.now()));


//传递函数参数
function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument);
}

function addTen(num){
    return num + 10;
}
var sum = callSomeFunction(addTen, 20);
console.log(sum);

function greetingName(name){
    return "Greeting you, " + name;
}
var greetingOne = callSomeFunction(greetingName,"dailianzhi");
console.log(greetingOne);

//传递返回结果函数
function compareFunction(someProperty) {
    return function (object1, object2) {
        var value1 = object1[someProperty];
        var value2 = object2[someProperty];
        return value1 - value2;
    }
}

var persons = [{
    name: "Dailainzhi",
    age: 27

},{
    name: "Joe",
    age:25
}];

persons.sort(compareFunction("age"));
console.log(persons);

//阶乘
function factorial(num) {
    if(num <= 1) {
        return 1;
    }else {
        return num * arguments.callee(num-1);
    }
}
console.log(factorial(5));


//循环字符位置
var searchIndex = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var pos = searchIndex.indexOf("i");
var positions = [];

while(pos>-1) {
    positions.push(pos);
    pos = searchIndex.indexOf("i", pos+1);
}
console.log(positions);

//匹配替换字符串
var replaceString = "fat,bat,cat,sat,hat,kat";
var replacePattern = replaceString.replace(/(.at)/g, "word($1)");
console.log(replacePattern);

var global = function () {
    return this
}();
// console.log(global);

//生成一个随机数
function randomSelected(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue) + lowerValue)
}
console.log(randomSelected(1,30)); //1-30随机
console.log(colors[randomSelected(0,colors.length-1)]); //随机一个颜色