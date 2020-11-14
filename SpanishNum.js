import React from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import Sound from "react-native-sound";
//var Sound = require("react-native-sound");
const soundList = [
    require("./assets/spanish_lyst5898/one.wav"),
    require("./assets/spanish_lyst5898/two.wav"),
    require("./assets/spanish_lyst5898/three.wav"),
    require("./assets/spanish_lyst5898/four.wav"),
    require("./assets/spanish_lyst5898/five.wav"),
    require("./assets/spanish_lyst5898/six.wav"),
    require("./assets/spanish_lyst5898/seven.wav"),
    require("./assets/spanish_lyst5898/eight.wav"),
    require("./assets/spanish_lyst5898/nine.wav"),
    require("./assets/spanish_lyst5898/ten.wav"),
  ];

const SpanishNum = () => {

    const playSound = (sound) => {
        const soundVar = new Sound(sound,Sound.MAIN_BUNDLE,(err)=>{
            if(err){
                console.log("not playable");
            }
        });

        setTimeout(()=> {
            soundVar.play();
        },1000);
        soundVar.release();
    } 

    return(
        <ScrollView style={styles.container}>
         <Image style={styles.logo} source={require('./assets/spanish_lyst5898/logo.png')} />
           <View style={styles.gridContainer}>
               {soundList.map((sound,id)=>(
                   <TouchableOpacity
                    key={sound}
                    onPress={()=> {playSound(sound)}}
                    style={styles.box}
                     >
                       <Text style={styles.text}>{id + 1}</Text>
                   </TouchableOpacity>
               ))}
               
           </View>
        </ScrollView>
    )
}

export default SpanishNum

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1b262c",
    },
    logo:{
        alignSelf:"center",
        marginTop: 15, 
    },
   
    text:{
        color:"red",
        fontSize: 50,

    },
   
    gridContainer:{
        flex:1,
        margin:5,
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"flex-start",
        justifyContent:"space-around"
    },
    box:{
        height:110,
        alignItems:"center",
        justifyContent:"center",
        width:"46%",
        marginVertical:6,
        backgroundColor:"#0f4c75",
        borderRadius:5,
        shadowColor:"#393e46",
        elevation: 5,


    },

})