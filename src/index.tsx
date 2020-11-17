import * as React from "react";
import { View, Text } from 'react-native';
import DrawerMenuProps from "./interfaces/drawermenu.interface";

export default class DrawerMenu extends React.Component<DrawerMenuProps> {

    render() {
        return (
            <View>
                <Text>DrawerMenu </Text>
            </View>
        )
    }
}
