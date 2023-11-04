import { useSearchParams } from "react-router-dom";
import { defaultLanguage, languageLocalStoreKey } from "../config/config";

export default function useUrl(url, urlSearchParams) {
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get('p')) || 1;
    const language = JSON.parse(window.localStorage.getItem(languageLocalStoreKey));

    if (Object.prototype.hasOwnProperty.call(urlSearchParams, 'page')) {
        urlSearchParams.page = page;
    }

    urlSearchParams.language = language ? language.code : defaultLanguage;

    return [`${url}?${new URLSearchParams(urlSearchParams).toString()}`, page];
}
