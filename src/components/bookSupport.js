import React from 'react';

const OtherInfoSection = () => (

  <>
    <section className="progress">
      <div className="perDisplay" />
      <article className="percentagesData">
        <span className="per">0%</span>
        <span className="comp">Complete</span>
      </article>
    </section>
    <div className="separatorLine" />
    <section className="otherImfo">
      <span className="Curchapter">CURRENT CHAPTER</span>
      <span className="chapter">INTRODUCTION</span>
      <button type="submit">UPDATE PROGRESS</button>
    </section>
  </>
);
export default OtherInfoSection;
