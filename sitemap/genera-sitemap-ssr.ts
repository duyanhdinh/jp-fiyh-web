import axios from "axios";

export const generalUrlSiteMap = async (): Promise<string[]> => {
    let res: string[] | PromiseLike<string[]> = [];

    await axios.get('https://fateinyourhands.com/api/v1/web-info/sitemap')
        .then(({data}) => {
            res = JSON.parse(data.data);
        })

    return res;
}