import { validateString, validateDate } from "../../lib/validation";

export enum Severity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
}

export default interface ICVE {
  id: string;
  severity: Severity;
  description: string;
  publishedDate: Date;
}

export const isValidCVE = (data: any): data is ICVE => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { id, severity, description, publishedDate } = data;

  return (
    validateString(id, true) &&
    validateString(severity, true) &&
    validateString(description, true) &&
    validateDate(publishedDate, true)
  );
};
