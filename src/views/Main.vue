<template>
    <Card>
        <div style='overflow: hidden'>
            <span>Main</span>
            <p style='float: right'>
                <Button type= 'warning' @click='logout'>Loginout</Button>
            </p>
        </div>
        <router-view></router-view>
    </Card>
</template>

<script>
import Cookies from 'js-cookie';

    export default {
        methods: {
            logout(){
                Cookies.remove('account');
                this.$router.replace({
                    name: 'login'
                })
            }
        }
    }
</script>

<style scoped>

</style>

