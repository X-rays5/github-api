export function JsonResponse(body: any): Response {
    return new Response(JSON.stringify(body), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}