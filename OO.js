// 理解对象
var person = {
    name: "代莲芝",
    birth: new Date(Date.UTC(1991,0,23,11,0,0)),
    job: "FrontEnd",
    age: function () {
        return Math.floor((new Date(Date.now()) - this.birth)/(365*24*60*60*1000));
    }
};
console.log(person);
console.log(person.name + "的年龄是: " + person.age());

//访问器属性
var personD = {
  _year: 2014,
    age: 24
};
Object.defineProperty(personD,"year",{
    get: function () {
        return this._year;
    },
    set: function (newYear) {
        if(newYear > 2014) {
            this._year = newYear;
            this.age += newYear - 2014;
        }
    }
});
personD.year = 2018;
console.log(personD.age);
console.log(personD);

var descriptor_Year = Object.getOwnPropertyDescriptor(personD, "_year");
console.log(descriptor_Year.value);
console.log(descriptor_Year.configurable);
console.log(typeof descriptor_Year.get);

var descriptorYear = Object.getOwnPropertyDescriptor(personD, "year");
console.log(descriptorYear.value);
console.log(descriptorYear.configurable);
console.log(descriptorYear.enumerable);
console.log(typeof descriptorYear.get);


//创建对象
// 1.工厂模式(不能指定类型)
function createPerson(name, birth, job) {
    var o = new Object();
    o.name = name;
    o.birth = birth;
    o.job = job;
    o.getAge = function () {
        return Math.floor((new Date(Date.now()) - this.birth)/(365*24*60*60*1000));
    };
    return o;
    // return {
    //     name: name,
    //     birth: birth,
    //     job: job,
    //     getAge: function () {
    //         return Math.floor((new Date(Date.now()) - this.birth)/(365*24*60*60*1000));
    //     }
    // };
}
var persond = createPerson("dailianzhi", new Date(Date.UTC(1991,0,23,11,0,0)),"frontEnd");
console.log(persond.getAge());

// 构造函数(没有包装的效果 太多全局函数)
function Person(name, birth, job) {
    this.name = name;
    this.birth = birth;
    this.job= job;
    this.getAge = getAge;
}
function getAge() {
    return Math.floor((new Date(Date.now()) - this.birth)/(365*24*60*60*1000));
}
var personJ = new Person("Joe", new Date(Date.UTC(1993,3,20,0,0,0)), "softWare engineer");
var personN = new Person("Nee", new Date(Date.UTC(1987,11,8,0,0,0)), "doctor");
console.log(personJ.getAge());
console.log(personN.getAge());

//原型模式