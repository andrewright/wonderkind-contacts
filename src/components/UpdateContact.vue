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
                v-bind:disabled="isEqualObjects()"
                v-on:click="updateContact()"
        >
            <span>save changes</span>
        </button>
    </div>
</template>

<script>
    import ProfileIcon from '../assets/profile.svg';
    import { isEqualObjects } from '../support/isEqualObjects';

    export default {
        name: 'update-contact',
        components: { ProfileIcon },
        data() {
            const contact = {
                email: '', phone: '', address: '', firstName: '', lastName: '',
                ...this.$store.getters.contactById(this.$route.params.id)
            };
            const { email, phone, address, firstName, lastName } = contact;
            return {
                contact,
                fullName: `${firstName} ${lastName}`,
                email,
                phone,
                address
            };
        },
        methods: {
            getContact() {
                const [firstName, ...lastName] = this.fullName.split(' ');
                return {
                    id: this.$route.params.id,
                    firstName,
                    lastName: lastName.join(' '),
                    email: this.email,
                    phone: this.phone,
                    address: this.address
                };
            },
            updateContact() {
                if (!this.fullName) {
                    return void 0;
                }
                this.$store.commit('updateContact', this.getContact());
                this.$router.push('view');
            },
            isEqualObjects() {
                return isEqualObjects(this.getContact(), this.contact);
            },
            saveEnabled() {
                return !!this.fullName;
            }
        }
    };
</script>

<style scoped>

</style>
