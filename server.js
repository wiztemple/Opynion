const app = require('./app')

// use the $PORT env var to allow Heroku bind its port when the app
// is on Heroku, and when the app isn't on heroku, it uses its default PORT 3000
app.listen(process.env.PORT || 3000);
