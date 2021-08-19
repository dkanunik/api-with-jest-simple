import AppConfig from '../configs/AppConfig.cjs';

import axios from 'axios';

class Finance {

    //TODO: this is the bad method that should be replaced by getFinanceData method
    static async getFinanceDataForAAPL() {
        const params = 'chart/AAPL?region=US&lang=en-US&includePrePost=false&interval=2m&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance';
        try {
            return await axios.get(AppConfig.baseUrl + params);
        } catch (e) {
            console.log(`Request [${AppConfig.baseUrl}${params}] returned: `);
            console.log(e);
        }
    }

    // TODO: define parameters to be able to get dynamic test data
    static async getFinanceData() {

        // TODO: the value should contain template variables
        const params = 'chart/AAPL?region=US&lang=en-US&includePrePost=false&interval=2m&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance';
        try {
            return await axios.get(AppConfig.baseUrl + params);
        } catch (e) {
            console.log(`Request [${AppConfig.baseUrl}${params}] returned: `);
            console.log(e);
        }
    }
}

export default Finance;
