module.exports = {
    testEnvironment: "jsdom",
    setupFiles: ['./jest.setup.js'],
    roots: ["<rootDir>/tests"],
    transform: {
        "^.+\\.js$": "babel-jest"
    }
};