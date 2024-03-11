/**
 * Importing the 'expect' function from the 'chai' library to perform assertions
 */
import {expect} from 'chai';

/**
 * Importing the NumbersValidator class from the relative path '../app/numbers-validator'
 * so we can test its methods.
 */
import {NumbersValidator} from '../../app/numbers_validator.js';
import {describe} from 'mocha';

/**
 * 'describe' is used to group related tests together into a test suite.
 * Here, it describes a suite of tests for the 'isNumberEven' method of NumbersValidator class.
 */
describe('isNumberEven positive tests', () => {
    /**
     * Declaring a variable 'validator' outside of the 'beforeEach' and 'it' blocks
     * to make it accessible throughout this describe block.
     */
    let validator;

    /**
     * 'beforeEach' is a hook that runs before each test ('it' block) within this 'describe' block.
     * It's usually used for setting up the test environment.
     */
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    /**
     * 'afterEach' is a hook that runs after each test. It is often used for cleanup activities.
     */
    afterEach(function() {
    // Sets the validator variable to null to clean up memory after each test
        validator = null;
    });

    /**
       * 'it' is used for individual test cases - it includes the actual test.
       * The string argument describes what the test should do.
       */
    it('should return true when provided with an even number', () => {
        /**
         * Using 'expect' to assert that the 'isNumberEven' method returns true when
         * passed the even number 4. The '.to.be.equal(true)' is the actual assertion check.
         */
        expect(validator.isNumberEven(4)).to.be.equal(true);
    });

    it('should return false when provided with a not-even number', () => {
        /**
         * Using 'expect' to assert that the 'isNumberEven' method returns true when
         * passed the even number 4. The '.to.be.equal(true)' is the actual assertion check.
         */
        expect(validator.isNumberEven(5)).to.be.equal(false);
    });

    it('should throw an error when provided a param different than number', () => {
        expect(() => {
            validator.isNumberEven('4');
        }).to.throw('[4] is not of type "Number" it is of type "string"');
    });
});

describe('getEvenNumbersFromArray positive tests', () => {
    let arrayValidator;

    beforeEach(() => {
        arrayValidator = new NumbersValidator();
    });

    afterEach(function() {
        // Sets the validator variable to null to clean up memory after each test
        arrayValidator = null;
    });

    it('should return an Array of even numbers when provided an Array of numbers', () => {
        expect(arrayValidator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6, 7, 8])).to.contains( 2, 4, 6, 8);
    });

    it('should throw error if the when provided an Array different than numbers', () => {
        expect(() => {
            arrayValidator.getEvenNumbersFromArray(['1', '2', 'johan']);
        }).throw('[1,2,johan] is not an array of "Numbers"');
    });
});

describe('isAllNumbers positive tests', () => {
    let arrayValidator;

    beforeEach(() => {
        arrayValidator = new NumbersValidator();
    });

    afterEach(function() {
        // Sets the validator variable to null to clean up memory after each test
        arrayValidator = null;
    });

    it('should return true when provided with an Array of numbers', () => {
        expect(arrayValidator.isAllNumbers([1, 2, 3, 4, 5])).to.be.equal(true);
    });

    it('should return false when provided with an Array different of numbers', () => {
        expect(arrayValidator.isAllNumbers(['1', '2', 'test', 'automation'])).to.be.equal(false);
    });

    it('should throw error when provided param different than Array', () => {
        expect(() => {
            arrayValidator.isAllNumbers('Epam');
        }).throw('[Epam] is not an array');
    });
});

describe('isInteger positive tests', () => {
    let validator;

    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(function() {
        // Sets the validator variable to null to clean up memory after each test
        validator = null;
    });

    it('should return true when provided an integer', () => {
        expect(validator.isInteger(10)).to.be.equal(true);
    });

    it('should throw error when provided a param different than Integer', () => {
        expect(() => {
            validator.isInteger('Software');
        }).throw('[Software] is not a number');
    });
});


