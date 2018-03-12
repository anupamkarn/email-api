# Email API (express web api)

## Description
 A email client api using express 4.
 ### Libraries used

 Express, body-parser, mongoose

 #### Done


 #### To Do
 

## Getting Started

Clone repository
```bash
git clone https://github.com/hiteshnayak305/email-api.git
cd email-api
```
Install dependencies
```bash
npm install
npm update
```
Start server
```bash
nodemon 
OR
node index.js
```

### Deployed on Heroku
email-api https://api-email.herokuapp.com

### Usage

**key is 'alohamora'

use post request as
https://api-email.herokuapp.com/send  {'key': key, 'name': name, 'email': email, 'phone': phone, 'message': message}
