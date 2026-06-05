<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

{#each data.data as user (user.id)}
	<div class="user">
		<h2>{user.id}</h2>
		<p>Email: {user.name}</p>
	</div>
{/each}
