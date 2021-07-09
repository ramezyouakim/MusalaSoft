import getSearchResults from '../api/http';
import store from '../store';
import {

    SEARCH_NEWS_START,
    SEARCH_NEWS_FAILED,
    SEARCH_NEWS_SUCESS,
    SEARCH_NEWS_REFRESH,

    SEARCH_MORE_NEWS_START,
    SEARCH_MORE_NEWS_FAILED,
    SEARCH_MORE_NEWS_SUCESS

} from './types';

export function searchNews(searchQuery, isRefreshing = false) {
    return async (dispatch) => {
        dispatch({
            type: isRefreshing ? SEARCH_NEWS_REFRESH : SEARCH_NEWS_START
        })
        let response = await getSearchResults(`q=${searchQuery}&page=1`),
            responseJson
        if (response) {
            /* Handling response */
            switch (response.status) {
                case 200:
                case 201:
                    /* Handling Success */
                    responseJson = await response.json()
                    dispatch(handleSearchNewsSuccess(responseJson, searchQuery));
                    break;
                case 400:
                case 401:
                case 403:
                case 404:
                case 500:
                    /* Handling internal error */
                    responseJson = await response.json()
                    dispatch(handleSearchNewsFailed(responseJson))
                    break;
                default:
                    responseJson = await response.json()
                    dispatch(handleSearchNewsFailed(responseJson))
                    break;
            }
        } else {
            dispatch(handleSearchNewsFailed(null))
        }
    }
}

const handleSearchNewsSuccess = (response, searchQuery) => {

    return {
        type: SEARCH_NEWS_SUCESS,
        newsList: response?.articles,
        searchQuery: searchQuery
    }
}

const handleSearchNewsFailed = (response) => {
    console.log(response)
    return {
        type: SEARCH_NEWS_FAILED,
        errorTitle: 'Somthing Went Wrong!',
        errorMessage: response?.message ? response?.message : 'Somthing Went Wrong! Please try again',
    }
}

export function searcMorehNews() {
    return async (dispatch) => {
        dispatch({
            type: SEARCH_MORE_NEWS_START
        })

        let currentPage = store.getState().newsSearch.currentPage;
        let searchQuery = store.getState().newsSearch.searchQuery;

        let response = await getSearchResults(`q=${searchQuery}&page=${currentPage}`),
            responseJson
        if (response) {
            /* Handling response */
            switch (response.status) {
                case 200:
                case 201:
                    /* Handling Success */
                    responseJson = await response.json()
                    dispatch(handleSearchMoreNewsSuccess(responseJson));
                    break;
                case 400:
                case 401:
                case 403:
                case 404:
                case 500:
                    /* Handling internal error */
                    responseJson = await response.json()
                    dispatch(handleSearchMoreNewsFailed(responseJson))
                    break;
                default:
                    responseJson = await response.json()
                    dispatch(handleSearchNewsFailed(responseJson))
                    break;
            }
        } else {
            dispatch(handleSearchMoreNewsFailed(null))
        }
    }
}

const handleSearchMoreNewsSuccess = (response) => {

    let oldLIst = store.getState().newsSearch.newsList;
    let currentPage = store.getState().newsSearch.currentPage;

    return {
        type: SEARCH_MORE_NEWS_SUCESS,
        newsList: oldLIst.concat(response?.articles),
        currentPage: currentPage + 1
    }
}

const handleSearchMoreNewsFailed = (response) => {
    return {
        type: SEARCH_MORE_NEWS_FAILED,
        errorTitle: 'Somthing Went Wrong!',
        errorMessage: response?.message ? response?.message : 'Somthing Went Wrong! Please try again'
    }
}
