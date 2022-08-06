import { JsonResponse } from "../util";
import * as Github from 'octokit';
import {Env} from "../env";

interface Params {
    username: string;
    max: number;
}

export async function GetPublicActivity(request: Request, env: Env, ctx: ExecutionContext, params: Params): Promise<Response> {
    if (!params || !params.username) {
        return JsonResponse({
            status: 400,
            body: 'Missing username'
        });
    }

    const octokit = new Github.Octokit();
    // @ts-ignore
    octokit.auth = env.GITHUB_TOKEN;

    let max = params.max || 5;
    const events = await octokit.rest.activity.listPublicEventsForUser({
        username: params.username,
        per_page: max
    })

    return JsonResponse({
        status: events.status,
        url: events.url,
        data: events.data
    })
}