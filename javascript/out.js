function fun() {
     this.add = function(color) {
         var mydiv = document.createElement("div");
         mydiv.id = color;
        mydiv.style.height = "100px";
        mydiv.style.background = color;
         document.getElementsByTagName("body")[0].appendChild(mydiv);
        };
    this.delete = function(color) {
        var obj = document.getElementById(color);
         obj.parentNode.removeChild(obj);
    }
};

var s = new fun();