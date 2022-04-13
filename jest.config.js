module.exports = {
    rootDir: process.cwd(),
    testMatch: [
        "**/?(*.)spec.js"
    ],
    setupFiles: [
        "jest-plugin-context/setup"
    ]
}