export default {
	"**/*.ts?(x)": [
		() => "tsc -p packages/multibuild/tsconfig.json --noEmit",
		"eslint --max-warnings 0 --ignore-pattern dist",
	],
	"*": "prettier --ignore-unknown --write",
};
