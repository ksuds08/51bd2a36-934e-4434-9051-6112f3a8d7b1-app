export async function validateRequest(req: Request): Promise<{ error?: string, inputData?: any }> {
  if (req.method !== 'POST') {
    return { error: 'Invalid request method. Only POST is allowed.' };
  }

  try {
    const inputData = await req.json();
    if (!inputData || typeof inputData !== 'object') {
      return { error: 'Invalid JSON payload.' };
    }

    if (!inputData.resumeContent || typeof inputData.resumeContent !== 'string') {
      return { error: 'Missing or invalid resumeContent field.' };
    }

    return { inputData };
  } catch (err) {
    return { error: 'Failed to parse request body as JSON.' };
  }
}