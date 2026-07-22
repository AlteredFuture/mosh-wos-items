# Mothership: Wages of Sin — Foundry VTT Module

A Foundry VTT compendium module for the **Mothership RPG Wages of Sin** expansion.
Requires the [Mothership 1e system](https://github.com/Futil/foundry-mothership) (`mosh`).

## Manifest URL

```text
https://raw.githubusercontent.com/AlteredFuture/mosh-wos-items/main/module.json
```

## Installation

1. Launch **Foundry VTT** and go to the **Add-on Modules** tab on the setup screen.
2. Click **Install Module** at the bottom.
3. Paste the **Manifest URL** into the text field at the bottom:
   `https://raw.githubusercontent.com/AlteredFuture/mosh-wos-items/main/module.json`
4. Click **Install**.
5. Enable the **Mothership: Wages of Sin** module inside your world under **Game Settings** -> **Manage Modules**.

## Dependencies

- **Foundry VTT** v11+
- **[Mothership 1e System](https://github.com/Futil/foundry-mothership)** (`mosh`)
- **[Mothership 1e Compendium - PSG](https://github.com/hollowphoton/fvtt_mosh_1e_psg)** — required for shared icons and base skill references

## Sources & Content Note

Content in this module is primarily sourced from the official *Mothership: Wages of Sin* book. Items and entries not explicitly detailed within the core book have been derived from complementary official and community sources (such as the *Hive Mind* booklets and related materials), or created to complete the compendium.

## Compendium Packs

| Pack | Contents |
|------|----------|
| Wages of Sin Classes (WoS) | The Bounty Hunter class |
| Skills (WoS) | Custom WoS skills |
| Weapons (WoS) | WoS weapons |
| Armor (WoS) | WoS armor & suits |
| Equipment (WoS) | WoS equipment & gear |
| Patches (WoS) | WoS morale patches |
| Trinkets (WoS) | WoS trinkets |
| Roll Tables (WoS) | WoS random tables (loadouts, loadout variants, trinkets, patches, Client Type, Crime, Complications, Bounty Level & Rewards) |
| Macros (WoS) | Macros for creating and generating bounties |

### Features & Bounties

- **Bounty Form Macro (`Wages of Sin: Create Bounty (Form)`):** Opens an interactive form dialog with **Drag & Drop support** and **Visual BL Radio Selector Pills (1-9)**. Drag any Actor or Token from the sidebar/canvas into the **Target** drop zone to automatically set the Target Name, store the Actor's UUID, and auto-detect their portrait image. Drag Actors into **Known Associates** to automatically append hard-linked `@UUID[Actor.id]{Name}` references.
- **Bounty Generator Macro (`Wages of Sin: Generate Bounty`):** Automatically rolls on the official Wages of Sin roll tables (Bounty Level 1-9, Client Type, d100 Crime, and 1d5 Complications), calculates suggested payscale rewards, and populates the form for review before creating the journal entry.
- **Bounty Board Generator Macro (`Wages of Sin: Create Bounty Board`):** Queries existing bounty journal entries and displays a multi-select dialog to generate a **Player-Facing Bounty Board** Journal Entry. Omits Warden-eyes-only information (Warden Info, Consequences, Complications) while keeping public information (Advert, Briefing, Target, BL, Crime, Wanted condition, Client, Reward, Bonus, Associates, Locations).
- **1-Click Bounty Level Editing:** Change Bounty Levels effortlessly by clicking any number circle (1-9) directly on the Bounty Journal Entry sheet, or by clicking the **✏️ Edit** button on the header to reopen the form dialog.

## Version History

### 0.2.0
- Added Wages of Sin Bounty Form Macro, Bounty Generator Macro, and Bounty Board Generator Macro
- Added Roll Tables for Client Type (d10), Crime (d100 with recursive compound crimes), Complications (d100), and Bounty Level & Rewards (1-9)
- Added Wages of Sin WANTED poster & player-facing Bounty Board journal entry layouts with dynamic BL color themes (1-9)
- Added Drag & Drop Actor/Token UUID linking for Target & Known Associates
- Added 1-Click Bounty Level editing directly on Journal Entry sheets

### 0.1.0
- Initial module scaffold
- Bounty Hunter class, skills, weapons, armor, equipment, patches, and trinkets stubs
