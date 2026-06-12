import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	return {
		data: data.data.concat([
			{
				id: -1,
				name: 'Client-side data',
				age: 0
			}
		])
	};
};
