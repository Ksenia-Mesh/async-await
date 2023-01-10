import GameSavingLoader from "../GameSavingLoader";
import GameSaving from "../GameSaving";

const data =  '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test("test 1", () => {
  const response = new GameSaving(JSON.parse(data));
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };
  expect(response).toEqual(result);
});

test("test 2", async () => {
  const response = await GameSavingLoader.load();
  const expected = new GameSaving(JSON.parse(data));

  expect(expected).toEqual(response);
});

test("test 3", async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toBe("Error parsing data");
  }
});