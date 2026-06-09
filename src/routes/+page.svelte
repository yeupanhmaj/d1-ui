<script lang="ts">
	import DashboardPanel from '$lib/components/dashboard/DashboardPanel.svelte';
	import DashboardStatCard from '$lib/components/dashboard/DashboardStatCard.svelte';
	import EmptyState from '$lib/components/dashboard/EmptyState.svelte';
	import QuickActions from '$lib/components/dashboard/QuickActions.svelte';
	import UsersTable from '$lib/components/dashboard/UsersTable.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const quickActions = ['Create user', 'Import CSV', 'Export report'];
</script>

<div class="stats">
	<DashboardStatCard label="Total users" value={data.data.length} />
	<DashboardStatCard label="Active sessions" value={0} />
	<DashboardStatCard label="Conversion" value="0%" />
	<DashboardStatCard label="Revenue" value="$0" />
</div>

<div class="panel-grid">
	<DashboardPanel title="Recent activity">
		<EmptyState title="No activity yet" description="New updates and events will appear here." />
	</DashboardPanel>

	<DashboardPanel title="Quick actions">
		<QuickActions actions={quickActions} />
	</DashboardPanel>
</div>

<DashboardPanel title="Users">
	{#if data.data.length === 0}
		<EmptyState
			title="No users found"
			description="Add your first user to populate this table."
			large
		/>
	{:else}
		<UsersTable users={data.data} />
	{/if}
</DashboardPanel>

<style>
	.stats {
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	.panel-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 16px;
	}

	@media (max-width: 1024px) {
		.stats,
		.panel-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
