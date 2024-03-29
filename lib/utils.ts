import { SendEmailResponseType } from "@/lib/types"
import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function validateString(value: unknown, maxLength: number) {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false
  }
  return true
}

export function getErrorMessage(error: unknown): string {
  let message: string
  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message)
  } else if (typeof error === "string") {
    message = error
  } else {
    message = "Unknown error"
  }
  return message
}

export function isEmailSentSuccessfullByStatusCode(
  response: SendEmailResponseType
): boolean {
  if (response.statusCode === 200) {
    return true
  }
  return false
}
