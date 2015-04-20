# simple-json-loader
This is mini utility for load JSON from FileSystem.

----
## Usage

You can call three types of 'load' methods, 'loadObject', 'loadArray', or 'loadString'.
loadObject loads JSON Object, loadArray loads JSON Object array. loadString loads Strings from file.

Load methods needs argument 'filepath' that you want to load. Relative path from process current dir. Or absolute path.

Load methods are Async. So you must to set second argument callback function.
If you want to load sync, then use 'loadObjectSync', 'loadArraySync', or 'loadStringSync'.

```js
var loader = require('simple-json-loader');

//Async load
loader.loadObject('path/to/file', function(data) {
 //your 'data' object handlings...
});

//Sync load
var data = loader.loadObjectSync('path/to/file');

```

If error occured, 'loadObject' set to empty JSON Object like '{}'. 'loadArray' set to empty JSON Array like '[]'. 'loadString' set to empty String like ''. They do not set NULL.

enjoy.

