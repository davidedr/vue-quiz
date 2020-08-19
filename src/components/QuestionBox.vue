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
                v-for="(answer, index) in answers" v-bind:key="index"
                v-bind:class="[selected_index === index? 'selected': '']"
            >
            {{answer}}
            </li>
        </ul> 
        <br>
        <div>
            <a class="btn btn-primary btn-lg" href="#" role="button">Submit</a>
            <a v-on:click="next_question" class="btn btn-primary btn-lg" href="#" role="button">Next question</a>
        </div>            
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    props: {
        question: Object,
        next_question: Function
    },
    data() {
        return {
            selected_index: null,
            shuffled_answers: []
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
        background-color: red;
    }
</style>