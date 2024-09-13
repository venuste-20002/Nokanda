export default {
    transform: {
      '^.+\\.svelte$': 'svelte-jester',
    },
    moduleFileExtensions: ['js', 'svelte'],
    extensionsToTreatAsEsm: ['.svelte'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  }