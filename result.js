const url = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=1064191778943027353';

const item = '大根'
const fs = require('fs');

const jsonObject = JSON.parse(fs.readFileSync('./category.json', 'utf8'));
console.log(jsonObject)

const cate = ["large","medium","small"]

id = ""
for (var i in cate){
    for(var menu in jsonObject["result"][cate[i]]){
        if(jsonObject["result"][cate[i]][menu]["categoryName"] == item){
            if(i == 0)id = jsonObject["result"][cate[i]][menu]['categoryId']
            else{
                if(id.length!=0) id += '-'
                if(id.length == 0) id += jsonObject["result"][cate[i]][menu]['parentCategoryId'] + '-'
                id += jsonObject["result"][cate[i]][menu]['categoryId']
            }
        }
    }
}

fetch(url)
    .then(function (response1) { //成功時に実行される
        return response1.json();
    })
    .then(function (data1) { //成功時に実行される
        // console.log(data1);
        var img_url1 = data1['result'][0]['foodImageUrl'];
        var img_url2 = data1['result'][1]['foodImageUrl'];
        var img_url3 = data1['result'][2]['foodImageUrl'];
        document.getElementById('list1-img').src = img_url1;
        document.getElementById('list2-img').src = img_url2;
        document.getElementById('list3-img').src = img_url3;
        document.getElementById('list1-h2').innerText = data1['result'][0]['recipeTitle'];
        document.getElementById('list2-h2').innerText = data1['result'][1]['recipeTitle'];
        document.getElementById('list3-h2').innerText = data1['result'][2]['recipeTitle'];
        for(let i = 0; i < 3; i++)
        {
            document.getElementById('list1-h3').insertAdjacentHTML("beforeend", data1['result'][0]['recipeMaterial'][i]);
            document.getElementById('list1-h3').insertAdjacentHTML("beforeend", ", ");
            document.getElementById('list2-h3').insertAdjacentHTML("beforeend", data1['result'][1]['recipeMaterial'][i]);
            document.getElementById('list2-h3').insertAdjacentHTML("beforeend", ", ");
            document.getElementById('list3-h3').insertAdjacentHTML("beforeend", data1['result'][2]['recipeMaterial'][i]);
            document.getElementById('list3-h3').insertAdjacentHTML("beforeend", ", ");

        }
        document.getElementById('list1-h3').insertAdjacentHTML("beforeend", "etc");
        document.getElementById('list2-h3').insertAdjacentHTML("beforeend", "etc");
        document.getElementById('list3-h3').insertAdjacentHTML("beforeend", "etc");

        document.getElementById('list1-h4').href = data1['result'][0]['recipeUrl'];
        document.getElementById('list2-h4').href = data1['result'][1]['recipeUrl'];
        document.getElementById('list3-h4').href = data1['result'][2]['recipeUrl'];

    })
    .catch(function (err1) { //失敗時に実行される
        console.log("err=" + err1);
    });


