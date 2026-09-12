import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { Role, UserStatus } from "../../generated/prisma/enums";

// your prisma client instance

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    },
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID as string, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
    },
  },

  user : {
    additionalFields: {
      role:{
        type : "string",
        required : true,
        defaultValue : Role.PATIENT,
      },
      status:{
        type : "string",
        required : true,
        defaultValue : UserStatus.ACTIVE,
      },
    },
    needPasswordChange: {
      type: "boolean",
      required: true,
      defaultValue: false,
    },
    isDeleted: {
      type: "boolean",
      required: true,
      defaultValue: false,
    },
    deletedAt: {
      type: "date",
      required: false,
      defaultValue: null,
    },
  }
});
