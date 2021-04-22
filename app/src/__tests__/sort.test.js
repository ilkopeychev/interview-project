import { stableSort, getComparator } from "../Customers";
import {
  MOCKED_UNSORTED_ORDER_VALUE_ASC,
  MOCKED_SORTED_ORDER_VALUE_DESC,
  MOCKED_SORTED_ORDER_VALUE_ASC,
} from "../common/constants";

describe("sort", () => {
  it("should resolve with true for correct sorting asc", async () => {
    const result = stableSort(
      MOCKED_UNSORTED_ORDER_VALUE_ASC,
      getComparator("asc", "orderValue")
    );
    const expectedResult = MOCKED_SORTED_ORDER_VALUE_ASC;

    expect(result).toEqual(expectedResult);
  });

  it("should resolve with true for correct sorting desc", async () => {
    const result = stableSort(
      MOCKED_UNSORTED_ORDER_VALUE_ASC,
      getComparator("desc", "orderValue")
    );
    const expectedResult = MOCKED_SORTED_ORDER_VALUE_DESC;

    expect(result).toEqual(expectedResult);
  });
});
