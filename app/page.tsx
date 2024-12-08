import { getPageData } from "./notion";

export default async function Home() {
  try {
    const pageId = process.env.PAGE_ID || "";
    const pageData = await getPageData(pageId);

    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Welcome to ThriveForce</h1>
        <ul>
          {pageData.map((block: any) => (
            <li key={block.id}>
              {block.paragraph?.text[0]?.plain_text || "Unsupported Block"}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Error</h1>
        <p>Could not load the Notion page. Please check your configuration.</p>
      </div>
    );
  }
}
