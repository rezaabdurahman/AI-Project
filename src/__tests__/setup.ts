// Jest setup file for global test configuration

// Mock environment variables for testing
process.env['NODE_ENV'] = 'test';
process.env['LOG_LEVEL'] = 'silent';

// Global test configuration
jest.setTimeout(10000);

// Setup and teardown hooks
beforeAll(() => {
  // Global setup before all tests
});

afterAll(() => {
  // Global cleanup after all tests
});

beforeEach(() => {
  // Setup before each test
});

afterEach(() => {
  // Cleanup after each test
});
