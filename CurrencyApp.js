import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
    DOLLAR: 0.014,
    EURO: 0.012,
    POUND: 0.011,
    RUBEL: 0.93,
    AUSDOLLAR: 0.2,
    CANDOLLAR: 0.019,
    YEN: 1.54,
    DINAR: 0.0043,
    BITCOIN: 0.000004

}

//import Snackbar from "react-native-snackbar";

const CurrencyApp = () => {
    
    const [inputValue,setInputValue] = useState(0);
    const [result,setResult] = useState(0);

    const buttonPressed = (currency)=> {
        if(!inputValue){
            return Snackbar.show({
                text:"please enter a value",
                backgroundColor:"EA7773",
                textColor:"#FFFFFF"
            });
        }
        let result = parseFloat(inputValue)*currencyPerRupee[currency];
        setResult(result.toFixed(2));
       
    }
    

    return (
        <>
         <ScrollView backgroundColor="#1b262c"
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic"
          >
            <SafeAreaView style={styles.container}>
                
                <View style={styles.resultsContainer}>
                    <Text  style={styles.resultsValue}>{result}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="Enter Value in Rupees"
                            placeholderTextColor="#c1c1c1"
                            value={inputValue}
                            onChangeText={(inputValue) =>
                                setInputValue(inputValue)}
                                     
                        
                        >

                        </TextInput>
                </View>
                <View style={styles.convertButtonContainer}>
                    {Object.keys(currencyPerRupee).map((currency)=>(
                        <TouchableOpacity
                        onPress={()=>buttonPressed(currency)}
                         key={currency}
                         style={styles.convertButton}
                        >
                            <Text style={styles.temp}>{currency}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </SafeAreaView>
         </ScrollView>
           
        </>
    )
}

export default CurrencyApp


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1b262c",
    },
    resultsContainer:{
        height:70,
        marginTop: 80,
        justifyContent:"center",
        borderBottomColor:"#bbe1fa",
        borderBottomWidth:2,
        alignItems:"center"
    },
    resultsValue:{
        fontSize: 30,
        color:"#FFF",
        fontWeight:"bold"
    },
    inputContainer:{
        height: 70,
        marginTop: 10,
        justifyContent:"center",
        alignItems:"center",
        borderBottomWidth:2,
        borderBottomColor:"#bbe1fa"
    },
    input:{
        fontSize: 30,
        textAlign:"center",
        color:"white"
    },
    convertButtonContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop: 10,

    },
    temp:{
        color:"white",
        fontSize:15
    },
    convertButton:{
        alignItems:"center",
        justifyContent:"center",
        height:100,
        width:"33%",
        borderWidth: 2,
        borderColor:"#bbe1fa",
        marginTop:10,
        backgroundColor:"#0f4c75"
    }
    
})