# Electronic Medical Records System (EMRS)

A record management system built for medical clinics to store and record relevant data that is daily generated. Check out the wiki for further details on features and functionalities.

---

## Deployed using Heroku: [e-m-r-s.herokuapp.com](https://e-m-r-s.herokuapp.com/)

---

## Libraries / Tools Used

- React JS (Frontend)
- Node JS (Backend)
- Express JS (Backend)
- PostgreSQL (Database)

---

## Setup Guide

### Setup Database

1. 

### Setup the dot environment file

1. Create a file called `.env` in the root directory
2. The .env file will need to be filled in with the following information:

```console
DB_HOST=<Replace with name of Host e.g. localhost>
DB_PORT=<Replace with port of DB>
DB_DATABASE=<Replace with DB name>
DB_USER=<Replace with postgres username>
DB_PASS=<Replace with postgres password>
FBAPPID=<Replace with FB API KEY's ID>
FBAPPSECRET=<Reaplce with FB API Key's secret>
GOOGLECLIENTID=<Replace with Google API KEY's ID>
GOOGLESECRET=<Replace with Google API KEY's secret>
KEY=<Replace with unique key to be used for signing cookies for sessions>
```

### Server setup

```console
npm install
npm devstart
```
