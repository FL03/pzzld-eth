<script>
    import { page } from '$app/stores';
  
    import logo from "$lib/svelte-logo.svg";

    export let controls = {
      endpoint: "#", 
      label: "Login"
    };
    export let tagline = "A complete template for creating next generation applications";
    export let title = "Application";
    export let pages = [
      { endpoint: "/", label: "Home"},
      { endpoint: "/about", label: "About"},
      { endpoint: "/todos", label: "Todos"}
    ];
    
    let navbar = {
      hidden: false
    };

    function setNavbarView() {
      navbar.hidden != navbar.hidden
    }
</script>

<nav class="absolute flex items-center inset-x-0 top-0 z-40">
  <div class="container mx-auto dark:bg-transparent dark:text-white bg-transparent p-3 mt-3 rounded-lg">
    <div class="flex flex-wrap items-center">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a href="/" class="flex items-center">
            <img src="{logo}" class="mr-3 h-6 sm:h-9" alt="{tagline}">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
        </a>
      </div>
        <div class="lg:flex flex-grow items-center" id="main-menu">
          <ul class="flex flex-col lg:flex-row list-none mr-auto">
            {#each pages as p}
                <li class:active={$page.url.pathname === p.endpoint}>
                    <a class="block px-3 py-2 hover:opacity-75 dark:text-white" sveltekit:prefetch href="{p.endpoint}">
                        {p.label}
                    </a>
                </li>
              {/each}
          </ul>
          <div class="relative flex">
            <div class="container mx-auto">
              <a href={controls.endpoint}>
                <button type="button" class="border rounded-xl text-md font-semibold hover:opacity-75 px-3 py-2">
                    {controls.label}
                  </button>
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>