<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Snippet } from 'svelte';

	type MenuItem = {
		label: string;
		href: string;
		active?: boolean;
	};

	type LanguageOption = {
		value: string;
		label: string;
	};

	interface Props {
		brand: string;
		menuItems: MenuItem[];
		menuGroupLabel?: string;
		title: string;
		subtitle?: string;
		breadcrumbItems?: string[];
		footerText?: string;
		languageLabel?: string;
		languageOptions?: LanguageOption[];
		selectedLanguage?: string;
		onLanguageChange?: (language: string) => void;
		children: Snippet;
	}

	let {
		brand,
		menuItems,
		menuGroupLabel = 'Main',
		title,
		subtitle = '',
		breadcrumbItems = [],
		footerText = '',
		languageLabel = 'Language',
		languageOptions = [
			{ value: 'en', label: 'English' },
			{ value: 'nl', label: 'Dutch' }
		],
		selectedLanguage = 'en',
		onLanguageChange,
		children
	}: Props = $props();

	let collapsed = $state(false);

	const toggleCollapse = () => {
		collapsed = !collapsed;
	};

	const handleLanguageChange = (event: Event) => {
		const target = event.target as HTMLSelectElement;
		onLanguageChange?.(target.value);
	};
</script>

<div class="app-layout">
	<aside class="sider" class:collapsed>
		<button type="button" class="collapse-trigger" onclick={toggleCollapse}>
			{collapsed ? '›' : '‹'}
		</button>

		<div class="brand" title={brand}>
			{#if collapsed}
				{brand.slice(0, 1)}
			{:else}
				{brand}
			{/if}
		</div>

		<nav class="menu">
			{#if !collapsed}
				<p class="menu-group">{menuGroupLabel}</p>
			{/if}
			{#each menuItems as item (item.label)}
				<a class="menu-item" class:active={item.active} href={resolve(item.href)} title={item.label}>
					<span class="menu-icon">•</span>
					{#if !collapsed}
						<span>{item.label}</span>
					{/if}
				</a>
			{/each}
		</nav>
	</aside>

	<div class="main-layout">
		<header class="header">
			<div class="header-title">
				<h1>{title}</h1>
				{#if subtitle}
					<p>{subtitle}</p>
				{/if}
			</div>

			<div class="header-actions">
				<label for="language-select">{languageLabel}</label>
				<select id="language-select" value={selectedLanguage} onchange={handleLanguageChange}>
					{#each languageOptions as option (option.value)}
						<option value={option.value}>{option.label}</option>
					{/each}
				</select>
			</div>
		</header>

		<main class="content">
			<div class="breadcrumb" aria-label="Breadcrumb">
				{#if breadcrumbItems.length > 0}
					{#each breadcrumbItems as crumb, index (crumb)}
						<span class="crumb" class:active={index === breadcrumbItems.length - 1}>{crumb}</span>
						{#if index < breadcrumbItems.length - 1}
							<span class="separator">/</span>
						{/if}
					{/each}
				{/if}
			</div>

			<section class="content-body">
				<div class="content-inner">
					{@render children()}
				</div>
			</section>
		</main>

		<footer class="footer">{footerText}</footer>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		background: #f5f5f5;
		color: #1f1f1f;
	}

	.app-layout {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 220px 1fr;
	}

	.sider {
		position: relative;
		background: #001529;
		color: #fff;
		padding: 16px 12px;
		transition: width 0.2s ease;
	}

	.sider.collapsed {
		width: 80px;
	}

	.collapse-trigger {
		position: absolute;
		top: 12px;
		right: 12px;
		width: 28px;
		height: 28px;
		border: 1px solid rgb(255 255 255 / 0.2);
		background: transparent;
		color: #fff;
		border-radius: 6px;
		cursor: pointer;
	}

	.brand {
		font-size: 18px;
		font-weight: 700;
		padding: 30px 10px 14px;
		border-bottom: 1px solid rgb(255 255 255 / 0.12);
	}

	.menu {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-top: 16px;
	}

	.menu-group {
		margin: 0 10px 8px;
		font-size: 12px;
		opacity: 0.65;
		text-transform: uppercase;
	}

	.menu-item {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 10px;
		border-radius: 8px;
		color: rgb(255 255 255 / 0.88);
		text-decoration: none;
		font-size: 14px;
	}

	.menu-item:hover {
		background: rgb(255 255 255 / 0.12);
	}

	.menu-item.active {
		background: #1677ff;
		color: #fff;
	}

	.menu-icon {
		font-size: 12px;
		line-height: 1;
	}

	.main-layout {
		display: grid;
		grid-template-rows: 64px 1fr 56px;
	}

	.header {
		padding: 0 16px;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f0f0f0;
	}

	.header-title h1 {
		margin: 0;
		font-size: 24px;
		line-height: 1.2;
	}

	.header-title p {
		margin: 2px 0 0;
		font-size: 12px;
		color: #8c8c8c;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.header-actions label {
		font-size: 14px;
		color: #595959;
	}

	.header-actions select {
		min-width: 130px;
		height: 32px;
		border: 1px solid #d9d9d9;
		border-radius: 8px;
		padding: 0 8px;
		background: #fff;
	}

	.content {
		margin: 0;
		padding: 0 16px;
	}

	.breadcrumb {
		margin: 16px 0;
		min-height: 22px;
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		color: #8c8c8c;
	}

	.crumb.active {
		color: #262626;
		font-weight: 600;
	}

	.separator {
		opacity: 0.6;
	}

	.content-body {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
		min-height: 360px;
		background: #fff;
		border-radius: 10px;
		border: 1px solid #f0f0f0;
	}

	.content-inner {
		width: 100%;
		max-width: 1200px;
	}

	.footer {
		display: grid;
		place-items: center;
		text-align: center;
		background: #fff;
		border-top: 1px solid #f0f0f0;
		font-size: 13px;
		color: #8c8c8c;
	}

	@media (max-width: 1024px) {
		.app-layout {
			grid-template-columns: 1fr;
		}

		.sider {
			display: none;
		}
	}
</style>
