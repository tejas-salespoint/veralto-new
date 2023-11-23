import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PdfViewer from "./PdfViewer";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PdfResponseTab({ activeIds, activePdf, response }) {
  // todo :: practice

  const [pdfUrl, setPdfUrl] = React.useState(null);
  const apiUrl = `https://func-openai-search-002.azurewebsites.net/api/content/${activePdf}?container=veralto-container`;
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.blob();
        setPdfUrl(URL.createObjectURL(data));
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  console.log(activeIds);
  console.log(response);

  const [value, setValue] = React.useState(activeIds?.tabId || 1);

  React.useEffect(() => {
    setValue(activeIds?.tabId);
  }, [activeIds]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="!p-0 ">
      <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 0 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="basic tabs example"
        >
          <Tab
            className={`!text-white !font-sans !font-semibold !text-md !normal-case ${
              value === 0 ? "!bg-opacity-30 !bg-black" : ""
            } !bg-opacity-30  !rounded-tl-2xl  rounded-md `}
            label="Thought process"
            {...a11yProps(0)}
          />
          <Tab
            className={`!text-white !font-sans !font-semibold !text-md !normal-case ${
              value === 1 ? "!bg-opacity-30 !bg-black" : ""
            } !bg-opacity-30     `}
            label="Supporting content"
            {...a11yProps(1)}
          />
          <Tab
            disabled={activePdf ? false : true}
            className={`!text-white ${
              activePdf ? "!text-white" : "!text-gray-600"
            }  !font-sans !font-semibold !text-md !normal-case ${
              value === 2 ? "!bg-opacity-30 !bg-black" : ""
            } !bg-opacity-30  !rounded-tr-2xl  rounded-md `}
            label="Citation"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel
        className="!h-[70vh] m-3 !w-[95%] "
        value={value}
        index={0}
      >
        {/* {response[0].response?.thoughts.map((data, index) => (
          <div key={index} className="bg-white p-3 m-3 rounded">
            {data}
          </div>
        ))} */}

        {
          // eslint-disable-next-line react/prop-types
          response
            ?.filter((filterId) => filterId?.id === activeIds?.id)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded p-3 scroll !h-[70vh] overflow-y-scroll"
                dangerouslySetInnerHTML={{ __html: item?.response?.thoughts }}
              ></div>
            ))
        }

        {/* {response[0].response?.thoughts} */}
      </CustomTabPanel>
      <CustomTabPanel
        className="!h-[70vh] m-3 !w-[95%]"
        value={value}
        index={1}
      >
        <div className="!h-[70vh]  overflow-y-scroll overflow-x-scroll">
          {
            // eslint-disable-next-line react/prop-types
            response
              ?.filter((filterId) => filterId?.id === activeIds?.id)
              .map((item) => (
                <>
                  {item?.response?.data_points?.map((data, index) => (
                    <div key={index} className="bg-white p-3 rounded mb-3">
                      <div className="text-lg font-bold !w-[95%]">
                        {data?.split(".pdf:")[0]}
                      </div>
                      {data?.split(".pdf:")[1]}
                    </div>
                  ))}
                </>
              ))
          }
        </div>
      </CustomTabPanel>
      <CustomTabPanel
        className="!h-[70vh] m-3"
        // className="!m-0  max-h-[500px] overflow-y-auto "
        value={value}
        index={2}
      >
        {/* <span>{activePdf}</span> */}
        <div className="!h-[70vh] overflow-y-scroll">
          <iframe
            // typeof="application/pdf"
            className=" rounded  "
            title="Citation"
            src={`https://func-openai-search-002.azurewebsites.net/api/content/${activePdf}?container=veralto-container1`}
            width="100%"
            height="810px"
            style={{ marginTop: "12px" }}
          />

          {/* <PdfViewer
            pdfUrl={
              "https://func-openai-search-002.azurewebsites.net/api/content/Water%20Distribution%20Monitoring%20Panel,%206%20Sensors,%20TU5300sc%20without%20ACM,%20CL17sc%20_%20Hach-2.pdf?container=veralto-container"
            }
          /> */}

          {/* <embed
            id="fgh"
            src={pdfUrl}
            type="application/pdf"
            width="400"
            height="400"
          /> */}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
