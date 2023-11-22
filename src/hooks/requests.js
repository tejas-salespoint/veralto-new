import axios from "axios";

async function runAllFunctions(groupId, reportId) {
    try {
        // Get Active Directory Bearer Auth Token
        const authTokenResponse = await httpGetAuthToken();
        authTokenResponse?.AccessToken
        // Get Embed URL and other things
        const embedUrlResponse = await httpGetEmbedUrl(groupId, reportId, authTokenResponse?.AccessToken);

        // Get Report Access Embed Token
        const reportTokenResponse = await httpGetReportToken(groupId, reportId, authTokenResponse?.AccessToken);

        const returnData = {
            "reportId": await authTokenResponse?.ReportId,
            "embedToken": await reportTokenResponse?.token,
            "embedUrl": await embedUrlResponse?.embedUrl

        }
        // Return an object containing all responses
        return returnData;
    } catch (error) {
        // Handle errors here
        console.error('Error running all functions:', error.message);
        throw error;
    }
}


// todo :: Get Active Directory Bearer Auth Token
async function httpGetAuthToken() {
    const api_url = "https://powerbi-access-token.azurewebsites.net/api/HttpTrigger1?code=BFClCL3XDIZpPnGyhun_nejZHPJdWr5aXH3jYREL55JZAzFuze-Ylw==";

    try {
        const response = await axios.get(api_url);
        return response.data;
    } catch (error) {
        // Handle errors here
        console.error('Error fetching Auth Token:', error.message);
        throw error;
    }
}

// todo :: Get Embed URL and other things
async function httpGetEmbedUrl(groupId, reportId, authToken) {
    const api_url = `https://api.powerbi.com/v1.0/myorg/groups/${groupId}/reports/${reportId}`;

    try {
        const response = await axios.get(api_url, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json', // You can add other headers as needed
            },
        });

        return response.data;
    } catch (error) {
        // Handle errors here
        console.error('Error fetching Embed URL:', error.message);
        throw error;
    }
}

// todo :: Get Report Access Embed Token
async function httpGetReportToken(groupId, reportId, authToken) {
    const api_url = `https://api.powerbi.com/v1.0/myorg/groups/${groupId}/reports/${reportId}/GenerateToken`;

    try {
        const response = await axios.post(api_url, {
            "accessLevel": "view"
        }, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        // Handle errors here
        console.error('Error fetching Report Token:', error.message);
        throw error;
    }
}


export { httpGetAuthToken, httpGetReportToken, httpGetEmbedUrl, runAllFunctions }