# Examen-Advanced-Server-Web
Examen advanced server web oplossing


## Important node modules used:
  * express-session
    * [Repo](https://github.com/expressjs/session)
    * [NPM](https://www.npmjs.com/package/express-session)
    * [Docs](https://github.com/expressjs/session/#api)
    * Npm command: 
      * `$ npm install express-session`
  * Knex
    * [Repo](https://github.com/tgriesser/knex)
    * [NPM](https://www.npmjs.com/package/knex)
    * [Docs](http://knexjs.org/)
    * Npm command: 
      * `$ npm install knex`
 
 
## Database

Schema-naam: Login

Tabel-naam: logindetails

![MySql table](https://i.imgur.com/XBq9vPW.png)

Om te generen zie file: [Table_LoginDetails.sql](Table_LoginDetails.sql)

## Wat kan het

* Je kan een account maken
  * Indien je hetzelfde emailadress opnieuw probeert zal het de gepaste foutmelding geven.
  
* Op de webpagina localhost:3000/user/admin/log vind je dat gefaalde inlog pogingen
 * Je moet wel in gelogd zijn als admin => 
  * Username: admin
  * Paswword: admin
