import Main from '@/views/Main.vue';

const componentsSkills = [
    {
        path: '/components',
		name: 'component',
        title: 'component',
        meta: {
            title: 'component'
        },
		component: Main,
		children: [
			{
				path: 'orgchart', title: 'orgchart', name: 'orgchart', component: resolve => { require(['@/views/orgChart/orgchart.vue'], resolve); }
            },
            {
				path: 'getorgchart', title: 'getorgchart', name: 'getorgchart', component: resolve => { require(['@/views/orgChart/GetOrgChart.vue'], resolve); }
			}
		]
    }
];

export default componentsSkills;