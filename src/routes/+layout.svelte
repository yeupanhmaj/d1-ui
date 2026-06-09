<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import DashboardShell from '$lib/components/dashboard/DashboardShell.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const menuItems = [
		{ label: 'Dashboard', href: '/', active: true },
		{ label: 'Analytics', href: '/' },
		{ label: 'Users', href: '/' },
		{ label: 'Settings', href: '/' }
	];

	const languageOptions = [
		{ value: 'en', label: 'English' },
		{ value: 'nl', label: 'Dutch' }
	];

	let selectedLanguage = $state('en');
	const currentYear = new Date().getFullYear();

	const handleLanguageChange = (language: string) => {
		selectedLanguage = language;
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<DashboardShell
	brand="D1 UI"
	title="Dashboard"
	subtitle="Ant Design-style empty dashboard layout for SvelteKit"
	{menuItems}
	breadcrumbItems={['Dashboard']}
	footerText={`D1 UI © ${currentYear}`}
	languageLabel="Language"
	{languageOptions}
	{selectedLanguage}
	onLanguageChange={handleLanguageChange}
>
	{@render children()}
</DashboardShell>
