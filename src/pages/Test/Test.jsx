import { PowerBIEmbed } from "powerbi-client-react";
import Layout from "../../components/Layout";
import { models } from "powerbi-client";
import { runAllFunctions } from "../../hooks/requests";
import { useEffect, useState } from "react";

// group id = cb3a3b60-0645-42b3-9437-4c814b360a66
//  report id =f4bdc6e3-1c62-4c51-871e-b37babb69f3e

const Test = () => {
  const groupId = "cb3a3b60-0645-42b3-9437-4c814b360a66";
  const reportId = "f4bdc6e3-1c62-4c51-871e-b37babb69f3e";
  const [reportData, setReportData] = useState(null);

  async function someFunction() {
    const response = await runAllFunctions(groupId, reportId);
    // Now you can use 'response'
    console.log(response);
    setReportData(response);
  }
  // Call the function
  useEffect(() => {
    someFunction();
  }, []);

  return (
    <Layout>
      <div className="">
        {reportData && (
          <PowerBIEmbed
            embedConfig={{
              type: "report", // Supported types: report, dashboard, tile, visual and qna
              id: reportId,
              embedUrl: reportData?.embedUrl,
              accessToken: reportData?.embedToken,
              tokenType: models.TokenType.Embed,
              pageName: "CompetitorAnalysisReport",
              settings: {
                panes: {
                  filters: {
                    expanded: false,
                    visible: false,
                  },
                  pageNavigation: {
                    visible: false,
                  },
                },
              },
              layoutType: models.LayoutType.Custom,
              customLayout: {
                displayOption: models.DisplayOption.FitToPage,
                pageSize: {
                  type: models.PageSizeType.Custom,
                },
              },
            }}
            eventHandlers={
              new Map([
                [
                  "loaded",
                  function () {
                    console.log("Report loaded");
                  },
                ],
                [
                  "rendered",
                  function () {
                    console.log("Report rendered");
                  },
                ],
                [
                  "error",
                  function (event) {
                    console.log(event.detail);
                  },
                ],
              ])
            }
            cssClassName={"Embed-container"}
            getEmbeddedComponent={(embeddedReport) => {
              window.report = embeddedReport;
            }}
          />
        )}
        <div></div>
      </div>
    </Layout>
  );
};

export default Test;
