
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MANPATH: string;
	export const TERM_PROGRAM: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const DOTNET_CLI_TELEMETRY_OPTOUT: string;
	export const NVM_CD_FLAGS: string;
	export const PYENV_ROOT: string;
	export const _P9K_TTY: string;
	export const GEM_HOME: string;
	export const npm_package_dependencies_axios: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_config_version_git_tag: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const CONDA_SHLVL: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_init_license: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const ZSH: string;
	export const npm_package_readmeFilename: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const npm_package_description: string;
	export const LS_COLORS: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const POWERSHELL_TELEMETRY_OPTOUT: string;
	export const CONDA_EXE: string;
	export const HOMEBREW_NO_ANALYTICS: string;
	export const npm_package_dependencies_monaco_editor: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const TMUX: string;
	export const LSCOLORS: string;
	export const _CE_CONDA: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const LaunchInstanceID: string;
	export const _: string;
	export const CONDA_PREFIX: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const JAVA_HOME: string;
	export const npm_package_scripts_preview: string;
	export const EDITOR: string;
	export const P9K_SSH: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const P9K_TTY: string;
	export const npm_package_name: string;
	export const ITERM_PROFILE: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const TMUX_PANE: string;
	export const XPC_FLAGS: string;
	export const npm_config_bin_links: string;
	export const RUBY_ENGINE: string;
	export const XPC_SERVICE_NAME: string;
	export const _CE_M: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const GPG_TTY: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const COLORFGBG: string;
	export const HOME: string;
	export const PYENV_SHELL: string;
	export const SHLVL: string;
	export const npm_package_type: string;
	export const LC_TERMINAL_VERSION: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const GEM_ROOT: string;
	export const npm_config_version_git_message: string;
	export const ITERM_SESSION_ID: string;
	export const CONDA_PYTHON_EXE: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_lifecycle_script: string;
	export const GEM_PATH: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const CONDA_DEFAULT_ENV: string;
	export const GOPATH: string;
	export const RUBY_ROOT: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const DISPLAY: string;
	export const LC_TERMINAL: string;
	export const RUBYOPT: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const SECURITYSESSIONID: string;
	export const RUBY_VERSION: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_package_dependencies_svelte_svg: string;
	export const npm_config_version_tag_prefix: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MANPATH: string;
		TERM_PROGRAM: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NODE: string;
		INIT_CWD: string;
		DOTNET_CLI_TELEMETRY_OPTOUT: string;
		NVM_CD_FLAGS: string;
		PYENV_ROOT: string;
		_P9K_TTY: string;
		GEM_HOME: string;
		npm_package_dependencies_axios: string;
		npm_package_devDependencies_typescript: string;
		npm_config_version_git_tag: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		CONDA_SHLVL: string;
		npm_package_scripts_lint: string;
		npm_config_init_license: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		TERM_SESSION_ID: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_private: string;
		npm_config_registry: string;
		ZSH: string;
		npm_package_readmeFilename: string;
		NVM_DIR: string;
		USER: string;
		npm_package_description: string;
		LS_COLORS: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		POWERSHELL_TELEMETRY_OPTOUT: string;
		CONDA_EXE: string;
		HOMEBREW_NO_ANALYTICS: string;
		npm_package_dependencies_monaco_editor: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_eslint: string;
		npm_execpath: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		TMUX: string;
		LSCOLORS: string;
		_CE_CONDA: string;
		PATH: string;
		npm_config_argv: string;
		LaunchInstanceID: string;
		_: string;
		CONDA_PREFIX: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_package_devDependencies_tailwindcss: string;
		JAVA_HOME: string;
		npm_package_scripts_preview: string;
		EDITOR: string;
		P9K_SSH: string;
		npm_lifecycle_event: string;
		LANG: string;
		P9K_TTY: string;
		npm_package_name: string;
		ITERM_PROFILE: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		TMUX_PANE: string;
		XPC_FLAGS: string;
		npm_config_bin_links: string;
		RUBY_ENGINE: string;
		XPC_SERVICE_NAME: string;
		_CE_M: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		GPG_TTY: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_autoprefixer: string;
		COLORFGBG: string;
		HOME: string;
		PYENV_SHELL: string;
		SHLVL: string;
		npm_package_type: string;
		LC_TERMINAL_VERSION: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		GEM_ROOT: string;
		npm_config_version_git_message: string;
		ITERM_SESSION_ID: string;
		CONDA_PYTHON_EXE: string;
		LESS: string;
		LOGNAME: string;
		YARN_WRAP_OUTPUT: string;
		npm_lifecycle_script: string;
		GEM_PATH: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		CONDA_DEFAULT_ENV: string;
		GOPATH: string;
		RUBY_ROOT: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		DISPLAY: string;
		LC_TERMINAL: string;
		RUBYOPT: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		SECURITYSESSIONID: string;
		RUBY_VERSION: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_package_dependencies_svelte_svg: string;
		npm_config_version_tag_prefix: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
