<script>
	// TODO: maybe change paperoverlay img to something harsher
	import me from "$lib/img/me.png";

	import ImageScroll from "$lib/components/ImageScroll.svelte";
	import { SVGs } from "$lib/svg";

	let bg = "#272727";
	let bg2 = "#672620";
	let bg3 = "#e83318";
	let bg_black = "#0c0c0c";
	let bg_white = "#d8cfa6";
</script>

<div class="flex min-h-[100dvh] flex-col border-2 border-solid border-green-400 bg-[#0c0c0c]">
	<div class="flex flex-grow flex-col border-2 border-solid border-red-500 md:flex-row">
		<aside class="relative order-1 flex-shrink-0 p-4 md:sticky md:top-0 md:order-2 md:w-1/4">
			<img src={me} alt="Cool me" class="h-[50dvh] w-full object-cover md:h-[80dvh] md:w-fit" />
		</aside>
		<main class="order-2 flex-grow p-4 md:order-1">
			<div
				class="relative -top-[50dvh] md:top-0 md:flex md:h-full md:flex-col md:items-start md:justify-center"
			>
				<h1 class="font-hard bg-clip-text text-4xl font-medium text-[#d8cfa6] md:text-9xl">
					KKKFASYA
				</h1>
				<h4 class="font-hard bg-clip-text text-lg font-bold text-[#d8cfa6] md:text-3xl">
					Junior programmer, senior performer: these are my skills
				</h4>
				<ImageScroll images={SVGs} class="mt-10 mr-2 ml-2" />
			</div>
		</main>
	</div>
	<footer class="p-4 text-[#d8cfa6]">Footer</footer>
</div>
