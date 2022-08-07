import { Router } from 'itty-router';
import {GetPublicActivity} from "./activity/endpoint";
import {Env} from "./env";
import {JsonResponse} from "./util";

// @ts-ignore
const router: Router = new Router();

// @ts-ignore
router.get('/v1/getactivity/:username/:max?', async ({params}, request, env, ctx) => await GetPublicActivity(request, env, ctx, params));

router.all("*", () => new Response("404, not found!", { status: 404 }))

export default {
	fetch: router.handle
};
