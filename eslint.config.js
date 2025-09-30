import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import {
  configureVueProject,
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

configureVueProject({
  tsSyntaxInTemplates: true,
  scriptLangs: ['ts', 'js', 'tsx', 'jsx'],
  allowComponentTypeUnsafety: true,
  rootDir: import.meta.dirname,
})

export default defineConfigWithVueTs(
  js.configs.recommended,

  pluginVue.configs['flat/essential'],

  vueTsConfigs.base,

  defineConfig({ languageOptions: { globals: { ...globals.browser } } }),

  defineConfig(globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**'])),

  skipFormatting
)
