import {

    SEARCH_NEWS_START,
    SEARCH_NEWS_FAILED,
    SEARCH_NEWS_SUCESS,
    SEARCH_NEWS_REFRESH,

    SEARCH_MORE_NEWS_START,
    SEARCH_MORE_NEWS_FAILED,
    SEARCH_MORE_NEWS_SUCESS

} from '../actions/types';

const INIT_STATE = {
    loading: false,
    loadingRefresh: false,
    loadMore: false,
    errorTitle: null,
    errorMessage: null,
    newsList: [],
    currentPage: 2,
    searchQuery: ""
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case SEARCH_NEWS_START:
            return { ...state, loading: true, errorTitle: null, errorMessage: null, newsList: [], loadingRefresh: false }
        case SEARCH_NEWS_REFRESH:
            return { ...state, loading: false, errorTitle: null, errorMessage: null, loadingRefresh: true }
        case SEARCH_NEWS_FAILED:
            return { ...state, loading: false, errorTitle: action.errorTitle, errorMessage: action.errorMessage, loadingRefresh: false }
        case SEARCH_NEWS_SUCESS:
            return { ...state, loading: false, errorTitle: null, errorMessage: null, newsList: action.newsList, searchQuery: action.searchQuery, loadingRefresh: false }

        case SEARCH_MORE_NEWS_START:
            return { ...state, loading: false, loadMore: true, errorTitle: null, errorMessage: null }
        case SEARCH_MORE_NEWS_FAILED:
            return { ...state, loading: false, loadMore: false, errorTitle: action.errorTitle, errorMessage: action.errorMessage }
        case SEARCH_MORE_NEWS_SUCESS:
            return { ...state, loading: false, loadMore: false, errorTitle: null, errorMessage: null, newsList: action.newsList, currentPage: action.currentPage }

        default:
            return state;
    }
}