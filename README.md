## Bake-It-ThreePointOh

A recipe database and bakery finder for Wellington, NZ.


## Steps for Installing:

1. `git clone https://github.com/sarah-due/Bake-It-ThreePointOh.git`
2. `cd Bake-It-ThreePointOh`
3. `npm install`
4. `npm run knex migrate:latest`
5. `npm run knex seed:run`
6. `npm run test`

## Viewing App on Local Host

Run `npm run dev` and view app on http://localhost:3000/


## TECHNOLOGIES
* HTML
* CSS
* React
* Redux
* Express
* Knex
* React Router

# Creating App on Heroku

Create your app with `heroku create [name]`.

You can check that this was successful by running `heroku apps` to view a list of your apps.


# Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

This will enable heroku to access knex database.

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app.


# Deploying!

`npm run h:deploy` will push your local master branch to heroku app.

`npm run h:migrate` will run your knex migrations on deployed heroku app.

`npm run h:seed` will run seeds on deployed app.
