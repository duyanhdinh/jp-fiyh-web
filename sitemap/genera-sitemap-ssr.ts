let list: string[] = [];
const URL: string = import.meta.env.MAIN_HOST
const dataIncludeParentUrl: any = [
    {
        articles: {
            "property-atc" : [
                "definition-atc"
            ]
        },
    }
];
const dataNotIncludeParentUrl: any = [
    {
        article: {
            "property" : {
                "definition": [
                    "how-wisdom-changes-our-lives-how-to-use-its-power",
                    "how-control-affects-our-lives-and-what-we-can-do-about-it",
                    "how-the-power-of-influence-affects-our-everyday-lives",
                    "how-to-understand-why-physical-activity-is-important-for-a-healthy-life",
                    "what-exactly-is-love-and-why-does-it-matter-so-much",
                    "what-does-luck-mean-and-why-does-it-even-matter",
                    "how-mental-health-affects-our-daily-lives-is-something-we-need-to-know",
                    "charms-power-unleashed-how-it-can-change-your-daily-life",
                    "putting-creativity-to-work-in-your-everyday-life",
                    "how-style-changes-our-everyday-lives",
                    "understanding-intuition-its-role-in-your-everyday-life",
                ],
               "physical": [
                    "top-10-at-home-exercises-for-weight-loss",
                    "the-ultimate-guide-to-healthy-eating-for-weight-loss",
                    "sleep-better-tonight-10-natural-ways-to-improve-your-sleep",
                ],
            }
        },
    }
];

export const generalUrlSiteMap = (): string[] => {
    list = [];

    for (const site of dataIncludeParentUrl) {
        check(site, URL);
    }

    for (const site of dataNotIncludeParentUrl) {
        check(site, URL, false);
    }

    return list;
}

const check = (site: any, fullUrl: string, isInclude: boolean = true) => {
    if (site instanceof Array) {
        for (const uri of site) {
            list.push(`${fullUrl}/${uri}`);
        }
    } else if (site instanceof Object) {
        Object.keys(site).forEach((key) => {
            if (isInclude) {
                list.push(`${fullUrl}/${key}`);
            }

            check(site[key], `${fullUrl}/${key}`, isInclude);
        });
    }
}

generalUrlSiteMap();