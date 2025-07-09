// components/StickyHeader.jsx
import Taro, { usePageScroll } from "@tarojs/taro";
import { useState, useEffect, useRef } from "react";
import { View } from "@tarojs/components";
import "./index.scss";
// 导入 usePageScroll Hook
// import { usePageScroll } from "taro-hooks";

const StickyHeader = ({ children, threshold = 100 }) => {
  const [isFixed, setIsFixed] = useState(false);

  const headerRef = useRef(null);

  // 使用 usePageScroll 监听滚动
  usePageScroll(({ scrollTop }) => {
    setIsFixed(scrollTop >= threshold);
  });

  return (
    <View ref={headerRef} className={`sticky-header ${isFixed ? "fixed" : ""}`}>
      {children}
    </View>
  );
};

export default StickyHeader;
