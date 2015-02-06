'use strict';
/* global sofa */

describe('sofa.HashService', function () {

    var hashService;

    beforeEach(function () {
        hashService = new sofa.HashService();
    });
    
    it('should be defined', function () {
        expect(hashService).toBeDefined();
    });

    it('should have a method hashString', function () {
        expect(hashService.hashString).toBeDefined();
    });

    it('should have a method hashObject', function () {
        expect(hashService.hashObject).toBeDefined();
    });

    describe('sofa.HashService.hashString', function () {

        var input = 'product123';

        it('should return a string', function () {
            expect(typeof hashService.hashString(input)).toBe('string');
        });

    });

    describe('sofa.HashService.hashObject', function () {

        var input = {test: 'foo'};

        it('should return a string', function () {
            expect(typeof hashService.hashObject(input)).toBe('string');
        });

    });

});
