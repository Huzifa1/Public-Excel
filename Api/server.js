const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())

var xlsx =require("xlsx");
var dataPathExcel="data.xlsx"




app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/Data', function (req, res) {
    var wb = xlsx.readFile(dataPathExcel);
    var sheetName=wb.SheetNames[0];
    var sheetValue=wb.Sheets['titles'];
    
    //console.log(xlsx.utils.sheet_to_json(sheetValue));
    var myData = xlsx.utils.sheet_to_json(sheetValue);
    res.send(myData)
})

app.get('/products', function (req, res) {
    var wb = xlsx.readFile(dataPathExcel);
    var sheetName=wb.SheetNames[0];
    var sheetValue=wb.Sheets['products'];
    
    //console.log(xlsx.utils.sheet_to_json(sheetValue));
    var myData = xlsx.utils.sheet_to_json(sheetValue);
    res.send(myData)
})

app.listen(3000)