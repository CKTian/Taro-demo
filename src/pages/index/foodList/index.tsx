import { View, ScrollView, Text, Image } from "@tarojs/components";
import "./index.scss";
import { foods, foodTypes } from "./constants";
import { AtIcon } from "taro-ui";
const demoSrc =
  "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60";

export default function FoodList() {
  return (
    <View className="food-list">
      <View className="left-menu">
        {/* <SideBar> */}
        {foodTypes.map((item) => (
          <View key={item.key}>{item.title} </View>
        ))}
        {/* </SideBar> */}
      </View>
      <ScrollView className="right-content">
        {foods.map((item) => (
          <View key={item.key} className="food-item">
            <Image
              src={demoSrc}
              // width={100}
              // height={100}
              // fit="fill"
              style={{ borderRadius: 8 }}
            />
            <View className="food-item-description">
              <Text className="title">{item.title}</Text>
              <View>
                <Text className="ingredients">
                  {item.ingredients.join(", ")}
                </Text>
              </View>

              <AtIcon
                value="add-circle"
                size="30"
                color="#F00"
                style={{ float: "right", marginTop: "30px" }}
              ></AtIcon>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
