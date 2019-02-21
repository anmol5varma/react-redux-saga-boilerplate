module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'react/forbid-prop-types': 0,
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        'no-console': 1,
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
    }
};