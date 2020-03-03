<template>
    <div class="form-group">
        <label for="username">{{label}}</label>
        <input v-bind:id="id" v-model="content" v-bind:type="type" class="form-control" @input="onChange"/>
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
            content: ""
        }
    },
    methods: {
        onChange(){
            this.onTextChange(this.content);
        }
    }
}
</script>