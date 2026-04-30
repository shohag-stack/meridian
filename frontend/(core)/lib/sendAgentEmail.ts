'use server'

import { PropertyAgent } from "@/types"
import sendEmail from "./sendEmail"


type AgentForm = {
  name: string
  email: string
  phone: string
  message: string
}

export async function sendAgentEmail(form: AgentForm, agent: PropertyAgent, title: string) {
  const [firstName, ...rest] = form.name.split(" ")
  const lastName = rest.join(" ") || ""

  console.log("sending mail to agent", agent.email)

  return await sendEmail({
    firstName,
    lastName,
    email: form.email,
    phone: form.phone,
    budget: "N/A",
    hearAboutUs: `Agent Sidebar (${form.name || "Unknown"})`,
    businessType: "Property Inquiry",
    service: "Agent Contact",
    website: "",
    projectDetails: form.message,
    to: agent.email,
    property: title
  })
}