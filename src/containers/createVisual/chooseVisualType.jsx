import React from "react";
import './chooseVisualType.scss';

export function CreateVisualChooseVisualType(props) {
    const {
      ai_Bg_Bw1,
      image24,
      image27,
      image25,
      walmartTopLogo,
      playground,
      reportHub,
      welcomeJon,
      topBarPbiEmbeddedReport,
      actions,
      blankCanvas,
      overlapGroup3,
      chooseVisualType,
      createReportButton2Props,
      columnChart1Props,
      columnChart2Props,
      columnChart3Props,
    } = props;
  
    return (
      <div className="container-center-horizontal">
        <div className="create-visual-choose-visual-typescreen">
          <div className="overlap-group10">
            <img className="ai_-bg_bw-1" src={ai_Bg_Bw1} />
            <div className="rectangle-37"></div>
            <div className="image-container">
              <img className="image-24" src={image24} />
              <img className="image-27" src={image27} />
              <img className="image-25" src={image25} />
            </div>
            <div className="overlap-group1">
              <div className="white-bar"></div>
              <div className="highlighted-grey-button"></div>
              <img className="walmart-top-logo" src={walmartTopLogo} />
              <img className="lineright" src="line-right.svg" />
              <img className="playground" src={playground} />
              <img className="report-hub" src={reportHub} />
              <div className="welcome-jonvalign-text-middlesegoeui-regular-normal-mine-shaft-14px">
                {welcomeJon}
              </div>
            </div>
            <img className="top-bar-pbi-embedded-report" src={topBarPbiEmbeddedReport} />
            <div className="blur-main-page"></div>
            <ReportButtons />
            <div className="rectangle-3461"></div>
            <div className="actionsvalign-text-middlesegoeui-normal-white-22px">
              {actions}
            </div>
            <div className="blur-side-bar"></div>
            <div className="build-visual-whitespace"></div>
            <img className="blank-canvas" src={blankCanvas} />
            <CreateReportButton2>{createReportButton2Props.children}</CreateReportButton2>
            <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <div className="choose-visual-typevalign-text-middlesegoeui-regular-normal-white-12px">
                {chooseVisualType}
              </div>
            </div>
            <AreaChart />
            <ColumnChart columnChart={columnChart1Props.columnChart} />
            <ColumnChart
              columnChart={columnChart2Props.columnChart}
              className={columnChart2Props.className}
            />
            <ColumnChart
              columnChart={columnChart3Props.columnChart}
              className={columnChart3Props.className}
            />
            <BarChart />
            <LineChart />
          </div>
        </div>
      </div>
    );
  }
  
  function ReportButtons() {
    return (
      <div className="report-buttons">
        <div className="overlap-group1-1">
          <img className="white-blue-outer" src="white-blue-outer-13.svg" />
          <div className="capture-viewvalign-text-middlesegoeui-normal-black-14px">
            Capture View
          </div>
          <img className="star-add" src="star-add-4.svg" />
        </div>
        <div className="overlap-group">
          <img className="white-blue-outer" src="white-blue-outer-3.svg" />
          <img className="text-bullet-list-checkmark" src="text-bullet-list-checkmark.png" />
          <div className="saved-viewsvalign-text-middlesegoeui-normal-black-14px">
            Saved Views
          </div>
        </div>
        <div className="overlap-group">
          <img className="white-blue-outer" src="white-blue-outer-2.svg" />
          <div className="existing-reportsvalign-text-middlesegoeui-normal-black-14px">
            Existing Reports
          </div>
          <ReportDocumentE9F9 />
        </div>
      </div>
    );
  }
  
  function ReportDocumentE9F9() {
    return <div className="report-document-e9-f9"></div>;
  }
  
  function CreateReportButton2(props) {
    const { children } = props;
  
    return (
      <div className="create-report-buttonborder-5px-cloud">
        <div className="createvalign-text-middlesegoeui-normal-white-12px">
          {children}
        </div>
      </div>
    );
  }
  
  function AreaChart() {
    return (
      <div className="area-chart">
        <div className="overlap-group4">
          <img className="charttypearea-48-area-chart-type" src="charttypearea-48-area-chart-type.svg" />
        </div>
        <div className="area-chart-1valign-text-middlesegoeui-regular-normal-black-12px">
          Area Chart
        </div>
      </div>
    );
  }
  
  function ColumnChart(props) {
    const { columnChart, className } = props;
  
    return (
      <div className={`column-chart ${className || ""}`}>
        <div className="overlap-group5">
          <img className="x-48" src="columnlinecombo-48-bar-chart-combo-line-chart.svg" />
        </div>
        <div className="column-chart-1valign-text-middlesegoeui-regular-normal-black-12px">
          {columnChart}
        </div>
      </div>
    );
  }
  
  function BarChart() {
    return (
      <div className="bar-chart">
        <div className="overlap-group8">
          <img className="charttypepercentstac" src="charttypepercentstackedbar-32-bar-chart-chart-type-stacked-b.svg" />
        </div>
        <div className="bar-chart-1valign-text-middlesegoeui-regular-normal-black-12px">
          Bar Chart
        </div>
      </div>
    );
  }
  
  function LineChart() {
    return (
      <div className="line-chart">
        <div className="overlap-group9">
          <img className="charttypeline-48-chart-type-line" src="charttypeline-48-chart-type-line.svg" />
        </div>
        <div className="line-chart-1valign-text-middlesegoeui-regular-normal-black-12px">
          Line Chart
        </div>
      </div>
    );
  }
  
  const createReportButton2Data = {
    children: "Create",
  };
  
  const columnChart1Data = {
    columnChart: "Column Chart",
  };
  
  const columnChart2Data = {
    columnChart: "Scatter Chart",
    className: "scatter-chart",
  };
  
  const columnChart3Data = {
    columnChart: "Pie Chart",
    className: "pie-chart",
  };
  
  const createVisualChooseVisualTypeData = {
    ai_Bg_Bw1: "ai-bg-bw-1-1.png",
    image24: "image-24.png",
    image27: "image-27-1.png",
    image25: "image-25.png",
    walmartTopLogo: "walmart-top-logo.png",
    playground: "playground.png",
    reportHub: "report-hub.png",
    welcomeJon: "Welcome Jon",
    topBarPbiEmbeddedReport: "top-bar-pbi-embedded-report.png",
    actions: "Actions",
    blankCanvas: "blank-canvas-12.png",
    overlapGroup3: "chevron-2.png",
    chooseVisualType: "Choose Visual Type",
    createReportButton2Props: createReportButton2Data,
    columnChart1Props: columnChart1Data,
    columnChart2Props: columnChart2Data,
    columnChart3Props: columnChart3Data,
  };