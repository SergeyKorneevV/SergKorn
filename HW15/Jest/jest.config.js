const config = {
	reporters: [
      "default",
    	[ "jest-junit", { suiteName: "jest tests" } ]
  ]
};

module.exports = config;