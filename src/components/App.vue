<template>
    <contacts/>
</template>

<script>
    import Contacts from './Contacts.vue';

    export default {
        name: 'app',
        components: { Contacts }
    };
</script>

<style>
    :root {
        --primary-color: #161B26;
        --accent-color-1: #5D647A;
        --accent-color-2: #FF4F5B;
        --accent-color-3: #82D464;
        --secondary-color-1: #E6E6E6;
        --secondary-color-2: #B3B3B3;

        --aside-left-whitespace: 1rem;
    }

    html {
        font-family: 'Poppins', sans-serif;
        background-color: #fff;
        color: var(--primary-color);
    }

    html, body {
        height: 100%;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    button, input {
        &:focus {
            outline: 0;
        }
    }

    input {
        border: 1px solid var(--secondary-color-2);
    }

    a.button {
        text-decoration: none;
    }

    button.button {
        border: 0;
        cursor: pointer;
    }
    .button {
        text-transform: uppercase;
        font-weight: 300;
        background-color: var(--accent-color-3);
        color: #fff;
        text-align: center;
        padding: 1em;
        flex-shrink: 0;

        & .icon, & span {
            vertical-align: middle;
        }

        & .icon {
            transform: scale(1.5) translateX(-100%);
        }

        & span {
            line-height: 1;
            display: inline-block;
            vertical-align: middle;
        }
    }

    .heading {
        margin: 0;
        color: var(--accent-color-1);
    }

    .icon {
        background-color: transparent;
        margin: 0;
        display: inline-block;
        line-height: 0;
        width: 1em;
        height: 1em;

        & svg {
            fill: currentColor;
            display: inline-block;
            width: 1em;
            height: 1em;
        }
    }

    svg.icon {
        fill: currentColor;
    }

    .rounded-icon {
        border-radius: 50%;
        width: 2em;
        height: 2em;
        padding: calc(.5em - .1em);
        border: .1em solid currentColor;
    }
</style>
