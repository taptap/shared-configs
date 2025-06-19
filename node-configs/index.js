// Main entry point for @taptap/node-configs
// This package provides shared configuration files via subpath exports
// Usage: import config from '@taptap/node-configs/biome'

export default {
  name: '@taptap/node-configs',
  description: 'Shared configuration files for TapTap Node.js projects',
  configs: [
    'autocorrect',
    'biome', 
    'markdownlint-cli2',
    'prettier'
  ]
};