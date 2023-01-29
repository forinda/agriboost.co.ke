type HServices = {
	title: string;
	description: string;
	imgUrl?: string;
	url?: string;
};

const services: HServices[] = [
	{
		title: 'Farmers Training',
		url:'/lms',
		imgUrl:"https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		description:
			'We provide training to farmers on how to grow their crops and make more money',
	},
	{
		title: 'Agricultural Products',
		imgUrl:
			'https://img.freepik.com/free-vector/pet-veterinarian-concept-veterinary-doctor-checking-treating-animal-idea-pet-care-animal-medical-vaccination-microchipping-vector-flat-illustration_613284-488.jpg?w=1060&t=st=1673792251~exp=1673792851~hmac=be3310e4404f8bfec386860e12f99817b7b6050af093bd4e4bbfadc2659ecd66',
		description: 'We offer agricultural products to farmers and other people',
	},
	{
		title: 'Social Media',
		url:'/social',
		imgUrl:
			'https://img.freepik.com/free-vector/social-tree-concept-illustration_114360-4898.jpg?w=826&t=st=1673792155~exp=1673792755~hmac=f1ffb14ff03a7e349f4d1ab3f37ef85fa3853b3c42e3285eaa77986cba00b7d6',
		description:
			'We give farmers the opportunity to sell their products on our social media platforms',
	},
	{
		title: 'Project Management',
		imgUrl:
			'https://img.freepik.com/free-vector/team-leader-managing-project_1262-21430.jpg?w=1380&t=st=1673792458~exp=1673793058~hmac=647740c57d36e73c8be19b802589bdc4650071cbcafda9b26d59dd6081474b45',
		description: 'We manage projects for farmers and other people',
	},
];
const bg1 =
	'https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=1380&t=st=1673787815~exp=1673788415~hmac=5131e18ba32fbbd5a3a91ec36ddb503db97ce1ea7a83f18c4fafd6d302730a15';
const bg2 =
	'https://img.freepik.com/free-vector/children-space-background_23-2149627310.jpg?w=1380&t=st=1673790534~exp=1673791134~hmac=a7146599d63496a9729761fbb8f7d15f6d19a60ab617d4971e35f351cefbe4ce';
    const placeholderImg =
	'https://images.unsplash.com/photo-1462027076063-1ceabb252dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
export const homeServices = {
	services,
	bg1,
	bg2,
    placeholderImg
};
