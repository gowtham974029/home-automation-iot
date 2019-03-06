var express = require("express");
var router = express.Router();

const SerialPort = require("serialport");
const port = new SerialPort("COM5", { baudRate: 9600 });

/* GET users status for light. */
router.get("/lighton", function(req, res, next) {
  port.write("on".toString(), function(err) {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("Lights are on now");
    // res.render("index", { title: "Home Automation" });
    res.json({ lightStatus: "on" });
  });
});

router.get("/lightoff", function(req, res, next) {
  port.write("off".toString(), function(err) {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("Lights are off now");
    // res.render("index", { title: "Home Automation" });
    res.json({ lightStatus: "off" });
  });
});

module.exports = router;
