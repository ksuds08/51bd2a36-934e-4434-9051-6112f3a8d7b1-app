export function validateInputs(data: any): { industry: string, role: string, experienceLevel: string } | null {
  if (typeof data === 'object' && data !== null) {
    const { industry, role, experienceLevel } = data;
    if (
      typeof industry === 'string' && industry.trim() !== '' &&
      typeof role === 'string' && role.trim() !== '' &&
      typeof experienceLevel === 'string' && experienceLevel.trim() !== ''
    ) {
      return { industry, role, experienceLevel };
    }
  }
  return null;
}