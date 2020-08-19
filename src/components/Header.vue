<template>
    <div>
        <b-nav tabs>
            <b-nav-item disabled><b>Fancy App Quiz</b></b-nav-item>
            <b-nav-item disabled><b>Counter: {{number_correct_answers}}/{{number_total_answers}}</b></b-nav-item>
        </b-nav>        
    </div>
</template>

<script>
    export default {
        props: {
            number_correct_answers: Number,
            number_total_answers: Number
        }
    }
</script>