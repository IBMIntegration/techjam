import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p>Integration</p>;

const FirstRightText = () => (
  <p>
    IBM's WW Integration SWAT Team tackles some of the most complex integration
    problems our customers face today.
    <div style={{fontStyle: 'italic'}}>
      The Automation Integration Tech Jam is our way of sharing that knowledge.
    </div>
  </p>
);

const SecondLeftText = () => <p>Tech Jam Labs</p>;

const SecondRightText = () => (
  <p>
    The Tech Jam consists of interactive presentations, labs, and demo sessions
    where SWAT Team Leads discuss specific real-world technical concepts with
    the participants.
    <div>
      <a
        className={calloutLink}
        href="/ace">
        App Connect Enterprise →
      </a>
    </div>
    <div>
      <a
        className={calloutLink}
        href="mq">
        IBM MQ →
      </a>
    </div>
  </p>
);

const BannerText = () => <h1>IBM Integration Tech Jams</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#0043ce"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
