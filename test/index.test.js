import query from '../src/index.js';

describe('getSearchParamsToStr', function() {
    test('测试param拼接', function() {
        expect(query.getSearchParamsToStr({
            a: 1,
            b: 2,
            c: ' '
        })).toBe('a=1&b=2&c=%20');
    });

    
});