import { Output, tool, ToolLoopAgent } from "ai";
import { gemini } from "../../model";
import { RESEARCH_AGENT_INSTRUCTIONS } from "./general-instructions";
import { z } from "zod";
import { ResearchSchema } from "@/schemas/research.schema";

const researchAgent = new ToolLoopAgent({
  model: gemini,
  output: Output.object({
    schema: ResearchSchema,
  }),
  instructions: RESEARCH_AGENT_INSTRUCTIONS,
});

export const researchTool = tool({
  description:
    "Research the project domain and return comprehensive structured research.",

  inputSchema: z.object({
    userPrompt: z.string(),
  }),

  execute: async ({ userPrompt }) => {
    console.log("Research Agent Started");

    const result = await researchAgent.generate({
      prompt: userPrompt,
    });

    console.log(JSON.stringify(result.output, null, 2));

    return result.output;
  },
});
