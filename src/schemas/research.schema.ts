import z from "zod";

export const ResearchSchema = z.object({
  project: z.object({
    title: z.string(),
    summary: z.string(),

    classification: z.object({
      category: z.string(),
      subcategory: z.string(),
      domain: z.string(),
      projectType: z.string(),
      targetAudience: z.array(z.string()),
      estimatedComplexity: z.enum([
        "Simple",
        "Medium",
        "Complex",
        "Enterprise",
      ]),
      confidence: z.number().min(0).max(1),
    }),
  }),

  domainKnowledge: z.object({
    overview: z.string(),

    terminology: z.array(
      z.object({
        term: z.string(),
        definition: z.string(),
      }),
    ),

    userRoles: z.array(
      z.object({
        role: z.string(),
        description: z.string(),
      }),
    ),

    businessProcesses: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),

    commonWorkflows: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        steps: z.array(z.string()),
      }),
    ),

    bestPractices: z.array(z.string()),

    commonChallenges: z.array(z.string()),
  }),

  marketResearch: z.object({
    competitors: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        strengths: z.array(z.string()),
        weaknesses: z.array(z.string()),
        notableFeatures: z.array(z.string()),
      }),
    ),

    marketTrends: z.array(z.string()),

    userExpectations: z.array(z.string()),

    industryStandards: z.array(z.string()),

    differentiators: z.array(z.string()),
  }),

  features: z.object({
    coreFeatures: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),

    optionalFeatures: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),

    futureFeatures: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),
  }),

  integrations: z.array(
    z.object({
      name: z.string(),
      purpose: z.string(),
      required: z.boolean(),
      alternatives: z.array(z.string()),
    }),
  ),

  regulations: z.object({
    legal: z.array(z.string()),
    compliance: z.array(z.string()),
    privacy: z.array(z.string()),
    accessibility: z.array(z.string()),
    securityRecommendations: z.array(z.string()),
  }),

  constraints: z.object({
    business: z.array(z.string()),
    operational: z.array(z.string()),
    technical: z.array(z.string()),
  }),

  risks: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      impact: z.enum(["Low", "Medium", "High", "Critical"]),
      mitigation: z.string(),
    }),
  ),

  recommendations: z.object({
    suggestedMVP: z.array(z.string()),
    scalabilityConsiderations: z.array(z.string()),
    uxRecommendations: z.array(z.string()),
    performanceRecommendations: z.array(z.string()),
  }),

  successCriteria: z.array(z.string()),

  references: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
      sourceType: z.enum([
        "Official Documentation",
        "Research Paper",
        "Industry Report",
        "Competitor",
        "Government",
        "Article",
        "Other",
      ]),
    }),
  ),

  metadata: z.object({
    searchedTopics: z.array(z.string()),
    keywords: z.array(z.string()),

    confidence: z.object({
      domainKnowledge: z.number().min(0).max(1),
      marketResearch: z.number().min(0).max(1),
      regulations: z.number().min(0).max(1),
      overall: z.number().min(0).max(1),
    }),
  }),
});
