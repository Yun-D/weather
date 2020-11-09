import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons"; //아이콘
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm : {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "뇌우!",
        subtitle: "번개를 조심해"
    }, 
    Drizzle : {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "이슬비",
        subtitle: "조금 온다고 우산을 버리진 말자"
    }, 
    Rain : {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비",
        subtitle: "우산은 필수!"
    }, 
    Snow : {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "눈",
        subtitle: "눈사람 만들자~"
    }, 
    AtMosphere : {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    }, 
    Clear : {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "햇빛 쨍쨍",
        subtitle: "맑음! 이 날씨를 즐기세요"
    }, 
    Clouds : {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "흐림",
        subtitle: "구름낀 날이네."
    },
    Mist : {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "안개",
        subtitle: "뿌옇네. 운전 조심"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "먼지 가득",
        subtitle: "먼지 뿜..뿜..."
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
  }
}

export default function Weather({temp, condition}) {
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} 
            name= {weatherOptions[condition].iconName} 
            color="white"/>
            <Text style={styles.temp}> {temp} ℃</Text>
        </View>
 
        <View style={styles.textContainer}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    //...styles~~~ -> 2개 오브젝트를 함께 쓰는 es6 방식.
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "AtMosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    temp: {
        fontSize: 42,
        color: "white"
    },

    halfContainer: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },

    title: {
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle : {
        color:"white",
        fontWeight: "600",
        fontSize: 24,
        marginBottom: 10,
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent:"center",
        flex:1
    }
})