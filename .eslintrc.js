module.exports = {
  "root": true,
  "extends": "airbnb",
  "plugins": [
    "import"
  ],
  "env": {
    "browser": true
  },
  "rules": {
    "new-cap": ["error", {
      "capIsNewExceptions": ["Map", "List"]
    }]
  }
};
