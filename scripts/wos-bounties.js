/**
 * Mothership: Wages of Sin — Bounty Generator, Board & Form System
 */

const WOS_DATA = {
  CLIENT_TYPES: [
    "Corporate", "Corporate", "Corporate", "Corporate",
    "Criminal", "Criminal",
    "Union",
    "Civilian",
    "Military", "Military"
  ],

  CRIMES: [
    "Theft", "Theft",
    "Arson", "Arson",
    "Espionage", "Espionage",
    "Sabotage", "Sabotage",
    "Thoughtcrime", "Thoughtcrime",
    "Unregistered Union Activity", "Unregistered Union Activity",
    "Revealing Protected Information", "Revealing Protected Information",
    "Inappropriate Usage of Company Credit", "Inappropriate Usage of Company Credit",
    "Waste of Employer Resources", "Waste of Employer Resources",
    "Manslaughter", "Manslaughter",
    "Piracy", "Piracy",
    "Plunder", "Plunder",
    "Tax Evasion", "Tax Evasion",
    "Conspiracy to...", "Conspiracy to...",
    "Assisting in...", "Assisting in...",
    "Providing False Information", "Providing False Information",
    "Fraud", "Fraud",
    "Vandalism", "Vandalism",
    "Blackmail", "Blackmail",
    "War Crimes", "War Crimes",
    "Absconding", "Absconding",
    "Failure to Pay", "Failure to Pay",
    "Hijacking", "Hijacking",
    "Sale of Stolen Goods", "Sale of Stolen Goods",
    "Possession of Controlled Items or Files", "Possession of Controlled Items or Files",
    "Distribution & Sale of Controlled Items or Files", "Distribution & Sale of Controlled Items or Files",
    "Unlicensed Professional Trade", "Unlicensed Professional Trade",
    "Computer Misuse & Network Intrusion", "Computer Misuse & Network Intrusion",
    "Offering/Accepting a Bribe", "Offering/Accepting a Bribe",
    "Release of a Dangerous Organism", "Release of a Dangerous Organism",
    "Threats of Violence", "Threats of Violence",
    "Assault", "Assault",
    "Time Theft", "Time Theft",
    "False Reporting of Hours Worked", "False Reporting of Hours Worked",
    "Mutiny", "Mutiny",
    "Perjury", "Perjury",
    "Failure to Comply", "Failure to Comply",
    "Voiding Warranty", "Voiding Warranty",
    "Evidence Tampering/Destruction", "Evidence Tampering/Destruction",
    "Abusive Language", "Abusive Language",
    "Libel/Slander", "Libel/Slander",
    "Malignant Negligence", "Malignant Negligence",
    "Armed Robbery", "Armed Robbery",
    "Burglary", "Burglary",
    "Trespass", "Trespass",
    "False Accounting", "False Accounting",
    "Trafficking in Nuclear Materials", "Trafficking in Nuclear Materials",
    "Racketeering", "Racketeering",
    "Loitering", "Loitering",
    "Murder", "Murder"
  ],

  COMPLICATIONS: [
    "There is a family or personal relationship between the client and the target.",
    "A local authority has imprisoned the target for unrelated crimes.",
    "The target lives nomadically, with no fixed address.",
    "The target has extensive combat training.",
    "The target is in an active or imminent war zone.",
    "The target has an extensive network of friends in the area.",
    "A religious organization protects the target.",
    "The target is not guilty of the crime. They know who is.",
    "The client is attempting to pin a crime on the target.",
    "An unknown force protects the target. They are unaware.",
    "The target is embroiled in an unrelated sensitive legal matter which requires their full attention.",
    "The crew already knows the target.",
    "The client is many jumps away from the target and requires delivery.",
    "Other victims pursue the target, seeking revenge for themselves.",
    "The target is able to morally justify their actions.",
    "The target is unaware of their 'crime' or the bounty.",
    "The client is using the bounty as cover to pursue an unrelated agenda.",
    "The target protects themselves with their immense wealth.",
    "Scant details on the target are available; significant investigative legwork is required.",
    "The target has many dependents.",
    "The bounty has a strict, short time limit.",
    "The lives of bystanders mean nothing to the target.",
    "Something inhuman pursues the target. It will not allow others to seize its quarry.",
    "Prophetic visions plague the target. These visions are infectious, spreading to any in close physical proximity.",
    "The target is willing to trade valuable information for their freedom.",
    "The target is a member of a widespread fraternal organization.",
    "A long-standing rivalry exists between the client and the target, who will make a counter-offer against the client if captured.",
    "The target has an identical twin, clones, or commonplace aesthetic remodelling.",
    "The target's crime was by order of a high-control group.",
    "The target has access to a jump-capable ship.",
    "The target is tying up loose ends, hoping to go into hiding.",
    "The client and the target are secretly the same person.",
    "The bounty stipulates the recovery of a related item alongside the target.",
    "The bounty requires the crew not to kill anyone through action or inaction.",
    "The instigating crime has a significant media following.",
    "Everyone is unwilling to discuss the crime, target or client.",
    "The target is a popular local celebrity.",
    "The population despises the client.",
    "The population of the area is extremely hostile to all law enforcement, local or otherwise.",
    "The target has leverage over local forces and uses this to protect themselves.",
    "The client is unwilling or unable to pay the bounty reward.",
    "The target plans another crime at a major local event.",
    "The target has evaded multiple bounty hunters.",
    "The bounty is to provide plausible deniability. The client does not want to see the crew succeed.",
    "Upon the capture of the target, other parties try to bid on them.",
    "The bounty requires no witnesses to the capture.",
    "The client offers access to experimental tools or weapons.",
    "A highly contagious disease ravages the body of the target.",
    "The area is famous for its deadly flora/fauna.",
    "The area is about to undergo a huge natural disaster.",
    "The location is under military occupation.",
    "The target has no digital footprint.",
    "The target is a veteran, noted for their training in avoiding detection and capture.",
    "A documentary series starring the target is currently being filmed.",
    "The client requires the crew to be filmed by a documentary crew throughout the process.",
    "The client only hires bounty hunters willing to undergo a certification process.",
    "The family of the target is extensive and extremely loyal.",
    "The target has been hospitalized recently. The client is unaware.",
    "A major conference (or similar event) is the only known public appearance of the target.",
    "The target is an avid collector of a rare and specific type of object.",
    "The bounty requires an entire group of perpetrators be captured.",
    "The client wishes to see the target captured and humiliated in public.",
    "Beyond the bounty posting itself, there is no evidence of the client existing.",
    "The client intends to rescind the bounty and blackmail the crew into more ethically dubious work.",
    "The target is widely reviled.",
    "The inherent nature of the location is inimical to life.",
    "Unbeknown to all, the target is an android.",
    "The payment for the bounty is in goods and services.",
    "The crew has previously seen the target die.",
    "The target believes themselves under magical protection.",
    "The target is hiding in an extremely dense urban environment.",
    "The target is hiding in a desolate, underpopulated wilderness or rural environment.",
    "The target has a series of hardened safe houses, each with supplies and weapons.",
    "The client requires they are present throughout the process. They require protection.",
    "The target is trying to kill the client. If successful, there is no one to pay the crew.",
    "The target would die before being taken alive.",
    "The associates of the target will seek revenge for any harm.",
    "The target is heavily involved in a popular, pro-social cause. Without them the efforts are likely to fail.",
    "The target is charismatic. They inspire extreme loyalty.",
    "85% of the target's body has been cybernetically enhanced.",
    "The target has planted false rumours and red herrings as to their own location.",
    "The target is always outlandishly dressed and highly recognizable.",
    "The target has moles in the client's organization.",
    "This bounty is a job interview for the real bounty.",
    "The client needs the target for a human sacrifice.",
    "The target is the final living witness of something terrible.",
    "The target is an experimental subject or specimen. The bounty is a cover for their return.",
    "The target holds huge debts. The debtors try to collect any outstanding debt from the killers.",
    "The target has the ability to feign death.",
    "The target had powerful dreams of a strange entity, ethereal yet heavy. They have made a pact with this being.",
    "The target habitually marks their passing in an idiosyncratic way.",
    "Local law enforcement protects the target.",
    "The target is a high level employee at a major local corporation.",
    "A major union organiser, the wider organization protects the target.",
    "A member of the largest local criminal organization is closely related to the target.",
    "The target curses their slayer or captor.",
    "The influence of a local politician protects the target. The two are old friends.",
    "The target does not eat. They feed upon the dreams of others, projecting their hunger outwards as a spectral maw.",
    "The target is convinced their capture or death would doom worlds.",
    "The target is no more. Something has consumed them, and now wears their likeness as a skin-suit. They move among their prey once more."
  ],

  BOUNTY_LEVELS: {
    1: { name: "Minor Bounties", payscale: "1D10KCR", rollReward: () => `${(Math.floor(Math.random() * 10) + 1)}kcr`, desc: "Minor issues for organizations. Big problems for desperate civilians." },
    2: { name: "Lesser Bounties", payscale: "1D5X10KCR", rollReward: () => `${((Math.floor(Math.random() * 5) + 1) * 10)}kcr`, desc: "Bounties on people who do not want to be found." },
    3: { name: "Serious Bounties", payscale: "1D10X10KCR", rollReward: () => `${((Math.floor(Math.random() * 10) + 1) * 10)}kcr`, desc: "Targets with experience or resources and the will to use them." },
    4: { name: "Dangerous Bounties", payscale: "1D5X100KCR", rollReward: () => `${((Math.floor(Math.random() * 5) + 1) * 100)}kcr`, desc: "Targets with experience and resources. They will kill you." },
    5: { name: "Major Bounties", payscale: "1D10X100KCR", rollReward: () => `${((Math.floor(Math.random() * 10) + 1) * 100)}kcr`, desc: "High-power targets or those outside normal social context." },
    6: { name: "Operational Bounties", payscale: "1D5MCR", rollReward: () => `${(Math.floor(Math.random() * 5) + 1)}Mcr`, desc: "Those protected by organized violence. They have people to kill you." },
    7: { name: "Strategic Bounties", payscale: "1D10MCR", rollReward: () => `${(Math.floor(Math.random() * 10) + 1)}Mcr`, desc: "The linchpins of organizations or those who wield terrible power directly." },
    8: { name: "Legendary Bounties", payscale: "2D10MCR", rollReward: () => `${(Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 10) + 1)}Mcr`, desc: "Household names or those at the secret loci of power." },
    9: { name: "Apocalyptic Bounties", payscale: "1D100MCR", rollReward: () => `${(Math.floor(Math.random() * 100) + 1)}Mcr`, desc: "Names that are only whispered. Senior executives. Rogue AI." }
  }
};

/**
 * Robust helper to get all World Journal Entries (supports game.journal & game.journals)
 */
function getWorldJournals() {
  const col = game.journal || game.journals;
  if (!col) return [];
  return col.contents ? Array.from(col.contents) : Array.from(col);
}

/**
 * Robust helper to get a Journal Entry by ID
 */
function getJournalById(id) {
  const col = game.journal || game.journals;
  return col?.get?.(id) || null;
}

/**
 * Helper to fetch a RollTable document from world game.tables or module compendium
 */
async function getRollTable(tableName, tableId) {
  const worldTablesCol = game.tables;
  const worldTables = worldTablesCol?.contents ? Array.from(worldTablesCol.contents) : Array.from(worldTablesCol || []);
  let table = worldTablesCol?.getName?.(tableName) || worldTables.find(t => t.name.includes(tableName));
  if (table) return table;

  const pack = game.packs?.get("mosh-wos-items.wos_rolltables");
  if (pack) {
    if (tableId) {
      try {
        table = await pack.getDocument(tableId);
        if (table) return table;
      } catch (e) {}
    }
    try {
      const index = await pack.getIndex();
      const entry = index.find(e => e.name.toLowerCase().includes(tableName.toLowerCase()));
      if (entry) {
        table = await pack.getDocument(entry._id);
        if (table) return table;
      }
    } catch (e) {}
  }
  return null;
}

/**
 * Rolls on a RollTable document and extracts text
 */
async function rollTableText(tableName, tableId) {
  const table = await getRollTable(tableName, tableId);
  if (table) {
    try {
      const rollResult = await table.roll();
      if (rollResult && rollResult.results && rollResult.results.length > 0) {
        const result = rollResult.results[0];
        return result.text || result.name || "";
      }
    } catch (e) {
      console.warn(`Wages of Sin: Error rolling table ${tableName}`, e);
    }
  }
  return null;
}

/**
 * Helper to roll a crime using the WoSTableCrime RollTable document
 */
async function rollCrimeFromTable() {
  let crimeText = await rollTableText("Crime", "WoSTableCrime");
  if (!crimeText) {
    const index = Math.floor(Math.random() * WOS_DATA.CRIMES.length);
    crimeText = WOS_DATA.CRIMES[index];
  }

  if (crimeText === "Conspiracy to..." || crimeText === "Assisting in...") {
    const prefix = crimeText.slice(0, -3);
    const secondary = await rollCrimeFromTable();
    return `${prefix} ${secondary.toLowerCase()}`;
  }
  return crimeText;
}

/**
 * Helper to roll N complications using the WoSTableComplications RollTable document
 */
async function rollComplicationsFromTable(count = 1) {
  const table = await getRollTable("Complications", "WoSTableComplications");
  if (table) {
    try {
      const results = [];
      for (let i = 0; i < count; i++) {
        const rollResult = await table.roll();
        if (rollResult?.results?.length) {
          const txt = rollResult.results[0].text || rollResult.results[0].name;
          if (txt && !results.includes(txt)) {
            results.push(txt);
          }
        }
      }
      if (results.length > 0) return results;
    } catch (e) {}
  }

  const pool = [...WOS_DATA.COMPLICATIONS];
  const results = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    results.push(pool.splice(idx, 1)[0]);
  }
  return results;
}

/**
 * Generate random character code
 */
function generateCharCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

/**
 * Renders the FULL Wages of Sin WANTED Booklet Journal Entry HTML layout
 */
function renderBountyHTML(data = {}) {
  const rawTarget = data.target || "Unknown Target";
  const targetUuid = data.targetUuid || "";
  
  let targetDisplay = rawTarget;
  if (targetUuid && !rawTarget.includes("@UUID")) {
    targetDisplay = `@UUID[${targetUuid}]{${rawTarget}}`;
  }

  const bountyLevel = parseInt(data.bountyLevel) || 1;
  const crime = data.crime || "Theft";
  const wantedStatus = data.wantedStatus || "Alive";
  const client = data.client || "Unknown Client";
  const reward = data.reward || "2kcr";
  const bonus = data.bonus || "None";
  const associates = data.associates || "Unknown";
  const pointOfCollection = data.pointOfCollection || "Local Law Enforcement";
  const lastLocation = data.lastLocation || "Unknown";
  const img = data.img || "";
  const advert = data.advert || `A bounty has been issued for the apprehension of ${rawTarget}.`;
  const briefing = data.briefing || "No briefing provided.";
  const wardenInfo = data.wardenInfo || "No Warden information recorded.";
  const consequences = data.consequences || "Standard enforcement protocols apply upon turn-in.";
  const footnotes = data.footnotes || "";
  const charCode = data.charCode || generateCharCode();
  const complications = Array.isArray(data.complications) ? data.complications : (data.complications ? [data.complications] : []);

  const levelsHTML = [1,2,3,4,5,6,7,8,9].map(lvl => 
    `<span class="wos-circle-option ${lvl === bountyLevel ? 'wos-active' : ''}" data-bl="${lvl}">${lvl}</span>`
  ).join(" ");

  const wantedHTML = ["Dead", "Alive", "Dead or Alive"].map(status =>
    `<span class="wos-circle-option ${status === wantedStatus ? 'wos-active' : ''}">${status}</span>`
  ).join(" ");

  const imgContent = img 
    ? `<img src="${img}" alt="${rawTarget}" />`
    : `<div class="wos-bounty-no-img">NO IMAGE AVAILABLE</div>`;

  const complicationsHTML = complications.length > 0
    ? `<div class="wos-bounty-section">
         <h3>Complications</h3>
         <ul>${complications.map(c => `<li>${c}</li>`).join("")}</ul>
       </div>`
    : "";

  const footnotesHTML = footnotes
    ? `<div><strong>Footnotes:</strong> ${footnotes}</div>`
    : `<div></div>`;

  return `
<div class="wos-bounty-container wos-bl-${bountyLevel}" data-bounty-data='${JSON.stringify(data).replace(/'/g, "&apos;")}'>
  <div class="wos-bounty-header">
    <div class="wos-bounty-header-left">
      <div class="wos-bounty-badge">BOUNTY</div>
      <div class="wos-bounty-title">${rawTarget.toUpperCase()}, ${crime.toUpperCase()}</div>
    </div>
    <div class="wos-bounty-header-right">WAGES OF SIN</div>
  </div>

  <div class="wos-bounty-body">
    <!-- Left Column -->
    <div class="wos-bounty-left-col">
      <div class="wos-bounty-advert">
        <div class="wos-bounty-advert-header">
          <span>Advert</span>
          <span>X</span>
        </div>
        <div class="wos-bounty-advert-body">
          "${advert}"
        </div>
      </div>

      <div class="wos-bounty-section">
        <h3>Briefing</h3>
        <p>${briefing.replace(/\n/g, "<br>")}</p>
      </div>

      <div class="wos-bounty-section">
        <h3>Warden Information</h3>
        <p>${wardenInfo.replace(/\n/g, "<br>")}</p>
      </div>

      <div class="wos-bounty-section">
        <h3>Consequences</h3>
        <p>${consequences.replace(/\n/g, "<br>")}</p>
      </div>

      ${complicationsHTML}

      <div class="wos-bounty-footer">
        ${footnotesHTML}
        <div class="wos-bounty-char-code">Char. Code ${charCode}</div>
      </div>
    </div>

    <!-- Right Column -->
    <div class="wos-bounty-right-col">
      <div class="wos-bounty-poster-box">
        <div class="wos-bounty-wanted-banner">W A N T E D . ${wantedStatus.toUpperCase()}</div>
        <div class="wos-bounty-portrait-frame">
          ${imgContent}
          <div class="wos-bounty-bl-badge">(BL:${bountyLevel})</div>
        </div>
      </div>

      <div class="wos-bounty-details-list">
        <p><strong>Target:</strong> ${targetDisplay}</p>
        <p><strong>Bounty Level (circle):</strong> ${levelsHTML}</p>
        <p><strong>Crime:</strong> ${crime}</p>
        <p><strong>Wanted (circle):</strong> ${wantedHTML}</p>
        <p><strong>Client:</strong> ${client}</p>
        <p><strong>Reward:</strong> ${reward}</p>
        <p><strong>Bonus:</strong> ${bonus}</p>
        <p><strong>Known associates:</strong> ${associates}</p>
      </div>

      <div class="wos-bounty-section">
        <h3>Locations</h3>
        <p><strong>Point of Collection:</strong> ${pointOfCollection}</p>
        <p><strong>Last Known Location:</strong> ${lastLocation}</p>
      </div>
    </div>
  </div>
</div>
  `.trim();
}

/**
 * Renders the PLAYER-FACING ONLY Bounty Poster (Omit Warden Info, Consequences, Complications)
 */
function renderPlayerBountyHTML(data = {}) {
  const rawTarget = data.target || "Unknown Target";
  const targetUuid = data.targetUuid || "";
  
  let targetDisplay = rawTarget;
  if (targetUuid && !rawTarget.includes("@UUID")) {
    targetDisplay = `@UUID[${targetUuid}]{${rawTarget}}`;
  }

  const bountyLevel = parseInt(data.bountyLevel) || 1;
  const crime = data.crime || "Theft";
  const wantedStatus = data.wantedStatus || "Alive";
  const client = data.client || "Unknown Client";
  const reward = data.reward || "2kcr";
  const bonus = data.bonus || "None";
  const associates = data.associates || "Unknown";
  const pointOfCollection = data.pointOfCollection || "Local Law Enforcement";
  const lastLocation = data.lastLocation || "Unknown";
  const img = data.img || "";
  const advert = data.advert || `A bounty has been issued for the apprehension of ${rawTarget}.`;
  const briefing = data.briefing || "No briefing provided.";
  const footnotes = data.footnotes || "";
  const charCode = data.charCode || generateCharCode();

  const levelsHTML = [1,2,3,4,5,6,7,8,9].map(lvl => 
    `<span class="wos-circle-option ${lvl === bountyLevel ? 'wos-active' : ''}">${lvl}</span>`
  ).join(" ");

  const wantedHTML = ["Dead", "Alive", "Dead or Alive"].map(status =>
    `<span class="wos-circle-option ${status === wantedStatus ? 'wos-active' : ''}">${status}</span>`
  ).join(" ");

  const imgContent = img 
    ? `<img src="${img}" alt="${rawTarget}" />`
    : `<div class="wos-bounty-no-img">NO IMAGE AVAILABLE</div>`;

  const footnotesHTML = footnotes
    ? `<div><strong>Footnotes:</strong> ${footnotes}</div>`
    : `<div></div>`;

  return `
<div class="wos-bounty-container wos-bl-${bountyLevel}">
  <div class="wos-bounty-header">
    <div class="wos-bounty-header-left">
      <div class="wos-bounty-badge">PUBLIC BOUNTY</div>
      <div class="wos-bounty-title">${rawTarget.toUpperCase()}, ${crime.toUpperCase()}</div>
    </div>
    <div class="wos-bounty-header-right">WAGES OF SIN</div>
  </div>

  <div class="wos-bounty-body">
    <!-- Left Column: Public facing Advert & Briefing -->
    <div class="wos-bounty-left-col">
      <div class="wos-bounty-advert">
        <div class="wos-bounty-advert-header">
          <span>Advert</span>
          <span>X</span>
        </div>
        <div class="wos-bounty-advert-body">
          "${advert}"
        </div>
      </div>

      <div class="wos-bounty-section">
        <h3>Briefing</h3>
        <p>${briefing.replace(/\n/g, "<br>")}</p>
      </div>

      <div class="wos-bounty-footer">
        ${footnotesHTML}
        <div class="wos-bounty-char-code">Char. Code ${charCode}</div>
      </div>
    </div>

    <!-- Right Column: Poster, Target Stats, Locations -->
    <div class="wos-bounty-right-col">
      <div class="wos-bounty-poster-box">
        <div class="wos-bounty-wanted-banner">W A N T E D . ${wantedStatus.toUpperCase()}</div>
        <div class="wos-bounty-portrait-frame">
          ${imgContent}
          <div class="wos-bounty-bl-badge">(BL:${bountyLevel})</div>
        </div>
      </div>

      <div class="wos-bounty-details-list">
        <p><strong>Target:</strong> ${targetDisplay}</p>
        <p><strong>Bounty Level (circle):</strong> ${levelsHTML}</p>
        <p><strong>Crime:</strong> ${crime}</p>
        <p><strong>Wanted (circle):</strong> ${wantedHTML}</p>
        <p><strong>Client:</strong> ${client}</p>
        <p><strong>Reward:</strong> ${reward}</p>
        <p><strong>Bonus:</strong> ${bonus}</p>
        <p><strong>Known associates:</strong> ${associates}</p>
      </div>

      <div class="wos-bounty-section">
        <h3>Locations</h3>
        <p><strong>Point of Collection:</strong> ${pointOfCollection}</p>
        <p><strong>Last Known Location:</strong> ${lastLocation}</p>
      </div>
    </div>
  </div>
</div>
  `.trim();
}

/**
 * Renders the Bounty Board HTML container holding multiple player-facing posters
 */
function renderBountyBoardHTML(bountiesList = [], boardTitle = "Bounty Board") {
  const cardsHTML = bountiesList.map(b => `
    <div class="wos-bounty-board-card">
      ${renderPlayerBountyHTML(b)}
    </div>
  `).join("\n\n");

  return `
<div class="wos-bounty-board-container">
  <div class="wos-bounty-board-title">📋 ${boardTitle.toUpperCase()}</div>
  <div class="wos-bounty-board-grid">
    ${cardsHTML}
  </div>
</div>
  `.trim();
}

/**
 * Creates a Journal Entry document in Foundry VTT
 */
async function createBountyJournalEntry(data) {
  const rawTarget = data.target || "Unknown Target";
  const cleanTargetName = rawTarget.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/, "$1");
  const htmlContent = renderBountyHTML(data);

  const entryData = {
    name: `Bounty: ${cleanTargetName}`,
    pages: [{
      name: `Bounty - ${cleanTargetName}`,
      type: "text",
      text: {
        content: htmlContent,
        format: 1
      }
    }]
  };

  const journal = await JournalEntry.create(entryData);
  if (journal) {
    ui.notifications?.info(`Bounty Journal Entry created for "${cleanTargetName}".`);
    journal.sheet.render(true);
  }
  return journal;
}

/**
 * Helper to extract bounty fields from ANY journal entry content or attributes
 */
function extractBountyDataFromJournal(journal) {
  const pages = journal.pages?.contents || Array.from(journal.pages || []);
  const page = pages[0];
  const content = page?.text?.content || "";

  const match = content.match(/data-bounty-data='([^']+)'/);
  if (match) {
    try {
      return JSON.parse(match[1].replace(/&apos;/g, "'"));
    } catch(e) {}
  }

  const cleanName = journal.name.replace(/^(bounty|wanted|target)[\s\:\-\_]*/i, "").trim() || journal.name;

  let img = "";
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch) img = imgMatch[1];

  let bountyLevel = 1;
  const blMatch = content.match(/(?:BL:|Bounty Level:?)\s*(\d+)/i);
  if (blMatch) bountyLevel = parseInt(blMatch[1]);

  let crime = "Unspecified Offense";
  const crimeMatch = content.match(/Crime:?<\/strong>\s*([^<]+)/i) || content.match(/Crime:?\s*([^\n<]+)/i);
  if (crimeMatch) crime = crimeMatch[1].trim();

  let wantedStatus = "Alive";
  if (content.includes("Dead or Alive")) wantedStatus = "Dead or Alive";
  else if (content.includes("Dead")) wantedStatus = "Dead";

  let client = "Unknown Client";
  const clientMatch = content.match(/Client:?<\/strong>\s*([^<]+)/i) || content.match(/Client:?\s*([^\n<]+)/i);
  if (clientMatch) client = clientMatch[1].trim();

  let reward = "Negotiable";
  const rewardMatch = content.match(/Reward:?<\/strong>\s*([^<]+)/i) || content.match(/Reward:?\s*([^\n<]+)/i);
  if (rewardMatch) reward = rewardMatch[1].trim();

  return {
    target: cleanName,
    img: img,
    bountyLevel: bountyLevel,
    crime: crime,
    wantedStatus: wantedStatus,
    client: client,
    reward: reward,
    bonus: "None",
    associates: "Unknown",
    pointOfCollection: "Local Station PD",
    lastLocation: "Local Sector",
    advert: `Reward offered for apprehension regarding charges of ${crime}.`,
    briefing: content.replace(/<[^>]+>/g, " ").slice(0, 300).trim() || "No briefing provided.",
    charCode: generateCharCode()
  };
}

/**
 * Dialog to select created bounties and generate a player-facing Bounty Board
 */
async function createBountyBoard() {
  const allJournals = getWorldJournals();
  
  const nonBoardJournals = allJournals.filter(j => !j.name.toLowerCase().includes("bounty board"));

  let detectedBounties = nonBoardJournals.filter(j => {
    const nameLower = j.name.toLowerCase();
    const isNameMatch = nameLower.includes("bounty") || nameLower.includes("wanted") || nameLower.includes("target");
    const pages = j.pages?.contents || Array.from(j.pages || []);
    const isContentMatch = pages.some(p => {
      const txt = (p.text?.content || "").toLowerCase();
      return txt.includes("wos-bounty") || txt.includes("w a n t e d") || txt.includes("wages of sin") || txt.includes("advert") || txt.includes("(bl:");
    });
    return isNameMatch || isContentMatch;
  });

  const displayJournals = detectedBounties.length > 0 ? detectedBounties : nonBoardJournals;

  const renderList = (journalsToRender) => {
    if (!journalsToRender || journalsToRender.length === 0) {
      return "<p><em>No journal entries found in your world. Create a Journal Entry first!</em></p>";
    }
    return journalsToRender.map(j => `
      <div style="margin-bottom:6px;">
        <label style="cursor:pointer; display:flex; align-items:center; gap:8px;">
          <input type="checkbox" name="selectedBounties" value="${j.id}" checked />
          <strong>${j.name}</strong>
        </label>
      </div>
    `).join("");
  };

  const dialogHTML = `
    <form class="wos-bounty-board-form">
      <div class="form-group" style="margin-bottom:12px;">
        <label><strong>Bounty Board Title:</strong></label>
        <input type="text" name="boardTitle" value="Bounty Board" />
      </div>

      <div class="form-group">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <label><strong>Select Journal Entries for Board:</strong></label>
          <label style="font-size:0.8rem; cursor:pointer;">
            <input type="checkbox" id="wos-show-all-journals" ${detectedBounties.length === 0 ? 'checked' : ''} /> Show all world journals (${nonBoardJournals.length})
          </label>
        </div>
        <div id="wos-journal-select-list" style="max-height: 240px; overflow-y: auto; border: 1px solid #ccc; padding: 8px; background: #fafafa; border-radius: 4px;">
          ${renderList(displayJournals)}
        </div>
      </div>
    </form>
  `;

  new Dialog({
    title: "Wages of Sin — Create Bounty Board",
    content: dialogHTML,
    buttons: {
      generate: {
        icon: '<i class="fas fa-clipboard-list"></i>',
        label: "Create Bounty Board Journal",
        callback: async (html) => {
          const form = html.find("form")[0];
          const boardTitle = form.boardTitle.value.trim() || "Bounty Board";
          const checkedIds = Array.from(html.find('input[name="selectedBounties"]:checked')).map(cb => cb.value);

          if (checkedIds.length === 0) {
            ui.notifications?.warn("No journal entries were selected for the Bounty Board.");
            return;
          }

          const bountiesData = [];
          for (const id of checkedIds) {
            const journal = getJournalById(id);
            if (!journal) continue;
            const parsedData = extractBountyDataFromJournal(journal);
            bountiesData.push(parsedData);
          }

          const boardHTML = renderBountyBoardHTML(bountiesData, boardTitle);
          const boardEntry = await JournalEntry.create({
            name: boardTitle,
            pages: [{
              name: boardTitle,
              type: "text",
              text: {
                content: boardHTML,
                format: 1
              }
            }]
          });

          if (boardEntry) {
            ui.notifications?.info(`Bounty Board "${boardTitle}" created with ${bountiesData.length} bounties.`);
            boardEntry.sheet.render(true);
          }
        }
      },
      cancel: {
        icon: '<i class="fas fa-times"></i>',
        label: "Cancel"
      }
    },
    default: "generate",
    render: (html) => {
      const showAllCb = html.find("#wos-show-all-journals");
      const listContainer = html.find("#wos-journal-select-list");

      showAllCb.on("change", (ev) => {
        const showAll = ev.target.checked;
        const targetList = showAll ? nonBoardJournals : (detectedBounties.length > 0 ? detectedBounties : nonBoardJournals);
        listContainer.html(renderList(targetList));
      });
    }
  }, { width: 540 }).render(true);
}

/**
 * Form Dialog to input and create or edit a bounty
 */
function createBountyForm(initialData = {}) {
  const data = {
    target: initialData.target || "",
    targetUuid: initialData.targetUuid || "",
    bountyLevel: initialData.bountyLevel || 1,
    crime: initialData.crime || "",
    wantedStatus: initialData.wantedStatus || "Alive",
    client: initialData.client || "",
    reward: initialData.reward || "",
    bonus: initialData.bonus || "None",
    associates: initialData.associates || "Unknown",
    pointOfCollection: initialData.pointOfCollection || "",
    lastLocation: initialData.lastLocation || "",
    img: initialData.img || "",
    advert: initialData.advert || "",
    briefing: initialData.briefing || "",
    wardenInfo: initialData.wardenInfo || "",
    consequences: initialData.consequences || "",
    footnotes: initialData.footnotes || "",
    charCode: initialData.charCode || generateCharCode(),
    complications: Array.isArray(initialData.complications) ? initialData.complications.join("\n• ") : (initialData.complications || "")
  };

  const blPillsHTML = [1,2,3,4,5,6,7,8,9].map(l => {
    const isSel = l == data.bountyLevel;
    const info = WOS_DATA.BOUNTY_LEVELS[l];
    return `
      <label class="wos-bl-pill wos-bl-pill-${l} ${isSel ? 'selected' : ''}" data-bl="${l}">
        <input type="radio" name="bountyLevel" value="${l}" ${isSel ? 'checked' : ''} />
        <div><strong>BL:${l} (${info.name})</strong></div>
        <div style="font-size:0.75rem; opacity:0.85;">${info.payscale}</div>
      </label>
    `;
  }).join("");

  const formHTML = `
    <form class="wos-bounty-dialog-form wos-bl-theme-${data.bountyLevel}">
      <div class="wos-drop-zone wos-target-drop-zone" title="Drag and drop an Actor or Token here">
        <i class="fas fa-user-plus"></i> <span>Drag & Drop Actor/Token here to set <strong>Target & Portrait Image</strong></span>
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <label>Target Name:</label>
          <input type="text" name="target" value="${data.target}" placeholder="e.g. Markos Petraitiene or @UUID[...]" />
          <input type="hidden" name="targetUuid" value="${data.targetUuid}" />
        </div>
        <div class="form-group">
          <label>Target Image (URL/Path):</label>
          <input type="text" name="img" value="${data.img}" placeholder="path/to/image.png" />
        </div>
      </div>

      <div class="form-group">
        <label><strong>Bounty Level (Click to select BL & Theme Color):</strong></label>
        <div class="wos-bl-selector-grid">
          ${blPillsHTML}
        </div>
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <label>Wanted Condition:</label>
          <select name="wantedStatus">
            <option value="Alive" ${data.wantedStatus === 'Alive' ? 'selected' : ''}>Alive</option>
            <option value="Dead" ${data.wantedStatus === 'Dead' ? 'selected' : ''}>Dead</option>
            <option value="Dead or Alive" ${data.wantedStatus === 'Dead or Alive' ? 'selected' : ''}>Dead or Alive</option>
          </select>
        </div>
        <div class="form-group">
          <label>Crime:</label>
          <input type="text" name="crime" value="${data.crime}" placeholder="e.g. Theft" />
        </div>
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <label>Client:</label>
          <input type="text" name="client" value="${data.client}" placeholder="e.g. MegaYUM Supermarket" />
        </div>
        <div class="form-group">
          <label>Reward:</label>
          <input type="text" name="reward" value="${data.reward}" placeholder="e.g. 2kcr" />
        </div>
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <label>Bonus:</label>
          <input type="text" name="bonus" value="${data.bonus}" placeholder="e.g. None or 500cr for recovery" />
        </div>
        <div class="form-group">
          <label>Char. Code:</label>
          <input type="text" name="charCode" value="${data.charCode}" />
        </div>
      </div>

      <div class="form-group">
        <label>Known Associates:</label>
        <div class="wos-drop-zone wos-associates-drop-zone" title="Drag and drop Actors or Tokens here to add hard links">
          <i class="fas fa-users-cog"></i> <span>Drag & Drop Actor(s) here to append <strong>@UUID Hard Links</strong></span>
        </div>
        <textarea name="associates" placeholder="e.g. @UUID[Actor.12345]{Boris Ionatán}">${data.associates}</textarea>
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <label>Point of Collection:</label>
          <input type="text" name="pointOfCollection" value="${data.pointOfCollection}" placeholder="e.g. Anvollapolis PD" />
        </div>
        <div class="form-group">
          <label>Last Known Location:</label>
          <input type="text" name="lastLocation" value="${data.lastLocation}" placeholder="e.g. MegaYUM Supermarket" />
        </div>
      </div>

      <div class="form-group">
        <label>Advert Text:</label>
        <input type="text" name="advert" value="${data.advert}" placeholder="Short public summary" />
      </div>

      <div class="form-group">
        <label>Briefing (Player-Facing Notes):</label>
        <textarea name="briefing">${data.briefing}</textarea>
      </div>

      <div class="form-group">
        <label>Warden Information (Full Details):</label>
        <textarea name="wardenInfo">${data.wardenInfo}</textarea>
      </div>

      <div class="form-group">
        <label>Consequences:</label>
        <textarea name="consequences">${data.consequences}</textarea>
      </div>

      <div class="form-group">
        <label>Complications (one per line):</label>
        <textarea name="complications">${data.complications}</textarea>
      </div>

      <div class="form-group">
        <label>Footnotes:</label>
        <input type="text" name="footnotes" value="${data.footnotes}" />
      </div>
    </form>
  `;

  new Dialog({
    title: "Wages of Sin — Create / Edit Bounty",
    content: formHTML,
    buttons: {
      create: {
        icon: '<i class="fas fa-check"></i>',
        label: "Create Journal Entry",
        callback: (html) => {
          const form = html.find("form")[0];
          const complicationsText = form.complications.value.trim();
          const complicationsList = complicationsText 
            ? complicationsText.split("\n").map(s => s.replace(/^[\s•\-\*]+/, "").trim()).filter(Boolean)
            : [];

          const selectedBL = parseInt(html.find('.wos-bl-pill.selected input').val()) || 1;

          const bountyData = {
            target: form.target.value.trim() || "Unknown Target",
            targetUuid: form.targetUuid.value.trim(),
            img: form.img.value.trim(),
            bountyLevel: selectedBL,
            wantedStatus: form.wantedStatus.value,
            crime: form.crime.value.trim() || "Unspecified Offense",
            client: form.client.value.trim() || "Unknown Client",
            reward: form.reward.value.trim() || "Negotiable",
            bonus: form.bonus.value.trim() || "None",
            associates: form.associates.value.trim() || "Unknown",
            pointOfCollection: form.pointOfCollection.value.trim() || "Local Authority",
            lastLocation: form.lastLocation.value.trim() || "Unknown",
            advert: form.advert.value.trim() || "Bounty offered for target apprehension.",
            briefing: form.briefing.value.trim(),
            wardenInfo: form.wardenInfo.value.trim(),
            consequences: form.consequences.value.trim(),
            complications: complicationsList,
            footnotes: form.footnotes.value.trim(),
            charCode: form.charCode.value.trim() || generateCharCode()
          };

          createBountyJournalEntry(bountyData);
        }
      },
      cancel: {
        icon: '<i class="fas fa-times"></i>',
        label: "Cancel"
      }
    },
    default: "create",
    render: (html) => {
      const formEl = html.find("form");
      const pills = html.find('.wos-bl-pill');

      pills.on("click", (ev) => {
        pills.removeClass("selected");
        const pill = $(ev.currentTarget);
        pill.addClass("selected");
        pill.find('input[type="radio"]').prop("checked", true);

        const bl = pill.data("bl");
        formEl.removeClass((i, className) => (className.match(/\bwos-bl-theme-\d+/g) || []).join(" "));
        formEl.addClass(`wos-bl-theme-${bl}`);

        const rewardInput = html.find('input[name="reward"]');
        if (!rewardInput.val().trim() || rewardInput.val().endsWith("kcr") || rewardInput.val().endsWith("Mcr")) {
          rewardInput.val(WOS_DATA.BOUNTY_LEVELS[bl].rollReward());
        }
      });

      const imgInput = html.find('input[name="img"]');
      if (imgInput.length && typeof FilePicker !== "undefined") {
        const pickerBtn = $('<button type="button" class="filepicker-btn" style="margin-top:2px;"><i class="fas fa-file-picker"></i> Pick Image</button>');
        pickerBtn.on("click", () => {
          new FilePicker({
            type: "image",
            current: imgInput.val(),
            callback: path => imgInput.val(path)
          }).render(true);
        });
        imgInput.after(pickerBtn);
      }

      const extractActorFromDrop = async (ev) => {
        let data;
        try {
          data = TextEditor.getDragEventData(ev);
        } catch(e) {
          try {
            data = JSON.parse(ev.dataTransfer.getData("text/plain"));
          } catch(err) {}
        }
        if (!data) return null;

        if (data.type === "Actor" && data.uuid) {
          return await fromUuid(data.uuid);
        } else if (data.type === "Token" && data.uuid) {
          const tokenDoc = await fromUuid(data.uuid);
          return tokenDoc?.actor || null;
        } else if (data.uuid) {
          const doc = await fromUuid(data.uuid);
          return doc?.documentName === "Actor" ? doc : (doc?.actor || null);
        }
        return null;
      };

      const targetDropZone = html.find(".wos-target-drop-zone")[0];
      const targetInput = html.find('input[name="target"]')[0];

      const handleTargetDrop = async (ev) => {
        ev.preventDefault();
        const actor = await extractActorFromDrop(ev);
        if (actor) {
          html.find('input[name="target"]').val(actor.name);
          html.find('input[name="targetUuid"]').val(actor.uuid);

          const actorImg = actor.img || actor.prototypeToken?.texture?.src || "";
          if (actorImg && actorImg !== "icons/svg/mystery-man.svg") {
            html.find('input[name="img"]').val(actorImg);
          }
          ui.notifications?.info(`Target set to Actor: "${actor.name}" (${actor.uuid})`);
        }
      };

      if (targetDropZone) {
        targetDropZone.addEventListener("dragover", ev => { ev.preventDefault(); $(targetDropZone).addClass("wos-drag-over"); });
        targetDropZone.addEventListener("dragleave", () => $(targetDropZone).removeClass("wos-drag-over"));
        targetDropZone.addEventListener("drop", handleTargetDrop);
      }

      if (targetInput) {
        targetInput.addEventListener("dragover", ev => ev.preventDefault());
        targetInput.addEventListener("drop", handleTargetDrop);
      }

      const associatesDropZone = html.find(".wos-associates-drop-zone")[0];
      const associatesTextarea = html.find('textarea[name="associates"]')[0];

      const handleAssociatesDrop = async (ev) => {
        ev.preventDefault();
        const actor = await extractActorFromDrop(ev);
        if (actor) {
          const currentVal = html.find('textarea[name="associates"]').val().trim();
          const uuidLink = `@UUID[${actor.uuid}]{${actor.name}}`;
          let newVal = currentVal;
          if (!currentVal || currentVal === "Unknown") {
            newVal = uuidLink;
          } else {
            newVal = `${currentVal}, ${uuidLink}`;
          }
          html.find('textarea[name="associates"]').val(newVal);
          ui.notifications?.info(`Added Associate link: "${actor.name}"`);
        }
      };

      if (associatesDropZone) {
        associatesDropZone.addEventListener("dragover", ev => { ev.preventDefault(); $(associatesDropZone).addClass("wos-drag-over"); });
        associatesDropZone.addEventListener("dragleave", () => $(associatesDropZone).removeClass("wos-drag-over"));
        associatesDropZone.addEventListener("drop", handleAssociatesDrop);
      }

      if (associatesTextarea) {
        associatesTextarea.addEventListener("dragover", ev => ev.preventDefault());
        associatesTextarea.addEventListener("drop", handleAssociatesDrop);
      }
    }
  }, { width: 660 }).render(true);
}

/**
 * Generator Function: Rolls on Wages of Sin RollTable documents (Client Type, Crime, Complications, BL)
 */
async function generateBounty(options = {}) {
  ui.notifications?.info("Rolling bounty from Wages of Sin Roll Tables...");

  let level = Math.floor(Math.random() * 9) + 1;
  const blText = await rollTableText("Bounty Level", "WoSTableBountyLevel");
  if (blText) {
    const match = blText.match(/BL:(\d+)/);
    if (match) level = parseInt(match[1]);
  }
  const levelInfo = WOS_DATA.BOUNTY_LEVELS[level];

  let clientType = await rollTableText("Client Type", "WoSTableClientType");
  if (!clientType) {
    const clientTypeIdx = Math.floor(Math.random() * WOS_DATA.CLIENT_TYPES.length);
    clientType = WOS_DATA.CLIENT_TYPES[clientTypeIdx];
  }

  const crime = await rollCrimeFromTable();

  const compCount = Math.floor(Math.random() * 5) + 1;
  const complications = await rollComplicationsFromTable(compCount);

  const wantedStatuses = ["Alive", "Alive", "Dead or Alive", "Dead"];
  const wantedStatus = wantedStatuses[Math.floor(Math.random() * wantedStatuses.length)];

  const reward = levelInfo.rollReward();

  let clientName = `${clientType} Org`;
  if (clientType === "Corporate") clientName = "MegaYUM Logistics Corp";
  else if (clientType === "Criminal") clientName = "Anvollapolis Syndicate";
  else if (clientType === "Union") clientName = "Sector 4 Dockworkers Union";
  else if (clientType === "Civilian") clientName = "Private Citizen";
  else if (clientType === "Military") clientName = "3rd Orbital Patrol Unit";

  const initialData = {
    target: "Generated Target",
    bountyLevel: level,
    crime: crime,
    wantedStatus: wantedStatus,
    client: clientName,
    reward: reward,
    bonus: "None",
    associates: "Unknown",
    pointOfCollection: "Local Station PD",
    lastLocation: "Sub-level 3 Sector",
    advert: `Reward offered for apprehension regarding charges of ${crime}.`,
    briefing: `Target is wanted by ${clientName} for ${crime}. Level ${level} (${levelInfo.name}). ${levelInfo.desc}`,
    wardenInfo: `Investigation indicates target was active recently in local sector. Complications include:\n• ` + complications.join("\n• "),
    consequences: `Apprehension resolves outstanding contract with ${clientName}.`,
    complications: complications,
    charCode: generateCharCode()
  };

  createBountyForm(initialData);
}

/**
 * Ensures all 3 Wages of Sin Macros exist in game.macros sidebar directory for instant GM access
 */
async function ensureWorldMacros() {
  if (!game.user?.isGM) return;

  const worldMacros = game.macros?.contents ? Array.from(game.macros.contents) : Array.from(game.macros || []);
  const macrosToEnsure = [
    {
      name: "Wages of Sin: Create Bounty (Form)",
      img: "icons/svg/book.svg",
      command: 'if (game.wos?.createBountyForm) { game.wos.createBountyForm(); } else { ui.notifications.error("Wages of Sin script not ready."); }'
    },
    {
      name: "Wages of Sin: Generate Bounty",
      img: "icons/svg/d20-grey.svg",
      command: 'if (game.wos?.generateBounty) { game.wos.generateBounty(); } else { ui.notifications.error("Wages of Sin script not ready."); }'
    },
    {
      name: "Wages of Sin: Create Bounty Board",
      img: "icons/svg/clipboard.svg",
      command: 'if (game.wos?.createBountyBoard) { game.wos.createBountyBoard(); } else { ui.notifications.error("Wages of Sin script not ready."); }'
    }
  ];

  for (const mData of macrosToEnsure) {
    const existing = worldMacros.find(m => m.name === mData.name);
    if (!existing) {
      try {
        await Macro.create({
          name: mData.name,
          type: "script",
          img: mData.img,
          command: mData.command
        });
        console.log(`Wages of Sin: Auto-created World Macro "${mData.name}".`);
      } catch(e) {}
    }
  }
}

// 1-Click Interactive Bounty Level Editing directly on Journal Sheets
Hooks.on("renderJournalPageSheet", (sheet, html) => {
  if (!game.user?.isGM) return;

  const container = html.find(".wos-bounty-container");
  if (!container.length) return;

  const headerRight = container.find(".wos-bounty-header-right");
  if (headerRight.length && !headerRight.find(".wos-edit-bounty-btn").length) {
    const editBtn = $('<button type="button" class="wos-edit-bounty-btn" title="Edit Bounty Details"><i class="fas fa-edit"></i> Edit</button>');
    editBtn.on("click", (ev) => {
      ev.stopPropagation();
      const rawData = container.attr("data-bounty-data");
      let data = {};
      if (rawData) {
        try { data = JSON.parse(rawData.replace(/&apos;/g, "'")); } catch(e) {}
      }
      createBountyForm(data);
    });
    headerRight.append(editBtn);
  }

  container.find(".wos-circle-option[data-bl]").on("click", async (ev) => {
    ev.stopPropagation();
    const newBL = parseInt($(ev.currentTarget).attr("data-bl"));
    if (!newBL || newBL < 1 || newBL > 9) return;

    const rawData = container.attr("data-bounty-data");
    let bountyData = {};
    if (rawData) {
      try { bountyData = JSON.parse(rawData.replace(/&apos;/g, "'")); } catch(e) {}
    }

    if (bountyData.bountyLevel === newBL) return;

    const confirm = await Dialog.confirm({
      title: `Change Bounty Level to BL:${newBL}?`,
      content: `<p>Change Bounty Level from <strong>BL:${bountyData.bountyLevel || 1}</strong> to <strong>BL:${newBL} (${WOS_DATA.BOUNTY_LEVELS[newBL].name})</strong>?</p><p>Also re-roll suggested reward (${WOS_DATA.BOUNTY_LEVELS[newBL].payscale})?</p>`,
      yes: () => true,
      no: () => false,
      defaultYes: true
    });

    if (confirm) {
      bountyData.bountyLevel = newBL;
      bountyData.reward = WOS_DATA.BOUNTY_LEVELS[newBL].rollReward();

      const newHTML = renderBountyHTML(bountyData);
      const page = sheet.pageDocument || sheet.document;
      if (page) {
        await page.update({ "text.content": newHTML });
        ui.notifications?.info(`Updated Bounty Level to BL:${newBL} (${bountyData.reward}).`);
      }
    }
  });
});

// Hook into Foundry initialization
Hooks.once("ready", async () => {
  game.wos = game.wos || {};
  game.wos.WOS_DATA = WOS_DATA;
  game.wos.renderBountyHTML = renderBountyHTML;
  game.wos.renderPlayerBountyHTML = renderPlayerBountyHTML;
  game.wos.renderBountyBoardHTML = renderBountyBoardHTML;
  game.wos.createBountyJournalEntry = createBountyJournalEntry;
  game.wos.createBountyBoard = createBountyBoard;
  game.wos.createBountyForm = createBountyForm;
  game.wos.generateBounty = generateBounty;

  await ensureWorldMacros();
  console.log("Mothership: Wages of Sin — Bounty Generator & Board initialized.");
});
