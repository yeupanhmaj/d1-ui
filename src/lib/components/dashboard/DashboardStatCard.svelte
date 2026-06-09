<script lang="ts">
	interface Props {
		label: string;
		value: string | number;
	}

	let { label, value }: Props = $props();
</script>

<article class="card">
	<p>{label}</p>
	<strong>{value}</strong>
</article>

<style>
	.card {
		background: #fff;
		border: 1px solid #f0f0f0;
		border-radius: 10px;
		padding: 16px;
	}

	p {
		margin: 0;
		font-size: 13px;
		color: #8c8c8c;
	}

	strong {
		display: block;
		margin-top: 8px;
		font-size: 24px;
		line-height: 1;
	}
</style>
