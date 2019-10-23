let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let morgan = require('morgan');

let app = express();
let port = 4000;
let router = require('./router.js');

app.use(morgan('dev'));
app.use(cors({origin: true}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/api', router)

app.listen(port, () => console.log(`Listening to port ${port}!`));


