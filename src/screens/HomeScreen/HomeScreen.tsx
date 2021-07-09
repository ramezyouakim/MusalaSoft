import React from 'react';
import { View, FlatList, ActivityIndicator, Alert, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import SearchField from '../../components/SearchField/SearchField';
import SearchResultsCard from '../../components/searchResultsCard/searchResultsCard';
import { searcMorehNews, searchNews } from '../../actions/main';
import values from '../../modules/values/main';
import EmptyList from '../../components/emptyList/EmptyList';

type newsDataObject = {
    id: string,
    title: string,
    description: string,
    urlToImage: string,
    content: string,
    author: string
}

interface homeProps {
    route: any,
    navigation: any,
    loading: boolean,
    errorTitle: string,
    errorMessage: string,
    newsList: Array<newsDataObject>,
    loadMore: boolean,
    searcMorehNews: Function,
    searchNews: Function,
    searchQuery: string,
    loadingRefresh: boolean
}

interface homeState {

}

class HomeScreen extends React.PureComponent<homeProps, homeState> {

    constructor(props: homeProps) {
        super(props);
    }

    renderResultItem(item: newsDataObject, navigation: any) {
        return <SearchResultsCard
            item={item}
            navigation={navigation}
        />
    }

    onRefreshNews() {
        const {
            searchNews,
            searchQuery
        } = this.props
        searchNews(searchQuery, true);
    }

    render() {
        const {
            loading,
            errorTitle,
            errorMessage,
            newsList,
            navigation,
            searcMorehNews,
            loadMore,
            loadingRefresh,
            searchQuery
        } = this.props;
        if (errorMessage?.length > 1) Alert.alert(errorTitle, errorMessage)
        return (
            <View style={{ flex: 1 }}>
                <SearchField />
                {loading ?
                    <ActivityIndicator size="large" />
                    : <FlatList
                        style={{ flex: 1 }}
                        data={newsList}
                        renderItem={({ item }: any) => this.renderResultItem(item, navigation)}
                        keyExtractor={item => item.id}
                        refreshing={loadingRefresh}
                        refreshControl={<RefreshControl
                            colors={["#9Bd35A", "#689F38"]}
                            refreshing={loadingRefresh}
                            onRefresh={() => this.onRefreshNews()} />}
                        ListEmptyComponent={() => searchQuery.length !== 0 && <EmptyList />}
                        onEndReached={() => searcMorehNews()}
                        onEndReachedThreshold={0.3}
                        ListFooterComponent={() => loadMore && <ActivityIndicator size={'large'} style={{ margin: values.marginMeduim }} />}
                    />
                }
            </View>
        )
    };

}
const mapStateToProps = ({ newsSearch }) => {
    const {
        loading,
        errorTitle,
        errorMessage,
        newsList,
        loadMore,
        loadingRefresh,
        searchQuery
    } = newsSearch;

    return {
        loading,
        errorTitle,
        errorMessage,
        newsList,
        loadMore,
        loadingRefresh,
        searchQuery
    }
}

export default connect(mapStateToProps, {
    searcMorehNews,
    searchNews
})(HomeScreen)