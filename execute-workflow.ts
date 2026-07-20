import { requirementsAgent } from "@/agents/requirements-agent";

import researchAgentOutput from "@/outputs/research.json";
import { researchAgent } from "@/agents/research-agent";

async function main() {
  const userPrompt = "Create a real estate landing page.";

  // console.log("============== Research Agent Started ==================");

  // const result = await researchAgent.generate({
  //   prompt: userPrompt,
  // });

  // console.log(JSON.stringify(result.output, null, 2));

  console.log("============== Requirements Agent Started ==================");

  const result = await requirementsAgent.generate({
    prompt: `
    USER_PROMPT: ${userPrompt}

    RESEARCH_AGENT_OUTPUT: ${researchAgentOutput}
    `,
  });

  console.log(JSON.stringify(result.output, null, 2));
}

main().catch(console.error);
