/**
 * Created by jumbo on 2017/7/5.
 */
module.exports={
    port:3000,
    session:{
        secret:"myblog",
        key:"myblog",
        maxAge:2592000000
    },
    mongodb:"mongodb://root:root@ds014388.mlab.com:14388/myblog"
};