<script lang="ts">
        import { onMount } from 'svelte';
        
        // Using reactive state
        let isLoaded = false;
        
        // Simulate loading state
        onMount(() => {
                const timer = setTimeout(() => {
                        isLoaded = true;
                }, 100);
                
                return () => clearTimeout(timer);
        });
</script>

<svelte:head>
        <title>Benjamin Kemp | Home</title>
        <meta name="description" content="Personal website of Benjamin Kemp" />
</svelte:head>

<section class="py-12 md:py-20">
        <div class="max-w-4xl mx-auto">
                <div class="flex flex-col items-center text-center mb-12">
                        <h1 class="text-4xl md:text-5xl font-bold mb-6 transition-opacity duration-500 {isLoaded.$ ? 'opacity-100' : 'opacity-0'}">
                                Benjamin Kemp
                        </h1>
                        <p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 transition-opacity duration-500 delay-100 {isLoaded.$ ? 'opacity-100' : 'opacity-0'}">
                                Welcome to my personal website
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 transition-opacity duration-500 delay-200 {isLoaded.$ ? 'opacity-100' : 'opacity-0'}">
                                <a 
                                        href="/legacy-ml-project/" 
                                        class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md shadow-md transition-colors"
                                >
                                        View ML Project
                                </a>
                        </div>
                </div>
        </div>
</section>

<section class="py-12 bg-neutral-50 dark:bg-neutral-800">
        <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-3xl font-bold mb-8 text-center">About This Site</h2>
                <div class="prose dark:prose-invert max-w-none">
                        <p>
                                This website has been modernized using SvelteKit with Svelte 5 Runes, Tailwind CSS, Vite, and other modern web technologies.
                                The original machine learning class project is preserved and accessible through the "ML Project" link.
                        </p>
                        <p>
                                The site features:
                        </p>
                        <ul>
                                <li>Modern, responsive design</li>
                                <li>Dark mode support</li>
                                <li>Fast performance with SvelteKit</li>
                                <li>Type safety with TypeScript</li>
                        </ul>
                </div>
        </div>
</section>