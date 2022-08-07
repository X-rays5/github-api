export function JsonResponse(body: any, status_code?: number): Response {
    if (!status_code) {
        status_code = 200;
    }

    return new Response(JSON.stringify(body), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'max-age=30'
        },
        status: status_code
    });
}