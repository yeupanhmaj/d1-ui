<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="dashboard">
	<aside class="sider">
		<div class="brand">D1 UI</div>

		<nav class="menu">
			<p class="menu-group">Main</p>
			<a class="menu-item active" href="/">Dashboard</a>
			<a class="menu-item" href="/">Analytics</a>
			<a class="menu-item" href="/">Users</a>
			<a class="menu-item" href="/">Settings</a>
		</nav>
	</aside>

	<main class="layout">
		<header class="header">
			<div>
				<h1>Dashboard</h1>
				<p>Ant Design-style empty dashboard layout for SvelteKit</p>
			</div>
			<button type="button">+ New</button>
		</header>

		<section class="content">
			<div class="stats">
				<article class="card">
					<p>Total users</p>
					<strong>{data.data.length}</strong>
				</article>
				<article class="card">
					<p>Active sessions</p>
					<strong>0</strong>
				</article>
				<article class="card">
					<p>Conversion</p>
					<strong>0%</strong>
				</article>
				<article class="card">
					<p>Revenue</p>
					<strong>$0</strong>
				</article>
			</div>

			<div class="panel-grid">
				<section class="panel">
					<div class="panel-header">
						<h2>Recent activity</h2>
					</div>
					<div class="empty">
						<p class="empty-title">No activity yet</p>
						<p>New updates and events will appear here.</p>
					</div>
				</section>

				<section class="panel">
					<div class="panel-header">
						<h2>Quick actions</h2>
					</div>
					<div class="quick-actions">
						<button type="button" class="ghost">Create user</button>
						<button type="button" class="ghost">Import CSV</button>
						<button type="button" class="ghost">Export report</button>
					</div>
				</section>
			</div>

			<section class="panel">
				<div class="panel-header">
					<h2>Users</h2>
				</div>

				{#if data.data.length === 0}
					<div class="empty large">
						<p class="empty-title">No users found</p>
						<p>Add your first user to populate this table.</p>
					</div>
				{:else}
					<div class="table-wrapper">
						<table>
							<thead>
								<tr>
									<th>ID</th>
									<th>Name</th>
								</tr>
							</thead>
							<tbody>
								{#each data.data as user (user.id)}
									<tr>
										<td>{user.id}</td>
										<td>{user.name}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			</section>
		</section>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		background: #f5f7fa;
		color: #1f1f1f;
	}

	.dashboard {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 220px 1fr;
	}

	.sider {
		background: #001529;
		color: #fff;
		padding: 24px 16px;
	}

	.brand {
		font-size: 18px;
		font-weight: 700;
		padding: 0 10px 18px;
		border-bottom: 1px solid rgb(255 255 255 / 0.12);
	}

	.menu {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-top: 18px;
	}

	.menu-group {
		margin: 0 10px 8px;
		font-size: 12px;
		opacity: 0.65;
		text-transform: uppercase;
	}

	.menu-item {
		display: block;
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

	.layout {
		display: flex;
		flex-direction: column;
	}

	.header {
		height: 72px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 24px;
		background: #fff;
		border-bottom: 1px solid #f0f0f0;
	}

	.header h1 {
		font-size: 20px;
		margin: 0;
	}

	.header p {
		margin: 4px 0 0;
		font-size: 13px;
		color: #8c8c8c;
	}

	.header button {
		border: 0;
		background: #1677ff;
		color: #fff;
		padding: 8px 14px;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
	}

	.content {
		padding: 24px;
		display: grid;
		gap: 16px;
	}

	.stats {
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	.card,
	.panel {
		background: #fff;
		border: 1px solid #f0f0f0;
		border-radius: 10px;
	}

	.card {
		padding: 16px;
	}

	.card p {
		margin: 0;
		font-size: 13px;
		color: #8c8c8c;
	}

	.card strong {
		display: block;
		margin-top: 8px;
		font-size: 24px;
		line-height: 1;
	}

	.panel {
		padding: 16px;
	}

	.panel-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 16px;
	}

	.panel-header {
		margin-bottom: 12px;
	}

	.panel-header h2 {
		margin: 0;
		font-size: 16px;
	}

	.empty {
		border: 1px dashed #d9d9d9;
		border-radius: 8px;
		min-height: 120px;
		display: grid;
		place-content: center;
		text-align: center;
		color: #8c8c8c;
	}

	.empty.large {
		min-height: 220px;
	}

	.empty-title {
		margin: 0 0 4px;
		font-weight: 600;
		color: #434343;
	}

	.quick-actions {
		display: grid;
		gap: 10px;
	}

	.ghost {
		border: 1px solid #d9d9d9;
		background: #fff;
		padding: 8px 10px;
		border-radius: 8px;
		text-align: left;
		cursor: pointer;
	}

	.ghost:hover {
		border-color: #1677ff;
		color: #1677ff;
	}

	.table-wrapper {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 12px;
		border-bottom: 1px solid #f0f0f0;
		font-size: 14px;
		text-align: left;
	}

	th {
		color: #8c8c8c;
		font-weight: 600;
	}

	@media (max-width: 1024px) {
		.dashboard {
			grid-template-columns: 1fr;
		}

		.sider {
			display: none;
		}

		.stats,
		.panel-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
