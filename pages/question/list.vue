<template>
    <div class="d-flex flex-column m-auto">
        <p>Name: {{name}}</p>
        <p>Age: {{age}}</p>
        <p>Gerder: {{gerder}}</p>
    </div>
</template>
<script>
export default {
    name: "List Question Pages",
    data (){
        return {
            name: 'Nhat Minh',
            age: 24,
            gerder: 'male'
        }
    } //local data, chỉ page này dùng được
    //Vue gồm global data và local data
}
</script>