<template>
    <div>
        <h1>Write your quote:</h1>
        <input @keydown="enterEvent" type="text" name="quote" v-model="theNewQuote">
        <button @click="emitEvent">Add quote!</button>
    </div>
</template>

<script>
export default {
    name: 'NewQuote',
    data() {
        return {
            theNewQuote: '',
            id: 0
        }
    },
    methods: {
        emitEvent() {
            this.$emit('new-quote-event', this.theNewQuote, this.id);
            this.theNewQuote = "";
            this.id++;
        },
        enterEvent(e) {
            if (e.key == 'Enter') {
                this.emitEvent();
            }
        }
    }
}
</script>

<style scoped>
input {
    width: 50%;
    height: 35px;
    border-radius: 4px;
    border-width: 1px;
    text-align: left;
    padding-left: 10px;
}

button {
    border-radius: 4px;
    background-color: blue;
    color: white;
    border: 0;
    height: 40px;
    padding-right: 10px;
    padding-left: 10px;
}
</style>
