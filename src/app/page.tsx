import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Equity Capital Ltd",
  description:
    "Global Equity Capital Ltd is a Colorado corporation building practical software and digital systems for partners.",
};

const practice = [
  {
    index: "01",
    title: "Product engineering",
    copy: "Web products and internal tools, taken from a clear brief to something a team can run.",
  },
  {
    index: "02",
    title: "Automation",
    copy: "Repeatable workflows that take busywork off the operating team.",
  },
  {
    index: "03",
    title: "Analytics",
    copy: "A small set of numbers people actually use to run the work.",
  },
  {
    index: "04",
    title: "Ongoing care",
    copy: "Fixes and improvements after the first release, with plain updates.",
  },
];

const steps = [
  [
    "01",
    "Listen",
    "Confirm what has to be true when the engagement is done.",
  ],
  [
    "02",
    "Shape",
    "A short plan, a narrow scope, and the risks in plain language.",
  ],
  [
    "03",
    "Make",
    "Working software in small releases, not a long silent build.",
  ],
  [
    "04",
    "Stay",
    "Support after launch, with the same people who shipped the work.",
  ],
];

const notes = [
  [
    "What is Global Equity Capital Ltd?",
    "A Colorado corporation formed to pursue lawful business, focused here on practical software and digital systems for partners.",
  ],
  [
    "Where is the company formed?",
    "Under Colorado law. The principal office is at 1312 17th Street, Suite 600, Denver, CO 80202. Colorado entity ID 20258017166.",
  ],
  [
    "When was it formed?",
    "Articles of Incorporation were filed on September 16, 2025. The company is in good standing with the Colorado Secretary of State.",
  ],
  [
    "Who leads the company?",
    "Laura Valerie Melville serves as Director, and as President, Secretary, and Treasurer on the officer record dated September 16, 2025.",
  ],
  [
    "How is the company governed?",
    "Corporate Bylaws were adopted at the first meeting of incorporators on September 16, 2025. The Board of Directors manages the affairs of the corporation.",
  ],
  [
    "Is this a trading desk or card service?",
    "No. This site presents a technology company. It is not a cryptocurrency, Web3, or card-issuing service.",
  ],
];

export default function Home() {
  return (
    <div className="hx">
      <div className="hx-wrap">
        <div className="hx-top">
          <span>GEC · Colorado corporation</span>
          <span>Entity 20258017166 · formed Sep 16, 2025</span>
        </div>

        <header className="hx-nav">
          <a className="hx-brand" href="#top">
            <strong>Global Equity Capital</strong>
            <span>Technology practice · Denver</span>
          </a>
          <nav className="hx-links" aria-label="Page">
            <a href="#practice">Practice</a>
            <a href="#method">Method</a>
            <a href="#company">Company</a>
            <a href="#notes">Notes</a>
          </nav>
        </header>

        <section className="hx-hero" id="top">
          <div className="hx-rise">
            <p className="hx-kicker">01 — Company</p>
            <h1>
              Software with
              <br />
              a <em>clear record.</em>
            </h1>
            <p className="hx-lede">
              Global Equity Capital Ltd is a Colorado corporation building
              practical software and digital systems—secure delivery, plain
              communication, and formal governance behind the work.
            </p>
            <div className="hx-actions">
              <a className="hx-btn" href="#practice">
                See the practice
              </a>
              <a className="hx-textlink" href="#company">
                Company record
              </a>
            </div>
          </div>

          <aside className="hx-sheet hx-rise hx-d2" aria-label="Company record">
            <h2>Public record</h2>
            <div className="hx-row">
              <span>Name</span>
              <strong>Global Equity Capital Ltd.</strong>
            </div>
            <div className="hx-row">
              <span>Formed</span>
              <strong>September 16, 2025</strong>
            </div>
            <div className="hx-row">
              <span>Office</span>
              <strong>Denver, Colorado</strong>
            </div>
            <div className="hx-row">
              <span>Director</span>
              <strong>Laura Valerie Melville</strong>
            </div>
          </aside>
        </section>
      </div>

      <div className="hx-wrap">
        <div className="hx-band" aria-label="At a glance">
          <div>
            <small>Jurisdiction</small>
            <strong>Colorado</strong>
          </div>
          <div>
            <small>Standing</small>
            <strong>Good</strong>
          </div>
          <div>
            <small>Bylaws</small>
            <strong>Adopted</strong>
          </div>
          <div>
            <small>Focus</small>
            <strong>Software</strong>
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

        <section className="hx-section" id="company">
          <p className="hx-kicker">04 — Company</p>
          <h2>Facts from the corporate record.</h2>
          <div className="hx-notes">
            <article className="hx-note">
              <h3>Legal name</h3>
              <p>Global Equity Capital Ltd., a Colorado profit corporation.</p>
            </article>
            <article className="hx-note">
              <h3>Principal office</h3>
              <p>1312 17th Street, Suite 600, Denver, CO 80202, United States.</p>
            </article>
            <article className="hx-note">
              <h3>Formation</h3>
              <p>
                Articles filed with the Colorado Secretary of State on September
                16, 2025. Entity ID 20258017166. Certificate of Good Standing on
                file.
              </p>
            </article>
            <article className="hx-note">
              <h3>Leadership</h3>
              <p>
                Laura Valerie Melville — Director; President; Secretary;
                Treasurer. Bylaws adopted September 16, 2025.
              </p>
            </article>
          </div>
        </section>

        <section className="hx-section" id="notes">
          <p className="hx-kicker">05 — Notes</p>
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
          <span>
            © {new Date().getFullYear()} Global Equity Capital Ltd. All rights
            reserved.
          </span>
          <span>Denver, Colorado · not a card or trading service</span>
        </footer>
      </div>
    </div>
  );
}
