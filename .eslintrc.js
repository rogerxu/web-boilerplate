module.exports = {
  "root": true,
  "extends": "airbnb",
  "plugins": [
    "compat"
  ],
  "env": {
    "browser": true
  },
  "rules": {
    "compat/compat": "error",
    "new-cap": ["error", {
      "capIsNewExceptions": ["Map", "List"]
    }]
  }
};
