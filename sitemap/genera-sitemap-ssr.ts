export const generalUrlSiteMap = async (): Promise<string[]> => fetch('https://cdn-sitemap-website.s3.amazonaws.com/fateinyourhands.json', {
    method: "GET",
    headers: {
        'Accept': 'application/json',
    },
}).then(
    response => response.json()
)