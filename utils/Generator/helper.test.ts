import {
  getRandomInRange,
  makeRandomUniqueList,
  getUniquesFromLists,
} from "./helper";

describe("Generator helpers", () => {
  describe("getRandomInRange", () => {
    it("only returns numbers", () => {
      const random = Math.random;

      const generated = getRandomInRange(random, 1, 1000);

      expect(generated).toEqual(expect.any(Number));
    });

    it("return correctly for single element array", () => {
      const random = Math.random;

      const generated = getRandomInRange(random, 123, 123);

      expect(generated).toBe(123);
    });

    it("returns values in range only", () => {
      const min = 20;
      const max = 40;
      const random = Math.random;

      Array(1000)
        .fill(0)
        .map(() => getRandomInRange(random, min, max))
        .forEach((r) => {
          expect(r).toBeGreaterThanOrEqual(min);
          expect(r).toBeLessThanOrEqual(max);
        });
    });
  });
  test("getRandomInRange", () => {
    {
      const min = -100;
      const max = 100;
      const random = Math.random;

      const randomArray = Array(10000)
        .fill(0)
        .map(() => getRandomInRange(random, min, max))
        .sort((a, b) => a - b);

      for (let i = min; i <= max; i++) {
        expect(randomArray).toContain(i);
        if (!randomArray.includes(i)) {
          console.error(`Does not contain ${i}`);
        }
      }
    }
  });

  test("makeRandomUniqueList", () => {
    const random = Math.random;
    const min = 23;
    const max = 55;
    const count = max - min + 1;

    const list = makeRandomUniqueList(random, min, max, 10);
    const uniqueSet = new Set([...list]);
    const list2 = makeRandomUniqueList(random, min, max, count);

    expect(uniqueSet.size).toBe(list.length);
    expect(list2).toContain(min);
    expect(list2).toContain(max);
    expect(list2).toHaveLength(count);
  });

  test("getUniquesFromLists", () => {
    const list1 = [1, 2, 3, 4, 5];
    const list2 = [8, 7, 6, 5];
    const list3: number[] = [];
    const list4 = [1, 2, 3, 4, 5, 7, 9, 0, 10];
    const expectedUniques = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];

    const uniques1 = getUniquesFromLists();
    expect(uniques1).toHaveLength(0);

    const uniques2 = getUniquesFromLists(list1);
    expect(uniques2.sort()).toEqual(list1.sort());

    const uniques3 = getUniquesFromLists(list1, list2, list3, list4);
    expect(uniques3.sort()).toEqual(expectedUniques.sort());
  });
});
