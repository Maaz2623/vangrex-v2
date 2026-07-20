import { Output, tool, ToolLoopAgent } from "ai";
import { gemini } from "../../model";
import { RESEARCH_AGENT_INSTRUCTIONS } from "./general-instructions";
import { z } from "zod";
import { ResearchSchema } from "@/schemas/research.schema";

export const researchAgent = new ToolLoopAgent({
  model: gemini,
  output: Output.object({
    schema: ResearchSchema,
  }),
  instructions: RESEARCH_AGENT_INSTRUCTIONS,
});
