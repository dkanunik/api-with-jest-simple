import AppConfig from '../configs/AppConfig.cjs';

import axios from "axios";

class Finance {

    static async getFinanceData(interval) {
        const params = 'chart/AAPL?region=US&lang=en-US&includePrePost=false&interval=2m&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance'
        try {
            let result = await axios.get(AppConfig.baseUrl + params);
            //todo: log with the debug level
            return result;
        } catch (e) {
            console.log(`Request [${AppConfig.baseUrl}${params}] returned: `);
            console.log(e);
        }
    }
}

export default Finance;
