'use strict';

var winston = require('winston');
var moment = require('moment');

function timeStampFormat() {
  return moment().format('YYYY-MM-DD HH:mm:ssss Z');
}

//logger 설정
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      name: 'info-console',
      colorize: true,
      level: 'info',
      showLevel: true,
      json: true,
      timestamp: timeStampFormat
    })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({
      name: 'exception-console',
      colorize: true,
      level: 'debug',
      showLevel: true,
      json: false,
      timestamp: timeStampFormat
    })
  ]
});

module.exports = logger;
// ref https://dololak.tistory.com/126
// logger를 통한 로그 출력
// logger.info("infolevel 로깅");
