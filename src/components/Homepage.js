import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../images/cloud-data.jpg';

const FirstLeftText = () => <p>March 7 - 11, 2022</p>;

const FirstRightText = () => (
  <p>
    One week of immsersive learning to get you from Zero to HANDS ON with the &nbsp;
    <a href="https://www.ibm.com/cloud/cloud-pak-for-integration">
      Cloud Pak for Integration
    </a>
    .
    <a
      className={calloutLink}
      href="https://www-40.ibm.com/events/wwe/ast/ept/swgeer06.nsf/signin.xsp?open&seminar=kwopimicbgsyl&lang=en&locale=en_US">
      Registration Now! →
    </a>
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://www-40.ibm.com/events/wwe/ast/ept/swgeer06.nsf/signin.xsp?open&seminar=kwopimicbgsyl&lang=en&locale=en_US">
      Registration Now! →
    </a>
  </p>
);

const BannerText = () => <h1>Automation SWAT Integration TechJam</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
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
