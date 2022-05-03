import React from "react";
import './welcomeStyles.scss';
import ai from './images/ai.svg';
import wmt from './images/wmt-logo.svg';

export function Welcome() {
  return (
    <div className="container-center-horizontal">
      <div className="welcomescreen">
        <div className="overlap-group3">
          <img className="ai_-bg_bw-1" src={ai} />
          <div className="overlap-group">
            <div className="overlap-group1">
              <h1 className="hello-jon-text">
                Hello Jon, what would you like to see?
              </h1>
              <img className="wmt-logo-centre" src={wmt} />
            </div>
            <img className="paragraph" src="paragraph.png" />
            <div className="button-container">
              <div className="create-report-buttonborder-5px-cloud">
                <div className="icon-text-limiter">
                  <div className="create-report-button">
                    Create Report
                  </div>
                </div>
              </div>
              <div className="view-existing-reports-buttonborder-5px-cloud">
                <div className="icon-text-limiter-1">
                  <div className="view-existing-reports-button">
                    View Existing Reports
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group2">
            <div className="white-bar"></div>
            <div className="highlighted-grey-button"></div>
            <img className="walmart-top-logo" src={wmt} />
            <img className="lineright" src="line-right.svg" />
            <img className="playground" src="playground.png" />
            <img className="report-hub" src="report-hub.png" />
            <div className="welcome-jon-text-2">
              Welcome Jon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}