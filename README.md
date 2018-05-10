#Unit Testing in JavaScript
UNIT TESTS

Benefits of automated testing:
-Results displayed in an informative way
-Test files are separate from real code
-Output is easy to read and understand
-Guarantees code works as expected
-Instantly see if anything has broken when making changes


Unit Tests
You run unit tests constantly during the development process to ensure that everything is working, every time you make a change.

Integration Tests
You use integration tests when you add new code to pre-existing code, to make sure that not only do all of the pieces work individually as expected, but also that they run together correctly without breaking.

End-to-End Testing
Run your application from start to finish for all the user stories you can think of. This ensures that the program is ready to go live, and that the special details of deployment do not mess up the code you carefully tested on your local machine with unit tests and integration tests. You conduct end-to-end tests occasionally, maybe only a few times during a product’s life-cycle, as they are very time consuming and expensive.


Behavior Driven Development (BDD) is an approach to building software. In BDD, instead of writing code and then seeing if it works, you write tests first and code second. This means you can use tests as an outline for the application code you actually want to write.

Red > Green > Refactor (write a failing test, make the test pass, make the passing code better)
1. Write the tests, even though at first they’ll fail
2. Fix the function in the first way that comes to mind, just to get your tests passing
3. Go back and refactor the function for improvements, repeating the cycle until you’re ready to move on

Chai is an expectation library that includes special functions that throw an error when an expectation is not met.

We should test any code that our application absolutely needs to function

Advantages of writing unit tests:
1. They can be automated so they're easier to run and check
2. Unit tests are isolated from our running code base, so they don't affect the performance or legibility of our code
3. The output from unit tests is often easier to read and more informative than our manual debugging statements

Video review
* To have Mocha and Chai in your project, type `npm install --save-dev mocha chai`
* The `--save-dev` flag means that these tools are just for development


It’s important that the test directory is specifically named "test" (not "tests" or "Test"), and it has to be located at the same level of your project as the package.json file
With your test directory in place, you simply `run npm test`, and Mocha will automatically run every test in the test directory

- A test suite is a block of unit tests that are all closely related; they test the same function or similar parts of our code base
- We introduce a test suite in Mocha using describe()
- Each individual unit test is sometimes called a “spec”
- Mocha makes it natural to write specs by containing them in a function called it()
- To use Chai's expect method, import Chai at the top of your file: var expect = require('chai').expect

`expect(false).to.be.ok;` // triggers `AssertionError: expected false to be truthy`