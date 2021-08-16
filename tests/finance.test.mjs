import Finance from '../model/Finance.mjs';

describe('As a Finance API user', () => {
    describe('I have to get HTTP response code', () => {
        xtest('200 for a valid range', async () => {

            //TODO: replace this method with Finance.getFinanceData(...) method
            // to be able to define different test conditions:
            // - company
            // - region
            // - interval
            // - range
            let { status } = await Finance.getFinanceDataForAAPL();
            expect(status).toBe(200);
        });

        xtest('422 for a invalid range', async () => {
            // TODO: put required parameter to simulate the required test condition
            let { status } = await Finance.getFinanceData();

            //  TODO: insert verifications
            // ...
        });

        xtest('404 for a nonexistent company', async () => {
            // TODO: put required parameter to simulate the required test condition
            let { status } = await Finance.getFinanceData();

            //  TODO: insert verifications
            // ...
        });
    });

    describe('I have to get values for response headers', () => {
        test('content-type', async () => {
            let { headers } = await Finance.getFinanceData();
            expect(headers['content-type']).toBe('application/json;charset=utf-8');
        });

        xtest('x-request-id', async () => {
            let { headers } = await Finance.getFinanceData();

            //  TODO: insert verifications for "x-request-id" header
            //  You have to use regular expression to verify a headers unique value:
            //  "d5f838b8-fe84-4f2a-b950-7a07f13264a7"
            // ...

        });
    });
});
