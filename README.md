
# French to English Sample Chat

<img src="/public/frenchChat.JPG" align="right" />
<img src="/public/frenchChatResult.JPG" align="right" />
&nbsp;
&nbsp;

# OneLang

A multi-language chat application that lets users communicate with others around the world in their own language.



# Installing


```
git clone https://github.com/bigal2331/3xtrinsic.git
npm start
```

## Data Models
### 'users'

| Column                | Type                	          |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`email`                | STRING(100) (NOT NULL)(UNIQUE)  |
|`password`             | STRING(1000) (NOT NULL)         |
|`primary language`     | STRING(1000) (NOT NULL)         |



### POST `user/login`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `email`            | Username input to verify account                                                            |
| `password`            | Password input to verify account                                                            |


### POST `/user/signup`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `email`               | User name created to assign to account.                                                     |
| `password`            | Password created to sign into acount.                                                       |
| `first name'          | User name created to assign to account.                                                     |
| `last name`           | Password created to sign into acount.                                                       |
| `primary language`    | Password created to sign into acount.                                                       |

## Built With

  
    <img src="https://www.shareicon.net/data/512x512/2016/07/08/117367_logo_512x512.png" align="left" width="80px" height="100px"/>
    <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" align="left" width="80px" height="100px"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" align="left" width="80px" height="100px"/>
    <img src="https://blog.tuleap.org/sites/default/files/socket-logo.png" align="left" width="80px" height="100px"/>
  
&nbsp;
&nbsp;
## 

* React 
* Redux 
* ExpressJS 
* Socket.io 
* CSS3
* HTML5
