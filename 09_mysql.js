// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'nodejs',
    user: 'root',
    password: ''
});

connection.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log('Database ------ Ok');

    }
});

let query = 'SELECT * FROM user';

connection.query(query, (err, result, field) => {
    console.log(err);
    // console.log(result);
    console.log(result[0]['email']);
    // console.log(field);
});

connection.end(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log('Database ------ Close');

    }
});