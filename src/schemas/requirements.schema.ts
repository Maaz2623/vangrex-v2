import z from "zod";

export const RequirementsSchema = z.object({
  project: z.object({
    title: z.string(),
    description: z.string(),
    objective: z.string(),

    projectType: z.string(),

    targetAudience: z.array(z.string()),

    successCriteria: z.array(z.string()),
  }),

  userRoles: z.array(
    z.object({
      name: z.string(),
      description: z.string(),

      responsibilities: z.array(z.string()),

      permissions: z.array(z.string()),
    }),
  ),

  functionalRequirements: z.array(
    z.object({
      id: z.string(),

      title: z.string(),

      description: z.string(),

      priority: z.enum(["Critical", "High", "Medium", "Low"]),

      category: z.string(),

      acceptanceCriteria: z.array(z.string()),
    }),
  ),

  nonFunctionalRequirements: z.object({
    performance: z.array(z.string()),

    scalability: z.array(z.string()),

    security: z.array(z.string()),

    accessibility: z.array(z.string()),

    reliability: z.array(z.string()),

    maintainability: z.array(z.string()),

    responsiveness: z.array(z.string()),

    seo: z.array(z.string()),
  }),

  features: z.object({
    core: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),

    optional: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),

    future: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),
  }),

  userStories: z.array(
    z.object({
      id: z.string(),

      role: z.string(),

      story: z.string(),

      benefit: z.string(),

      priority: z.enum(["Critical", "High", "Medium", "Low"]),
    }),
  ),

  workflows: z.array(
    z.object({
      name: z.string(),

      description: z.string(),

      trigger: z.string(),

      steps: z.array(z.string()),

      outcome: z.string(),
    }),
  ),

  businessRules: z.array(
    z.object({
      title: z.string(),

      description: z.string(),
    }),
  ),

  validationRules: z.array(
    z.object({
      field: z.string(),

      rules: z.array(z.string()),
    }),
  ),

  permissions: z.array(
    z.object({
      role: z.string(),

      allowedActions: z.array(z.string()),
    }),
  ),

  integrations: z.array(
    z.object({
      name: z.string(),

      purpose: z.string(),

      required: z.boolean(),
    }),
  ),

  constraints: z.object({
    business: z.array(z.string()),

    technical: z.array(z.string()),

    operational: z.array(z.string()),
  }),

  risks: z.array(
    z.object({
      title: z.string(),

      description: z.string(),

      mitigation: z.string(),
    }),
  ),

  mvpScope: z.object({
    included: z.array(z.string()),

    excluded: z.array(z.string()),
  }),
});
