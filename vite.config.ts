/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2024-04-19 15:04:22
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2024-04-19 15:13:48
 * @FilePath: \vite-project\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslintPlugin()],
})
