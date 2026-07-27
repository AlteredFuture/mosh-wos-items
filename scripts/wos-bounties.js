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
  },

  TARGET_NAMES: [
    "Markos Petraitiene", "Vera Kozlova", "Darek Vance", "Tanya Novak", "Kaelen Voss",
    "Soren Mercer", "Lyra Sterling", "Cassian Drake", "Jaxen Reed", "Nico Richter",
    "Elena Solokov", "Silas Thorne", "Maren Duval", "Jarek Kane", "Vesper Chen",
    "Corvus Drake", "Orion Pax", "Hester Prynn", "Titus Blake", "Zane Cross"
  ],

  BONUSES: [
    "None", "None", "None",
    "500cr for live capture",
    "20% bonus for target's ship",
    "1kcr for recovery of stolen data drive",
    "2kcr if contract completed within 48 hours",
    "500cr for retrieval of personal logs",
    "1.5kcr for clean extraction with zero collateral damage",
    "Priority docking clearance voucher"
  ],

  ASSOCIATES: [
    "Unknown", "Unknown",
    "Lone Operator (No known associates)",
    "Local Syndicate Gang",
    "2 Armed Mercenary Bodyguards",
    "Automated Sentry Drones",
    "Hacker Cell 'Zero-Day'",
    "Disgraced Station Security Guard",
    "Family Relatives in Sector 4",
    "Rogue Android Companion"
  ],

  POINTS_OF_COLLECTION: [
    "Local Station PD",
    "Anvollapolis PD",
    "Corporate Hangar B-12",
    "Sub-level Security Checkpoint",
    "Orbital Patrol Outpost",
    "Union Hall Sector 4",
    "Freeport Docking Bay 9",
    "Private Shuttle Platform 3",
    "System Security Office"
  ],

  LAST_LOCATIONS: [
    "Sub-level 3 Sector",
    "MegaYUM Supermarket",
    "Asteroid Mining Complex 9",
    "The Rusty Thruster Cantina",
    "Docking Bay 4",
    "Deck 12 Residential Blocks",
    "Decommissioned Mining Vessel 'Gorgon'",
    "Orbital Transit Hub",
    "Hydroponics Vault B"
  ],

  FOOTNOTES: [
    "", "",
    "Caution: Target is believed to be armed and extremely dangerous.",
    "Verify bounty authorization before initiating engagement.",
    "No collateral damage tolerated in corporate sectors.",
    "Bounty expires in 14 standard cycles.",
    "Payment issued upon biometric verification at collection point."
  ]
};

/**
 * Helper to roll a random Client Type and realistic client name
 */
async function rollClientData() {
  let clientType = await rollTableText("Client Type", "WoSTableClientType");
  if (!clientType) {
    const idx = Math.floor(Math.random() * WOS_DATA.CLIENT_TYPES.length);
    clientType = WOS_DATA.CLIENT_TYPES[idx];
  }

  const clientNames = {
    Corporate: ["MegaYUM Logistics Corp", "Axiom BioTech", "Sol-Mining Conglomerate", "Dynamic Systems Inc", "Weyland-Yutani Division", "Apex Cybernetics", "OmniCorp Interstellar"],
    Criminal: ["Anvollapolis Syndicate", "Red Sun Cartel", "Viper Cell", "Black Market Outfit", "Kurosawa Smuggling Ring", "Shadow Network"],
    Union: ["Sector 4 Dockworkers Union", "Deep Space Miners Guild", "Free Labor Front", "Mechanics & Engineers Guild", "Orbital Freight Local 802"],
    Civilian: ["Private Citizen", "Doctor Evelyn Vance", "Captain J. Vance", "Family of the Deceased", "Professor H. Aris", "Estate of Marcus Thorne"],
    Military: ["3rd Orbital Patrol Unit", "Sector 7 High Command", "System Defense Force", "Special Tactical Directorate", "Naval Security Detachment"]
  };

  const pool = clientNames[clientType] || clientNames.Corporate;
  const name = pool[Math.floor(Math.random() * pool.length)];
  return { type: clientType, name: name };
}

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
  const isUnknown = Boolean(data.isUnknown) || (data.target || "").toUpperCase().includes("UNKNOWN TARGET") || (data.target || "").toUpperCase().includes("UNIDENTIFIED");
  const rawTarget = isUnknown ? (data.target || "UNKNOWN TARGET") : (data.target || "Unknown Target");
  const targetUuid = data.targetUuid || "";
  const status = (data.status || "open").toLowerCase();
  
  let targetDisplay = rawTarget;
  if (!isUnknown && targetUuid && !rawTarget.includes("@UUID")) {
    targetDisplay = `@UUID[${targetUuid}]{${rawTarget}}`;
  } else if (isUnknown) {
    targetDisplay = `<span class="wos-unknown-target-label"><i class="fas fa-user-secret"></i> ${rawTarget.toUpperCase()}</span>`;
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

  const wantedHTML = ["Dead", "Alive", "Dead or Alive"].map(st =>
    `<span class="wos-circle-option ${st === wantedStatus ? 'wos-active' : ''}">${st}</span>`
  ).join(" ");

  let imgContent = "";
  if (img && !isUnknown) {
    imgContent = `<img src="${img}" alt="${rawTarget}" />`;
  } else if (img && isUnknown) {
    imgContent = `<img src="${img}" alt="${rawTarget}" />`;
  } else {
    imgContent = `
      <div class="wos-bounty-unknown-img">
        <div class="wos-unknown-icon"><i class="fas fa-user-secret"></i></div>
        <div class="wos-unknown-badge">IDENTITY UNKNOWN</div>
        <div class="wos-unknown-subtext">TARGET UNIDENTIFIED</div>
      </div>
    `;
  }

  const complicationsHTML = complications.length > 0
    ? `<div class="wos-bounty-section">
         <h3>Complications</h3>
         <ul>${complications.map(c => `<li>${c}</li>`).join("")}</ul>
       </div>`
    : "";

  const footnotesHTML = footnotes
    ? `<div><strong>Footnotes:</strong> ${footnotes}</div>`
    : `<div></div>`;

  const stampOverlayHTML = (status === "completed" || status === "closed")
    ? `<div class="wos-bounty-stamp-overlay wos-stamp-${status}"><span>${status === "completed" ? "COMPLETED" : "CLOSED"}</span></div>`
    : "";

  const sourceJournalId = data.sourceJournalId || "";

  return `
<div class="wos-bounty-container wos-bl-${bountyLevel} wos-status-${status} ${isUnknown ? 'wos-is-unknown' : ''}" data-bounty-data="${encodeURIComponent(JSON.stringify(data))}" data-source-journal-id="${sourceJournalId}">
  <div class="wos-bounty-header">
    <div class="wos-bounty-header-left">
      <div class="wos-bounty-badge">${isUnknown ? 'UNKNOWN BOUNTY' : 'BOUNTY'}</div>
      <h2 class="wos-bounty-title" id="bounty-${charCode}">${rawTarget.toUpperCase()}, ${crime.toUpperCase()}</h2>
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
        ${stampOverlayHTML}
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
  const isUnknown = Boolean(data.isUnknown) || (data.target || "").toUpperCase().includes("UNKNOWN TARGET") || (data.target || "").toUpperCase().includes("UNIDENTIFIED");
  const rawTarget = isUnknown ? (data.target || "UNKNOWN TARGET") : (data.target || "Unknown Target");
  const targetUuid = data.targetUuid || "";
  const status = (data.status || "open").toLowerCase();
  
  let targetDisplay = rawTarget;
  if (!isUnknown && targetUuid && !rawTarget.includes("@UUID")) {
    targetDisplay = `@UUID[${targetUuid}]{${rawTarget}}`;
  } else if (isUnknown) {
    targetDisplay = `<span class="wos-unknown-target-label"><i class="fas fa-user-secret"></i> ${rawTarget.toUpperCase()}</span>`;
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
  const sourceJournalId = data.sourceJournalId || "";

  const levelsHTML = [1,2,3,4,5,6,7,8,9].map(lvl => 
    `<span class="wos-circle-option ${lvl === bountyLevel ? 'wos-active' : ''}">${lvl}</span>`
  ).join(" ");

  const wantedHTML = ["Dead", "Alive", "Dead or Alive"].map(st =>
    `<span class="wos-circle-option ${st === wantedStatus ? 'wos-active' : ''}">${st}</span>`
  ).join(" ");

  let imgContent = "";
  if (img && !isUnknown) {
    imgContent = `<img src="${img}" alt="${rawTarget}" />`;
  } else if (img && isUnknown) {
    imgContent = `<img src="${img}" alt="${rawTarget}" />`;
  } else {
    imgContent = `
      <div class="wos-bounty-unknown-img">
        <div class="wos-unknown-icon"><i class="fas fa-user-secret"></i></div>
        <div class="wos-unknown-badge">IDENTITY UNKNOWN</div>
        <div class="wos-unknown-subtext">TARGET UNIDENTIFIED</div>
      </div>
    `;
  }

  const footnotesHTML = footnotes
    ? `<div><strong>Footnotes:</strong> ${footnotes}</div>`
    : `<div></div>`;

  const stampOverlayHTML = (status === "completed" || status === "closed")
    ? `<div class="wos-bounty-stamp-overlay wos-stamp-${status}"><span>${status === "completed" ? "COMPLETED" : "CLOSED"}</span></div>`
    : "";

  return `
<div class="wos-bounty-container wos-bl-${bountyLevel} wos-status-${status} ${isUnknown ? 'wos-is-unknown' : ''}" data-bounty-data="${encodeURIComponent(JSON.stringify(data))}" data-source-journal-id="${sourceJournalId}">
  <div class="wos-bounty-header">
    <div class="wos-bounty-header-left">
      <div class="wos-bounty-badge">${isUnknown ? 'UNKNOWN BOUNTY' : 'PUBLIC BOUNTY'}</div>
      <h2 class="wos-bounty-title" id="bounty-${charCode}">${rawTarget.toUpperCase()}, ${crime.toUpperCase()}</h2>
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
        ${stampOverlayHTML}
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
    <div class="wos-bounty-board-card" data-source-journal-id="${b.sourceJournalId || ''}" data-char-code="${b.charCode || ''}">
      ${renderPlayerBountyHTML(b)}
    </div>
  `).join("\n\n");

  return `
<div class="wos-bounty-board-container">
  <h1 class="wos-bounty-board-title">📋 ${boardTitle.toUpperCase()}</h1>
  <div class="wos-bounty-board-grid">
    ${cardsHTML}
  </div>
</div>
  `.trim();
}

/**
 * Synchronizes all linked Bounty Boards and Player View Journals with updated main bounty data
 */
async function syncLinkedBounties(sourceJournalId, updatedData = {}) {
  if (!sourceJournalId) return;

  updatedData.sourceJournalId = sourceJournalId;
  const allJournals = getWorldJournals();
  let syncedBoardsCount = 0;
  let syncedPlayerJournalsCount = 0;

  for (const j of allJournals) {
    if (j.id === sourceJournalId) continue;

    const pages = j.pages?.contents || Array.from(j.pages || []);
    const page = pages[0];
    if (!page) continue;

    const content = page.text?.content || "";

    // 1. Standalone Player View Journal Entry
    const isPlayerViewName = j.name.startsWith("[Player View]");
    const parsedData = extractBountyDataFromJournal(j);
    const isLinkedPlayerJournal = parsedData.sourceJournalId === sourceJournalId ||
                                 (updatedData.linkedPlayerJournalId && j.id === updatedData.linkedPlayerJournalId) ||
                                 (isPlayerViewName && parsedData.charCode === updatedData.charCode);

    if (isLinkedPlayerJournal && content.includes("wos-bounty-container") && !content.includes("wos-bounty-board-container")) {
      const newPlayerHTML = renderPlayerBountyHTML(updatedData);
      await page.update({ "text.content": newPlayerHTML });
      syncedPlayerJournalsCount++;
      continue;
    }

    // 2. Bounty Board Journal Entry containing cards
    if (content.includes("wos-bounty-board-container")) {
      if (typeof DOMParser !== "undefined") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, "text/html");
        const cards = doc.querySelectorAll(".wos-bounty-board-card");
        let boardWasUpdated = false;

        cards.forEach(card => {
          const cardSourceId = card.getAttribute("data-source-journal-id");
          const cardCharCode = card.getAttribute("data-char-code");
          const bContainer = card.querySelector(".wos-bounty-container");
          const bSourceId = bContainer?.getAttribute("data-source-journal-id");

          if (cardSourceId === sourceJournalId || bSourceId === sourceJournalId || (cardCharCode && cardCharCode === updatedData.charCode)) {
            const newCardHTML = renderPlayerBountyHTML(updatedData);
            card.setAttribute("data-source-journal-id", sourceJournalId);
            card.setAttribute("data-char-code", updatedData.charCode || "");
            card.innerHTML = newCardHTML;
            boardWasUpdated = true;
          }
        });

        if (boardWasUpdated) {
          await page.update({ "text.content": doc.body.innerHTML });
          syncedBoardsCount++;
        }
      }
    }
  }

  if (syncedBoardsCount > 0 || syncedPlayerJournalsCount > 0) {
    ui.notifications?.info(`Synced ${syncedBoardsCount} Bounty Board(s) and ${syncedPlayerJournalsCount} Player View(s) with updated bounty data.`);
  }
}

/**
 * Creates or updates a standalone Player View Journal Entry for a bounty with Observer permissions
 */
async function publishPlayerBountyJournal(sourceJournal, bountyData = {}) {
  const sourceJournalId = sourceJournal?.id || bountyData.sourceJournalId || "";
  if (sourceJournalId) bountyData.sourceJournalId = sourceJournalId;

  const rawTarget = bountyData.target || "Unknown Target";
  const cleanTargetName = rawTarget.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/, "$1");
  const playerJournalName = `[Player View] Bounty: ${cleanTargetName}`;
  const playerHTML = renderPlayerBountyHTML(bountyData);

  const allJournals = getWorldJournals();
  let existingPlayerJournal = allJournals.find(j => 
    j.id === bountyData.linkedPlayerJournalId || 
    (j.name === playerJournalName && j.id !== sourceJournalId) ||
    (j.name.startsWith("[Player View]") && extractBountyDataFromJournal(j).sourceJournalId === sourceJournalId)
  );

  if (existingPlayerJournal) {
    const page = existingPlayerJournal.pages?.contents?.[0] || Array.from(existingPlayerJournal.pages || [])[0];
    if (page) {
      await page.update({ "text.content": playerHTML });
      ui.notifications?.info(`Updated Player View Journal "${playerJournalName}".`);
      existingPlayerJournal.sheet.render(true);
    }
    return existingPlayerJournal;
  } else {
    const observerLevel = CONST.DOCUMENT_OWNERSHIP_LEVELS?.OBSERVER ?? 2;
    const newJournal = await JournalEntry.create({
      name: playerJournalName,
      ownership: {
        default: observerLevel
      },
      pages: [{
        name: `Bounty - ${cleanTargetName}`,
        type: "text",
        text: {
          content: playerHTML,
          format: 1
        }
      }]
    });

    if (newJournal) {
      bountyData.linkedPlayerJournalId = newJournal.id;
      if (sourceJournal) {
        const sourcePage = sourceJournal.pages?.contents?.[0] || Array.from(sourceJournal.pages || [])[0];
        if (sourcePage) {
          await sourcePage.update({ "text.content": renderBountyHTML(bountyData) });
        }
      }
      ui.notifications?.info(`Published Player View Journal "${playerJournalName}".`);
      newJournal.sheet.render(true);
    }
    return newJournal;
  }
}

/**
 * Broadcasts socket message to render player-facing bounty poster on connected screens
 */
function showBountyToPlayers(bountyData = {}) {
  const rawTarget = bountyData.target || "Unknown Target";
  const cleanTargetName = rawTarget.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/, "$1");

  if (game.socket) {
    game.socket.emit("module.mosh-wos-items", {
      action: "showBounty",
      bountyData: bountyData
    });
  }

  renderPlayerBountyPopup(bountyData);
  ui.notifications?.info(`Broadcasted Player Bounty for "${cleanTargetName}" to connected players.`);
}

/**
 * Displays interactive/viewable player-facing bounty poster popup modal
 */
function renderPlayerBountyPopup(bountyData = {}) {
  const rawTarget = bountyData.target || "Unknown Target";
  const cleanTargetName = rawTarget.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/, "$1");
  const playerHTML = renderPlayerBountyHTML(bountyData);

  new Dialog({
    title: `WANTED: ${cleanTargetName.toUpperCase()} (Wages of Sin)`,
    content: `<div class="wos-player-popup-wrapper" style="max-height:80vh; overflow-y:auto;">${playerHTML}</div>`,
    buttons: {
      close: {
        icon: '<i class="fas fa-times"></i>',
        label: "Close"
      }
    },
    default: "close"
  }, { width: 720, resizable: true }).render(true);
}

/**
 * Creates a Journal Entry document in Foundry VTT
 */
async function createBountyJournalEntry(data) {
  const rawTarget = data.target || "Unknown Target";
  const cleanTargetName = rawTarget.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/, "$1");
  const initialHTML = renderBountyHTML(data);

  const entryData = {
    name: `Bounty: ${cleanTargetName}`,
    pages: [{
      name: `Bounty - ${cleanTargetName}`,
      type: "text",
      text: {
        content: initialHTML,
        format: 1
      }
    }]
  };

  const journal = await JournalEntry.create(entryData);
  if (journal) {
    data.sourceJournalId = journal.id;
    const finalHTML = renderBountyHTML(data);
    const page = journal.pages?.contents?.[0] || Array.from(journal.pages || [])[0];
    if (page) {
      await page.update({ "text.content": finalHTML });
    }
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

  // 1. Check for URL-encoded JSON in data-bounty-data attribute
  const matchEncoded = content.match(/data-bounty-data=["']([^"']+)["']/i);
  if (matchEncoded) {
    try {
      const decodedStr = decodeURIComponent(matchEncoded[1]);
      const parsed = JSON.parse(decodedStr);
      if (!parsed.sourceJournalId) parsed.sourceJournalId = journal.id;
      return parsed;
    } catch(e) {
      try {
        const decodedLegacy = matchEncoded[1].replace(/&apos;/g, "'");
        const parsed = JSON.parse(decodedLegacy);
        if (!parsed.sourceJournalId) parsed.sourceJournalId = journal.id;
        return parsed;
      } catch(err) {}
    }
  }

  // 2. DOM Parser fallback for legacy or manually authored journal entries
  let cleanName = journal.name.replace(/^(bounty|wanted|target)[\s\:\-\_]*/i, "").trim() || journal.name;
  let isUnknown = false;
  let status = "open";
  let img = "";
  let bountyLevel = 1;
  let crime = "Unspecified Offense";
  let wantedStatus = "Alive";
  let client = "Unknown Client";
  let reward = "Negotiable";
  let bonus = "None";
  let associates = "Unknown";
  let pointOfCollection = "Local Station PD";
  let lastLocation = "Local Sector";
  let advert = "";
  let briefing = "";
  let wardenInfo = "";
  let consequences = "";
  let complications = [];
  let footnotes = "";
  let charCode = generateCharCode();
  let sourceJournalId = journal.id;

  try {
    if (typeof DOMParser !== "undefined") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");

      const container = doc.querySelector(".wos-bounty-container");
      if (container) {
        const blMatch = container.className.match(/wos-bl-(\d+)/);
        if (blMatch) bountyLevel = parseInt(blMatch[1]);
        if (container.classList.contains("wos-is-unknown")) isUnknown = true;
        if (container.classList.contains("wos-status-completed") || doc.querySelector(".wos-stamp-completed")) status = "completed";
        else if (container.classList.contains("wos-status-closed") || doc.querySelector(".wos-stamp-closed")) status = "closed";
        const attrSource = container.getAttribute("data-source-journal-id");
        if (attrSource) sourceJournalId = attrSource;
      }

      const titleEl = doc.querySelector(".wos-bounty-title");
      if (titleEl) {
        const parts = titleEl.textContent.split(",");
        if (parts[0]) cleanName = parts[0].trim();
      }

      const imgEl = doc.querySelector(".wos-bounty-portrait-frame img");
      if (imgEl) img = imgEl.getAttribute("src") || "";

      if (doc.querySelector(".wos-bounty-unknown-img") || cleanName.toUpperCase().includes("UNKNOWN")) {
        isUnknown = true;
      }

      const wantedEl = doc.querySelector(".wos-bounty-wanted-banner");
      if (wantedEl) {
        const txt = wantedEl.textContent;
        if (txt.includes("DEAD OR ALIVE")) wantedStatus = "Dead or Alive";
        else if (txt.includes("DEAD")) wantedStatus = "Dead";
        else if (txt.includes("ALIVE")) wantedStatus = "Alive";
      }

      const detailPars = doc.querySelectorAll(".wos-bounty-details-list p");
      detailPars.forEach(p => {
        const text = p.textContent;
        if (text.startsWith("Target:")) {
          const val = text.replace(/^Target:\s*/i, "").trim();
          if (val) cleanName = val;
        } else if (text.startsWith("Crime:")) {
          crime = text.replace(/^Crime:\s*/i, "").trim();
        } else if (text.startsWith("Client:")) {
          client = text.replace(/^Client:\s*/i, "").trim();
        } else if (text.startsWith("Reward:")) {
          reward = text.replace(/^Reward:\s*/i, "").trim();
        } else if (text.startsWith("Bonus:")) {
          bonus = text.replace(/^Bonus:\s*/i, "").trim();
        } else if (text.startsWith("Known associates:")) {
          associates = text.replace(/^Known associates:\s*/i, "").trim();
        }
      });

      const locPars = doc.querySelectorAll(".wos-bounty-section p");
      locPars.forEach(p => {
        const text = p.textContent;
        if (text.startsWith("Point of Collection:")) {
          pointOfCollection = text.replace(/^Point of Collection:\s*/i, "").trim();
        } else if (text.startsWith("Last Known Location:")) {
          lastLocation = text.replace(/^Last Known Location:\s*/i, "").trim();
        }
      });

      const advertEl = doc.querySelector(".wos-bounty-advert-body");
      if (advertEl) advert = advertEl.textContent.trim().replace(/^["']|["']$/g, "");

      const sections = doc.querySelectorAll(".wos-bounty-section");
      sections.forEach(sec => {
        const h3 = sec.querySelector("h3");
        if (!h3) return;
        const title = h3.textContent.trim().toLowerCase();
        const p = sec.querySelector("p");
        if (title.includes("briefing") && p) briefing = p.innerHTML.replace(/<br\s*\/?>/gi, "\n").trim();
        else if (title.includes("warden information") && p) wardenInfo = p.innerHTML.replace(/<br\s*\/?>/gi, "\n").trim();
        else if (title.includes("consequences") && p) consequences = p.innerHTML.replace(/<br\s*\/?>/gi, "\n").trim();
        else if (title.includes("complications")) {
          const lis = sec.querySelectorAll("li");
          complications = Array.from(lis).map(li => li.textContent.trim());
        }
      });

      const codeEl = doc.querySelector(".wos-bounty-char-code");
      if (codeEl) {
        const codeMatch = codeEl.textContent.match(/\d+/);
        if (codeMatch) charCode = codeMatch[0];
      }
    }
  } catch(e) {
    console.warn("Wages of Sin: Error decoding DOM from bounty journal", e);
  }

  return {
    target: cleanName,
    isUnknown: isUnknown,
    status: status,
    img: img,
    bountyLevel: bountyLevel,
    crime: crime,
    wantedStatus: wantedStatus,
    client: client,
    reward: reward,
    bonus: bonus,
    associates: associates,
    pointOfCollection: pointOfCollection,
    lastLocation: lastLocation,
    advert: advert || `Reward offered for apprehension regarding charges of ${crime}.`,
    briefing: briefing || "No briefing provided.",
    wardenInfo: wardenInfo || "No Warden information recorded.",
    consequences: consequences || "Standard enforcement protocols apply upon turn-in.",
    complications: complications,
    footnotes: footnotes,
    charCode: charCode,
    sourceJournalId: sourceJournalId
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
      <div class="wos-journal-select-item">
        <label style="cursor:pointer; display:flex; align-items:center; gap:10px; width:100%;">
          <input type="checkbox" name="selectedBounties" value="${j.id}" checked />
          <span style="font-weight:bold;">${j.name}</span>
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
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-wrap:wrap; gap:6px;">
          <label><strong>Select Journal Entries for Board:</strong></label>
          <div style="display:flex; gap:6px; align-items:center;">
            <button type="button" id="wos-select-all-btn" class="wos-small-btn"><i class="fas fa-check-square"></i> Select All</button>
            <button type="button" id="wos-deselect-all-btn" class="wos-small-btn"><i class="far fa-square"></i> Deselect All</button>
            <label style="font-size:0.8rem; cursor:pointer; margin-left:4px;">
              <input type="checkbox" id="wos-show-all-journals" ${detectedBounties.length === 0 ? 'checked' : ''} /> Show all world journals (${nonBoardJournals.length})
            </label>
          </div>
        </div>
        <div id="wos-journal-select-list" class="wos-bounty-select-scroll-area">
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
      const selectAllBtn = html.find("#wos-select-all-btn");
      const deselectAllBtn = html.find("#wos-deselect-all-btn");

      selectAllBtn.on("click", (ev) => {
        ev.preventDefault();
        html.find('input[name="selectedBounties"]').prop("checked", true);
      });

      deselectAllBtn.on("click", (ev) => {
        ev.preventDefault();
        html.find('input[name="selectedBounties"]').prop("checked", false);
      });

      showAllCb.on("change", (ev) => {
        const showAll = ev.target.checked;
        const targetList = showAll ? nonBoardJournals : (detectedBounties.length > 0 ? detectedBounties : nonBoardJournals);
        listContainer.html(renderList(targetList));
      });
    }
  }, { width: 560 }).render(true);
}

/**
 * Form Dialog to input and create or edit a bounty
 */
function createBountyForm(initialData = {}, editingJournal = null) {
  const data = {
    sourceJournalId: initialData.sourceJournalId || (editingJournal?.id || ""),
    linkedPlayerJournalId: initialData.linkedPlayerJournalId || "",
    target: initialData.target || "",
    targetUuid: initialData.targetUuid || "",
    isUnknown: Boolean(initialData.isUnknown),
    status: initialData.status || "open",
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
      <div class="wos-reroll-header-bar">
        <span><i class="fas fa-dice"></i> <strong>Bounty Generator Controls</strong></span>
        <button type="button" class="wos-reroll-all-btn" title="Re-roll every single field in the form"><i class="fas fa-dice"></i> Re-roll All Fields</button>
      </div>

      <div class="wos-drop-zone wos-target-drop-zone" title="Drag and drop an Actor or Token here">
        <i class="fas fa-user-plus"></i> <span>Drag & Drop Actor/Token here to set <strong>Target & Portrait Image</strong></span>
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Target Name:</label>
            <button type="button" class="wos-reroll-btn" data-reroll="target" title="Re-roll Target Name"><i class="fas fa-dice"></i></button>
          </div>
          <input type="text" name="target" value="${data.target}" placeholder="e.g. Markos Petraitiene or @UUID[...]" />
          <input type="hidden" name="targetUuid" value="${data.targetUuid}" />
          <label class="wos-unknown-checkbox-label">
            <input type="checkbox" name="isUnknown" ${data.isUnknown ? 'checked' : ''} />
            <span><i class="fas fa-user-secret"></i> Unknown Target / Identity (Hide name/portrait on poster)</span>
          </label>
        </div>
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Target Image (URL/Path):</label>
            <button type="button" class="wos-reroll-btn" data-reroll="img" title="Clear/Reset Image"><i class="fas fa-dice"></i></button>
          </div>
          <input type="text" name="img" value="${data.img}" placeholder="path/to/image.png" />
        </div>
      </div>

      <div class="form-group">
        <div class="wos-form-label-row">
          <label><strong>Bounty Level (Click to select BL & Theme Color):</strong></label>
          <button type="button" class="wos-reroll-btn" data-reroll="bountyLevel" title="Re-roll Bounty Level & Reward"><i class="fas fa-dice"></i></button>
        </div>
        <div class="wos-bl-selector-grid">
          ${blPillsHTML}
        </div>
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Wanted Condition:</label>
            <button type="button" class="wos-reroll-btn" data-reroll="wantedStatus" title="Re-roll Wanted Condition"><i class="fas fa-dice"></i></button>
          </div>
          <select name="wantedStatus">
            <option value="Alive" ${data.wantedStatus === 'Alive' ? 'selected' : ''}>Alive</option>
            <option value="Dead" ${data.wantedStatus === 'Dead' ? 'selected' : ''}>Dead</option>
            <option value="Dead or Alive" ${data.wantedStatus === 'Dead or Alive' ? 'selected' : ''}>Dead or Alive</option>
          </select>
        </div>
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Bounty Status:</label>
            <button type="button" class="wos-reroll-btn" data-reroll="status" title="Re-roll Bounty Status"><i class="fas fa-dice"></i></button>
          </div>
          <select name="status">
            <option value="open" ${(data.status || 'open') === 'open' ? 'selected' : ''}>Open (Active)</option>
            <option value="completed" ${data.status === 'completed' ? 'selected' : ''}>Completed</option>
            <option value="closed" ${data.status === 'closed' ? 'selected' : ''}>Closed / Cancelled</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="wos-form-label-row">
          <label>Crime:</label>
          <button type="button" class="wos-reroll-btn" data-reroll="crime" title="Re-roll Crime"><i class="fas fa-dice"></i></button>
        </div>
        <input type="text" name="crime" value="${data.crime}" placeholder="e.g. Theft" />
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Client:</label>
            <button type="button" class="wos-reroll-btn" data-reroll="client" title="Re-roll Client"><i class="fas fa-dice"></i></button>
          </div>
          <input type="text" name="client" value="${data.client}" placeholder="e.g. MegaYUM Supermarket" />
        </div>
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Reward:</label>
            <button type="button" class="wos-reroll-btn" data-reroll="reward" title="Re-roll Reward"><i class="fas fa-dice"></i></button>
          </div>
          <input type="text" name="reward" value="${data.reward}" placeholder="e.g. 2kcr" />
        </div>
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Bonus:</label>
            <button type="button" class="wos-reroll-btn" data-reroll="bonus" title="Re-roll Bonus"><i class="fas fa-dice"></i></button>
          </div>
          <input type="text" name="bonus" value="${data.bonus}" placeholder="e.g. None or 500cr for recovery" />
        </div>
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Char. Code:</label>
            <button type="button" class="wos-reroll-btn" data-reroll="charCode" title="Re-roll Char Code"><i class="fas fa-dice"></i></button>
          </div>
          <input type="text" name="charCode" value="${data.charCode}" />
        </div>
      </div>

      <div class="form-group">
        <div class="wos-form-label-row">
          <label>Known Associates:</label>
          <button type="button" class="wos-reroll-btn" data-reroll="associates" title="Re-roll Known Associates"><i class="fas fa-dice"></i></button>
        </div>
        <div class="wos-drop-zone wos-associates-drop-zone" title="Drag and drop Actors or Tokens here to add hard links">
          <i class="fas fa-users-cog"></i> <span>Drag & Drop Actor(s) here to append <strong>@UUID Hard Links</strong></span>
        </div>
        <textarea name="associates" placeholder="e.g. @UUID[Actor.12345]{Boris Ionatán}">${data.associates}</textarea>
      </div>

      <div class="wos-bounty-form-row">
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Point of Collection:</label>
            <button type="button" class="wos-reroll-btn" data-reroll="pointOfCollection" title="Re-roll Point of Collection"><i class="fas fa-dice"></i></button>
          </div>
          <input type="text" name="pointOfCollection" value="${data.pointOfCollection}" placeholder="e.g. Anvollapolis PD" />
        </div>
        <div class="form-group">
          <div class="wos-form-label-row">
            <label>Last Known Location:</label>
            <button type="button" class="wos-reroll-btn" data-reroll="lastLocation" title="Re-roll Last Known Location"><i class="fas fa-dice"></i></button>
          </div>
          <input type="text" name="lastLocation" value="${data.lastLocation}" placeholder="e.g. MegaYUM Supermarket" />
        </div>
      </div>

      <div class="form-group">
        <div class="wos-form-label-row">
          <label>Advert Text:</label>
          <button type="button" class="wos-reroll-btn" data-reroll="advert" title="Generate Advert Text"><i class="fas fa-dice"></i></button>
        </div>
        <input type="text" name="advert" value="${data.advert}" placeholder="Short public summary" />
      </div>

      <div class="form-group">
        <div class="wos-form-label-row">
          <label>Briefing (Player-Facing Notes):</label>
          <button type="button" class="wos-reroll-btn" data-reroll="briefing" title="Generate Briefing"><i class="fas fa-dice"></i></button>
        </div>
        <textarea name="briefing">${data.briefing}</textarea>
      </div>

      <div class="form-group">
        <div class="wos-form-label-row">
          <label>Warden Information (Full Details):</label>
          <button type="button" class="wos-reroll-btn" data-reroll="wardenInfo" title="Generate Warden Info"><i class="fas fa-dice"></i></button>
        </div>
        <textarea name="wardenInfo">${data.wardenInfo}</textarea>
      </div>

      <div class="form-group">
        <div class="wos-form-label-row">
          <label>Consequences:</label>
          <button type="button" class="wos-reroll-btn" data-reroll="consequences" title="Generate Consequences"><i class="fas fa-dice"></i></button>
        </div>
        <textarea name="consequences">${data.consequences}</textarea>
      </div>

      <div class="form-group">
        <div class="wos-form-label-row">
          <label>Complications (one per line):</label>
          <button type="button" class="wos-reroll-btn" data-reroll="complications" title="Re-roll Complications"><i class="fas fa-dice"></i></button>
        </div>
        <textarea name="complications">${data.complications}</textarea>
      </div>

      <div class="form-group">
        <div class="wos-form-label-row">
          <label>Footnotes:</label>
          <button type="button" class="wos-reroll-btn" data-reroll="footnotes" title="Re-roll Footnotes"><i class="fas fa-dice"></i></button>
        </div>
        <input type="text" name="footnotes" value="${data.footnotes}" />
      </div>
    </form>
  `;

  new Dialog({
    title: editingJournal ? `Wages of Sin — Edit Bounty: ${data.target}` : "Wages of Sin — Create Bounty",
    content: formHTML,
    buttons: {
      create: {
        icon: '<i class="fas fa-save"></i>',
        label: editingJournal ? "Save & Sync Bounty" : "Create Journal Entry",
        callback: async (html) => {
          const form = html.find("form")[0];
          const complicationsText = form.complications.value.trim();
          const complicationsList = complicationsText 
            ? complicationsText.split("\n").map(s => s.replace(/^[\s•\-\*]+/, "").trim()).filter(Boolean)
            : [];

          const selectedBL = parseInt(html.find('.wos-bl-pill.selected input').val()) || 1;
          const isUnknown = form.isUnknown ? form.isUnknown.checked : false;

          const bountyData = {
            sourceJournalId: data.sourceJournalId || (editingJournal ? editingJournal.id : ""),
            linkedPlayerJournalId: data.linkedPlayerJournalId || "",
            target: form.target.value.trim() || (isUnknown ? "UNKNOWN TARGET" : "Unknown Target"),
            targetUuid: form.targetUuid.value.trim(),
            isUnknown: isUnknown,
            img: form.img.value.trim(),
            bountyLevel: selectedBL,
            wantedStatus: form.wantedStatus.value,
            status: form.status.value,
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

          if (editingJournal) {
            bountyData.sourceJournalId = editingJournal.id;
            const cleanTargetName = bountyData.target.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/, "$1");
            const updatedHTML = renderBountyHTML(bountyData);
            const page = editingJournal.pages?.contents?.[0] || Array.from(editingJournal.pages || [])[0];
            if (page) {
              await page.update({ "text.content": updatedHTML });
              ui.notifications?.info(`Updated Bounty Journal Entry for "${cleanTargetName}".`);
              await syncLinkedBounties(editingJournal.id, bountyData);
            }
          } else {
            createBountyJournalEntry(bountyData);
          }
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

      const handleReroll = async (fieldKey) => {
        const isUnknownChecked = html.find('input[name="isUnknown"]').is(":checked");

        if (fieldKey === "target" || fieldKey === "all") {
          if (isUnknownChecked) {
            html.find('input[name="target"]').val("UNKNOWN TARGET");
            html.find('input[name="targetUuid"]').val("");
          } else {
            const idx = Math.floor(Math.random() * WOS_DATA.TARGET_NAMES.length);
            html.find('input[name="target"]').val(WOS_DATA.TARGET_NAMES[idx]);
            html.find('input[name="targetUuid"]').val("");
          }
        }

        if (fieldKey === "img" || fieldKey === "all") {
          if (isUnknownChecked) {
            html.find('input[name="img"]').val("");
          }
        }

        if (fieldKey === "bountyLevel" || fieldKey === "all") {
          const newBL = Math.floor(Math.random() * 9) + 1;
          const pill = html.find(`.wos-bl-pill[data-bl="${newBL}"]`);
          pill.trigger("click");
        }

        if (fieldKey === "wantedStatus" || fieldKey === "all") {
          const statuses = ["Alive", "Alive", "Dead or Alive", "Dead"];
          const status = statuses[Math.floor(Math.random() * statuses.length)];
          html.find('select[name="wantedStatus"]').val(status);
        }

        if (fieldKey === "crime" || fieldKey === "all") {
          const crime = await rollCrimeFromTable();
          html.find('input[name="crime"]').val(crime);
        }

        if (fieldKey === "client" || fieldKey === "all") {
          const clientData = await rollClientData();
          html.find('input[name="client"]').val(clientData.name);
        }

        if (fieldKey === "reward" || fieldKey === "all") {
          const currentBL = parseInt(html.find('.wos-bl-pill.selected input').val()) || 1;
          html.find('input[name="reward"]').val(WOS_DATA.BOUNTY_LEVELS[currentBL].rollReward());
        }

        if (fieldKey === "bonus" || fieldKey === "all") {
          const idx = Math.floor(Math.random() * WOS_DATA.BONUSES.length);
          html.find('input[name="bonus"]').val(WOS_DATA.BONUSES[idx]);
        }

        if (fieldKey === "charCode" || fieldKey === "all") {
          html.find('input[name="charCode"]').val(generateCharCode());
        }

        if (fieldKey === "associates" || fieldKey === "all") {
          const idx = Math.floor(Math.random() * WOS_DATA.ASSOCIATES.length);
          html.find('textarea[name="associates"]').val(WOS_DATA.ASSOCIATES[idx]);
        }

        if (fieldKey === "pointOfCollection" || fieldKey === "all") {
          const idx = Math.floor(Math.random() * WOS_DATA.POINTS_OF_COLLECTION.length);
          html.find('input[name="pointOfCollection"]').val(WOS_DATA.POINTS_OF_COLLECTION[idx]);
        }

        if (fieldKey === "lastLocation" || fieldKey === "all") {
          const idx = Math.floor(Math.random() * WOS_DATA.LAST_LOCATIONS.length);
          html.find('input[name="lastLocation"]').val(WOS_DATA.LAST_LOCATIONS[idx]);
        }

        if (fieldKey === "complications" || fieldKey === "all") {
          const compCount = Math.floor(Math.random() * 4) + 1;
          const comps = await rollComplicationsFromTable(compCount);
          html.find('textarea[name="complications"]').val(comps.join("\n• "));
        }

        if (fieldKey === "footnotes" || fieldKey === "all") {
          const idx = Math.floor(Math.random() * WOS_DATA.FOOTNOTES.length);
          html.find('input[name="footnotes"]').val(WOS_DATA.FOOTNOTES[idx]);
        }

        const targetVal = html.find('input[name="target"]').val().trim() || (isUnknownChecked ? "UNKNOWN TARGET" : "Unknown Target");
        const crimeVal = html.find('input[name="crime"]').val().trim() || "Unspecified Offense";
        const clientVal = html.find('input[name="client"]').val().trim() || "Unknown Client";
        const blVal = parseInt(html.find('.wos-bl-pill.selected input').val()) || 1;
        const blInfo = WOS_DATA.BOUNTY_LEVELS[blVal];
        const locVal = html.find('input[name="lastLocation"]').val().trim() || "Local Sector";
        const compsVal = html.find('textarea[name="complications"]').val().trim();
        const compList = compsVal ? compsVal.split("\n").map(s => s.replace(/^[\s•\-\*]+/, "").trim()).filter(Boolean) : [];

        if (fieldKey === "advert" || fieldKey === "all") {
          html.find('input[name="advert"]').val(`A bounty has been issued by ${clientVal} for the apprehension of ${targetVal} regarding charges of ${crimeVal}.`);
        }

        if (fieldKey === "briefing" || fieldKey === "all") {
          html.find('textarea[name="briefing"]').val(`Target ${targetVal} is wanted by ${clientVal} for ${crimeVal}. Rated Bounty Level ${blVal} (${blInfo.name}). ${blInfo.desc}`);
        }

        if (fieldKey === "wardenInfo" || fieldKey === "all") {
          let wardenTxt = `Investigation indicates target was active recently in ${locVal}.`;
          if (compList.length > 0) {
            wardenTxt += ` Complications include:\n• ` + compList.join("\n• ");
          }
          html.find('textarea[name="wardenInfo"]').val(wardenTxt);
        }

        if (fieldKey === "consequences" || fieldKey === "all") {
          html.find('textarea[name="consequences"]').val(`Apprehension resolves outstanding contract with ${clientVal}. Standard enforcement protocols apply upon turn-in.`);
        }
      };

      html.find('.wos-reroll-btn').on("click", (ev) => {
        ev.preventDefault();
        const field = $(ev.currentTarget).data("reroll");
        handleReroll(field);
      });

      html.find('.wos-reroll-all-btn').on("click", (ev) => {
        ev.preventDefault();
        handleReroll("all");
      });

      html.find('input[name="isUnknown"]').on("change", (ev) => {
        const checked = ev.target.checked;
        const targetInput = html.find('input[name="target"]');
        if (checked && (!targetInput.val() || targetInput.val() === "Unknown Target" || targetInput.val() === "Generated Target")) {
          targetInput.val("UNKNOWN TARGET");
        }
      });

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

  const clientData = await rollClientData();
  const crime = await rollCrimeFromTable();

  const compCount = Math.floor(Math.random() * 4) + 1;
  const complications = await rollComplicationsFromTable(compCount);

  const wantedStatuses = ["Alive", "Alive", "Dead or Alive", "Dead"];
  const wantedStatus = wantedStatuses[Math.floor(Math.random() * wantedStatuses.length)];

  const reward = levelInfo.rollReward();

  const isUnknown = options.isUnknown ?? (Math.random() < 0.25);
  let targetName = isUnknown 
    ? "UNKNOWN TARGET"
    : WOS_DATA.TARGET_NAMES[Math.floor(Math.random() * WOS_DATA.TARGET_NAMES.length)];

  const bonus = WOS_DATA.BONUSES[Math.floor(Math.random() * WOS_DATA.BONUSES.length)];
  const associates = WOS_DATA.ASSOCIATES[Math.floor(Math.random() * WOS_DATA.ASSOCIATES.length)];
  const pointOfCollection = WOS_DATA.POINTS_OF_COLLECTION[Math.floor(Math.random() * WOS_DATA.POINTS_OF_COLLECTION.length)];
  const lastLocation = WOS_DATA.LAST_LOCATIONS[Math.floor(Math.random() * WOS_DATA.LAST_LOCATIONS.length)];
  const footnotes = WOS_DATA.FOOTNOTES[Math.floor(Math.random() * WOS_DATA.FOOTNOTES.length)];

  const initialData = {
    target: targetName,
    isUnknown: isUnknown,
    bountyLevel: level,
    crime: crime,
    wantedStatus: wantedStatus,
    client: clientData.name,
    reward: reward,
    bonus: bonus,
    associates: associates,
    pointOfCollection: pointOfCollection,
    lastLocation: lastLocation,
    advert: `A bounty has been issued by ${clientData.name} for the apprehension of ${targetName} regarding charges of ${crime}.`,
    briefing: `Target ${targetName} is wanted by ${clientData.name} for ${crime}. Rated Bounty Level ${level} (${levelInfo.name}). ${levelInfo.desc}`,
    wardenInfo: `Investigation indicates target was active recently in ${lastLocation}. Complications include:\n• ` + complications.join("\n• "),
    consequences: `Apprehension resolves outstanding contract with ${clientData.name}. Standard enforcement protocols apply upon turn-in.`,
    complications: complications,
    footnotes: footnotes,
    charCode: generateCharCode()
  };

  createBountyForm(initialData);
}

/**
 * Interactive Dialog to select an existing world bounty and edit it in the Bounty Form
 */
async function editBountySelectDialog() {
  if (!game.user?.isGM) return;

  const allJournals = getWorldJournals();
  
  // Filter for single Bounty Journal Entries (exclude Bounty Boards)
  const bountyJournals = allJournals.filter(j => {
    const pages = j.pages?.contents || Array.from(j.pages || []);
    const content = pages[0]?.text?.content || "";
    return content.includes("wos-bounty-container") && !content.includes("wos-bounty-board-container");
  });

  if (bountyJournals.length === 0) {
    ui.notifications?.warn("No single Bounty Journal Entries found in your world. Create a bounty first!");
    return;
  }

  const optionsHTML = bountyJournals.map(j => {
    const data = extractBountyDataFromJournal(j);
    const cleanTargetName = data.target ? data.target.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/, "$1") : j.name;
    const statusUpper = (data.status || "open").toUpperCase();
    const bl = data.bountyLevel || 1;
    return `
      <option value="${j.id}">
        ${cleanTargetName} (BL:${bl} | Status: ${statusUpper}) — ${j.name}
      </option>
    `;
  }).join("");

  const dialogHTML = `
    <form class="wos-edit-select-form">
      <div class="form-group" style="margin-bottom: 12px;">
        <label style="margin-bottom: 6px; display: block;"><strong>Select Bounty Journal to Edit:</strong></label>
        <select name="selectedJournalId" style="width: 100%; padding: 6px; font-size: 0.95rem;">
          ${optionsHTML}
        </select>
      </div>
      <p style="font-size: 0.85rem; color: #666; margin-top: 4px;">
        <em>Selected bounty will open in the interactive editor form. Saving automatically syncs all linked Bounty Boards and Player Views.</em>
      </p>
    </form>
  `;

  new Dialog({
    title: "Wages of Sin — Select Bounty to Edit",
    content: dialogHTML,
    buttons: {
      edit: {
        icon: '<i class="fas fa-edit"></i>',
        label: "Edit Selected Bounty",
        callback: (html) => {
          const selectedId = html.find('select[name="selectedJournalId"]').val();
          const targetJournal = getJournalById(selectedId);
          if (targetJournal) {
            const data = extractBountyDataFromJournal(targetJournal);
            createBountyForm(data, targetJournal);
          }
        }
      },
      cancel: {
        icon: '<i class="fas fa-times"></i>',
        label: "Cancel"
      }
    },
    default: "edit"
  }).render(true);
}

/**
 * Ensures all Wages of Sin Macros exist in game.macros sidebar directory for instant GM access
 */
async function ensureWorldMacros() {
  if (!game.user?.isGM) return;

  const worldMacros = game.macros?.contents ? Array.from(game.macros.contents) : Array.from(game.macros || []);
  const macrosToEnsure = [
    {
      name: "Wages of Sin: Create Bounty (Form)",
      img: "modules/mosh-wos-items/icons/macros/bounty-form.svg",
      command: 'if (game.wos?.createBountyForm) { game.wos.createBountyForm(); } else { ui.notifications.error("Wages of Sin script not ready."); }'
    },
    {
      name: "Wages of Sin: Generate Bounty",
      img: "modules/mosh-wos-items/icons/macros/bounty-generate.svg",
      command: 'if (game.wos?.generateBounty) { game.wos.generateBounty(); } else { ui.notifications.error("Wages of Sin script not ready."); }'
    },
    {
      name: "Wages of Sin: Edit Bounty",
      img: "modules/mosh-wos-items/icons/macros/bounty-edit.svg",
      command: 'if (game.wos?.editBountySelectDialog) { game.wos.editBountySelectDialog(); } else { ui.notifications.error("Wages of Sin script not ready."); }'
    },
    {
      name: "Wages of Sin: Create Bounty Board",
      img: "modules/mosh-wos-items/icons/macros/bounty-board.svg",
      command: 'if (game.wos?.createBountyBoard) { game.wos.createBountyBoard(); } else { ui.notifications.error("Wages of Sin script not ready."); }'
    },
    {
      name: "Wages of Sin: Upgrade & Sync All Bounties",
      img: "modules/mosh-wos-items/icons/macros/bounty-sync.svg",
      command: 'if (game.wos?.upgradeAllBounties) { game.wos.upgradeAllBounties(); } else { ui.notifications.error("Wages of Sin script not ready."); }'
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
    } else if (existing.img !== mData.img) {
      try {
        await existing.update({ img: mData.img });
        console.log(`Wages of Sin: Updated icon for World Macro "${mData.name}".`);
      } catch(e) {}
    }
  }
}

/**
 * Migration & Upgrade Utility: Upgrades all legacy world Bounty Journal Entries and Bounty Boards
 * to ensure 100% compatibility with Source of Truth, TOC Navigation, and Auto-Sync features.
 */
async function upgradeAllBounties() {
  if (!game.user?.isGM) return;

  ui.notifications?.info("Upgrading all world Bounty Journal Entries and Bounty Boards...");
  const allJournals = getWorldJournals();
  let upgradedBounties = 0;
  let upgradedBoards = 0;

  for (const journal of allJournals) {
    const pages = journal.pages?.contents || Array.from(journal.pages || []);
    const page = pages[0];
    if (!page) continue;

    const content = page.text?.content || "";

    // 1. Single Bounty Journal Entry
    if (content.includes("wos-bounty-container") && !content.includes("wos-bounty-board-container")) {
      const bountyData = extractBountyDataFromJournal(journal);
      bountyData.sourceJournalId = journal.id;
      const isPlayerView = journal.name.startsWith("[Player View]");
      const newHTML = isPlayerView ? renderPlayerBountyHTML(bountyData) : renderBountyHTML(bountyData);

      await page.update({ "text.content": newHTML });
      upgradedBounties++;
      
      await syncLinkedBounties(journal.id, bountyData);
    }

    // 2. Bounty Board Journal Entry
    if (content.includes("wos-bounty-board-container")) {
      if (typeof DOMParser !== "undefined") {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, "text/html");
        const cards = doc.querySelectorAll(".wos-bounty-board-card");
        let boardChanged = false;

        cards.forEach(card => {
          const bContainer = card.querySelector(".wos-bounty-container");
          if (bContainer) {
            const rawData = bContainer.getAttribute("data-bounty-data");
            let cardData = {};
            if (rawData) {
              try { cardData = JSON.parse(decodeURIComponent(rawData)); } catch(e) {
                try { cardData = JSON.parse(rawData.replace(/&apos;/g, "'")); } catch(err) {}
              }
            }
            const cardSourceId = card.getAttribute("data-source-journal-id") || bContainer.getAttribute("data-source-journal-id") || cardData.sourceJournalId || "";
            if (cardSourceId) {
              const sourceJournal = getJournalById(cardSourceId);
              if (sourceJournal) {
                const freshSourceData = extractBountyDataFromJournal(sourceJournal);
                freshSourceData.sourceJournalId = cardSourceId;
                card.setAttribute("data-source-journal-id", cardSourceId);
                card.setAttribute("data-char-code", freshSourceData.charCode || "");
                card.innerHTML = renderPlayerBountyHTML(freshSourceData);
                boardChanged = true;
              }
            } else {
              const freshCardHTML = renderPlayerBountyHTML(cardData);
              card.innerHTML = freshCardHTML;
              boardChanged = true;
            }
          }
        });

        if (boardChanged) {
          await page.update({ "text.content": doc.body.innerHTML });
          upgradedBoards++;
        }
      }
    }
  }

  ui.notifications?.info(`Upgrade complete! Updated ${upgradedBounties} Bounty Journal Entry(ies) and ${upgradedBoards} Bounty Board(s).`);
}

// Interactive Bounty Level, Status & Player View Sharing directly on Journal Sheets
Hooks.on("renderJournalPageSheet", (sheet, html) => {
  if (!game.user?.isGM) return;

  const journalDoc = sheet.document || sheet.pageDocument?.parent || sheet.object;
  const pageDoc = sheet.pageDocument || sheet.document;

  // 1. Single Bounty Sheet Handlers
  const container = html.find(".wos-bounty-container");
  if (container.length && !container.parents(".wos-bounty-board-card").length) {
    const headerRight = container.find(".wos-bounty-header-right");

    const getRawBountyData = () => {
      const rawData = container.attr("data-bounty-data");
      let data = {};
      if (rawData) {
        try { data = JSON.parse(decodeURIComponent(rawData)); } catch(e) {
          try { data = JSON.parse(rawData.replace(/&apos;/g, "'")); } catch(err) {}
        }
      }
      if (!data.sourceJournalId && journalDoc?.id) {
        data.sourceJournalId = journalDoc.id;
      }
      return data;
    };

    if (headerRight.length && !headerRight.find(".wos-edit-bounty-btn").length) {
      const editBtn = $('<button type="button" class="wos-edit-bounty-btn" title="Edit Bounty Details"><i class="fas fa-edit"></i> Edit</button>');
      editBtn.on("click", (ev) => {
        ev.stopPropagation();
        createBountyForm(getRawBountyData(), journalDoc);
      });
      headerRight.append(editBtn);
    }

    if (headerRight.length && !headerRight.find(".wos-show-player-btn").length) {
      const showPlayerBtn = $('<button type="button" class="wos-show-player-btn" title="Show Player Version to Connected Players"><i class="fas fa-eye"></i> Show Players</button>');
      showPlayerBtn.on("click", (ev) => {
        ev.stopPropagation();
        showBountyToPlayers(getRawBountyData());
      });
      headerRight.append(showPlayerBtn);
    }

    if (headerRight.length && !headerRight.find(".wos-publish-player-btn").length) {
      const publishBtn = $('<button type="button" class="wos-publish-player-btn" title="Create or Update Public Player View Journal"><i class="fas fa-share-alt"></i> Publish View</button>');
      publishBtn.on("click", async (ev) => {
        ev.stopPropagation();
        await publishPlayerBountyJournal(journalDoc, getRawBountyData());
      });
      headerRight.append(publishBtn);
    }

    if (headerRight.length && !headerRight.find(".wos-status-toggle-btn").length) {
      const bountyData = getRawBountyData();
      const currentStatus = bountyData.status || "open";
      let statusBtnLabel = "Open";
      let statusBtnClass = "wos-btn-open";
      let statusBtnIcon = "fa-folder-open";

      if (currentStatus === "completed") {
        statusBtnLabel = "Completed";
        statusBtnClass = "wos-btn-completed";
        statusBtnIcon = "fa-check-circle";
      } else if (currentStatus === "closed") {
        statusBtnLabel = "Closed";
        statusBtnClass = "wos-btn-closed";
        statusBtnIcon = "fa-times-circle";
      }

      const statusBtn = $(`<button type="button" class="wos-status-toggle-btn ${statusBtnClass}" title="Click to change status (Open -> Completed -> Closed)"><i class="fas ${statusBtnIcon}"></i> ${statusBtnLabel}</button>`);
      statusBtn.on("click", async (ev) => {
        ev.stopPropagation();
        let nextStatus = "completed";
        if (currentStatus === "open") nextStatus = "completed";
        else if (currentStatus === "completed") nextStatus = "closed";
        else if (currentStatus === "closed") nextStatus = "open";

        bountyData.status = nextStatus;
        if (journalDoc?.id) bountyData.sourceJournalId = journalDoc.id;

        const newHTML = renderBountyHTML(bountyData);
        if (pageDoc) {
          await pageDoc.update({ "text.content": newHTML });
          ui.notifications?.info(`Bounty status updated to "${nextStatus.toUpperCase()}".`);
          await syncLinkedBounties(journalDoc?.id || bountyData.sourceJournalId, bountyData);
        }
      });
      headerRight.append(statusBtn);
    }

    container.find(".wos-circle-option[data-bl]").on("click", async (ev) => {
      ev.stopPropagation();
      const newBL = parseInt($(ev.currentTarget).attr("data-bl"));
      if (!newBL || newBL < 1 || newBL > 9) return;

      const bountyData = getRawBountyData();
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
        if (journalDoc?.id) bountyData.sourceJournalId = journalDoc.id;

        const newHTML = renderBountyHTML(bountyData);
        if (pageDoc) {
          await pageDoc.update({ "text.content": newHTML });
          ui.notifications?.info(`Updated Bounty Level to BL:${newBL} (${bountyData.reward}).`);
          await syncLinkedBounties(journalDoc?.id || bountyData.sourceJournalId, bountyData);
        }
      }
    });
  }

  // 2. Bounty Board Sheet Card Handlers
  const boardContainer = html.find(".wos-bounty-board-container");
  if (boardContainer.length) {
    const cards = boardContainer.find(".wos-bounty-board-card");
    cards.each((idx, cardEl) => {
      const card = $(cardEl);
      const bContainer = card.find(".wos-bounty-container");
      if (!bContainer.length) return;

      const cardSourceId = card.attr("data-source-journal-id") || bContainer.attr("data-source-journal-id");
      const rawCardData = bContainer.attr("data-bounty-data");
      let cardBountyData = {};
      if (rawCardData) {
        try { cardBountyData = JSON.parse(decodeURIComponent(rawCardData)); } catch(e) {
          try { cardBountyData = JSON.parse(rawCardData.replace(/&apos;/g, "'")); } catch(err) {}
        }
      }
      if (cardSourceId) cardBountyData.sourceJournalId = cardSourceId;

      const headerRight = bContainer.find(".wos-bounty-header-right");

      if (headerRight.length && !headerRight.find(".wos-board-show-player-btn").length) {
        const cardShowBtn = $(`<button type="button" class="wos-show-player-btn wos-board-show-player-btn" style="margin-left:6px; font-size:0.75rem; padding:2px 6px;" title="Show Player Version to Connected Players"><i class="fas fa-eye"></i> Show</button>`);
        cardShowBtn.on("click", (ev) => {
          ev.stopPropagation();
          showBountyToPlayers(cardBountyData);
        });
        headerRight.append(cardShowBtn);
      }

      if (headerRight.length && !headerRight.find(".wos-board-card-status-btn").length) {
        let cardStatus = cardBountyData.status || "open";
        if (bContainer.hasClass("wos-status-completed") || bContainer.find(".wos-stamp-completed").length) {
          cardStatus = "completed";
        } else if (bContainer.hasClass("wos-status-closed") || bContainer.find(".wos-stamp-closed").length) {
          cardStatus = "closed";
        }

        let icon = "fa-folder-open";
        let label = "Open";
        let btnClass = "wos-btn-open";
        if (cardStatus === "completed") { icon = "fa-check-circle"; label = "Completed"; btnClass = "wos-btn-completed"; }
        else if (cardStatus === "closed") { icon = "fa-times-circle"; label = "Closed"; btnClass = "wos-btn-closed"; }

        const toggleBtn = $(`<button type="button" class="wos-status-toggle-btn ${btnClass} wos-board-card-status-btn" style="margin-left:6px; cursor:pointer; font-size:0.75rem; padding:2px 6px;" title="GM Status Toggle (Open -> Completed -> Closed)"><i class="fas ${icon}"></i> ${label}</button>`);

        toggleBtn.on("click", async (ev) => {
          ev.stopPropagation();
          let nextStatus = "completed";
          if (cardStatus === "open") nextStatus = "completed";
          else if (cardStatus === "completed") nextStatus = "closed";
          else if (cardStatus === "closed") nextStatus = "open";

          cardBountyData.status = nextStatus;

          if (pageDoc) {
            const docContent = pageDoc.text?.content || "";
            if (typeof DOMParser !== "undefined") {
              const parser = new DOMParser();
              const doc = parser.parseFromString(docContent, "text/html");
              const targetCards = doc.querySelectorAll(".wos-bounty-board-card");
              if (targetCards[idx]) {
                const targetContainer = targetCards[idx].querySelector(".wos-bounty-container");
                if (targetContainer) {
                  targetContainer.classList.remove("wos-status-open", "wos-status-completed", "wos-status-closed");
                  targetContainer.classList.add(`wos-status-${nextStatus}`);

                  const oldStamp = targetContainer.querySelector(".wos-bounty-stamp-overlay");
                  if (oldStamp) oldStamp.remove();

                  if (nextStatus !== "open") {
                    const posterBox = targetContainer.querySelector(".wos-bounty-poster-box");
                    if (posterBox) {
                      const stampDiv = doc.createElement("div");
                      stampDiv.className = `wos-bounty-stamp-overlay wos-stamp-${nextStatus}`;
                      stampDiv.innerHTML = `<span>${nextStatus === "completed" ? "COMPLETED" : "CLOSED"}</span>`;
                      posterBox.insertBefore(stampDiv, posterBox.firstChild);
                    }
                  }
                  await pageDoc.update({ "text.content": doc.body.innerHTML });
                  ui.notifications?.info(`Bounty Board #${idx + 1} marked as "${nextStatus.toUpperCase()}".`);

                  // Also update main source journal if linked!
                  if (cardSourceId) {
                    const sourceJournal = getJournalById(cardSourceId);
                    if (sourceJournal) {
                      const sourceData = extractBountyDataFromJournal(sourceJournal);
                      sourceData.status = nextStatus;
                      sourceData.sourceJournalId = cardSourceId;
                      const sourcePage = sourceJournal.pages?.contents?.[0] || Array.from(sourceJournal.pages || [])[0];
                      if (sourcePage) {
                        await sourcePage.update({ "text.content": renderBountyHTML(sourceData) });
                        await syncLinkedBounties(cardSourceId, sourceData);
                      }
                    }
                  }
                }
              }
            }
          }
        });
        headerRight.append(toggleBtn);
      }
    });
  }
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
  game.wos.syncLinkedBounties = syncLinkedBounties;
  game.wos.publishPlayerBountyJournal = publishPlayerBountyJournal;
  game.wos.showBountyToPlayers = showBountyToPlayers;
  game.wos.renderPlayerBountyPopup = renderPlayerBountyPopup;
  game.wos.upgradeAllBounties = upgradeAllBounties;
  game.wos.editBountySelectDialog = editBountySelectDialog;

  if (game.socket) {
    game.socket.on("module.mosh-wos-items", (payload) => {
      if (payload?.action === "showBounty" && payload.bountyData) {
        renderPlayerBountyPopup(payload.bountyData);
      }
    });
  }

  // Disable Automated Animations when chat message content/flavor indicates a weapon reload
  Hooks.on("preCreateChatMessage", (doc) => {
    const content = doc.content || "";
    const flavor = doc.flavor || "";
    const fullText = `${content} ${flavor}`.toLowerCase();

    if (fullText.includes("weapon reloaded")) {
      doc.updateSource({
        "flags.autoanimations": {
          killAnim: true,
          isExcluded: true
        }
      });
    }
  });

  if (game.modules.get("autoanimations")?.active) {
    Hooks.on("aa.preAnimationStart", (...args) => {
      for (const arg of args) {
        if (!arg) continue;
        try {
          const text = JSON.stringify(arg).toLowerCase();
          if (text.includes("weapon reloaded")) {
            return false;
          }
        } catch (e) {
          // Ignore circular reference errors during stringify
        }
      }
    });
    console.log("Mothership: Wages of Sin — Automated Animations reload filter registered.");
  }

  await ensureWorldMacros();
  console.log("Mothership: Wages of Sin — Bounty Generator & Board initialized.");
});


