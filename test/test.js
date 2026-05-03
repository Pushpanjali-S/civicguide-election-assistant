// Test Suite for CivicGuide Knowledge Base

const testCases = [
    { name: '1. Voter Registration', query: 'how do i register to vote in the US?', expectedType: 'html' },
    { name: '2. Electoral System', query: 'what is the electoral college and fptp?', expectedType: 'html' },
    { name: '3. Election Day', query: 'what to bring to the polling booth?', expectedType: 'html' },
    { name: '4. Mail-in Voting', query: 'can i vote by mail or absentee?', expectedType: 'html' },
    { name: '5. Vote Counting', query: 'how are votes counted and results projected?', expectedType: 'html' },
    { name: '6. Certification', query: 'when is the inauguration and transition?', expectedType: 'html' },
    { name: '7. Types of Elections', query: 'what is a midterm or local election?', expectedType: 'html' },
    { name: '8. Voter Rights', query: 'what are my voter rights and accessibility?', expectedType: 'html' },
    { name: '9. Running for Office', query: 'how to run for office as a candidate?', expectedType: 'html' },
    { name: '10. Gerrymandering', query: 'explain gerrymandering and redistricting', expectedType: 'html' },
    { name: '11. Misinformation', query: 'how to spot fake news and misinformation?', expectedType: 'html' },
    { name: '12. Hung Parliament', query: 'what is a hung parliament or coalition?', expectedType: 'html' },
    { name: '13. Early Voting', query: 'what is early voting or an advance poll?', expectedType: 'html' },
    { name: '14. Recounts', query: 'what happens in a recount or audit?', expectedType: 'html' },
    { name: '15. Election Timeline', query: 'show me the election timeline', expectedType: 'timeline' },
    { name: '16. Where to Vote', query: 'where is my polling station?', expectedType: 'html' },
    { name: '17. Greeting', query: 'hello, who are you?', expectedType: 'html' }
];

const resultsDiv = document.getElementById('results');
const summaryDiv = document.getElementById('summary');

let passed = 0;
let total = testCases.length;

function runTests() {
    testCases.forEach(tc => {
        try {
            // US country code ensures we hit countryData
            const res = getResponse(tc.query, 'US'); 
            
            let isPass = false;
            let errorMsg = '';

            if (tc.expectedType === 'timeline') {
                if (res.special === 'timeline') {
                    isPass = true;
                } else {
                    errorMsg = 'Expected special timeline response, got something else.';
                }
            } else {
                // Must have HTML and NOT be the fallback response
                if (res.html && !res.html.includes("That's a great question about elections!")) {
                    isPass = true;
                } else {
                    errorMsg = 'Triggered fallback response instead of specific answer.';
                }
            }

            renderResult(tc, isPass, errorMsg);
            if (isPass) passed++;

        } catch (e) {
            renderResult(tc, false, e.message);
        }
    });

    // Test fallback behavior specifically
    total++;
    const fallbackRes = getResponse('how do I bake a cake?', 'US');
    const fallbackPass = fallbackRes.html && fallbackRes.html.includes("That's a great question about elections!");
    renderResult({name: '18. Fallback Handling', query: 'how do I bake a cake?'}, fallbackPass, fallbackPass ? '' : 'Did not trigger fallback');
    if (fallbackPass) passed++;

    summaryDiv.innerHTML = `${passed} / ${total} Tests Passed`;
    summaryDiv.style.color = (passed === total) ? 'var(--green)' : 'var(--red)';
}

function renderResult(tc, isPass, errorMsg) {
    const el = document.createElement('div');
    el.className = 'test-case';
    
    el.innerHTML = `
        <div class="status ${isPass ? 'pass' : 'fail'}">${isPass ? 'PASS' : 'FAIL'}</div>
        <div class="details">
            <div class="query">${tc.name}</div>
            <div style="font-size: 0.9rem; color: #555;">Query: "${tc.query}"</div>
            ${!isPass ? `<div class="error">Error: ${errorMsg}</div>` : ''}
        </div>
    `;
    resultsDiv.appendChild(el);
}

// Run on load
window.onload = runTests;
