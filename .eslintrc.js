module.exports = {
  "root": true,
  "extends": "airbnb",
  "plugins": [
    "compat"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "settings": {
    "polyfills": ["fetch"]
  },
  "rules": {
    "compat/compat": "error",
    "max-len": "warn"
  }
};
