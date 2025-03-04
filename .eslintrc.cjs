module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:prettier/recommended'],
	ignorePatterns: ['dist', 'vite.config.ts'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.eslint.json',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-console': 'warn',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.test.js',
					'**/*.spec.js',
					'**/*.test.ts',
					'**/*.spec.ts',
					'**/*.test.tsx',
					'**/*.spec.tsx',
					'**/.storybook/**',
					'**/stories/**',
					'**/*.stories.ts',
					'**/*.stories.tsx',
					'**/*.setup.ts',
				],
			},
		],
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				labelComponents: ['Select'],
				labelAttributes: ['label'],
				controlComponents: ['*'],
				depth: 3,
			},
		],
		'react/require-default-props': 'off',
		'react/function-component-definition': [
			'error',
			{
				namedComponents: ['function-declaration', 'arrow-function'],
				unnamedComponents: 'arrow-function',
			},
		],
	},
};
