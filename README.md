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

Mocha's representation of a test suite (the describe function) takes two parameters-->a string describing all tests inside, and a function wrapping them all together

`describe('checkForShip', function () {
 	var checkForShip = require('../game_logic/ship_methods').checkForShip;
 });`
 
 
 * Adding “_test” to your test file names makes finding them more easily
 * Mocha’s representation of a test suite – the describe function – takes two arguments: a string describing all the tests inside, and a function to wrap them all together
 * A suite will break at first (that's OK), because the function you're referring to may not exist yet
 * The hardest part about BDD is deciding how the function we haven’t written yet might actually work.
 * Even without writing tests, programmers still do a lot of guesswork as they program --- it's rare that you know exactly how every part of a program works at first
 
* Chai's .empty method checks for empty objects, arrays, or strings
* .empty makes it easy to write expectations without worrying about how the real code will work
* You call arrays that look the same “deeply equal”, because their “deep” internal values are equal
* The .deep method allows you to make deep equality comparisons
 
 * Mocha provides useful functions to help us set up conditions for our tests, like creating test objects and simulating the conditions inside our app
 * The "setup" phase is the part of our tests where we set up conditions for testing
 * Mocha splits the setup process into two blocks: the stuff we set up before the entire series of tests, and the stuff we set up before each individual test
 * Mocha provides the hooks before(), after(), beforeEach(), and afterEach() to set up preconditions and clean up after your tests
 * beforeEach() works like before, only it will run the function before each spec, instead of just once at the start of the suite
 
* Mocha provides a "teardown" phase to remove unwanted variables
* If your tests change your development environment, like creating a pretend database, or start up a local server, you can use the teardown block to set your system back to where it started
* Mocha's after() and afterEach() hooks work exactly like before() and beforeEach(), except that they happen after
* If you find yourself depending heavily on the teardown phase, you should double-check that you’re testing the right kind of function

* An edge case is a radical situation your function might end up in, but it isn’t how your function would normally work
* Edge cases occur at an extreme (maximum or minimum) operating parameter
* Predicting edge cases can be challenging

* A good use of the --reporter flag is when you only want to see test failures
* To show only the failing test errors, you can use mocha --reporter min
 * mocha --reporter markdown will print the same test report we’re used to, but using markdown formatting
* You can add a --reporter flag to your package.json -- file in your “test” command -- so that npm test will always use that reporter

* To mark a test as “pending”, do not add a function as a second argument
* You can also mark tests as "pending" by typing an x in front of the pending block, like xdescribe() or xit()
* Adding an x in front of the describe() block marks all of the specs inside as "pending"

* You can write custom `mocha --watch` commands whenever you plan on working on one particular file a lot
* You can also save a general `--watch` command in your package.json to run your tests all the time

`"scripts":  {
   "test": "mocha",
   "test:watch": "mocha --watch ./test ./"
  }`
* The first argument describes the tests you want to run: all the tests in the ./test directory. The second argument describes the files you want to watch for changes: all the files in the current directory ./. You must include a . at the start of your file path, or Mocha will get confused on which files you’re looking for