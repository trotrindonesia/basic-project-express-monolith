module.exports = {
  lines: 100,
  statements: 40,
  functions: 100,
  branches: 80,
  'check-coverage': true,
  include: ['src/**/*.js', 'lib/**/*.js'],
  exclude: [
    'src/**/index.js',
    'lib/**/index.js',
    'src/index.js',
    '**/*.spec.js',
    'test/',
    'src/routes',
    '*.hbs'
  ],
  reporter: ['html', 'text', 'lcov', 'text-summary'],
  all: true,
  cache: true,
  'report-dir': './artifacts/coverage'
};