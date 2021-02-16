<template>
    <a
        :disabled="disabled"
        :href="href"
        @click.prevent="to"
        :class="disabled ? 'cursor-not-allowed' : ''"
        class="inline-block"
    >
        <slot></slot>
    </a>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        disabled: Boolean,
        href: String,
    })

    const to = () => {}
</script>
