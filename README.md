# OneLang

Communication amongst individuals that speak the same language can sometimes lead to mix ups and mis-interpretations; add a language barrier and you have a recipe for disaster. OneLang addresses this problem, by seamlessly translating messages, transmitted in another language, to the readers primary language. OneLang makes it possible for individuals that speak different languages to communicate in real-time and share ideas. Try OneLang <a href="onelang.herokuapp.com">OneLang</a>

# French to English Sample Chat
In this example, a French speaker reaches out to his English speaking friend to see how he's doing. The English speaker receives his friend's message in English and is able to reply in English. The French speaker receives the message in French.
  
  <img src="/public/French.PNG" align="left" />
  <img src="/public/English.PNG" align="center" />



# Installing


```
-- Clone the repository
git clone https://github.com/bigal2331/3xtrinsic.git
-- Install all the dependencies
git install
-- run the application - got to https://localhost:8080 in your browser
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

  <p style="text-align: center;">
    <img src="https://www.shareicon.net/data/512x512/2016/07/08/117367_logo_512x512.png" width="50px" height="50px"/>
    <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" width="50px" height="50px"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" width="50px" height="50px"/>
    <img src="http://www.programwitherik.com/content/images/2017/01/socket-e1434850599985.png" width="50px" height="50px"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/2000px-CSS3_and_HTML5_logos_and_wordmarks.svg.png" width="50px" height="50px"/>
    
  </p>

* React - Leveraged to create a fast user interface
* Redux - Provided a solution to the application state management
* Express - Used to create the application api
* Socket.io - For real-time user communication
* JSON Web Token - Facilitated secure data transmission with JSON Web Token
* CSS3 - For styling and UI responsiveness
* HTML5 - For site structure
