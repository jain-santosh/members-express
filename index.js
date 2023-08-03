const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars');
const create = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members')


const app = express()
const port = process.env.PORT || 5000;

// Handlebars Middleware
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))


//Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Members App',
    members
}))


//Member API route
app.use('/api/members', require('./routes/api/member'))




//set static folder
// app.use(express.static(path.join(__dirname, 'public')));
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
