import { describe, test, expect, vi, beforeAll, beforeEach, afterEach, afterAll } from "vitest";
import { FormSubmitAction } from "action/formSubmitAction";
import { server } from "tests/mocks/node";

describe("ExecuteQueryUsecaseの単体テスト", () => {

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    test("execute", async () => {
        const expected = {
            items: [
                {
                    id: 1,
                    price: 1000,
                    linkUrl: "https://example-1.com",
                },
                {
                    id: 2,
                    price: 2000,
                    linkUrl: "https://example-2.com",
                }
            ]
        };
        const queryData = { get: vi.fn().mockReturnValue("test") };
        const actual = await FormSubmitAction.execute([], queryData);

        expect(actual).toEqual(expected);
    });
});
