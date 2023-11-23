import Layout from "../../components/Layout";

const PowerBiVeralto = () => {
  return (
    <Layout>
      <iframe
        className="h-screen w-full border-none"
        title="Competitor Analysis Report"
        // src="https://app.powerbi.com/reportEmbed?reportId=a4eef5c8-d937-41b6-90aa-24620f8c1061&autoAuth=true&ctid=f94768c8-8714-4abe-8e2d-37a64b18216a&filterPaneEnabled=false&navContentPaneEnabled=false&toolbarEnabled=false&pageName=Cargo%20Global%20Network%20Report"
        src="https://app.powerbi.com/view?r=eyJrIjoiOGUyYjc0OTctNGExMy00YTY2LTg0NjUtZjhjYTE0N2JmYzlhIiwidCI6IjJjM2E2OTI5LTFmMDgtNDhmMi1iMDdmLTMwNzUyN2U4ZGQwYiIsImMiOjZ9"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
};

export default PowerBiVeralto;
