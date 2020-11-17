import { ViewProps } from "react-native";
import Menu from "./menu.interface";

export default interface DrawerMenuProps {
    data: Menu;
    rowItemCount?:number;
    display?: 'list' | 'box';
    containerStyle?:ViewProps;
    titleKey?:string;
    childKey?:string;
}