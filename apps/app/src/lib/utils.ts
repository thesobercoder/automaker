import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { AgentModel } from "@/store/app-store"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Determine if the current model supports extended thinking controls
 */
export function modelSupportsThinking(model?: AgentModel | string): boolean {
  // All Claude models support thinking
  return true;
}

/**
 * Get display name for a model
 */
export function getModelDisplayName(model: AgentModel | string): string {
  const displayNames: Record<string, string> = {
    haiku: "Claude Haiku",
    sonnet: "Claude Sonnet",
    opus: "Claude Opus",
  };
  return displayNames[model] || model;
}

/**
 * Truncate a description string with ellipsis
 */
export function truncateDescription(description: string, maxLength = 50): string {
  if (description.length <= maxLength) {
    return description;
  }
  return `${description.slice(0, maxLength)}...`;
}
