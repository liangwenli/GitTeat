"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../db/db'),
    find = _require.find;
/* GET home page. */


router.get("/entries", function _callee(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.append("Access-Control-Allow-Origin", '*');
          _context.next = 3;
          return regeneratorRuntime.awrap(find('elelme'));

        case 3:
          data = _context.sent;
          res.json(data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
/* GET home page. */

router.get("/yinguo", function _callee2(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.append("Access-Control-Allow-Origin", '*');
          _context2.next = 3;
          return regeneratorRuntime.awrap(find('yiguo'));

        case 3:
          data = _context2.sent;
          res.json(data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
/* GET home page. */

router.get("/shGpin", function _callee3(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          res.append("Access-Control-Allow-Origin", "*");
          _context3.next = 3;
          return regeneratorRuntime.awrap(find("shangpin"));

        case 3:
          data = _context3.sent;
          res.json(data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
/* GET home page. */

router.get("/CentBase", function _callee4(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.append("Access-Control-Allow-Origin", "*");
          _context4.next = 3;
          return regeneratorRuntime.awrap(find("componentBase"));

        case 3:
          data = _context4.sent;
          res.json(data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
/* GET home page. */

router.get("/Codename", function _callee5(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.append("Access-Control-Allow-Origin", "*");
          _context5.next = 3;
          return regeneratorRuntime.awrap(find("Code"));

        case 3:
          data = _context5.sent;
          res.json(data);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
/* GET home page. */

router.get("/book", function _callee6(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          res.append("Access-Control-Allow-Origin", "*");
          _context6.next = 3;
          return regeneratorRuntime.awrap(find("tushu"));

        case 3:
          data = _context6.sent;
          res.json(data);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
});
module.exports = router;