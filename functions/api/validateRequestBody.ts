export function validateRequestBody(body: any): { isValid: boolean, error?: string } {
  if (typeof body !== "object" || body === null) {
    return { isValid: false, error: "Request body must be an object" };
  }

  const { resumeContent, targetIndustry, role } = body;

  if (typeof resumeContent !== "string") {
    return { isValid: false, error: "resumeContent must be a string" };
  }

  if (typeof targetIndustry !== "string") {
    return { isValid: false, error: "targetIndustry must be a string" };
  }

  if (typeof role !== "string") {
    return { isValid: false, error: "role must be a string" };
  }

  return { isValid: true };
}
