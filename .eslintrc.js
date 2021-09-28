module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:vue/vue3-strongly-recommended', // 适用于vue3 https://eslint.vuejs.org/rules/
	],
	plugins: ['@typescript-eslint'],

	// add your custom rules here
	// it is base on https://github.com/vuejs/eslint-config-vue
	rules: {
		'brace-style': [1, '1tbs', {
			'allowSingleLine': true
		}], // 强制在代码块中使用一致的大括号风格
		'curly': [2, 'multi-line'], // 强制所有控制语句使用一致的括号风格
		'eol-last': 2, // 要求或禁止文件末尾存在空行
		'eqeqeq': ['error', 'smart'], // 要求使用 === 和 !==
		'handle-callback-err': [1, '^(err|error)$'], // 要求回调函数中有容错处理
		'indent': [2, 'tab', {
			'SwitchCase': 1
		}], // 强制使用一致的缩进
		'jsx-quotes': [2, 'prefer-single'], // 强制在 JSX 属性中一致地使用双引号或单引号
		'key-spacing': 2, // 强制在对象字面量的属性中键和值之间使用一致的间距
		'keyword-spacing': 2, // 强制在关键字前后使用一致的空格
		'new-cap': [2, {
			'capIsNew': false
		}], // 要求构造函数首字母大写
		'new-parens': 2, // 强制或禁止调用无参构造函数时有圆括号
		'no-array-constructor': 2, // 禁用 Array 构造函数
		'no-label-var': 2, // 不允许标签与变量同名
		'no-multiple-empty-lines': [2, {
			'max': 1
		}], // 禁止出现多行空行
		'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
		'no-path-concat': 2, //  禁止对 __dirname 和 __filename 进行字符串连接
		'no-throw-literal': 2, // 禁止抛出异常字面量
		'no-trailing-spaces': 2, // 禁用行尾空格
		'no-undef-init': 2, // 禁止将变量初始化为 undefined
		'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
		'no-unneeded-ternary': 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
		'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
		'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
		'no-useless-constructor': 2, // 禁用不必要的构造函数
		'no-whitespace-before-property': 2, // 禁止属性前有空白
		'one-var': [2, {
			'initialized': 'never'
		}], // 强制函数中的变量要么一起声明要么分开声明
		'operator-linebreak': 2, // 强制操作符使用一致的换行符
		'padded-blocks': [2, 'never'], // 要求或禁止块内填充
		'quotes': [2, 'single'], // 强制使用一致的反勾号、双引号或单引号
		'semi': [2, 'never', {
			'beforeStatementContinuationChars': 'always' // 如果下一句以 [、(、/、+ 或 - 开头，要求句末有分号
		}], // 要求或禁止使用分号代替 ASI
		'semi-spacing': 2, // 强制分号前后有空格
		'space-before-blocks': 2, // 强制在块之前使用一致的空格
		'space-before-function-paren': 2, // 强制在 function的左括号之前使用一致的空格
		'space-in-parens': 2, // 强制在圆括号内使用一致的空格
		'space-infix-ops': 2, // 要求操作符周围有空格
		'template-curly-spacing': 2, // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
		'yoda': [2, 'never'], // 要求或禁止 “Yoda” 条件
		'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁用 debugger
		'object-curly-spacing': [2, 'always', {
			'arraysInObjects': false,
			'objectsInObjects': false
		}], // 强制在大括号中使用一致的空格
		'array-bracket-spacing': 1, // 强制数组方括号中使用一致的空格
		'no-var-requires': 0,

		// typesctipt rules
		'@typescript-eslint/type-annotation-spacing': 1,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/no-explicit-any': 0,

		'vue/singleline-html-element-content-newline': 0,
		'vue/max-attributes-per-line': [1,{
			'singleline': {
				'max': 5,
				'allowFirstLine': true
			},
			'multiline': {
				'max': 1,
				'allowFirstLine': false
			}
		}]
	}
}
