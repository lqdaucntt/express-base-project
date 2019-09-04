# BASE PROJECT EXPRESS
# Requrired

- Nodejs >=8.*
- mysql (mariadb) >=5.6
- Redis >= 4.0
- knex >=1.2.*
- pm2
# Env file

- Development: `cp .env.example .env`
- Staging: `cp .env.staging .env`
- Product: `cp .env.product .env`
# Branch deploy server

- Development: `develop`
- Staging: `stag`
- Product: `master`

# How to run
- Step 1: `npm install` (Install third package)
- Step 2: `knex migrate:latest` (Migrate new database)
- Step 3: `knex seed:run` (Seeder database `optional`)
- Step 4: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + Local: `npm start` || `nodemon app.js --ignore public` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + Development & Staging & product: `pm2 start app.js --ignore public`
 
 
