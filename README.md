## Pawtastic 

This is a Web App which provides Services for your pets created with **MERN** Stack

## Description

This web app lets you book services for your Pets . You can book Services like dog walk , Drop-in visit
(We’ll stop by to snuggle, feed, and play with your pets in the comfort of their own home.) House sitting
(We’ll stay overnight with your pets to make sure they have round-the-clock love.)


**Features** <br>
 [✔] User authentication.
 [✔] Book Services.
 [✔] Pay for the servce integrated with razorpay
 [✔] View Profile details <br><br>

Prerequisite:

You should have following things : <br>

**Node Js** installed <br>

**Code Editior** ( for eg- Vs code )

### Installation :
 
```
git clone https://github.com/AagmanSuri/Pawtastic-Backend.git
```

```
npm install 
```

```
nodemon server.js
```

## Api's used : 

For accessing all users (Get Request):  https://mernpawtastic.herokuapp.com/

For Authentication (Post )https://mernpawtastic.herokuapp.com/signin<br>

Request to be sent 
```
{
"email":"aagman@gmail.com",
"password":"aagman"
}
```

For Storing Service Request (Post) https://mernpawtastic.herokuapp.com/service <br>
Request to be sent 
```
{
"message":"",
"razorPayLink":"",
"frequency":"",
"start_Date":"",
"days":[
"Tuesday","Wednesday","Thursday"],
"Times":["Evening","Afternoon"],
"note_for_sitter":""
}<br>
```
For getting service of particular user (Post) : https://mernpawtastic.herokuapp.com/getService
Request to be sent 
```
{
"email":"aagman@gmail.com"
}
```







## Contributors
1. Aagman Suri - 1911066
2. Aditya Bhaleghare - 1911068
