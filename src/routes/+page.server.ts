import { fail } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { Actions } from './$types';

export const actions: Actions = {
	createArticle: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prisma.article.create({
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500), { message: 'Could not create article' };
		}
		return {
			status: 201
		};
	}
};
