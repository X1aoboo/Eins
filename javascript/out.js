alert("Hello,World!");

function fun(obj) {
    if(obj.value == "")
    obj.value = 'input cannot be empty';
}

function fun2(obj) {
    obj.value = "input cannot be empty!";
}

function student(name, age) {
    this.name = name;
    this.age = age;

    this.study = function() {
        alert("studying");
    }

    this.eat = function() {
        alert("eating");
    }
}

var s = "abcdefghijklmn";

alert(s[2]);
