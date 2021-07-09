import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../../modules/styles/styles';


const {
    articleContainer,
    articleTitle,
    articleAuthor,
    articleContent
} = styles;

const NewArticleDetailScreen = ({route}) => {
    const { colors } = useTheme()
    const {
        title,
        urlToImage,
        content,
        author
    } = route?.params?.item;

    return (
        <ScrollView>
            <Image
                source={{ uri: urlToImage }}
                style={{ height: 250 }}
            />
            <View style={articleContainer}>
                <Text style={[articleTitle, { color: colors.text }]}>
                    {title}
                </Text>
                <Text style={[articleAuthor, { color: colors.text }]}>
                    {author}
                </Text>
                <Text style={[articleContent, { color: colors.text }]}>
                    {content}
                </Text>
            </View>
        </ScrollView>
    )
};

export default NewArticleDetailScreen