const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, myfunc) {
    fs.readdir(dir, function(error, list) {
        if (error) {return myfunc(error)}
        
        list = list.filter(function(file){
            return path.extname(file) === '.' + ext
        })

        myfunc(null, list)
    });
}
