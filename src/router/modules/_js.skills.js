import Main from '@/views/Main.vue';

const jsSkills = [
    {
        path: '/js-upload-preview',
		name: 'cropper',
        title: 'cropper',
        meta: {
            title: 'JS-Upload-Preview'
        },
		component: Main,
		children: [
			{
				path: 'cropper', title: 'cropper', name: 'cropper', component: resolve => { require(['@/views/js/upload/cropper.vue'], resolve); }
			}
		]
    }
];

export default jsSkills;