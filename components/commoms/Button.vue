<template>
    <button type="submit" class="btn btn-primary pr-3">
        {{nameButton}}
    </button>
</template>

<script>
export default {
    name: 'Button_Commoms_Components',
    props: {
        nameButton: String
    }
}
</script>