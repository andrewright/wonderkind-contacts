<template>
    <div class="contact-card">
        <header>
            <span class="profile icon rounded-icon">
                <ProfileIcon/>
            </span>
            <h1 class="name">{{contact.firstName}} {{contact.lastName}}</h1>
            <nav class="actions">
                <router-link to="update" class="update icon rounded-icon">
                    <EditIcon/>
                </router-link>
                <button class="delete icon rounded-icon" v-on:click="deleteContact()">
                    <DeleteIcon/>
                </button>
            </nav>
        </header>
        <main>
            <label class="field" v-if="contact.email">
                <span class="title">Email</span>
                <strong class="value">{{contact.email}}</strong>
            </label>
            <label class="field" v-if="contact.phone">
                <span class="title">Mobile</span>
                <strong class="value">{{contact.phone}}</strong>
            </label>
            <label class="field" v-if="contact.address">
                <span class="title">Address</span>
                <strong class="value">{{contact.address}}</strong>
            </label>
        </main>
    </div>
</template>

<script>
    import DeleteIcon from '../assets/delete.svg';
    import ProfileIcon from '../assets/profile.svg';
    import UpdateIcon from '../assets/update.svg';

    export default {
        name: 'view-contact',
        components: { DeleteIcon, EditIcon: UpdateIcon, ProfileIcon },
        computed: {
            contact() {
                return this.$store.getters.contactById(this.$route.params.id);
            }
        },
        methods: {
            deleteContact() {
                this.$store.commit('deleteContact', this.$route.params.id);
                this.$router.push({ path: '/' });
            }
        }
    };
</script>

<style scoped>
    header {
        & h1 {
            margin: 0;
            color: var(--accent-color-1);
        }

        & .actions {
            margin-left: auto;
            display: flex;

            & .update {
                color: var(--secondary-color-2);
            }

            & .delete {
                cursor: pointer;
                color: var(--accent-color-2);
            }

            & .rounded-icon:not(:last-child) {
                margin-right: .5rem;
            }
        }
    }
</style>
