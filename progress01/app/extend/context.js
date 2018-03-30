'use strict'
module.exports = {
    get isIOS() {
        const iosreg = /iphone|ipad|ipod/i;
        return iosreg.test(this.get('user-agent'));
    },
};