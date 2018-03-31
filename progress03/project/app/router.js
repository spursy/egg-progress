// module.exports = app=> {
//     const {router, controller} = app;
//     router.get('/', controller.home.isIOS);
// }

'use strict'

module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.isIOS);
}