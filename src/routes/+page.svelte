<script>
	// TODO: maybe change paperoverlay img to something harsher
	import me from "$lib/img/me.png";

	let bg = "#272727";
	let bg2 = "#672620";
	let bg3 = "#e83318";
	let bg_black = "#0c0c0c";
	let bg_white = "#d8cfa6";
</script>


<div class="flex min-h-[100dvh] flex-col border-2 border-solid border-green-400 bg-[#0c0c0c]">
  <div class="flex flex-grow flex-col md:flex-row border-2 border-solid border-red-500">
    <aside class="relative order-1 flex-shrink-0 p-4 md:sticky md:top-0 md:order-2 md:w-1/4">
      <img src={me} alt="Cool me" class="h-[50dvh] w-full object-cover md:h-[80dvh] md:w-fit" />
    </aside>
    <main class="order-2 flex-grow p-4 md:order-1">
      <div class="relative -top-[50dvh] md:top-0 md:flex md:flex-col md:items-start md:justify-center md:h-full">
        <h1 class="font-hard text-4xl font-medium text-[#d8cfa6] bg-clip-text md:text-9xl">
          KKKFASYA
        </h1>
        <h4 class="font-hard text-lg font-bold text-[#d8cfa6] bg-clip-text md:text-3xl">
          Junior programmer, senior performer: these are my skills
        </h4>
      </div>
    </main>
  </div>
  <footer class="p-4 text-[#d8cfa6]">Footer</footer>
</div>
