<template>
    <div>
        <slot :text="text" :data="datas"></slot>

        <ul>
            <slot name="item" v-for="item in datas" :text="item.value"></slot>
            <slot name="item2" v-for="item in datass" :text="item.value"></slot>            
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'slot-props',
        props: {

        },
        data(){
            return {
                text: 111,
                datas: [
                    {
                        id: 1,
                        value: '哈哈哈'
                    },
                    {
                        id: 2,
                        value: '哈哈哈'
                    },
                    {
                        id: 3,
                        value: '哈哈哈'
                    }
                ],
                datass: [
                    {
                        id: 1,
                        value: '呵呵呵'
                    },
                    {
                        id: 2,
                        value: '呵呵呵'
                    },
                    {
                        id: 3,
                        value: '呵呵呵'
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style>

</style>

