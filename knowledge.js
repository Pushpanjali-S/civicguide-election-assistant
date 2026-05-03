const COUNTRY_NAMES = { US: 'United States', IN: 'India', UK: 'United Kingdom', CA: 'Canada', AU: 'Australia', DE: 'Germany', FR: 'France', BR: 'Brazil', ZA: 'South Africa', GEN: 'General' };

const COUNTRY_DATA = {
    US: {
        register: `<h4>Voter Registration — United States</h4><p>In the US, you must register to vote before most elections. Here's how:</p><ul><li><strong>Eligibility:</strong> US citizen, 18+ on election day, resident of your state</li><li><strong>Online:</strong> Use <strong>vote.gov</strong> — most states support online registration</li><li><strong>Deadline:</strong> Typically 15–30 days before election day (varies by state)</li><li><strong>Same-day registration:</strong> Available in about 21 states</li><li><strong>Documents needed:</strong> Driver's license, state ID, or last 4 digits of SSN</li></ul><p>You can also register by mail or in person at DMVs, libraries, and government offices.</p>`,
        system: `<h4>Electoral System — United States</h4><p>The US uses a <strong>First-Past-the-Post (FPTP)</strong> system, also called "winner-takes-all." The candidate with the most votes in a district wins, even without a majority.</p><h4>The Electoral College</h4><p>For presidential elections, voters don't directly elect the president. They vote for <strong>electors</strong> who represent their state. Each state gets electors equal to its Congressional seats. A candidate needs <strong>270 of 538 electoral votes</strong> to win.</p><ul><li><strong>Winner-takes-all:</strong> In 48 states, whoever wins the state gets all its electoral votes</li><li><strong>Maine & Nebraska</strong> split their electors by congressional district</li></ul>`,
        election_day: `<h4>Election Day — United States</h4><p>Federal elections are held on the <strong>first Tuesday after the first Monday in November</strong>.</p><ul><li><strong>Polling hours:</strong> Vary by state, typically 6am–8pm</li><li><strong>What to bring:</strong> Photo ID (required in most states)</li><li><strong>Find your polling place:</strong> vote.gov or your county election website</li><li><strong>Early voting:</strong> Available in most states, 1–3 weeks before election day</li><li><strong>Mail-in ballots:</strong> Available in all states; some states mail ballots automatically</li></ul><p>If the line is long when polls close, you still have the right to vote if you're already in line.</p>`,
    },
    IN: {
        register: `<h4>Voter Registration — India</h4><p>India's elections are managed by the <strong>Election Commission of India (ECI)</strong>. Here's how to register:</p><ul><li><strong>Eligibility:</strong> Indian citizen, 18+ on January 1 of the qualifying year</li><li><strong>Online:</strong> Register at <strong>voters.eci.gov.in</strong> using Form 6</li><li><strong>Voter ID (EPIC):</strong> You'll receive an Elector's Photo Identity Card</li><li><strong>Documents needed:</strong> Aadhaar card, proof of age, proof of address</li><li><strong>Deadline:</strong> Applications accepted year-round; roll revisions happen annually</li></ul><p>You can also link your Aadhaar to your voter ID for seamless verification at booths.</p>`,
        system: `<h4>Electoral System — India</h4><p>India uses a <strong>First-Past-the-Post (FPTP)</strong> system for Lok Sabha and state elections. The candidate with the most votes in a constituency wins the seat.</p><h4>Key Bodies</h4><ul><li><strong>Lok Sabha:</strong> 543 elected seats — lower house of Parliament</li><li><strong>Rajya Sabha:</strong> Upper house, members elected by state legislatures</li><li><strong>State Assemblies (Vidhan Sabha):</strong> Each state has its own elected legislature</li></ul><p>The party or coalition that wins a majority (272+ seats) forms the government. The <strong>President</strong> is the constitutional head, while the <strong>Prime Minister</strong> is the head of government.</p>`,
        election_day: `<h4>Election Day — India</h4><p>General elections (Lok Sabha) occur every 5 years, typically spread over <strong>multiple phases</strong> across different states to manage the massive scale.</p><ul><li><strong>Polling hours:</strong> Usually 7am–6pm</li><li><strong>Voter Verified Paper Audit Trail (VVPAT):</strong> Used alongside Electronic Voting Machines (EVMs) for transparency</li><li><strong>What to bring:</strong> Voter ID card (EPIC) or 12 approved alternative documents</li><li><strong>Booth slips:</strong> Provided by political parties or election office</li><li><strong>Model Code of Conduct:</strong> Kicks in when elections are announced — restricts government announcements</li></ul>`,
    },
    UK: {
        register: `<h4>Voter Registration — United Kingdom</h4><p>Registering to vote in the UK is straightforward:</p><ul><li><strong>Eligibility:</strong> British, Irish, or qualifying Commonwealth citizen; 16+ (to register); 18+ to vote in most elections</li><li><strong>Online:</strong> <strong>gov.uk/register-to-vote</strong> — takes about 5 minutes</li><li><strong>Deadline:</strong> 12 working days before election day</li><li><strong>Documents needed:</strong> National Insurance number and date of birth</li><li><strong>Automatic registration:</strong> Not automatic — you must register yourself</li></ul><p>Scotland and Wales allow 16-year-olds to vote in devolved elections.</p>`,
        system: `<h4>Electoral System — United Kingdom</h4><p>The UK uses <strong>First-Past-the-Post (FPTP)</strong> for General Elections to the House of Commons. The 650 MPs each represent a single constituency.</p><ul><li><strong>The party</strong> that wins a majority of seats (326+) forms the government</li><li><strong>Coalition:</strong> If no majority, parties may form a coalition</li><li><strong>Devolved elections</strong> (Scotland, Wales, N. Ireland) use proportional systems</li><li><strong>House of Lords:</strong> Unelected upper chamber</li></ul><p>The <strong>Prime Minister</strong> is the leader of the party commanding a Commons majority, appointed by the King/Queen.</p>`,
        election_day: `<h4>Election Day — United Kingdom</h4><p>UK General Elections have no fixed date but must occur at least every <strong>5 years</strong> (now effectively 5 years under the Dissolution and Calling of Parliament Act 2022).</p><ul><li><strong>Polling hours:</strong> 7am–10pm</li><li><strong>What to bring:</strong> Photo ID is now required (introduced 2023)</li><li><strong>Polling card:</strong> Sent to your address but not required to vote</li><li><strong>Postal voting:</strong> Apply at least 11 working days before election</li><li><strong>Proxy voting:</strong> Someone can vote on your behalf if you can't attend</li></ul>`,
    },
    CA: {
        register: `<h4>Voter Registration — Canada</h4><p>Elections Canada manages federal voter registration:</p><ul><li><strong>Eligibility:</strong> Canadian citizen, 18+ on election day</li><li><strong>Automatic registration:</strong> Most citizens are registered automatically via tax returns and other government data</li><li><strong>Check/update:</strong> elections.ca — confirm your registration</li><li><strong>Election day registration:</strong> You can register at your polling station on election day</li><li><strong>Documents:</strong> Proof of identity and address (driver's license or two pieces of ID)</li></ul>`,
        system: `<h4>Electoral System — Canada</h4><p>Canada uses <strong>First-Past-the-Post (FPTP)</strong> for federal elections. The country is divided into 338 ridings (constituencies), each electing one MP.</p><ul><li><strong>Party with most seats</strong> typically forms government</li><li><strong>Majority:</strong> 170+ seats; <strong>Minority:</strong> fewer seats but still most</li><li><strong>The Governor General</strong> is the constitutional head; the <strong>Prime Minister</strong> leads the government</li><li><strong>Provincial elections</strong> use the same FPTP system</li></ul>`,
        election_day: `<h4>Election Day — Canada</h4><p>Federal elections occur on fixed dates (third Monday in October, every 4 years) or when Parliament is dissolved.</p><ul><li><strong>Polling hours:</strong> Staggered across time zones so results release together nationally</li><li><strong>What to bring:</strong> Voter information card + one piece of ID, or two pieces of ID</li><li><strong>Advance polls:</strong> Open 10 days before election day</li><li><strong>Voting by mail:</strong> Special ballot available for any reason</li></ul>`,
    },
    AU: {
        register: `<h4>Voter Registration — Australia</h4><p>Australia has <strong>compulsory enrollment</strong> for citizens:</p><ul><li><strong>Eligibility:</strong> Australian citizen, 18+ (enroll at 16 to be ready)</li><li><strong>Required by law:</strong> Failure to enroll can result in a fine</li><li><strong>Online:</strong> aec.gov.au — enroll or update details</li><li><strong>Deadline:</strong> Rolls close 7 days after an election is called</li><li><strong>Documents:</strong> Australian citizenship, date of birth, address</li></ul>`,
        system: `<h4>Electoral System — Australia</h4><p>Australia uses a <strong>preferential voting</strong> system (Alternative Vote) for the House of Representatives — voters rank candidates 1, 2, 3… If no candidate gets 50%+, the lowest-ranked candidate is eliminated and their votes redistributed.</p><ul><li><strong>Senate:</strong> Uses proportional representation (STV) — multi-member electorates</li><li><strong>Voting is compulsory</strong> — fines for not voting</li><li><strong>151 seats</strong> in the House; government needs 76 to form majority</li></ul>`,
        election_day: `<h4>Election Day — Australia</h4><p>Federal elections must be held at least every 3 years. Voting is <strong>compulsory</strong> for all enrolled citizens.</p><ul><li><strong>Polling hours:</strong> 8am–6pm</li><li><strong>Pencils provided</strong> at booths (you can bring your own pen)</li><li><strong>Democracy sausage:</strong> Many polling places run sausage sizzle fundraisers!</li><li><strong>Postal voting:</strong> Apply before close of rolls</li><li><strong>Pre-poll voting:</strong> Available up to 3 weeks before election day</li></ul>`,
    },
    GEN: {
        register: `<h4>Voter Registration — General</h4><p>Voter registration is the process of adding your name to the official electoral roll so you can participate in elections.</p><ul><li><strong>Eligibility:</strong> Usually citizenship + minimum age (commonly 18) + residency</li><li><strong>How to register:</strong> Online portals, government offices, by mail, or in person</li><li><strong>Documents needed:</strong> Proof of identity and address</li><li><strong>Deadlines:</strong> Most countries have a cutoff date before election day</li><li><strong>Some countries</strong> (Australia, Brazil) have compulsory registration or voting</li></ul><p>Select your country from the sidebar for specific registration instructions!</p>`,
        system: `<h4>Electoral Systems — Overview</h4><p>Different countries use different systems to convert votes into seats or power:</p><ul><li><strong>First-Past-the-Post (FPTP):</strong> Most votes wins. Simple but can produce unrepresentative results. Used in: US, UK, India, Canada</li><li><strong>Proportional Representation (PR):</strong> Seats match vote share. More representative. Used in: Germany, South Africa, Netherlands</li><li><strong>Preferential/Ranked Choice:</strong> Voters rank candidates. Ensures winner has broad support. Used in: Australia, Ireland</li><li><strong>Two-Round System:</strong> Top two candidates go to a runoff if no majority. Used in: France, Brazil</li><li><strong>Mixed Systems:</strong> Combine FPTP + PR. Used in: Germany (MMP), Japan</li></ul>`,
        election_day: `<h4>Election Day — General</h4><p>Election day is when citizens cast their votes. Here's what typically happens:</p><ul><li><strong>Polling stations open</strong> in the morning (often 6–8am) and close in the evening</li><li><strong>Bring your ID</strong> or voter registration card</li><li><strong>Ballot is secret</strong> — no one can see how you vote</li><li><strong>If you're in line</strong> when polls close, you still have the right to vote</li><li><strong>Assistance:</strong> Voters with disabilities have the right to support</li><li><strong>After voting:</strong> You may receive an "I Voted" sticker or ink mark on your finger</li></ul>`,
    }
};
// Fill missing countries with GEN fallback
['DE', 'FR', 'BR', 'ZA'].forEach(c => { COUNTRY_DATA[c] = COUNTRY_DATA.GEN; });

const KB = [
    {
        keys: ['register', 'registration', 'enroll', 'sign up', 'how to vote', 'eligible', 'eligib', 'voter id', 'voter card', 'aadhaar', 'epic'],
        fn: (c) => countryData(c, 'register'),
        suggest: ['What documents do I need?', 'What is the registration deadline?', 'Can I register on election day?']
    },
    {
        keys: ['electoral college', 'electoral system', 'how elections work', 'fptp', 'first past', 'proportional', 'ranked choice', 'preferential', 'two round', 'runoff', 'voting system', 'how does voting work', 'system of voting'],
        fn: (c) => countryData(c, 'system'),
        suggest: ['What is gerrymandering?', 'How are seats allocated?', 'What is a hung parliament?']
    },
    {
        keys: ['election day', 'polling', 'polling station', 'polling place', 'booth', 'how to vote on', 'what to bring', 'id to vote'],
        fn: (c) => countryData(c, 'election_day'),
        suggest: ['What is early voting?', 'How does mail-in voting work?', 'What happens if I miss election day?']
    },
    {
        keys: ['mail', 'absentee', 'postal vote', 'vote by mail', 'remote voting'],
        ans: `<h4>Mail-in & Absentee Voting</h4><p>Mail-in voting lets you cast your ballot without going to a polling station. Here's how it generally works:</p><ul><li><strong>Request a ballot:</strong> Apply online or by mail, usually weeks before election day</li><li><strong>Receive your ballot:</strong> Sent to your registered address</li><li><strong>Complete & return:</strong> Fill it out, sign the envelope, and return by the deadline</li><li><strong>Deadline:</strong> Must be <em>received</em> by election day (or shortly after, depending on country)</li><li><strong>Tracking:</strong> Many systems let you track your ballot online</li></ul><p>Absentee voting is similar — originally for people away from home, now widely available for any reason in many countries.</p>`,
        suggest: ['How do I request a mail-in ballot?', 'Is mail-in voting secure?', 'What is early voting?']
    },
    {
        keys: ['count', 'counting', 'how votes are counted', 'results', 'declare', 'tally', 'announce', 'projection', 'exit poll'],
        ans: `<h4>How Votes Are Counted & Results Declared</h4><p>After polls close, a carefully managed process begins:</p><ol><li><strong>Polls close</strong> — No more votes accepted; ballot boxes sealed</li><li><strong>Transport:</strong> Boxes moved to counting centers under supervision</li><li><strong>Opening & sorting:</strong> Ballots opened, sorted by candidate/party</li><li><strong>Counting:</strong> Manual count, machine count, or both — with observers from all parties present</li><li><strong>Preliminary results:</strong> Announced as counting progresses</li><li><strong>Official results:</strong> Declared by the election authority after all counts verified</li><li><strong>Certification:</strong> Formal legal certification of results</li><li><strong>Recounts:</strong> Triggered if margins are very small (usually under 0.5%)</li></ol>`,
        suggest: ['What is a recount?', 'How long does counting take?', 'How are results certified?']
    },
    {
        keys: ['certif', 'inaugurate', 'inauguration', 'swear in', 'oath', 'transition', 'transfer of power'],
        ans: `<h4>Certification & Inauguration</h4><p>After election results are announced, several official steps follow:</p><ul><li><strong>Canvassing:</strong> Local election boards verify and certify their results</li><li><strong>State/national certification:</strong> The official governing body formally certifies the winner</li><li><strong>Legal challenges:</strong> Losing candidates may contest in court within a set timeframe</li><li><strong>Transition period:</strong> The incoming government prepares to take office</li><li><strong>Inauguration:</strong> The elected official is sworn in — in the US this is January 20; in India the PM is sworn in within days of results</li></ul>`,
        suggest: ['What happens during a recount?', 'How long is the transition period?', 'What is a concession speech?']
    },
    {
        keys: ['types of election', 'different elections', 'local election', 'state election', 'national election', 'midterm', 'by-election', 'referendum', 'plebiscite', 'primary', 'caucus'],
        ans: `<h4>Types of Elections</h4><p>Elections take many forms depending on the level of government and purpose:</p><ul><li><strong>General Elections:</strong> National elections to choose the central government or legislature</li><li><strong>State / Provincial Elections:</strong> Choose regional governments</li><li><strong>Local Elections:</strong> Elect mayors, city councils, school boards</li><li><strong>Primary Elections:</strong> Held within a party to choose their candidate (common in US)</li><li><strong>By-elections (Special elections):</strong> Held to fill a single vacant seat mid-term</li><li><strong>Midterm Elections:</strong> US elections held halfway through a presidential term</li><li><strong>Referendums/Plebiscites:</strong> Public votes on a specific policy question (e.g., Brexit)</li><li><strong>Runoff Elections:</strong> Second round if no candidate wins a majority</li></ul>`,
        suggest: ['What is a primary election?', 'What is a referendum?', 'What is a by-election?']
    },
    {
        keys: ['rights', 'voter rights', 'right to vote', 'discrimination', 'accessibility', 'disability', 'assistance', 'secret ballot', 'secret vote'],
        ans: `<h4>Your Rights as a Voter</h4><p>Democratic elections guarantee voters a set of fundamental rights:</p><ul><li><strong>Secret ballot:</strong> No one can see how you voted — it is legally protected</li><li><strong>Non-discrimination:</strong> You cannot be turned away based on race, gender, religion, or ethnicity</li><li><strong>Accessibility:</strong> Polling stations must accommodate voters with disabilities</li><li><strong>Assistance:</strong> You may bring a helper if you have a disability or language barrier</li><li><strong>Right to complain:</strong> If denied your vote, you can file a provisional/tendered ballot and challenge the decision</li><li><strong>Time off work:</strong> Many countries require employers to give paid time off to vote</li><li><strong>Observer rights:</strong> Parties and civil society can send observers to watch the counting</li></ul>`,
        suggest: ['What is a provisional ballot?', 'What if I am denied my right to vote?', 'What is voter suppression?']
    },
    {
        keys: ['candidate', 'run for office', 'how to run', 'candidacy', 'filing', 'nomination', 'campaign', 'party nomination'],
        ans: `<h4>Running for Office</h4><p>The process of becoming a candidate varies by country and office, but generally involves:</p><ol><li><strong>Eligibility check:</strong> Meet age, citizenship, and residency requirements</li><li><strong>Party nomination:</strong> Win your party's primary/selection process, or run as an independent</li><li><strong>File nomination papers:</strong> Submit forms and often a deposit or petition signatures to the election authority</li><li><strong>Campaigning period:</strong> Allowed to campaign once officially listed as a candidate</li><li><strong>Campaign finance rules:</strong> Limits on spending and required disclosure of donors</li><li><strong>Debates:</strong> Optional but standard in most democracies</li></ol><p>In India, candidates file nominations with the Returning Officer. In the US, candidates file with the FEC and state authorities.</p>`,
        suggest: ['What is a political party?', 'How does campaign finance work?', 'What is an independent candidate?']
    },
    {
        keys: ['gerrymander', 'gerrymandering', 'redraw', 'redistrict', 'constituency boundary', 'malapportionment'],
        ans: `<h4>Gerrymandering</h4><p>Gerrymandering is the manipulation of electoral district boundaries to give one political party an unfair advantage.</p><h4>How it works</h4><ul><li><strong>Packing:</strong> Cramming opposition voters into one district so they "waste" votes on lopsided wins</li><li><strong>Cracking:</strong> Splitting opposition voters across many districts so they never form a majority anywhere</li></ul><h4>Real impact</h4><p>A party can win fewer total votes statewide but still win more seats. This undermines the principle that votes should count equally.</p><h4>Counters</h4><ul><li>Independent redistricting commissions (used in some US states)</li><li>Proportional representation systems are naturally resistant to gerrymandering</li><li>Court challenges</li></ul>`,
        suggest: ['What is redistricting?', 'How does proportional representation prevent gerrymandering?', 'What is a swing district?']
    },
    {
        keys: ['misinformation', 'fake news', 'disinformation', 'rumor', 'propaganda', 'deep fake', 'false', 'hoax', 'fact check'],
        ans: `<h4>Spotting Election Misinformation</h4><p>During elections, false information spreads fast. Here's how to protect yourself:</p><ul><li><strong>Check the source:</strong> Is it an official government or news outlet? Look for bylines and editorial standards</li><li><strong>Look for dates:</strong> Old news often circulates as current — always check the publication date</li><li><strong>Reverse image search:</strong> Check if photos are taken out of context</li><li><strong>Verify with fact-checkers:</strong> FactCheck.org, Snopes, BBC Reality Check, AltNews (India), Full Fact (UK)</li><li><strong>Primary sources:</strong> Go directly to the election commission website for official information</li><li><strong>Be skeptical of outrage:</strong> Content designed to make you angry or scared is often misleading</li><li><strong>Don't share unverified content</strong> — even sharing to debunk it can spread it further</li></ul>`,
        suggest: ['What are reliable election information sources?', 'What is deep fake?', 'How do I report election misinformation?']
    },
    {
        keys: ['hung parliament', 'coalition', 'minority government', 'majority', 'supermajority', 'mandate'],
        ans: `<h4>Hung Parliament & Coalition Governments</h4><p>When no single party wins an outright majority of seats, a <strong>hung parliament</strong> (or hung assembly) results.</p><h4>What happens next?</h4><ul><li><strong>Coalition government:</strong> Two or more parties agree to govern together, sharing cabinet positions</li><li><strong>Confidence & supply:</strong> A minority government survives with support from smaller parties on key votes</li><li><strong>Negotiations:</strong> Can take days or weeks (e.g., Germany's coalition talks often last months)</li><li><strong>Another election:</strong> If no majority can be formed, a fresh election may be called</li></ul><p>Examples: UK 2010 (Conservative-Liberal Democrat coalition); India regularly forms multi-party coalitions (NDA, INDIA alliance).</p>`,
        suggest: ['What is a confidence vote?', 'How does coalition negotiation work?', 'What is a minority government?']
    },
    {
        keys: ['early voting', 'advance poll', 'vote early', 'before election day'],
        ans: `<h4>Early Voting</h4><p>Early voting lets eligible voters cast their ballot before official election day, reducing queues and increasing participation.</p><ul><li><strong>US:</strong> Available in most states, typically 7–45 days before election day</li><li><strong>Canada:</strong> Advance polls open 10 days before election day</li><li><strong>Australia:</strong> Pre-poll voting available up to 3 weeks early</li><li><strong>UK:</strong> Postal voting serves as the early voting mechanism</li><li><strong>India:</strong> Generally no early voting — all voting happens on designated polling days per phase</li></ul><p>Early voting is especially useful for people who work on election day, have health issues, or travel frequently.</p>`,
        suggest: ['How does mail-in voting work?', 'What is same-day registration?', 'Can I change my vote after voting early?']
    },
    {
        keys: ['recount', 'audit', 'close race', 'contested', 'disputed', 'challenge', 'court'],
        ans: `<h4>Recounts & Disputed Elections</h4><p>When results are very close or irregularities are alleged, a recount or audit may be triggered.</p><h4>Types of recounts</h4><ul><li><strong>Automatic recount:</strong> Triggered if the margin is below a threshold (e.g., 0.5% in many US states)</li><li><strong>Requested recount:</strong> A candidate can formally request one, sometimes paying a fee</li><li><strong>Manual recount:</strong> Humans re-examine every ballot</li><li><strong>Machine recount:</strong> Ballots run through counting machines again</li><li><strong>Audit:</strong> Statistical check of a random sample of ballots to verify accuracy</li></ul><h4>Legal challenges</h4><p>Candidates can file lawsuits contesting results. Courts evaluate whether legal procedures were followed correctly — they don't re-run elections lightly.</p>`,
        suggest: ['What is an election audit?', 'How long can a recount take?', 'What happens if results are overturned?']
    },
    {
        keys: ['timeline', 'process', 'steps', 'how elections work', 'overview', 'explain elections', 'what is an election'],
        fn: () => null, // handled by showTimeline
        special: 'timeline',
        suggest: ['Show me the full election timeline', 'What happens on election day?', 'How long does the whole process take?']
    },
    {
        keys: ['where to vote', 'where do i vote', 'polling station', 'polling location', 'voting location', 'polling place'],
        ans: `<h4>Find Your Polling Station</h4><p>Polling locations are assigned based on your registered address. You must usually vote at your specific assigned location on election day.</p><p>Use the map below to explore polling stations near your current location, or check your official voter registration card for your exact assigned location.</p>
        <iframe 
          title="Google Maps showing polling stations near your location"
          width="100%" 
          height="260" 
          style="border:1px solid var(--border); border-radius: 12px; margin-top: 10px;" 
          loading="lazy" 
          allowfullscreen 
          referrerpolicy="no-referrer-when-downgrade" 
          src="https://maps.google.com/maps?q=polling+station+near+me&output=embed">
        </iframe>`,
        suggest: ['What do I need to bring to vote?', 'What are the polling hours?', 'Can I vote anywhere?']
    },
    {
        keys: ['thank', 'hello', 'hi', 'hey', 'good', 'great', 'help', 'what can you', 'what do you', 'who are you'],
        ans: `<p>Hello! I'm <strong>CivicGuide</strong>, your election education assistant. I'm here to help you understand how democracy works — from voter registration to election results.</p><p>I can explain:</p><ul><li>📋 How to register to vote</li><li>🗳️ What happens on election day</li><li>📊 How votes are counted</li><li>🏛️ Electoral systems (FPTP, PR, preferential voting)</li><li>⚖️ Your rights as a voter</li><li>🛡️ How to spot misinformation</li><li>And much more!</li></ul><p>Select your country from the sidebar and ask me anything.</p>`,
        suggest: ['How do I register to vote?', 'Show me the election timeline', 'What are my voter rights?']
    }
];

/**
 * Retrieves specific election data for a given country.
 * Falls back to general data ('GEN') if the country or specific key is missing.
 * 
 * @param {string} c - The 2-letter country code (e.g., 'US', 'IN').
 * @param {string} key - The data key to retrieve (e.g., 'register', 'system', 'election_day').
 * @returns {string} The localized HTML response string.
 */
function countryData(c, key) {
    const d = COUNTRY_DATA[c] || COUNTRY_DATA['GEN'];
    return d[key] || COUNTRY_DATA['GEN'][key];
}

/**
 * Core Knowledge Engine matching function.
 * Evaluates user input against predefined keywords and returns the appropriate response payload.
 * 
 * @param {string} input - The raw text input from the user.
 * @param {string} [countryCode='GEN'] - The current 2-letter country code context.
 * @returns {Object} A response object containing either an `html` payload, a `special` trigger, and an array of `suggest`ed follow-ups.
 */
function getResponse(input, countryCode = 'GEN') {
    const q = input.toLowerCase();
    for (const item of KB) {
        const hit = item.keys.some(k => q.includes(k));
        if (!hit) continue;
        if (item.special === 'timeline') return { special: 'timeline', suggest: item.suggest };
        if (item.fn) return { html: item.fn(countryCode), suggest: item.suggest || [] };
        if (item.ans) return { html: item.ans, suggest: item.suggest || [] };
    }
    // fallback
    return {
        html: `<p>That's a great question about elections! I have built-in knowledge on these topics — try asking about:</p><ul><li><strong>Voter registration</strong> — how to sign up, deadlines, documents</li><li><strong>Election day</strong> — what to bring, polling hours, your rights</li><li><strong>Vote counting</strong> — how results are tallied and certified</li><li><strong>Electoral systems</strong> — FPTP, proportional representation, ranked choice</li><li><strong>Misinformation</strong> — how to spot false election claims</li><li><strong>Gerrymandering</strong> — how district lines affect election outcomes</li></ul><p>Or click a topic in the sidebar to get started!</p>`,
        suggest: ['How do I register to vote?', 'What happens on election day?', 'How are votes counted?']
    };
}
