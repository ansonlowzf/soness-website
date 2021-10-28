<script>
	import { page } from '$app/stores';
</script>

<nav>
	<a class:active={$page.path === '/'} href="/">Home</a>
	<a class:active={$page.path === '/about'} href="/about">About</a>
	<a class:active={$page.path === '/blog'} href="/blog">Blog</a>
	<a class:active={$page.path === '/contact-us'} href="/contact-us">Contact Us</a>
</nav>

<style>
	nav {
		display: flex;
		gap: 2rem;
	}
	a {
		text-decoration: none;
	}
	.active {
		border-bottom: 2px solid aquamarine;
	}
</style>
