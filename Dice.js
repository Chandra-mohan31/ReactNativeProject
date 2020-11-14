import React,{useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,

} from "react-native";


import DiceOne from "./assets/dice/dice1.png";
import DiceTwo from "./assets/dice/dice2.png";
import DiceThree from "./assets/dice/dice3.png";
import DiceFour from "./assets/dice/dice4.png";
import DiceFive from "./assets/dice/dice5.png";
import DiceSix from "./assets/dice/dice6.png";

const Dice =()=>{
  const [mode,setMode] = useState("DarkMode");
  const arr = ["white","black"];
  const [randomColor,setRandomColor] = useState(arr[0]);
  const changeBG = () => {
    if(randomColor==="white"){
      setRandomColor(arr[1]);
      setMode("LightMode");
    }
    if(randomColor==="black"){
      setRandomColor(arr[0]);
      setMode("DarkMode");
    }
    
  }

  {/*}  const changeBG = () => {
     let color = "rgb("+
     Math.floor(Math.random()*256)+
       ","+
       Math.floor(Math.random()*256)+
       ","+
       Math.floor(Math.random()*256)+
      ")";
      setRandomColor(color);
    }; */}

  const [uri,setUri] = useState(DiceOne);
  const [url,setUrl] = useState(DiceFive);
  

    const playBtnTap = () => {
      let randomNum =Math.floor(Math.random()*6) + 1;
      let randNum =Math.floor(Math.random()*6) + 1;
      switch (randomNum) {
          case 1:
          setUri(DiceOne);
          break;
          case 2:
          setUri(DiceTwo);
          break;
          case 3:
          setUri(DiceThree);
          break;
          case 4:
          setUri(DiceFour);
          break;
          case 5:
          setUri(DiceFive);
          break;
          case 6:
          setUri(DiceSix);
          break;
      
          default:
          setUri(DiceOne);
          break;
      }
      switch (randNum) {
        case 1:
        setUrl(DiceOne);
        break;
        case 2:
        setUrl(DiceTwo);
        break;
        case 3:
        setUrl(DiceThree);
        break;
        case 4:
        setUrl(DiceFour);
        break;
        case 5:
        setUri(DiceFive);
        break;
        case 6:
        setUrl(DiceSix);
        break;
    
        default:
        setUrl(DiceOne);
        break;
    }
    }
    
    

    return(
        <>
       <View style={[styles.container,{backgroundColor:randomColor}]}>

        <View style={styles.Dices}>
        <Image style={styles.image} source={uri} />
        <Image style={styles.image} source={url} />
        </View>
        
        <TouchableOpacity onPress={playBtnTap}>
         <Text style={styles.text}>PLAY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeBG}>
         <Text style={styles.text}>{mode}</Text>
        </TouchableOpacity>
       
        </View>
       
        
          
        </>
    )
}



export default Dice

const styles=StyleSheet.create({
  container:{
    flex:1,
    
    alignItems:"center",
    justifyContent:"center"
  },
  image:{
    height:200,
    width:200,


  },
  gamePlayBtn:{
    fontSize:20,
    marginTop:30,
    color:"white",
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor:"#30475E",

    borderRadius:5,
    borderWidth:3,
    fontWeight:"bold"

  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    borderColor:"blue",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"white",
    borderRadius: 15,
    textTransform:"uppercase",
    margin:20
  },
  Dices:{
    display:"flex",
    flexDirection:"row"
  }
})
