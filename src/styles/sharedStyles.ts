import { s } from "react-native-size-matters";
import App from "../../App";
import { AppColors } from "./colors";
import { StyleSheet } from "react-native";


export const sharedPaddingHorzizontal = s(12)

export const commonStyles = StyleSheet.create({
    shadow:{
        //IOS
        shadowColor:AppColors.black,
        shadowOffset:{width:0,height:4},
        shadowOpacity:0.2,
        shadowRadius:4,

        //Android
        elevation:4
        
    }
})