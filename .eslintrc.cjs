module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json'
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "react/jsx-key": "off",
        "multiline-ternary": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/space-before-function-paren": "off"
    }
}
