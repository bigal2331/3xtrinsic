
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

* React
* Redux
* ExpressJS
* Socket.io
* CSS3
* HTML5
