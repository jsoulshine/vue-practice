<template>
    <div>
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
        <Card>
            <span v-html="count"></span>
            <span v-html="countAlias"></span>
            <span v-html="countPlusLocalState "></span><br>
            <span v-html="twoCount"></span>
            <span v-html="quadraCount"></span>
            <span v-html="funcCount"></span><br>
            <Button type="ghost" size='small' @click="handleAdd">+</Button>
            <Button type="ghost" size='small' @click="addAsync">+</Button>
            <Button type="ghost" size='small' @click="operateAsync">+</Button>
            <Button type="ghost" size='small' @click="handleMinus">-</Button>
            <Button type="ghost" size='small' @click="decrement(2)">-</Button>
            <Button type="ghost" size='small' @click="decrementAsync(3)">-</Button>
        </Card>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex'
    export default {
        data(){
            return {
                showDetail: false,
            }
        },
        computed: {
            showDetailNum(){
                return Number(this.showDetail)
            },
            //mapState
            ...mapState({
                count: state => state.count,
                countAlias: 'count', //别名
                countPlusLocalState(state){ //获取this
                    return state.count + '+' + this.showDetailNum
                }
            }),
            //mapGetters
            funcCount(){
                return this.$store.getters.funcCount(3);
            },
            ...mapGetters({
                twoCount: 'doubleCount',
            }),
            ...mapGetters([
                'quadraCount'
            ])
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
                    }, this.onShowPsw(), this.onHidePsw())
                }else{
                    this.$router.push({
                        name: 'owner-space',  //如果加了path项，则params将失效，即路由会变为: 'http://localhost:8080/#/owner-space'
                        params: {             //query不会受影响
                            userName: this.$route.params.userName === 'jss' ? 'jss' : 'JSS',
                            userId: this.$route.params.userId === 10001 ? 10001 : 10000
                        }
                    })
                }
            },
            onShowPsw(){  //导航成功的回调
                this.$Notice.success({
                    title: 'Notice',
                    desc: 'Your information is showed'
                })
            },
            onHidePsw(){ //被提前终止或者导航到相同路由的回调
                this.$Notice.error({
                    title: 'Warning',
                    desc: 'Your request url is the same thus triggering onAbort()'
                })
            },
            //mapMutations
            ...mapMutations({
                handleMinus: 'decrement' //不可传参
            }),
            ...mapMutations([
                'decrement'
            ]),
            handleAdd(){
                this.$store.commit('increment', 2);
            },
            //mapActions
            ...mapActions({
                addAsync: 'incrementAsync' 
            }),
            ...mapActions([
                'decrementAsync',
                'operateAsync'
            ])
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

