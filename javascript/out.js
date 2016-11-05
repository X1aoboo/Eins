function fun() {
    this.add = function() {
        var mydiv = document.createElement("div");
        num[0]++; 
        mydiv.style.height = "100px";
        mydiv.style.background = "red";
        document.getElementsByTagName("body")[0].appendChild(mydiv);
    }

    this.delete = function() {
        var obj = document.getElementById();
        num[0]--;
        obj.parentNode.removeChild(obj);
    }
};

var s = new fun();