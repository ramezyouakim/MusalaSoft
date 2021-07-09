import React from 'react';
import { useTheme } from "@react-navigation/native";
import localStrings from '../../local/main';
import { Text } from "react-native";

const EmptyList = () => {
    const { colors } = useTheme()
    return (
        <Text style={{ textAlign: 'center', color: colors.text }}>{localStrings.noResultsFound}</Text>
    )
}

export default EmptyList