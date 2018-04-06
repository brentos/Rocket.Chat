// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by rocketchat-irc-bridge.js.
import { name as packageName } from "meteor/rocketchat-irc-bridge";

// Write your tests here!
// Here is an example.
Tinytest.add('rocketchat-irc-bridge - example', function (test) {
  test.equal(packageName, "rocketchat-irc-bridge");
});
