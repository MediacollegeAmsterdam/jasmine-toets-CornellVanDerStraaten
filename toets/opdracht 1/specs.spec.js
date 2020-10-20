describe('Standard Browser Tests', function () {
    it('should have the correct title', function () {
        expect(document.title).toBe('Verbeteringen');

    });
    it('should be UTF-8 Charset'), function () {
        expect(document.charset).toBe('UTF-8');
    }
});

describe('unitTest Object Content Tests', function () {
    it('should be the correct item', function () {
        expect(unitTest.item).toBe('voorbeeld');
    });
    it('should have the same number', function () {
        expect(unitTest.nummer).toEqual(3);
    });
    it('should have the same description', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
    it('should have the same message', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});
