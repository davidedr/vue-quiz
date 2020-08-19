<template>
  <div id="app">
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-3">
            <QuestionBox />
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
      questions: []
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
