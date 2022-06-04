<script>
    import { onMount } from 'svelte';
    import { getConnectedWallet } from '$lib/wallet.js';

    onMount(() => {
        console.log(getConnectedWallet());
    });

</script>