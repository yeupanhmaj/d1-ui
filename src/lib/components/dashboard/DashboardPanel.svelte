<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<section class="panel">
	<div class="panel-header">
		<h2>{title}</h2>
	</div>
	{@render children()}
</section>

<style>
	.panel {
		background: #fff;
		border: 1px solid #f0f0f0;
		border-radius: 10px;
		padding: 16px;
	}

	.panel-header {
		margin-bottom: 12px;
	}

	h2 {
		margin: 0;
		font-size: 16px;
	}
</style>
