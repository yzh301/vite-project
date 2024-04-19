/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2024-04-19 15:15:36
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2024-04-19 15:15:47
 * @FilePath: \vite-project\.stylelintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
	// 继承推荐规范配置
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-scss',
		'stylelint-config-recommended-vue/scss',
		'stylelint-config-html/vue',
		'stylelint-config-recess-order',
	],
	// 指定不同文件对应的解析器
	overrides: [
		{
			files: ['**/*.{vue,html}'],
			customSyntax: 'postcss-html',
		},
		{
			files: ['**/*.{css,scss}'],
			customSyntax: 'postcss-scss',
		},
	],
	// 自定义规则
	rules: {
		// 允许 global 、export 、v-deep等伪类
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep'],
			},
		],
	},
}
