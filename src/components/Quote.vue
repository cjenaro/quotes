<template>
    <h1>{{ text }}</h1>
</template>

<script>
export default {
    name: 'Quote',
    props: ['text']
}
</script>

<style scoped>
    h1 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
</style>