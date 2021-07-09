import { StyleSheet, Dimensions } from 'react-native';
import values from '../values/main';
import colors from './colors';
import fontMaker from '../utilities/fontMaker';

const styles = StyleSheet.create({
    shadowBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    thumbnailImageContainer: {
        flex: 3,
    },
    thumbnailImage: {
        height: Dimensions.get('screen').height * 0.15,
        resizeMode: 'cover'
    },
    card: {
        backgroundColor: colors.white,
        margin: values.marginMeduim,
        marginBottom: 0,
        borderRadius: values.BorderRadius / 2,
        overflow: 'hidden'
    },
    resulstCardInfo: {
        flex: 5,
        flexDirection: 'column',
        margin: values.marginSmall * 1.5,
        marginLeft: values.marginMeduim,
        justifyContent: 'space-between'
    },
    InfoTitle: {
        ...fontMaker(15, "bold"),
        textAlign: 'left',
        marginTop: values.marginSmall
    },
    settingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: values.marginMeduim,
        alignItems: 'center'
    },
    articleContainer: {
        margin: values.marginMeduim
    },
    articleTitle: {
        ...fontMaker(23, "bold"),
        textAlign: 'left'
    },
    articleAuthor: {
        ...fontMaker(17, "200"),
        textAlign: 'left',
        marginTop: values.marginSmall
    },
    articleContent: {
        ...fontMaker(17, "200"),
        textAlign: 'left',
        marginTop: values.marginBig
    }

});

export default styles;