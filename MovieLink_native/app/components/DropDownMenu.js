import { View, Text } from 'react-native'
import React from 'react'
import { SelectList } from "react-native-dropdown-select-list";

const DropDownMenu = (props) => {
  return (
    <View className="p-3">
        <SelectList
            boxStyles={{ backgroundColor: "#B9AEE0" }}
            dropdownTextStyles={{ color: "black", fontWeight: "bold", fontSize: 16 }}
            dropdownItemStyles={{ backgroundColor: "#B9AEE0" }}
            dropdownStyles={{backgroundColor: "#B9AEE0" }}
            inputStyles={{ fontWeight: "bold" }}
            placeholder="Select Region"
            setSelected={(val) => props.setSelected(val)}
            data={props.justRegions}
            save="key"
          />
        </View>
  )
}

export default DropDownMenu