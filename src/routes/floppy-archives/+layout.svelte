<script>
	import { onMount } from 'svelte';
	
	onMount(() => {
		// Override main layout styles for retro theme
		document.body.style.background = '#000';
		document.body.style.color = '#00ff00';
		document.body.style.fontFamily = '"Courier New", "Monaco", monospace';
		document.body.style.overflow = 'hidden';
		document.body.style.height = '100vh';
		document.body.style.margin = '0';
		document.body.style.padding = '0';
		
		return () => {
			// Restore on cleanup (when leaving the page)
			document.body.style.background = '';
			document.body.style.color = '';
			document.body.style.fontFamily = '';
			document.body.style.overflow = '';
			document.body.style.height = '';
		};
	});
</script>

<slot />