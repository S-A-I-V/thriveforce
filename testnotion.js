const { Client } = require("@notionhq/client");

const notion = new Client({ auth: "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" });

async function fetchPage() {
  try {
    const response = await notion.blocks.children.list({
      block_id: "14e1d356-b660-4b1a-a307-a745914393db",
    });
    console.log("Page Data:", response);
  } catch (error) {
    console.error("Error:", JSON.stringify(error, null, 2));
  }
}

fetchPage();
