<template>
    <div>
        <progress :value="current" :max="total"></progress>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    props: ['current', 'total']
}
</script>

<style scoped>
    progress {
        width: 50%;
    }
    .animated::-webkit-progress-value {
        transition: width 1s;
        background-color: blue;
    }
    .animated::-moz-progress-bar {
        transition: padding-bottom 1s;
        padding-left: 60px;
        padding-bottom: var(--value);
        background-color: blue;
        height: 0;
        transform-origin: 0 0;
        transform: rotate(-90deg) translateX(-60px) ;
    }
    .animated::-ms-fill {
        background-color: blue;
        border:0;
    }
</style>