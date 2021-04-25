$(function () {
    $('.material').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });
});

//初期データ
var data = ["大根","人参","もやし","卵","豚肉","牛肉"]
localStorage.setItem("data", data);
const leftovers = document.getElementById("leftovers");
for(let i=0; i<data.length; i++){
  const input = document.createElement("input");
  input.className = "material";
  input.type = "button";
  input.value = data[i];
  leftovers.appendChild(input);
}

function set() {
  var value = document.getElementById("data").value;
  data.push(value);
  localStorage.setItem("data", data);
  const leftovers = document.getElementById("leftovers");
  const input = document.createElement("input");
  input.className = "material active";
  input.type = "button";
  input.value = data[data.length-1];
  leftovers.appendChild(input) + "<br>";
}
});
