import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    FlatList, 
    StyleSheet 
} from "react-native";

export default function TaskList({navigation}){
    const tasks = [
        {
            id:1,
            title:"Comprar Leite",
            date:"2025-04-27",
            time:"10:00",
            adress:"Supermercado Noemia",
        },{
            id:2,
            title:"Mandar e-mail",
            date:"2025-06-20",
            time:"14:50",
            adress:"Trabalho",
        },{
            id:2,
            title:"Estudar React Native",
            date:"2025-06-26",
            time:"00:00",
            adress:"Casa",
        }
    ]

    const handleTaskPress = (task) =>{
        navigation.navigate("TaskDetail",{task});
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={tasks}
            keyExtractor={(item)=>item.id.toString}
            renderItem={({item})=>(
            <TouchableOpacity
            style={styles.itemCard}
            onPress={()=> handleTaskPress(item)}
            >
                <Text>{item.title}</Text>
            </TouchableOpacity>
            )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingTop:10,
    },
    itemCard:{
        padding:15,
        backgroundColor:"lightskyblue",
        marginBottom:10,
        borderRadius:8,
    }
})