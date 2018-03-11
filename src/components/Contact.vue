<template>
    <router-view/>
</template>

<script>
    import AddContact from './CreateContact.vue';
    import EditContact from './UpdateContact.vue';
    import ViewContact from './ViewContact.vue';

    export default {
        name: 'contact',
        components: { AddContact, ViewContact, EditContact }
    };
</script>
