import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // 1. Services / Solutions
  services: defineTable({
    title: v.string(),
    description: v.string(),
    iconUrl: v.optional(v.string()), // For tech icons
    category: v.union(
      v.literal("Infrastructure"),
      v.literal("Software"),
      v.literal("Consulting")
    ),
    isActive: v.boolean(),
  }),

  // 2. Client Projects / Case Studies
  projects: defineTable({
    clientName: v.string(),
    projectTitle: v.string(),
    challenge: v.string(),
    solution: v.string(), // How Golomon's tech solved it
    impact: v.string(),   // Measurable business value
    imageUrl: v.optional(v.string()),
    technologiesUsed: v.array(v.string()),
  }),

  contactMessages: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    service: v.string(),
    message: v.string(),
    status: v.string(), // Helpful for an admin dashboard (e.g., "new", "read")
  }),
});