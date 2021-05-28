// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
const mysql2 = require('mysql2/promise');
const config = require('./config');

async function main() {
    const connection = await mysql2.createConnection(config);
    const [rows, field] = await connection.execute('SELECT * FROM user WHERE id = 1');
    // console.log(rows[0]['firstname']);
    // await connection.execute('UPDATE user SET firstname = "' + rows[0]['firstname'] + '" WHERE id = 2');
    connection.end();
    return rows;
}

async function f() {
    let a = await main();
    console.log(a);
}

f();