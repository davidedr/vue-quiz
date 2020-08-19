<template>
  <div id="app">
      <Header
        v-bind:number_correct_answers="number_correct_answers"
        v-bind:number_total_answers="number_total_answers"
      />
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-3">
            <QuestionBox
              v-if="questions.length"
              v-bind:question="questions[current_question]"
              v-bind:next_question="next_question"
              v-bind:increment_correct_answers="increment_correct_answers"
            />
          </div>
        </div>
      </div>      
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      questions: [],
      current_question: 0,
      number_correct_answers: 0,
      number_total_answers: 0
    }
  },
  methods: {
    next_question() {
      this.current_question++
    },
    increment_correct_answers(is_correct) {
      if (is_correct) {
         this.number_correct_answers++
      }
      this.number_total_answers++

    }
  },
  mounted: function() {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple', {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.questions = jsonData.results
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
