import { promises as fs } from "fs";
import path from "path";

export const fetchLocalData = async <Type>(jsonFile: string): Promise<Type> => {
  try {
    const json = await fs.readFile(
      path.resolve(process.cwd(), "public", jsonFile),
      "utf8",
    );

    const data = JSON.parse(json);

    return data as Type;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        `Failed to read or parse file ${jsonFile}: ${error.message}`,
      );
      throw new Error(`Could not fetch local data: ${error.message}`);
    } else {
      console.error(`Unexpected error:`, error);
      throw new Error(
        "An unexpected error occurred while fetching local data.",
      );
    }
  }
};
