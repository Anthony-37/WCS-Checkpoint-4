## The Royal Family

Web application that allows you to consult the characters of the royal family as well as their royal property.

## User stories and backlog
- US_Adding_New_Table_BDD : As administrator I can create a user as well as a new asset by determining its name, the number it contains, the unit price and the total price.
US_Home_Page : Creation of a home page.
US_Royal_Family_Page : As a user I can consult all the characters of the royal family in a dynamic carousel.
US_Royal_Family_Details : As a user I can view details about a particular royal family character.
US_ContactUs_Page : As a user I have access to a contact form allowing me to send an email to the royal family.



### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
- _Axios_ : Allows you to make calls to the database
- _Sass_ : css preprocessor
- _React-Router-Dom_ : Allows to manage application routes
- Dotenv : Allows the creation of development environment
- Cookie-parser : Allows the parsing of the header and allows its recovery as an object
- Argon2 : Allows password hashing
- Cors : Allows through middleware access to restricted data in normal times
- Joi : Allows you to add controls during data validation
- JsonWebToken : Allows to secure exchanges between 2 parties by means of a token
- react-slick-slick-carousel : React component for managing carousels



