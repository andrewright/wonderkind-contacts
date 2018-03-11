<template>
    <div class="contact-card update">
        <header>
            <span class="profile icon rounded-icon">
                <ProfileIcon/>
            </span>
            <input type="text" class="name" v-model="fullName"/>
        </header>
        <main>
            <label class="field">
                <span class="title">Email</span>
                <input type="text" class="value" v-model="email"/>
            </label>
            <label class="field">
                <span class="title">Mobile</span>
                <input type="text" class="value" v-model="phone"/>
            </label>
            <label class="field">
                <span class="title">Address</span>
                <input type="text" class="value" v-model="address"/>
            </label>
        </main>
        <button
                class="button save"
                v-if="saveEnabled()"
                v-on:click="createContact()"
        >
            <span>save changes</span>
        </button>
    </div>
</template>

<script>
    import uuid4 from 'uuid/v4';
    import ProfileIcon from '../assets/profile.svg';

    export default {
        name: 'create-contact',
        components: { ProfileIcon },
        data() {
            return {
                fullName: '',
                email: '',
                phone: '',
                address: ''
            };
        },
        methods: {
            createContact() {
                if (!this.fullName) {
                    return void 0;
                }
                const [firstName = '', ...lastName] = this.fullName.split(' ');
                const id = uuid4();

                this.$store.commit('createContact', {
                    id,
                    firstName,
                    lastName: lastName.join(' '),
                    email: this.email,
                    phone: this.phone,
                    address: this.address
                });

                this.$router.push(`/${id}`);
            },
            saveEnabled() {
                return !!this.fullName;
            }
        }
    };
</script>

<style scoped>

</style>
