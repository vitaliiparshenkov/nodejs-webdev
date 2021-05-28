// --------------------------------------------------------------------------------------------------------------------
// ! task 1 - читение/запись JSON
// ? Case 1 - Записываем json file
// --------------------------------------------------------------------------------------------------------------------
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// const man = {
//     name: 'Alex',
//     age: 22,
//     departmen: 'History',
//     car: 'vaz'
// };

// fs.writeFile('one.json', JSON.stringify(man), (err) => {
//     if (err) console.log('Error');
// });

// --------------------------------------------------------------------------------------------------------------------
// ? Case 2 - Читаем json file
// --------------------------------------------------------------------------------------------------------------------
const student = require('./one.json');
// console.log(student);

// --------------------------------------------------------------------------------------------------------------------
// ! task 2 - читение/запись CSV
// ? Case 3 - Читаем CSV file
// --------------------------------------------------------------------------------------------------------------------

// const results = [];
// fs.createReadStream('trb.csv')
//     .pipe(csv({ separator: ';' }))
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);
//         // [
//         //   { NAME: 'Daffy Duck', AGE: '24' },
//         //   { NAME: 'Bugs Bunny', AGE: '22' }
//         // ]
//     });

// --------------------------------------------------------------------------------------------------------------------    
// ? Case 4 - Пишим в CSV file
// --------------------------------------------------------------------------------------------------------------------    

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'test.csv',   // ! Путь к файлу который vs.parshenkov@gmail.comcjplflbv
    header: [
        { id: 'name', title: 'NAME' },
        { id: 'surname', title: 'LASTNAME' },
        { id: 'age', title: 'AGE' },
        { id: 'gender', title: 'G' }
    ]
});

const data = [
    {
        name: "Alex",
        surname: "Snow",
        age: 25,
        gender: 'M'
    },
    {
        name: "Clair",
        surname: "White",
        age: 34,
        gender: 'F'
    },
    {
        name: "Fancy",
        surname: "Brown",
        age: 33,
        gender: 'F'
    }
]

csvWriter.writeRecords(data)       // returns a promise
    .then(() => {
        console.log('...Done');
    });