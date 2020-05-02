var configValues=require('./config');

module.exports={
    getDbConnnectionString: function(){
       return 'mongodb+srv://test:@nodetodo-sample-xhpu0.mongodb.net/test?retryWrites=true&w=majority';
    }
}
