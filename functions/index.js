const functions = require("firebase-functions");
const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
var admin = require("firebase-admin");
var firebaseaApp = admin.initializeApp();
const settings = { /* your settings... */ timestampsInSnapshots: true };
admin.firestore().settings(settings);
var https = require("https");
var parseString = require("xml2js").parseString;

app.use(express.static(__dirname + '/public'))
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
exports.s = functions.https.onRequest(app)

exports.getRate = functions.https.onRequest((req, res) => {
  getRate();
  function getRate() {
    console.log("I am a log entry!");
    var options = {
      hostname: "www.vietcombank.com.vn",
      port: 443,
      path: "/ExchangeRates/ExrateXML.aspx",
      headers: {
        "Content-Type": "text/xml"
      }
    };

    https.get(options, function(res) {
      var xml = "";
      res.on("error", function(error) {
        console.log(error, "get data error");
      });
      res.on("data", function(chunk) {
        xml += chunk;
        console.log(xml, "xml file");
      });
      res.on("end", function() {
        var date = "";
        let rateAUD = {
          code: "AUD/VND",
          buy: 0,
          sell: 0
        };
        let rateUSD = {
          code: "USD/VND",
          buy: 0,
          sell: 0
        };
        parseString(xml, function(err, result) {
          console.log(xml, "xml file");

          date = result.ExrateList.DateTime[0];
          if (result.ExrateList.Exrate[0].$.CurrencyCode == "AUD") {
            rateAUD.buy = result.ExrateList.Exrate[0].$.Buy;
            rateAUD.sell = result.ExrateList.Exrate[0].$.Sell;
          } else {
            console.log("They change the database list");
          }
          if (result.ExrateList.Exrate[18].$.CurrencyCode == "USD") {
            rateUSD.buy = result.ExrateList.Exrate[18].$.Buy;
            rateUSD.sell = result.ExrateList.Exrate[18].$.Sell;
          } else {
            console.log("They change the database list");
          }

          if (err) {
            console.log(err);
          }
        });
        uploadDataToServer(date, { rateAUD, rateUSD });
      });
    });
  }

  function uploadDataToServer(date, { rateAUD, rateUSD }) {
    var db = admin.firestore();
    let timeStampFromServer =  admin.firestore.FieldValue.serverTimestamp()

    let data = { rateAUD, rateUSD };
    data.timeStamp = date;
    data.timeStampFromServer = timeStampFromServer;
    db.collection("liveRate")
      .add(data)
      .then(() => res.send("Success fetch data from Vietcombank"))
      .catch(err => {
        console.log("error from up load", err);
      });
  }
});
