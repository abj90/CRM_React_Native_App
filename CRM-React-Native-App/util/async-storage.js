import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key, value) => {
  console.log("SAVING TO ASYNC STORAGE", key, value);
  const serialized = JSON.stringify(value);
  return await AsyncStorage.setItem(key, serialized);
};

export const get = async (key) => {
  console.log("LOADING TO ASYNC STORAGE", key);
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : [];
  } catch (e) {
    return { error: "Failed to get to asyncStorage" };
  }
};

export const clear = async () => {
  console.log("CLEANING ASYNC STORAGE");
  return await AsyncStorage.clear();
};
