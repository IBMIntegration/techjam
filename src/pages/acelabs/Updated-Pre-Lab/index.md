---
title: ACE Labs Prerequisites
---

[Return to main lab page](../../acelabs/Overview/)

# Generating credentials for Designer connectors on CP4i

## Salesforce Connector

To get started you will require admin level access to your Salesforce account. If you want to create a free Salesforce account to test, make sure that you create a Developer account rather than a Trial account. If you connect to App Connect with a Trial account, the Salesforce events do not work.

![alt text][pic0]

To get your login URL, click on your user profile. The URL text below your Account Name is your login URL.

![alt text][pic1]

Once logged into your Salesforce account, on the left-hand Finder panel go to: PLATFORM TOOLS > Apps > App Manager

![alt text][pic2]

You then want to create a New Connected App or use an existing one. Steps for creating a new app are as follows:
![alt text][pic3]

Provide Connect App Name and API Name is automatically generated for you. Provide Contact Email usually admin email address.
Please make sure you Enable OAuth Settings and follow steps below to configure OAuth setting.


![alt text][pic4]

Click on Enable OAuth Settings to get the configuration panel.
Either click on Enable for Device Flow and that will auto-generate Callback URL or alternately you can provide your own fully qualified Callback URL.

Next step is to configure scope of access for our connectors which will be the Connected App in this case. Connectors technically only require data api, you can optionally choose to enable all the scopes for this connected app.

And then Click on Save.

![alt text][pic5]

It may take several minutes for newly created Connected App to be registered. Once registered go back to App Manager, select and view the created App
![alt text][pic6]

Use Consumer Key and Secret as Client ID and Client Secret as needed in the connector template. Next we will need to retrieve Security Token. For this click on your user profile and select Settings option in the profile panel.

![alt text][pic7]

Under Settings find and click Reset Security Token option
![alt text][pic8]

Click on Reset Security Token Button and it will send the newly generated security token to your admin email address. Use the token for your credentials.


[Return to main lab page](../index.md)


[pic0]: images/0.png
[pic1]: images/1.png
[pic2]: images/2.png
[pic3]: images/3.png
[pic4]: images/4.png
[pic5]: images/5.png
[pic6]: images/6.png
[pic7]: images/7.png
[pic8]: images/8.png
[pic9]: images/9.png
[pic10]: images/10.png
[pic11]: images/11.png
[pic12]: images/12.png
[pic13]: images/13.png
[pic14]: images/14.png
[pic15]: images/15.png
[pic16]: images/16.png
[pic17]: images/17.png
[pic18]: images/18.png
[pic19]: images/19.png
[pic20]: images/20.png
[pic21]: images/21.png
[pic22]: images/22.png
[pic23]: images/23.png
[pic24]: images/24.png
[pic25]: images/25.png
