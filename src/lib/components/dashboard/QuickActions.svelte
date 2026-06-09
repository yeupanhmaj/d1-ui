<script lang="ts">
	interface Props {
		actions: string[];
	}

	let { actions }: Props = $props();
</script>

<div class="quick-actions">
	{#each actions as action (action)}
		<button type="button" class="ghost">{action}</button>
	{/each}
</div>

<style>
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
</style>
