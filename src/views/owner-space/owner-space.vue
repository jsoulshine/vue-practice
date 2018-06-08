<template>
    <Card>
        <h2>
            <span>Owner Space</span>
            <Button type='ghost' @click='handleDetail'>Detial</Button>
            <Button type='ghost' @click='handleSwitch'>Switch</Button>
        </h2>
        <template v-if='showDetail'>
            <h4>user: {{$route.params.userName}}</h4>
            <h4>
                id: {{$route.query.userId ? $route.query.userId : '*****'}}
                <Button type='info' size='small' @click='handleShowPsw'>{{$route.query.userId ? 'hide' : 'show'}}</Button>
            </h4>
        </template>
    </Card> 
</template>

<script>
    export default {
        data(){
            return {
                showDetail: false,
            }
        },
        methods: {
            handleDetail(){
                this.showDetail = true
            },
            handleSwitch(){
                this.$router.push({
                    name: 'owner-space',
                    params: {
                        userName: this.$route.params.userName === 'jss' ? 'JSS' : 'jss',
                        userId: this.$route.params.userId === 10001 ? 10000 : 10001
                    }
                });
            },
            handleShowPsw(){
                if(!this.$route.query.userId){
                    this.$router.push({
                        name: 'owner-space',
                        query: {
                            userId: this.$route.params.userId
                        }
                    })
                }else{
                    this.$router.push({
                        name: 'owner-space',
                        params: {
                            userName: this.$route.params.userName === 'jss' ? 'jss' : 'JSS',
                            userId: this.$route.params.userId === 10001 ? 10001 : 10000
                        }
                    })
                }
                
            }
        },
        // beforeRouteUpdate(){
        //     //与watch同等效果
        // },
        watch: {
            '$route'(to, from){ //子组件中，只有自身组件复用时才可以监听到变化
                if(to.query.userId === from.query.userId){
                    this.$Message.success('switch success');
                }
            }
        }
    }
</script>

<style scoped>

</style>

