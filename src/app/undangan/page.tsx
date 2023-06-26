import React from 'react';
import Section from 'next@js/app/sectioncopy/page';
import Section2 from 'next@js/app/section2/page';
import Section3 from 'next@js/app/date/page';
import Section4 from 'next@js/app/lokasi/page';
import Section6 from 'next@js/app/kolom/page';
import Section7 from 'next@js/app/dompet/page';
import Section8 from 'next@js/app/gallery/page';
import Section9 from 'next@js/app/footer/page';






const landingPage = () => {
  return (
    <div>
        <Section />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
    {/* <App /> */}
  </div>
  )
}


export default landingPage;