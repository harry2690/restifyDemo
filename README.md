# restifyDemo

簡單的寫一個demo

[作者網站](https://github.com/restify/node-restify)

我比較喜歡看到乾淨的啟動JS，所以我會把REST相關的Code依照功能拆成一個個router，結構如下：

>start.js //啟動JS
>
>package.json
>
>routers
>>demo.js

啟動以後可以看到Server監聽在3000 Port

再來看是用curl或是POSTMAN測試了

    [GET]http://localhost:3000/user/:id  //查User By ID
    [POST]http://localhost:3000/user //新增User
    [PUT]http://localhost:3000/user/:id  //修改User資料 By ID
    [DELETE]http://localhost:3000/user/:id  //刪除User資料 By ID
    
大家可以動手玩玩喔