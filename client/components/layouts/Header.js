import React, {useState} from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, TextInput } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        console.log(searchText);
    }

    return (
        <View style={{ height: 60, backgroundColor: "lightgray"}}>
            <View style={style.container}>
                <TextInput style={style.inputBox} value={searchText} onChangeText={(text) => setSearchText(text)}/>
                <TouchableOpacity style={style.searchBtn} onPress={() => handleSearch()}>
                    <FontAwesome name="search" style={style.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    inputBox: {
        borderWidth: 0.3,
        width: "100%",
        position: "absolute",
        left: 15,
        height: 40,
        color: "#000",
        backgroundColor: "#fff",
        paddingLeft: 10,
        fontSize: 20,
        borderRadius: 5,
    },
    searchBtn: {
        position: "absolute",
        left: "95%",
    },
    icon: {
        color: "#000",
        fontSize: 18,
    }
});

export default Header;