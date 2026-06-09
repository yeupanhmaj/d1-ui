<script lang="ts">
	type UserRow = {
		id: number;
		name: string;
	};

	interface Props {
		users: UserRow[];
	}

	let { users }: Props = $props();
</script>

<div class="table-wrapper">
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>Name</th>
			</tr>
		</thead>
		<tbody>
			{#each users as user (user.id)}
				<tr>
					<td>{user.id}</td>
					<td>{user.name}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
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
</style>
