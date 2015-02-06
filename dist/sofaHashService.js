/**
 * sofa-hash-service - v0.1.0 - Fri Feb 06 2015 16:23:15 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (sofa, document, undefined) {
'use strict';
/* global sofa */
/*jshint bitwise: false*/

/**
 * @sofadoc class
 * @name sofa.HashService
 * @distFile dist/sofa.hashService.js
 * @package sofa-hash-service
 * @requiresPackage sofa-core
 *
 * @description
 * A service that creates hashes for strings or objects.
 *
 */
sofa.define('sofa.HashService', function () {

    var self = {};

    /**
     * @method hashString
     * @memberof sofa.HashService
     *
     * @description
     * Creates a hash for the given string
     *
     * @param {str} The string to base the hash on
     * @return {str} The hash
     */
    self.hashString = function (str) {
        // http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
        var hash = 0, i, chr, len;
        if (str.length === 0) {
            return hash;
        }

        for (i = 0, len = str.length; i < len; i++) {
            chr   = str.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }

        return hash.toString();
    };

    /**
     * @method hashObject
     * @memberof sofa.HashService
     *
     * @description
     * Creates a hash for the given object
     *
     * @param {obj} The object to base the hash on
     * @return {str} The hash
     */
    self.hashObject = function (obj) {
        return self.hashString(JSON.stringify(obj));
    };

    return self;
});
}(sofa, document));
