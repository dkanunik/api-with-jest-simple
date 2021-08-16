import Finance from '../domain/Finance.mjs';

describe('As a Finance API user', () => {
    describe('I need to get HTTP response code', () => {
        test('200 for 1d range', async () => {
            let { status } = await Finance.getFinanceData();
            expect(status).toBe(200);
        });
    });
});

