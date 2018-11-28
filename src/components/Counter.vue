<template>
  <div class = "counter container">
    <div class = "row text-center">
      <h1>{{$store.state.counter.count}}</h1>, Counter is {{ IsEvenOrOdd }}</h3>
      <h5>Total Clicks: {{$store.state.counter.click}}</h5>

      <button class = "btn btn-success" @click = "increment" :disabled = IsClickLimitDone>+</button>
      <button class = "btn btn-danger" @click = "decrement" :disabled = IsClickLimitDone>-</button>
      <button class = "btn btn-info" @click = "incrementIfOdd" :disabled = IsClickLimitDone>Increment if odd</button>
      <button class = "btn btn-info" @click = "incrementAsync" :disabled = IsClickLimitDone>Increment aync</button>

      <p class = "text-danger" v-show = "IsClickLimitDone">You have reached maximum click limit! Please reset counter.</p>
      <button class = "btn btn-warning" v-show="IsClickLimitDone" @click = "enableButtons">Reset Counter</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Counter',
  computed: mapGetters([
    'IsEvenOrOdd',
    'IsClickLimitDone'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
    'enableButtons'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  padding: 25px 0 0;
}
</style>
