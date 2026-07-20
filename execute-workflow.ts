import { mainAgent } from "@/agents/main-agent";

async function main() {
  const userPrompt = "Create a real estate landing page.";

  console.log("============== Main Agent Started ==================");

  const result = await mainAgent.generate({
    prompt: userPrompt,
  });

  console.log(JSON.stringify(result.output, null, 2));
}

main().catch(console.error);
