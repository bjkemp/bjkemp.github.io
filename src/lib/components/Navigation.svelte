<script lang="ts">
        // Using reactive state
        let isMenuOpen = false;
        
        // Toggle mobile menu
        function toggleMenu() {
                isMenuOpen = !isMenuOpen;
        }
        
        // Close menu when clicking a link (for mobile)
        function closeMenu() {
                isMenuOpen = false;
        }
        
        // Navigation items
        const navItems = [
                { href: '/', label: 'Home' },
                { href: '/legacy-ml-project/', label: 'ML Project' }
        ];
</script>

<!-- Desktop Navigation -->
<nav class="hidden md:flex items-center space-x-6">
        {#each navItems as item}
                <a 
                        href={item.href} 
                        class="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                        {item.label}
                </a>
        {/each}
</nav>

<!-- Mobile Navigation Button -->
<button 
        class="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
        on:click={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
>
        {#if isMenuOpen}
                <!-- X icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
        {:else}
                <!-- Menu icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
        {/if}
</button>

<!-- Mobile Navigation Menu -->
{#if isMenuOpen}
        <div class="absolute top-16 left-0 right-0 bg-white dark:bg-neutral-800 shadow-lg md:hidden z-50">
                <div class="container mx-auto px-4 py-2">
                        <div class="flex flex-col space-y-3 py-3">
                                {#each navItems as item}
                                        <a 
                                                href={item.href} 
                                                class="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
                                                on:click={closeMenu}
                                        >
                                                {item.label}
                                        </a>
                                {/each}
                        </div>
                </div>
        </div>
{/if}