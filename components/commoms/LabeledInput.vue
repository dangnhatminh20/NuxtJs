<template>
    <div class="form-group">
        <label for="username">{{label}}</label>
        <input v-bind:id="id" v-bind:type="type" class="form-control" @input="onChange" v-model="content"/>
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
            this.onTextChange(this.content)
        }
    }
}
</script>