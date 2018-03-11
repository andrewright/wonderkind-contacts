<template>
    <div class="contacts">
        <aside>
            <header>
                <h1 class="heading">Contacts</h1>
                <label class="search">
                    <input
                            v-model="criteria"
                            class="value"
                            type="search"
                            v-bind:class="{ 'has-value': !!criteria }"
                    />
                    <span class="placeholder">
                        <SearchIcon class="icon"/>
                        <span>Search</span>
                    </span>
                </label>
            </header>
            <ol class="list">
                <li v-for="(contacts, key) in groups(criteria)">
                    <h2 class="heading">{{key}}</h2>
                    <ol>
                        <li v-for="contact in contacts">
                            <router-link class="contact-link" :to="'/' + contact.id">
                                <template v-if="contact.firstName && contact.lastName">
                                    <strong>{{contact.lastName}}</strong>, {{contact.firstName}}
                                </template>
                                <template v-else-if="!contact.lastName">
                                    <strong>{{contact.firstName}}</strong>
                                </template>
                            </router-link>
                        </li>
                    </ol>
                </li>
            </ol>
            <router-link to="/create" class="button create">
                <AddIcon class="icon"/>
                <span>add contact</span>
            </router-link>
        </aside>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
    import AddIcon from '../assets/create.svg';
    import SearchIcon from '../assets/search.svg';
    import { groupContacts } from '../support/groupContacts';

    export default {
        name: 'contacts',
        components: { AddIcon, SearchIcon },
        data() {
            return { criteria: '' };
        },
        computed: {
            groups() {
                return (criteria = '') => groupContacts(
                    this.$store.getters.contactsByCriteria(criteria.trim())
                );
            }
        }
    };
</script>

<style scoped>

    aside {
        width: 30vw;
        display: flex;
        flex-direction: column;
        border-right: 1px solid var(--secondary-color-1);
    }

    main {
        width: 70vw;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .contacts {
        display: flex;
        flex-grow: 1;
        height: 100%;
        flex-direction: row;
    }

    header {
        margin: 5rem 1rem 2rem var(--aside-left-whitespace);

        & .heading {
            margin-bottom: 2rem;
        }
    }

    .search {
        position: relative;
        display: block;
        font-size: 1.5em;
        border: 1px solid var(--secondary-color-2);
        border-radius: .5rem;

        & .value {
            line-height: 1.25em;
            border: 0;
            background-color: transparent;
            padding: .125em 1.5em .125em .25em;

            &::-webkit-search-decoration,
            &::-webkit-search-cancel-button,
            &::-webkit-search-results-button,
            &::-webkit-search-results-decoration {
                display: none;
            }

            &::placeholder {
                text-align: center;
                color: var(--secondary-color-1);
            }

            &:focus {
                outline: none;
            }

            &:matches(:focus, .has-value) + .placeholder {
                transform: translateX(calc(100% - 1.5em));
                & > :not(.icon) {
                    opacity: 0;
                }
            }
        }

        & .placeholder {
            pointer-events: none;
            position: absolute;
            height: 1em;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;

            display: flex;
            align-items: center;
            /*justify-content: center;*/
            transform: translateX(25%);
            color: var(--secondary-color-1);

            will-change: transform;

            transition: transform .123s ease-in-out;

            & .icon {
                margin-right: 1rem;
                flex-shrink: 0;
                color: var(--accent-color-1);
            }

            & > :not(.icon) {
                will-change: opacity;
                transition: opacity .123s ease-in-out;
            }
        }

    }

    .create {
        margin-top: auto;
    }

    .list {
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
        flex-grow: 1;
        overflow-y: scroll;

        & .heading {
            font-size: 1em;
            margin-left: var(--aside-left-whitespace);
            margin-bottom: .5rem;
        }

        & > li:not(:last-child) {
            margin-bottom: 1em;
        }
    }

    ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .contact-link {
        display: block;
        padding: .5em .5em .5em var(--aside-left-whitespace);
        text-decoration: none;
        color: inherit;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        &.router-link-active {
            background-color: var(--secondary-color-1);
        }
    }
</style>

<style>
    .contact-card {
        display: flex;
        flex-grow: 1;
        flex-direction: column;

        & .rounded-icon {
            font-size: 1.5em;
        }

        & header, & main {
            margin-left: 10vw;
        }

        & header {
            margin-right: 5vw;
            flex-shrink: 0;
            margin-top: 5rem;
            display: flex;
            align-items: center;
        }

        & main {
            padding-top: 4rem;
            padding-bottom: 1rem;
            margin-top: 1rem;

            padding-right: 1vw;
            flex-shrink: 1;
            overflow: auto;
        }

        & .name, & .profile {
            font-size: 3rem;
        }

        & .name {
            font-weight: 500;

            &:not(input) {
                border: 1px solid transparent;
            }
        }

        & .profile {
            padding: calc(.5em - .05em);
            border-width: .05em;
            margin-right: 3rem;
            color: var(--secondary-color-2);

            & svg {
                transform: translateY(25%) scale(1.25);
            }
        }

        & .field {
            display: block;

            &:not(:last-child) {
                margin-bottom: 1rem;
            }

            & .value {
                line-height: 1.5em;
                padding: .25em;

                &:not(input) {
                    border: 1px solid transparent;
                }
            }

            & .title, & .value {
                display: block;
            }

            & .title {
                color: var(--accent-color-1);
                margin-bottom: .5rem;
            }
        }

        &.update {
            & main {
                padding-right: 5vw;
            }

            & .field input {
                width: 100%;
            }

            & header .name {
                width: 0;
                flex-grow: 1;
                flex-shrink: 1;
                flex-basis: 0;
            }

            & .save {
                margin-top: auto;
            }
        }
    }
</style>
