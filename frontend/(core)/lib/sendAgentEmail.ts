'use server'

import sendEmail from "./sendEmail"


type AgentForm = {
  name: string
  email: string
  phone: string
  message: string
  agentName?: string
}

export async function sendAgentEmail(form: AgentForm) {
  const [firstName, ...rest] = form.name.split(" ")
  const lastName = rest.join(" ") || ""

  return await sendEmail({
    firstName,
    lastName,
    email: form.email,
    phone: form.phone,
    budget: "N/A",
    hearAboutUs: `Agent Sidebar (${form.agentName || "Unknown"})`,
    businessType: "Property Inquiry",
    service: "Agent Contact",
    website: "",
    projectDetails: form.message,
  })
}