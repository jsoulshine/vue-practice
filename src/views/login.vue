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
                this.$router.replace({    //比较push和replace，go等的区别
                    name: 'home'
                })
            }
        }
    }
</script>

<style scoped>

</style>

