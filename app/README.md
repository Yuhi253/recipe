# README
## 使い方
git cloneをします  
このディレクトリの中で以下を実行
```
$ cd project
$ python get_random_secret_key.py > local_settings.py
$ cd ..
$ docker-compose up --build
```
これで動くと思います。動かなかったらごめんなさい。

### 追記 
このままbuildをすると、ログイン時にrelation "auth_user" does not existが出ます  
以下のコマンドを実行すると解決します。  
```
$ docker-compose run --rm web python3 manage.py migrate auth
$ docker-compose run --rm web python3 manage.py migrate
```
https://yura2.hateblo.jp/entry/2015/08/14/Django%E3%81%AE%E5%88%9D%E5%9B%9E%E3%83%9E%E3%82%A4%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E6%99%82%E3%81%AB_relation_%22auth_user%22_does_not_exist_%E3%81%A8%E3%81%84%E3%81%86%E3%82%A8

## hoge
DjangoもDockerもなんもわかりません…    
使いたいライブラリはrequirements.txtに記入  

## 参考文献
### Docker環境構築
https://note.com/tico0602/n/nb2ea4f0b51f8

### SECRET_KEY
https://qiita.com/frosty/items/bb5bc1553f452e5bb8ff  
https://qiita.com/haessal/items/abaef7ee4fdbd3b218f5  

### Django関連
https://tutorial.djangogirls.org/ja/  
https://qiita.com/j54854/items/b25a85ddf41b6d8ffab6

### GitHub
https://github.com/hironomiu/Git-GitHub-Training/blob/master/additional.md  
https://qiita.com/hogeta_/items/33d2334c9b1919bd5120
