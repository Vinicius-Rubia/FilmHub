import React, { useState } from "react";

import * as C from "./styles";

interface ISwitchTabsProps {
  data: any;
  onTabChange: (tab: string) => void;
}

export const SwitchTabs: React.FC<ISwitchTabsProps> = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const activeTab = (tab: string, index: number) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab);
  };

  return (
    <C.Container className="switchingTabs">
      <div className="tabItems">
        {data.map((tab: string, index: number) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </C.Container>
  );
};
