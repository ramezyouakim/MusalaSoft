import { useTheme } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import localStrings from '../../local/main';
import styles from '../../modules/styles/styles';
import store from '../../store';
import { changeTheme, changeLang } from '../../actions/main';
import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect } from 'react';

const {
    settingsItem
} = styles;

const setTheme = (switchValue) => {
    const theme = !switchValue == true ? "dark" : "light"
    store.dispatch(changeTheme(theme))
}

const setLang = (lang) => {
    changeLang(lang)
}

const SettingsScreen = () => {
    const { colors } = useTheme()
    const [switchValue, toggleSwitch] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: localStrings.english, value: 'en' },
        { label: localStrings.arabic, value: 'ar' }
    ]);

    useEffect(() => {
        setValue(localStrings.getLanguage())
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={[settingsItem]}>

                <Text style={{ color: colors.text }}>
                    {localStrings.darkMode}
                </Text>
                <Switch
                    onValueChange={(value) => { toggleSwitch(value); setTheme(switchValue) }}
                    value={switchValue}
                />
            </View>
            <View style={[settingsItem]}>
                <Text style={{ color: colors.text }}>
                    {localStrings.changeLanguage}
                </Text>

                <DropDownPicker
                    style={{ width: 120 }}
                    containerStyle={{ width: 120 }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    onChangeValue={(value) => {
                        setLang(value)
                    }}
                    setItems={setItems}
                />

            </View>
        </View>
    )
};

export default SettingsScreen