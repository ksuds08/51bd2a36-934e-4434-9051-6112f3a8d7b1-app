export function validateUserInput(input: any): string | null {
  if (typeof input !== 'object' || input === null) {
    return 'Invalid input format';
  }
  if (typeof input.name !== 'string' || input.name.trim() === '') {
    return 'Name is required';
  }
  if (typeof input.industry !== 'string' || input.industry.trim() === '') {
    return 'Industry is required';
  }
  if (typeof input.role !== 'string' || input.role.trim() === '') {
    return 'Role is required';
  }
  // Add more validations as necessary
  return null;
}
