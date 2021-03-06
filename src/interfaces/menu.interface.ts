export default interface Menu {
    id?:number;
    title?:string;
    onPress?:() => void;
    icon?:() => void;
    children?: Menu[];
}