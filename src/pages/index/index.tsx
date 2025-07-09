import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { AtTabBar } from "taro-ui";
import "./index.scss";
import FoodList from "./foodList";
import StickyHeader from "@/components/StickyHeader";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      {/* header */}
      {/* 吸顶头部 */}
      {/* <StickyHeader threshold={150}>
        <View className="header-content">
          <Text>
            我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航我的吸顶导航的吸顶导航我的吸顶导航我的吸顶导航
          </Text>
        </View>
      </StickyHeader> */}
      {/* body */}
      <FoodList />
      {/* footer */}

      <AtTabBar
        fixed
        tabList={[
          { title: " ", iconType: "shopping-cart", text: "100", max: 99 },
        ]}
        onClick={() => {}}
        current={0}
      />
    </View>
  );
}
