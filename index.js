//load filename is relative path from process current dir. or absolute path.

var fs = require('fs');

var loadString = function(filename, cb) {
 if(filename) {
  fs.readFile(filename, {"encoding":"utf8"}, function(err, data) {
   if(err) {
    cb("");
   } else {
    cb(data);
   }
  });
 } else {
  cb("");
 }
};

var loadObject = function(filename, cb) {
 if(filename) {
  fs.readFile(filename, {"encoding":"utf8"}, function(err, data) {
   if(err) {
    cb({});
   } else {
    cb(JSON.parse(data));
   }
  });
 } else {
  cb({});
 }
};

var loadArray = function(filename, cb) {
 if(filename) {
  fs.readFile(filename, {"encoding":"utf8"}, function(err, data) {
   if(err) {
    cb([]);
   } else {
    cb(JSON.parse(data));
   }
  });
 } else {
  cb([]);
 }
};

var loadStringSync = function(filename) {
 if(filename) {
  return fs.readFileSync(filename, {"encoding":"utf8"});
 }
 return "";
};

var loadObjectSync = function(filename) {
 if(filename) {
  return JSON.parse(fs.readFileSync(filename, {"encoding":"utf8"}));
 }
 return {};
};

var loadArraySync = function(filename) {
 if(filename) {
  return JSON.parse(fs.readFileSync(filename, {"encoding":"utf8"}));
 }
 return [];
};


module.exports = {
 'loadString':loadString,
 'loadObject':loadObject,
 'loadArray':loadArray,
 'loadStringSync':loadStringSync,
 'loadObjectSync':loadObjectSync,
 'loadArraySync':loadArraySync
};
