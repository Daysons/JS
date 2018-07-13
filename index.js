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
console.log(colors.join(" * "))
console.log(Array.isArray(colors.valueOf()));