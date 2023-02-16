import { View, Text } from 'react-native'
import React from 'react'
import { MultipleSelectList } from "react-native-dropdown-select-list";

const MultipleDropDownMenu = (props) => {
  // console.log(props)
  return (
    <View className="p-3">
        <MultipleSelectList
            boxStyles={{ backgroundColor: "#B9AEE0", maxWidth:200}}
            dropdownTextStyles={{ color: "black", fontWeight: "bold", fontSize: 16 }}
            dropdownItemStyles={{ backgroundColor: "#B9AEE0" }}
            dropdownStyles={{backgroundColor: "#B9AEE0" , maxWidth:200}}
            inputStyles={{ fontWeight: "bold" }}
            placeholder="Select Provider"
            setSelected={(val) => props.setSelected(val)}
            data={props.justData}
            label="Providers"
            save="key"
            badgeStyles={{backgroundColor: "#313d4a"}}
          />
        </View>
  )
}

export default MultipleDropDownMenu