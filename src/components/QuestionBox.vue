<template>
    <div class="jumbotron question-box-container">
        <p class="lead">
            {{ question.question }}
        </p>
        <hr class="my-4">
        <p>List of answers</p>
        <p v-for="(answer, index) in answers" v-bind:key="index">{{ answer }}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Submit</a>
        <a v-on:click="next_question" class="btn btn-primary btn-lg" href="#" role="button">Next question</a>
    </div>
</template>

<script>
export default {
    props: {
        question: Object,
        next_question: Function
    },
    computed: {
        answers() {
            let answers = [...this.question.incorrect_answers]
            answers.push(this.question.correct_answer)
            return answers
        }
    }
}
</script>