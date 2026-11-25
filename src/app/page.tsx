import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HELIX TECH Ltd",
  description:
    "HELIX TECH Ltd is a placeholder software company. Details will be updated.",
};

const practice = [
  {
    index: "01",
    title: "Product engineering",
    copy: "Web products and internal tools, taken from a rough brief to something a team can run.",
  },
  {
    index: "02",
    title: "Automation",
    copy: "Repeatable workflows that take busywork off the team.",
  },
  {
    index: "03",
    title: "Analytics",
    copy: "A small set of numbers people actually use.",
  },
  {
    index: "04",
    title: "Care",
    copy: "Fixes and improvements after the first release.",
  },
];

const steps = [
  ["01", "Listen", "What has to be true when the work is done."],
  ["02", "Shape", "A short plan, a narrow scope, and the risks in plain language."],
  ["03", "Make", "Working software in small releases, not a long silent build."],
  ["04", "Stay", "Support after launch. The placeholder team note will be replaced."],
];

const notes = [
  ["What is HELIX TECH Ltd?", "A placeholder name for a software company. The real company details will be filled in later."],
  ["Where is it based?", "Written as a Colorado company for now. Confirm this before it is treated as a fact."],
  ["What do you build?", "Business software: products, internal tools, automation, and the reporting around them."],
  ["Who leads it?", "Leadership is not listed yet. This line is a placeholder."],
  ["Is this a trading or card service?", "No. The company is for ordinary software work."],
  ["How do we reach you?", "Contact details will be added with the company update."],
];

export default function Home() {
  return (
    <div className="hx">
      <div className="hx-wrap">
        <div className="hx-top">
          <span>HX-00 · Placeholder record</span>
          <span>Software company · draft</span>
        </div>

        <header className="hx-nav">
          <a className="hx-brand" href="#top">
            <strong>Helix</strong>
            <span>Technology practice</span>
          </a>
          <nav className="hx-links" aria-label="Page">
            <a href="#practice">Practice</a>
            <a href="#method">Method</a>
            <a href="#notes">Notes</a>
          </nav>
        </header>

        <section className="hx-hero" id="top">
          <div className="hx-rise">
            <p className="hx-kicker">01 — Studio draft</p>
            <h1>
              Software with
              <br />
              a <em>clear shape.</em>
            </h1>
            <p className="hx-lede">
              HELIX TECH Ltd is a temporary company page. It describes a small
              software practice. Names, people, and legal details will be
              replaced.
            </p>
            <div className="hx-actions">
              <a className="hx-btn" href="#practice">
                See the practice
              </a>
              <a className="hx-textlink" href="#notes">
                Read the notes
              </a>
            </div>
          </div>

          <aside className="hx-sheet hx-rise hx-d2" aria-label="Company draft">
            <h2>Draft record</h2>
            <div className="hx-row">
              <span>Name</span>
              <strong>HELIX TECH Ltd</strong>
            </div>
            <div className="hx-row">
              <span>Work</span>
              <strong>Business software</strong>
            </div>
            <div className="hx-row">
              <span>Base</span>
              <strong>Colorado, for now</strong>
            </div>
            <div className="hx-row">
              <span>Status</span>
              <strong>Replace tomorrow</strong>
            </div>
          </aside>
        </section>
      </div>

      <div className="hx-wrap">
        <div className="hx-band" aria-label="At a glance">
          <div>
            <small>Focus</small>
            <strong>Tools</strong>
          </div>
          <div>
            <small>Pace</small>
            <strong>Small</strong>
          </div>
          <div>
            <small>Style</small>
            <strong>Plain</strong>
          </div>
          <div>
            <small>Record</small>
            <strong>Draft</strong>
          </div>
        </div>

        <section className="hx-section" id="practice">
          <p className="hx-kicker">02 — Practice</p>
          <h2>Four kinds of work.</h2>
          <div className="hx-bento">
            {practice.map((item) => (
              <article className="hx-tile" key={item.index}>
                <i>{item.index}</i>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="hx-section" id="method">
          <div className="hx-split">
            <div>
              <p className="hx-kicker">03 — Method</p>
              <h2>A short path from brief to release.</h2>
            </div>
            <div className="hx-steps">
              {steps.map(([index, title, copy]) => (
                <article className="hx-step" key={index}>
                  <b>{index}</b>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hx-section" id="notes">
          <p className="hx-kicker">04 — Notes</p>
          <h2>Open answers, not a hidden list.</h2>
          <div className="hx-notes">
            {notes.map(([question, answer]) => (
              <article className="hx-note" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="hx-foot">
          <span>HELIX TECH Ltd · placeholder copy</span>
          <span>Colorado draft · not a card or trading service</span>
        </footer>
      </div>
    </div>
  );
}
