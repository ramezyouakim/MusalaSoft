import { get } from "./caller";
import config from '../config';
import localStrings from "../local/main";

const { apiKey, apiEndpoint } = config;

const lang = localStrings.getLanguage();

export default async function getSearchResults(initUrl) {
    const url = `${apiEndpoint}${initUrl}&apiKey=${apiKey}&language=${lang}&pageSize=${20}`;
    return get(url);
}