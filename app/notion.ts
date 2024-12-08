import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getPageData = async (pageId: string) => {
  try {
    const response = await notion.blocks.children.list({ block_id: pageId });
    return response.results;
  } catch (error) {
    console.error("Error fetching page data:", JSON.stringify(error, null, 2));
    throw new Error("Failed to fetch page data. Check your API key and page ID.");
  }
};
