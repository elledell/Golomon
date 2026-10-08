import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitMessage = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    service: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("contactMessages", {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      company: args.company,
      service: args.service,
      message: args.message,
      status: "new", // Defaults all new submissions to "new"
    });
    
    return messageId;
  },
});