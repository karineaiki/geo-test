const calculateDistance = require ('./geo.js');

test('two same latitudes and logitude equal 0', () => {
    expect(calculateDistance([48.8566, 2.3522],[48.8566, 2.3522])).toBe(0);
});

test('distance between Paris and Londres is about 343556m', () =>{
    expect(calculateDistance([48.8566, 2.3522],[51.5074, -0.1278])).toBeCloseTo(343556, 0.1);
})

test('expected error if start and end are not arrays', () => {
    expect(() => calculateDistance(1234, 5678)).toThrow("Input must be two arrays, each containing exactly two numbers (latitude and longitude).");
});

test('expected error if start and end are not numbers', () => {
    expect(() => calculateDistance(['Paris', 'France'], ['Londres', 'Royaume-Unis'])).toThrow("Both latitude and longitude must be valid numbers.");
})

