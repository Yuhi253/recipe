var sortup = function (i) {
    var up = document.getElementById(String(i-1)).value; //上のvalueを取得
    var down = document.getElementById(String(i)).value; //下のvalueを取得
    var tmpup = document.getElementById(String(i-1)).id;
    var tmpdown = document.getElementById(String(i)).id;
    var numup = parseInt(tmpup);
    var numdown = parseInt(tmpdown);
    document.getElementById(String(tmpup)).value = down;
    document.getElementById(String(tmpdown)).value = up;
}

var sortdown = function (i) {
    var up = document.getElementById(String(i)).value; //上のvalueを取得
    var down = document.getElementById(String(i + 1)).value; //下のvalueを取得
    var tmpup = document.getElementById(String(i)).id;
    var tmpdown = document.getElementById(String(i + 1)).id;
    var numup = parseInt(tmpup);
    var numdown = parseInt(tmpdown);
    document.getElementById(String(tmpup)).value = down;
    document.getElementById(String(tmpdown)).value = up;
}