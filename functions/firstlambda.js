'use strict';
const fs = require('fs');
const papa = require('papaparse');

const papaparse = require("papaparse");

module.exports.handler = async (event) => {

  const stage = process.env.STAGE;
  const file = fs.createReadStream(`books-to-list-${stage}.csv`);
  const jsonData = await toJson(file);
  console.log("jsonData: ", JSON.stringify(jsonData)); // sends to cloudwatch log events
  return jsonData;

};

const toJson = (file) => {
  return new Promise((resolve,reject) => {
    papaparse.parse(file, {
      header: true,
      complete (results) {
        resolve({data: results.data})
      },
      error (err) {
        reject(err)
      }
    })
  })
}
