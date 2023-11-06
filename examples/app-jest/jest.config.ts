import preset from 'ts-jest/presets/index.js'
import type { JestConfigWithTsJest  } from 'ts-jest'

export default {
  injectGlobals: true,
  ...preset.defaultsESM,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.json',
        useESM: true,
      },
    ],
  },
} satisfies JestConfigWithTsJest
