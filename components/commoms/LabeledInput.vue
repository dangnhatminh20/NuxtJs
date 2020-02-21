<template>
    <div class="form-group">
        <label for="username">{{label}}</label>
        <input v-bind:id="id" v-model="content" type="username" class="form-control" @input="onChange"/>
    </div>
</template>

<script>
export default {
    name: 'LaybeledInput_Commoms_Components',
    props: {
        label: String,
        id: String,
        type: String,
        onTextChange: Function
    },
    data() {
        return {
            username: "",
            password: "",
            content: ""
        }
    },
    methods: {
        onChange(){
            console.log(this.content);
        }
    }
}
</script>