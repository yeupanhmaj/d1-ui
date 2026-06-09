<script lang="ts">
	interface Props {
		title: string;
		description: string;
		large?: boolean;
	}

	let { title, description, large = false }: Props = $props();
</script>

<div class="empty" class:large>
	<p class="empty-title">{title}</p>
	<p>{description}</p>
</div>

<style>
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

	p {
		margin: 0;
	}
</style>
