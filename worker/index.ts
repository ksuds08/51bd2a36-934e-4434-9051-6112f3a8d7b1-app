// Auto-generated entrypoint for Cloudflare Worker

import { ResumeTemplateBackendHandler } from './api/ResumeTemplateBackend';
import { ContentSuggestionAIHandler } from './api/ContentSuggestionAI';
import { FormatOptimizationBackendHandler } from './api/FormatOptimizationBackend';
import { KeywordIntegrationBackendHandler } from './api/KeywordIntegrationBackend';
import { UserInputProcessingHandler } from './api/UserInputProcessing';

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResumeCraftAI</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-gray-50 text-gray-800">
    <header class="bg-[#2B2D42] text-white py-4">
        <div class="container mx-auto flex justify-between items-center">
            <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-2EGCuIM23Vbd7niJR5RG3Yo0.png?st=2025-07-28T00%3A14%3A52Z&se=2025-07-28T02%3A14%3A52Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T14%3A14%3A10Z&ske=2025-07-28T14%3A14%3A10Z&sks=b&skv=2024-08-04&sig=IbPwTrln%2BDGdxjDhSCA1owd2G3AEUJTfZSOyXa2Lvkw%3D" alt="ResumeCraftAI Logo" class="h-12">
            <h1 class="text-2xl font-bold">ResumeCraftAI</h1>
        </div>
    </header>
    <main class="container mx-auto py-8">
        <section class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Craft Your Future with Precision</h2>
            <form id="resume-form" class="space-y-4">
                <div>
                    <label for="career-details" class="block text-sm font-medium text-gray-700">Career Details</label>
                    <textarea id="career-details" name="career-details" rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <div>
                    <label for="industry" class="block text-sm font-medium text-gray-700">Industry</label>
                    <select id="industry" name="industry" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                        <option>Technology</option>
                        <option>Finance</option>
                        <option>Healthcare</option>
                        <option>Education</option>
                        <option>Marketing</option>
                    </select>
                </div>
                <div>
                    <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                    <input type="text" id="role" name="role" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <button type="submit" class="bg-[#EF233C] text-white py-2 px-4 rounded-md shadow hover:bg-[#D90429]">Generate Template</button>
            </form>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>`;
const STYLE_CSS = `/* Additional custom styles can be added here */`;
const SCRIPT_JS = `document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        // Process the result, e.g., display the generated template
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    if (path === '/api/ResumeTemplateBackend') return ResumeTemplateBackendHandler(request);
    if (path === '/api/ContentSuggestionAI') return ContentSuggestionAIHandler(request);
    if (path === '/api/FormatOptimizationBackend') return FormatOptimizationBackendHandler(request);
    if (path === '/api/KeywordIntegrationBackend') return KeywordIntegrationBackendHandler(request);
    if (path === '/api/UserInputProcessing') return UserInputProcessingHandler(request);
    return new Response('Not found', { status: 404 });
  }
};
