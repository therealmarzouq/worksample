import "./App.css";
import "./styles/output.css";

import React from "react";
import { Layout, TabPane, Searchbar } from "./components/common";
import { Tabs, Button } from "./components/ui";
import { ChevronDown } from "./components/icons";
import { EfficiencyCard } from "./components/efficiency";
import { payload } from "./payload";

function App({ pageProps }) {
  return (
    <div className="app-root">
      <Layout pageProps={pageProps}>
        <Tabs>
          <TabPane name="Efficiency" key="1">
            <div className="efficiency-tab__header">
              <h1 className="efficiency-tab__subtitle">Efficiency Analytics</h1>
              <div className="efficiency-tab__action">
                <Searchbar
                  className="efficiency-tab__action-search"
                  width="w-80"
                  variant="b"
                  placeholder="Search"
                  iconPlacement="start"
                  id="searchEfficiency"
                />
                <Button
                  aria-label="filter-option"
                  type="button"
                  className="efficiency-tab__action-button efficiency-tab__action-button--filter">
                  Filter Options
                  <ChevronDown
                    className="efficiency-tab__action-button--filter-icon"
                    width="12"
                    height="12"
                  />
                </Button>
                <div className="efficiency-tab__action-divider"></div>
                <Button
                  aria-label="export"
                  type="button"
                  className="efficiency-tab__action-button"
                  variant="primary">
                  Export
                </Button>
              </div>
            </div>
            <div className="app-l-srcoll-section">
              {payload.map((data, key) => {
                return <EfficiencyCard key={key} data={data} />;
              })}
            </div>
          </TabPane>
          <TabPane name="Volume" key="2">
            Content of Volume Tab Pane
          </TabPane>
          <TabPane name="Customer Satisfaction" key="3">
            Content of Customer Satisfaction Tab Pane
          </TabPane>
          <TabPane name="Backlog" key="4">
            Content of Backlog Tab Pane
          </TabPane>
        </Tabs>
      </Layout>
    </div>
  );
}

export default App;
