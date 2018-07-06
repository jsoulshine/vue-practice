<template>
    <Card>
        <Button type='primary' @click='handleLogin'>Login</Button>
    </Card>
</template>

<script>
import Cookies from 'js-cookie';

    export default {
        name: 'login',
        props: {
            
        },
        data(){
            return {
                
            }
        },
        methods: {
            handleLogin(){
                Cookies.set('account', 'jss');  //统一写在store里面
                this.$http({
                    method: 'GET',
                    url: '/api/mockData'
                }).then(res => {
                    console.log(res);
                    if(res.code === 200){
                        let redirectName = this.$route.query.redirect || 'home';
                        this.$router.replace({    //比较push和replace，go等的区别
                            name: redirectName
                        }, this.loginSuccess())
                    }
                })
            },
            loginSuccess(){
                this.$Message.success('Login Success')
            }
        }
    }
</script>

<style scoped>

</style>

