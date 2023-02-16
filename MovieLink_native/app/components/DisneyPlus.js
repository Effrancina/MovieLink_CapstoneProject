import { View, Text, Image,TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const DisneyPlus = () => {
  return (
    <TouchableOpacity
           className= "mx-3"
            onPress={() => Linking.openURL("https://www.disneyplus.com/en-gb/welcome/a/subscribe")}
            >
            <Image
              source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Eyn6lcVZKCz_W3wowZSPsF6GtS6P_yOxfQ&usqp=CAU",
                }}
                className="h-16 w-16"
                accessibilityLabel="disney plus logo"
                ></Image>
          </TouchableOpacity>
  )
}

export default DisneyPlus