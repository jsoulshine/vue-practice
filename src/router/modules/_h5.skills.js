import Main from '@/views/Main.vue';

const h5Skills = [
    {
        path: '/h5-blob',
		name: 'blob',
        title: 'blob',
        meta: {
            title: 'JS-Blob'
        },
		component: Main,
		children: [
			{
				path: 'blob', title: 'blob', name: 'blob', component: resolve => { require(['@/views/h5/blob/blob.vue'], resolve); }
			}
		]
    }
];

export default h5Skills;