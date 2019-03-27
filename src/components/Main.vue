<template>
  <div>

    <!-- Top slider -->
    <slider :current="quotes.length" :total="maxQuotes"></slider>
    <!-- New quote -->
    <new-quote v-on:new-quote-event="pushQuote"></new-quote>

    <!-- All quotes -->
    <ul class="all-quotes">
      <li @click="removeQuote(quote.id)" v-for="quote in quotes">
        <quote :text="quote.text"></quote>
      </li>
    </ul>
  </div>
</template>

<script>
import Quote from './Quote';
import Slider from './Slider';
import NewQuote from './NewQuote';

export default {
  name: 'Main',
  components: {
    Quote,
    NewQuote,
    Slider,
  },
  data () {
    return {
      quotes: [],
      maxQuotes: 10,
    }
  },
  methods: {
    pushQuote(text, id) {
      if (this.quotes.length < this.maxQuotes) {
        this.quotes.push({ text: text, id: id });
      } else {
        alert('You have completed the amount of quotes!')
      }
    },
    removeQuote(id) {      
      this.quotes = this.quotes.filter(quote => quote.id != id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  display: grid;
  list-style: none;
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
}

li {
  border-style: solid;
  border-width: 5px;
}

li:hover {
  background-color: orangered;
}
</style>
