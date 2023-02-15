import { View, Text } from 'react-native'
import React from 'react'
import { MultipleSelectList } from "react-native-dropdown-select-list";

const MultipleDropDownMenu = (props) => {
  // console.log(props)
  return (
    <View className="p-3">
        <MultipleSelectList
            boxStyles={{ backgroundColor: "#B9AEE0" }}
            dropdownTextStyles={{ color: "black", fontWeight: "bold", fontSize: 16 }}
            dropdownItemStyles={{ backgroundColor: "#B9AEE0" }}
            dropdownStyles={{backgroundColor: "#B9AEE0" }}
            inputStyles={{ fontWeight: "bold" }}
            placeholder="Select Region"
            setSelected={(val) => props.setSelected(val)}
            data={props.justData}
            // onSelect={()=>alert(props.selected)}
            label="providers"
            save="key"
          />
        </View>
  )
}

export default MultipleDropDownMenu