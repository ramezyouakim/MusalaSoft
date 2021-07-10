import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// import style
import mainStyle from '../../modules/styles/styles';

// style classes
const {
    shadowBox,
    thumbnailImageContainer,
    thumbnailImage,
    resulstCardInfo,
    InfoTitle,
    row,
    card
} = mainStyle;


const SearchResultsCard = ({ item, navigation }) => {
    const {
        id,
        title,
        urlToImage
    } = item;

    const { colors } = useTheme()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('NewArticleDetailScreen', { id: id, item })}>
            <View style={[shadowBox]}>
                <View style={[card, row, { backgroundColor: colors.card }]}>
                    <View style={thumbnailImageContainer}>
                        <Image
                            source={{ uri: urlToImage }}
                            style={thumbnailImage}
                        />
                    </View>
                    <View style={resulstCardInfo}>
                        <Text style={[InfoTitle, { color: colors.text }]}>{title}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchResultsCard;