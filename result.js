const url = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=1064191778943027353';


fetch(url)
    .then(function (response1) { //成功時に実行される
        return response1.json();
    })
    .then(function (data1) { //成功時に実行される
        document.getElementById('list1-h1').innerText = data1['result'][0]['recipeTitle'];
        document.getElementById('list2-h1').innerText = data1['result'][1]['recipeTitle'];
        document.getElementById('list3-h1').innerText = data1['result'][2]['recipeTitle'];
        // var img_url = data1['result'][0]['foodImageUrl'];
        // console.log(img_url);
        // var img_element = document.createElement('img');
        // img_element.src = img_url;
        // img_element.alt = '料理画像';


    })
    .catch(function (err1) { //失敗時に実行される
        console.log("err=" + err1);
    });


