import React from "react";
import DisplaysComponents from "../components/Displays/DisplayComponents";

const DisplaysPage = () => {
  return (
    <div className=" w3-sand ">
      <div className="container w3-padding-48">
        <div>
          <h1 className=" w3-text-khaki fw-bold text-center">
            Displays Page
          </h1>
          <DisplaysComponents />
        </div>

        <div className="w3-padding-large">
          <h1 className="fw-bold  w3-text-khaki">
            <i className="fw-bold">FIRST IMPRESSIONS</i>
          </h1>
          <p>
            First impressions are powerful and lasting, shaping how others
            perceive us in both personal and professional settings. Studies
            suggest that people form an initial opinion within seven seconds of
            meeting someone, making those first moments critical in establishing
            trust, credibility, and likability.
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <h4>The Science Behind It.</h4>
              <ul>
                <li>
                  Psychological Impact: Our brains are wired to make quick
                  judgments based on appearance, body language, tone of voice,
                  and behavior.
                </li>
                <li>
                  Halo Effect: A positive first impression can create a "halo
                  effect," where people assume other positive traits about you.
                </li>
                <li>
                  Difficult to Change: Once an impression is made, it can be
                  challenging to reverse, even with contradictory evidence.
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <h4>Different Settings Require Altered Approach</h4>
              <ul>
                <li>
                  Professional Life: In job interviews, networking events, or
                  meetings, your attire, confidence, and communication skills
                  can determine success.
                </li>
                <li>
                  Personal Relationships: Whether on a first date or meeting new
                  friends, warmth and authenticity can set the tone for future
                  interactions.
                </li>
                <li>
                  Digital Presence: In the online world, social media profiles,
                  email etiquette, and website design influence how people
                  perceive you or your brand.
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <h4>Universal Traits Impression</h4>
              <ul>
                <li>
                  ✔ Dress Appropriately – Align your appearance with the setting
                  and audience.
                </li>
                <li>
                  ✔ Be Confident – Good posture, eye contact, and a firm
                  handshake (if applicable) exude confidence.
                </li>
                <li>
                  ✔ Communicate Clearly – Speak with clarity, enthusiasm, and
                  attentiveness.
                </li>
                <li>
                  ✔ Listen Actively – Show genuine interest in others by
                  listening and engaging.
                </li>
                <li>
                  ✔ Be Punctual – Being on time shows reliability and respect
                  for others’ time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaysPage;
