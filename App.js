import React,{useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const App =()=>{
    
    const [randomColor,setRandomColor] = useState("rgb(32,0,126)");

    const changeBG = () => {
     let color = "rgb("+
     Math.floor(Math.random()*256)+
       ","+
       Math.floor(Math.random()*256)+
       ","+
       Math.floor(Math.random()*256)+
      ")";
      setRandomColor(color);
    };

    const resetBG = () => {
      setRandomColor("black")
    }

    return(
        <>
        <StatusBar backgroundColor={randomColor} />
         <View style={[styles.container,{backgroundColor:randomColor}]}>
          <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Hit Me Up</Text>
          </TouchableOpacity> 
        
          <TouchableOpacity onPress={resetBG} style={styles.btn}>
          <Text style={styles.text}>RESET</Text>
          </TouchableOpacity> 
          
         </View>
          
        </>
    )
}



export default App


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column"
    
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    borderColor:"blue",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"white",
    borderRadius: 15,
    textTransform:"uppercase"
  },
  btn:{
    margin:5
  }
})