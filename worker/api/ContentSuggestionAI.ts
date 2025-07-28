import { validateRequest } from '../functions/api/validateRequest';
import { generateContentSuggestions } from '../functions/api/generateContentSuggestions';

export async function ContentSuggestionAIHandler(req: Request): Promise<Response> {
  try {
    const { error, inputData } = await validateRequest(req);
    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const suggestions = await generateContentSuggestions(inputData);
    return new Response(JSON.stringify({ suggestions }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}