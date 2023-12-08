const mongoose = require('mongoose');
const data = mongoose.Schema({
    Name:{
        type:String
    },
    Password:{
        type:String
    }
});
module.exports = mongoose.model('datas',data);
// const datas = mongoose.model('datas',data);
// module.exports = datas;