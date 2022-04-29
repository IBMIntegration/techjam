# SWAT Integration TechJam Site built with Gatsby Carbon Theme

## Setup Environment

1. Install nodejs v14.15 or newer.
2. Install Git CLI for cloning, pulling, and pushing to the repo.
3. Install Gatsby CLI
   1. `npm install gatsby-cli`
4. Install Yarn
   1. `npm install --global yarn`

### **REFERENCE PAGE: For detailed instructions on the steps above https://www.gatsbyjs.com/docs/tutorial/part-0/**

## Get Started

1. Clone repo
2. Run `yarn dev` to build and run the site locally on workstation.
3. run `yarn deploy` to deploy the lastest version to the git pages. NOTE: this will not automatically update the master branch. You still need to do a commit and push to git separately.

## updating pages

1. the main content for labs reside under pages as normal markdown files. There are some special features included in Carbon which can be found here https://gatsby-theme-carbon.vercel.app/ 
2. if you're creating new content, you must also update /data/nav-items.yaml to include the new pages in the site.

## FAQs and other items

The carbon theme runs using Gatsby 3. The latest version of Gatsby is 4. It is extremely difficult to find custom gatsby plugins specifically for Gatsby 3. 