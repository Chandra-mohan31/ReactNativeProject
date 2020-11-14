//assingment-->1)draw logic,2)do the tictactoe without help
import React,{useState} from 'react';
import { 
    View,
    StyleSheet,
    TouchableOpacity

 } from "react-native";

 import {
     Text,
     Container,
     Content,
     Card,
     Header,
     Body,
     H1,H3,
     Button,
     Title
    
 } from "native-base";

 import Icons from "./components/Icons";
 import Snackbar from "react-native-snackbar";

 const itemArray = new Array(9).fill('empty');


const Tictactoe = () => {

    const [isCross,setIsCross]=useState(false);
    const [winMessage,setWinMessage]=useState('');

    const changeItem = (itemNumber)=>{
        if(winMessage){
            return Snackbar.show({
                text:winMessage,
                backgroundColor:"#000",
                textColor:"#FFF"
            })
        }
        if(itemArray[itemNumber]==='empty'){
            itemArray[itemNumber] = isCross ? 'cross':'circle';
            setIsCross(!isCross);
        }else{
            return Snackbar.show({
                text:"position already filled",
                backgroundColor:"red",
                color:"white"
            })
        }
       checkIsWinner();

    }

    const reloadGame = () => {
        setIsCross(false);
        setWinMessage('');
        itemArray.fill('empty',0,9);
    }

    const checkIsWinner = () => {
        //  checking  winner of the game
        if (
          itemArray[0] === itemArray[1] &&
          itemArray[0] === itemArray[2] &&
          itemArray[0] !== 'empty'
        ) {
          setWinMessage(`${itemArray[0]} won`);
        } else if (
          itemArray[3] !== 'empty' &&
          itemArray[3] === itemArray[4] &&
          itemArray[4] === itemArray[5]
        ) {
          setWinMessage(`${itemArray[3]} won`);
        } else if (
          itemArray[6] !== 'empty' &&
          itemArray[6] === itemArray[7] &&
          itemArray[7] === itemArray[8]
        ) {
          setWinMessage(`${itemArray[6]} won`);
        } else if (
          itemArray[0] !== 'empty' &&
          itemArray[0] === itemArray[3] &&
          itemArray[3] === itemArray[6]
        ) {
          setWinMessage(`${itemArray[0]} won`);
        } else if (
          itemArray[1] !== 'empty' &&
          itemArray[1] === itemArray[4] &&
          itemArray[4] === itemArray[7]
        ) {
          setWinMessage(`${itemArray[1]} won`);
        } else if (
          itemArray[2] !== 'empty' &&
          itemArray[2] === itemArray[5] &&
          itemArray[5] === itemArray[8]
        ) {
          setWinMessage(`${itemArray[2]} won`);
        } else if (
          itemArray[0] !== 'empty' &&
          itemArray[0] === itemArray[4] &&
          itemArray[4] === itemArray[8]
        ) {
          setWinMessage(`${itemArray[0]} won`);
        } else if (
          itemArray[2] !== 'empty' &&
          itemArray[2] === itemArray[4] &&
          itemArray[4] === itemArray[6]
        ) {
          setWinMessage(`${itemArray[2]} won`);
        }
      };

    return (
        <Container style={{backgroundColor:"#333945",padding:5}}>
          <Header>
              <Body>
                <Title>
                    TicTacToe
                </Title>
              </Body>
          </Header>
          <Content>
           <View style={styles.grid}>
             {itemArray.map((item,index)=>(
                <TouchableOpacity
                 style={styles.box}
                 key={index}
                 onPress={()=>changeItem(index)}
                  >

                  <Card style={styles.Card}>
                      <Icons name={item} />
                  </Card>

                </TouchableOpacity>
             ))}
           </View>

           {
               winMessage ? (
                   <View>
                       <H1 style={styles.message}>{winMessage}</H1>
                       <Button
                       onPress={reloadGame}
                       primary
                       block
                       rounded

                       >
                           <Text>Reload Game</Text>
                       </Button>
                   </View>
               ) : (
                   <H3 style={styles.message}>
                       {
                           isCross ? 'Cross' : 'Circle'
                       } Turn
                   </H3>
               )
           }
              
          </Content>
            
           
        </Container>
    )
}

export default Tictactoe;

const styles = StyleSheet.create({
    grid:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:20
    },
    box:{
        width:'33%',
        marginBottom:6,

    },
    Card:{
        height:120,
        justifyContent:"center",
        alignItems:"center"
    },
    message:{
        textAlign:"center",
        textTransform:"uppercase",
        color:"white",
        marginTop:20,
        backgroundColor:"#4652B3",
        paddingVertical:10,
        marginVertical:10
    }
})
