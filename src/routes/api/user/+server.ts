import { error } from '@sveltejs/kit';
import { getDb } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
	if (!platform?.env.DB) {
		throw error(
			500,
			'Cloudflare D1 binding `DB` is not available. Run with Wrangler and verify `d1_databases` in `wrangler.jsonc`.'
		);
	}

	const db = getDb(platform.env.DB);
	const data = await db.select().from(users);

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
