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

  return await sendEmail({
    name: form.name,
    firstName: firstName,
    lastName: lastName,
    email: form.email,
    phone: form.phone,
    message: form.message,
    property: title,
    to: agent.email,
    template: "agent"
  })
}