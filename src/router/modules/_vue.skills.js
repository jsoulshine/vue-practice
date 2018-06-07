import Main from '@/views/Main.vue';

const vueSkills = [
    {
        path: '/vue-slot',
		name: 'slot',
        title: 'slot',
        meta: {
            title: 'Vue-Slot'
        },
		component: Main,
		children: [
			{
				path: 'slot-props', title: 'slot-props', name: 'slot-props', component: resolve => { require(['@/views/vue/slot/slot-props.vue'], resolve); }
			}
		]
    }
];

export default vueSkills;