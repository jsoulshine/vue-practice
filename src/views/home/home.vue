<template>
<Card>
    Home
    <div style='height: 600px; display: flex; justify-content: space-between'>
        <h3 id='anchorTop'>Information</h3>
        <router-link to='/home#anchorBot'>to Performance</router-link>
    </div>
    <div style='height: 600px; display: flex; justify-content: space-between'>
        <h3 id='anchorBot'>Performance</h3>
        <Button type="ghost" size='small' style="height: 30px" @click="toInformation">to Information</Button>
    </div>
</Card>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {

        }
    },
    methods: {
        toInformation(){
            this.$router.push({
                name: 'home',
                hash: '#anchorTop'
            })
        }
    },
    beforeRouteLeave(to, from, next) {
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (answer) {
            next()
        } else {
            next(false)
        }
    },
    created() {

    }
}
</script>

<style scoped>

</style>

