<template>
    <div class="jumbotron question-box-container">
        <p class="lead">
            {{ question.question }}
        </p>
        <hr class="my-4">
        <p>List of answers</p>
        <ul class="list-group">
            <li
                v-on:click="selected_answer(index)"
                class="list-group-item list-group-item-action"
                v-for="(answer, index) in shuffled_answers" v-bind:key="index"
                v-bind:class="answer_class(index)"
            >
            <b>{{answer}}</b>
            </li>
        </ul> 
        <br>
        <div>
            <button
                class="btn btn-primary btn-lg"
                role="button"
                v-on:click="submit_answer"
                v-bind:disabled="selected_index === null || answered"
            >
            Submit
            </button    >
            <a v-on:click="next_question" class="btn btn-primary btn-lg" href="#" role="button">Next question</a>
        </div>            
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    props: {
        question: Object,
        next_question: Function,
        increment_correct_answers: Function
    },
    data() {
        return {
            selected_index: null,
            shuffled_answers: [],
            answered: false
        }
    },
    computed: {
        answers() {
            let answers = [...this.question.incorrect_answers]
            answers.push(this.question.correct_answer)
            return answers
        }
    },
    watch: {
        // question() {
        //     this.selected_index = null
        //     this.shuffle_answers()
        // }
        question: {
            immediate: true,
            handler() {
                this.selected_index = null
                this.shuffle_answers()
                this.answered = false

            }
        }
    },
    methods: {
        selected_answer(index) {
            this.selected_index = index

        },
        shuffle_answers() {
            let answers = [...this.question.incorrect_answers, this.question.correct_answer]
            this.shuffled_answers = _.shuffle(answers)
        },
        submit_answer() {
            let is_correct = false
            if (this.shuffled_answers[this.selected_index] === this.question.correct_answer) {
                is_correct = true
            }
            this.increment_correct_answers(is_correct)
            this.answered = true
        },
        answer_class(index) {
           return !this.answered && this.selected_index === index? 'selected':
                  this.answered && this.shuffled_answers[index] === this.question.correct_answer? 'correct':
                  this.answered && this.selected_index === index && this.shuffled_answers[index] !== this.question.correct_answer? 'incorrect': ''
        }
    }
}
</script>

<style scoped>
    .list-group {
        margin-bottom: 30px;
    }

    .list-group-item:hover {
        background: #EEE;
        cursor: pointer;
    }
    .selected {
        background-color: lightblue;
    }
    .correct {
        background-color: lightgreen;
    }
    .incorrect {
        background-color: lightcoral;
    }
</style>