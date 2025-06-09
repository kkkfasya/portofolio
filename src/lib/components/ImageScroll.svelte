<script lang="ts">
	let { images, class: className, }: { images: string[]; class: string } = $props();
</script>

<div class="w-full overflow-hidden">
	<div class="animate-scroll flex gap-4">
		{#each images as src}
			<img
				{src}
				alt="svgs of tools/language/framework that i know"
				class={`w-auto shrink-0 object-contain h-20 ${className}`}
			/>
		{/each}
	</div>
</div>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-scroll {
		animation: scroll 20s linear infinite;
	}
</style>
