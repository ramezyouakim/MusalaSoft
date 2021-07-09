import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import colors from '../../modules/styles/colors';
import style from './SearchField.style';
import store from '../../store';

import { searchNews } from '../../actions/main'
import { useTheme } from '@react-navigation/native';

const search = (value) => {
    store.dispatch(searchNews(value))
}

const SearchField = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { colors } = useTheme();
    return (
        <View>
            <TextInput
                style={[style.searchField, { backgroundColor: colors.card, }]}
                accessibilityLabel={'Search by article name'}
                autoCapitalize={'none'}
                placeholder={'Search by article name'}
                placeholderTextColor={colors.text}
                onChangeText={(value) => { setSearchQuery(value); search(value) }}
                underlineColorAndroid={'transparent'}
                value={searchQuery}
                onSubmitEditing={() => search(searchQuery)}
            />
        </View>
    )
};

export default SearchField;