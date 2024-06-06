import { describe, expect, it } from 'vitest';
import { fizzBuzz, max, calculateAverage, factorial } from '../src/intro';

describe('max', () => {
	it('should return  the first argument if it is greater', () => {
		const result = max(2, 1);
		expect(result).toBe(2);
	});
	it('should return the second argument if it is greater', () => {
		expect(max(1, 2)).toBe(2);
	});
	it('should return the first argument if argument are equal', () => {
		expect(max(1, 1)).toBe(1);
	});
});

describe('fizzBuzz', () => {
	it('n divide by 3 and n divide by 5 to remaining zero', () => {
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});
	it('n divide by only 3 to remaining zero', () => {
		expect(fizzBuzz(9)).toBe('Fizz');
	});
	it('n divide by 5 to remaining zero', () => {
		expect(fizzBuzz(10)).toBe('Buzz');
	});
	it('n not divide 3 and 5', () => {
		expect(fizzBuzz(4)).toBe('4');
	});
});

describe('calculateAverage', () => {
	it('should return Nan if given an empty array', () => {
		expect(calculateAverage([])).toBe(NaN);
	});
	it('should calculate the average of average with a single element', () => {
		expect(calculateAverage([1])).toBe(1);
	});
	it('should calculate the average of an array with three elements', () => {
		expect(calculateAverage([1, 2])).toBe(1.5);
	});
});

describe('factorial', () => {
	it('should return 1 if given 0', () => {
		expect(factorial(0)).toBe(1);
	});
	it('should return 1 if given 1', () => {
		expect(factorial(1)).toBe(1);
	});
	it('should return 6 if given 3', () => {
		expect(factorial(3)).toBe(6);
	});
	it('should return undefined if given a negative number', () => {
		expect(factorial(-4)).toBeUndefined()
	});
});
