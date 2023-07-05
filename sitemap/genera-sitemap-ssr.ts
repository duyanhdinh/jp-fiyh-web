export const generalUrlSiteMap = async (file: string): Promise<string[]> => fetch(`https://cdn-sitemap-website.s3.amazonaws.com/${file}`, {
    method: "GET",
    headers: {
        'Accept': 'application/json',
    },
}).then(
    response => response.json()
)