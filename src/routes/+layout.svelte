<script>
    import { onMount } from 'svelte';
    import 'iconify-icon';
    import '../app.css'
    import { supabase } from '$lib/supabaseClient.js';
    import { invalidateAll } from '$app/navigation';
    import { redirect } from '@sveltejs/kit';

    onMount(() => {
            const { data: { subscription } } =
            supabase.auth.onAuthStateChange((event) => {
                invalidateAll();
            });
            return () => {
              subscription.unsubscribe();
            };
    });
</script>

<slot />
