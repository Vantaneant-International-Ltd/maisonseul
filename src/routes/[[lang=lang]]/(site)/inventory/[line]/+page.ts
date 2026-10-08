import { error } from '@sveltejs/kit';
import { PRODUCT_IDS } from '$lib/catalogue';
import type { PageLoad } from './$types';

// One page per line: /inventory/ma, /inventory/grund ... in every language.
export const load: PageLoad = ({ params }) => {
	if (!(PRODUCT_IDS as readonly string[]).includes(params.line)) error(404, 'Not found');
	return { id: params.line };
};
