#  Log in system with admin functions 

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
  
* Op de webpagina localhost:3000/user/admin/log vind je de gefaalde inlog pogingen
  * Je moet wel in gelogd zijn als admin => 
    * Username: admin
    * Paswword: admin
    
![Admin Page](https://i.imgur.com/XnYaNVV.png)


* Op de pagina online vind je alle active gebruikers op dit moment. 
  * Is mogelijk gemaakte met een socketverbinding die op de poort 8080 draait


## Screenshots

### Pagina om in te loggen
![Pagina om in te loggen](https://i.imgur.com/fCGLUtu.png)

### Landing Page
![Landing Page](https://i.imgur.com/AGDdIRS.png)

### Kijken wie online is
![Kijken wie online is](https://i.imgur.com/kMLIX9t.png)

### Admin page om te kijken welke error's er gebeurt zijn
![Admin page om te kijken welke error's er gebeurt zijn](https://i.imgur.com/XnYaNVV.png)
