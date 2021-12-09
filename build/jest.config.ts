import path from 'path';

export default {
    transform: {
        '\\.tsx?$': [
            'rollup-jest',
            {
                configFile: path.resolve(__dirname, '../rollup.config.test.js')
            }
        ]
    },
    testEnvironment: 'node', // dom
    testMatch: ['**/__tests__/**/*.spec.ts'],
    moduleFileExtensions: ['ts', 'js'],
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**'],
    coverageDirectory: './report/coverage',
    coverageReporters: [
        'json',
        'html',
        'lcov',
        'lcovonly',
        'cobertura',
        'clover',
        'html-spa',
        'teamcity',
        'text'
    ],
    reporters: [
        'default',
        [
            'jest-html-reporter',
            {
                pageTitle: 'Test Report',
                outputPath: './report/test-report.html'
            }
        ]
    ]
};
