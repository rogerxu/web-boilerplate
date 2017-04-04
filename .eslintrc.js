module.exports = {
  "root": true,
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "plugins": [
    "compat"
  ],
  "settings": {
    "polyfills": ["fetch"]
  },
  "rules": {
    "compat/compat": "error",
    "max-len": "warn"
  }
};
