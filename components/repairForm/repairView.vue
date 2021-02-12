<template>
<div>
    {{repairData}}
</div>
</template>

<script>
export default {
    computed:{
        repairData(){
            return this.$store.state.repairForm.repairData
        }
    }
}
</script>

<style>

</style>