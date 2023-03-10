import React from "react";
import { View, FlatList, Text } from "react-native";
import RegionListRow from "./RegionListRow";
import { useNavigation } from "@react-navigation/native";

import stylesFn from "./style";
import Button from "../../../../components/Button";
import { regionsBtnOptions } from "../../../../util/constans";
import CustomerToBeContacted from "../customerToBeContacted";

const RegionList = () => {
  const [regionsList, setRegionsList] = React.useState(regionsBtnOptions);

  const { navigate } = useNavigation();
  const styles = stylesFn();

  return (
    <View style={styles.constainer}>
      <Button
        text={"Create Customer"}
        onPress={() => {
          navigate("New");
        }}
        disabled={false}
      />
      <Text>List of regions</Text>
      <FlatList
        data={regionsList}
        renderItem={({ item }) => <RegionListRow item={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.pushNotificationBtn}>
        <CustomerToBeContacted />
      </View>
    </View>
  );
};

export default RegionList;
