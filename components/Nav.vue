<template>
    <div>
        <header class="bg-dark-300">
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
            <div class="flex-1 md:flex md:items-center md:gap-12">
                <nuxt-link to="/" class="block text-teal-300">
                    <span class="sr-only">Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1.67 14h-3.34l-1.38 1.897.554 1.706A7.993 7.993 0 0 0 12 20c.871 0 1.71-.14 2.496-.397l.553-1.706L13.669 16zm-8.376-5.128l-1.292.937L4 12c0 1.73.549 3.331 1.482 4.64h1.91l1.323-1.82-1.028-3.17-2.393-.778zm13.412 0l-2.393.778-1.028 3.17 1.322 1.82h1.91A7.964 7.964 0 0 0 20 12l-.003-.19-1.291-.938zM12 9.536l-2.344 1.702.896 2.762h2.895l.896-2.762L12 9.536zm2.291-5.203L13 5.273V7.79l2.694 1.957 2.239-.727.554-1.703a8.014 8.014 0 0 0-4.196-2.984zm-4.583 0a8.014 8.014 0 0 0-4.195 2.985l.554 1.702 2.239.727L11 7.79V5.273l-1.292-.94z" fill="rgba(3,85,229,1)"/></svg>
                </nuxt-link>
            </div>

            <div class="md:flex md:items-center md:gap-12">
                <nav class="hidden md:block" aria-labelledby="header-navigation">
                <ul class="flex items-center gap-6 text-sm">
                    <li>
                    <a class="slate-100 transition hover:slate-100/75" href="/">
                        About
                    </a>
                    </li>

                    <li>
                    <nuxt-link to="/products" class="slate-100 transition hover:slate-100/7">Products</nuxt-link>
                    </li>

                    <li>
                    <a class="slate-100 transition hover:slate-100/75" href="/">
                        History
                    </a>
                    </li>

                    <li>
                    <a class="slate-100 transition hover:slate-100/75" href="/">
                        Services
                    </a>
                    </li>

                    <li>
                    <a class="slate-100 transition hover:slate-100/75" href="/">
                        Projects
                    </a>
                    </li>

                    <li>
                    <a class="slate-100 transition hover:slate-100/75" href="/">
                        Blog
                    </a>
                    </li>
                </ul>
                </nav>

                <div class="flex items-center gap-4">
                <div class="sm:gap-4 sm:flex">
                    <a
                    class="px-5 py-2.5 text-sm font-medium slate-100 bg-teal-600 rounded-md shadow"
                    href="/"
                    >
                    Login
                    </a>

                    <div class="hidden sm:flex">
                    <a
                        class="px-5 py-2.5 text-sm font-medium slate-100 bg-gray-400 rounded-md"
                        href="/"
                    >
                        Register
                    </a>
                    </div>
                </div>

                <div class="block md:hidden">
                    <button
                    class="p-2 slate-100 transition bg-gray-400 rounded hover:slate-100/75"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>
    </div>
</template>
<script>
export default {
  name: 'Nav'
}
</script>