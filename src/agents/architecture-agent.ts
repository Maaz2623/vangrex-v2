import { Output, tool, ToolLoopAgent } from "ai";
import { gemini } from "../../model";
import { ArchitectureSchema } from "@/schemas/architecture.schema";
import { ARCHITECTURE_AGENT_INSTRUCTIONS } from "./general-instructions";
import z from "zod";
import { ResearchSchema } from "@/schemas/research.schema";
import { RequirementsSchema } from "@/schemas/requirements.schema";

export const architectureAgent = new ToolLoopAgent({
  model: gemini,
  output: Output.object({
    schema: ArchitectureSchema,
  }),
  instructions: ARCHITECTURE_AGENT_INSTRUCTIONS,
});
