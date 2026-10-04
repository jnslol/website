export type SocialAccount = {
    username: string;
    service: string;
    baseUrl: string;
    aliases: string[];
};

export type ShortLink = {
    source: string;
    target: string;
};
