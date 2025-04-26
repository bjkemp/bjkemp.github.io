<script lang="ts">
        import Navigation from './Navigation.svelte';
        import { onMount } from 'svelte';
        
        // Using reactive state
        let darkMode = false;
        
        // Toggle dark mode function
        function toggleDarkMode() {
                darkMode = !darkMode;
                
                // Apply dark mode to document
                if (darkMode) {
                        document.documentElement.classList.add('dark');
                } else {
                        document.documentElement.classList.remove('dark');
                }
        }
        
        // Initialize dark mode based on user preference
        onMount(() => {
                if (typeof window !== 'undefined') {
                        // Check for user preference
                        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                        darkMode = prefersDark;
                        
                        // Apply initial dark mode setting
                        if (darkMode) {
                                document.documentElement.classList.add('dark');
                        }
                }
        });
</script>

<header class="bg-white dark:bg-neutral-800 shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                                Benjamin Kemp
                        </a>
                </div>
                
                <div class="flex items-center gap-4">
                        <Navigation />
                        
                        <button 
                                on:click={toggleDarkMode}
                                class="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                                aria-label={darkMode.$ ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                                {#if darkMode.$}
                                        <!-- Sun icon for light mode -->
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                {:else}
                                        <!-- Moon icon for dark mode -->
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                {/if}
                        </button>
                </div>
        </div>
</header>