<template>

<Card>
    <Card>
        <img src="../../../static/images/static.png" alt="">
    </Card>
    Home
    <div style='height: 600px; display: flex; justify-content: space-between'>
        <h3 id='anchorTop'>Information</h3>
        <router-link to='/home#anchorBot' active-class="router-hover" exact event="mousemove">to Performance {{data1}}</router-link>
    </div>
    <div style='height: 600px; display: flex; justify-content: space-between'>
        <h3 id='anchorBot'>Performance</h3>
        <Button type="ghost" size='small' style="height: 30px" @click="toInformation">to Information{{data2}}</Button>
    </div>
</Card>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            data1: '',
            data2: ''
        }
    },
    methods: {
        initData(){
            this.$http({
                method: 'GET',
                url: '/api/testData'
            }).then(res => {
                this.data1 = res.data[0];
                this.data2 = res.data[1];
            }).catch(error => {
                console.log(error);
            })
            // test for json
            this.$http({
                method: 'GET',
                url: '../../../static/json/static.json'
            }).then(res => {
                console.log('json:', res);                
            }).catch(error => {
                console.log(error);
            })
            //test for image
                //js写法？？
        },
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
        this.initData();
    }
}
</script>

<style scoped>
    .router-hover{
        color: yellowgreen;
    }
</style>

