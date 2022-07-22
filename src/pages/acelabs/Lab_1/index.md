---
title: App Connect Designer Salesforce
---
[Return to main lab page](../../acelabs/Overview/)

# Table of Contents

- [Table of Contents](#table-of-contents)
- [1. Introduction `<a name="introduction"></a>`](#1-introduction-)
- [2. Create a Designer Flow in CP4I to Call Salesforce  `<a name="create_a_designer_flow_in_cp4i_to_call_salesforce"></a>`](#2-create-a-designer-flow-in-cp4i-to-call-salesforce--)
  - [2a Testing the API flow `<a name="testing_the_API_flow"></a>`](#2a-testing-the-api-flow-)
- [3. Deploying Your Designer Flow to App Connect Dashboard `<a name="deploying_your_designer_flow_to_app_connect_dashboard"></a>`](#3-deploying-your-designer-flow-to-app-connect-dashboard-)

---

# 1. Introduction 

The purpose of this LAB is to show how to retrieve Salesforce Account Records using IBM App Connect Designer on IBM Cloud Pak for Integration. When prompted to log in to CP4I  use the username and password provided to you for this lab.

## 2. Create a Designer Flow in CP4I to Call Salesforce  

In this section we use App Connect Designer to create a flow that will be exposed as an API to connect and call Salesforce records.

1\. Select the Enterprise LDAP

![alt text][images/0.png]

2\. When prompted use the username and password provided to you for this lab. In this example we are using cody1.

3\. Within the Integrations cox click on the Designer link to take you to the App Connect Designer dashboard.

![alt text][images/2.png]

4\. Click on Create Flows for an API:

![alt text][images/8.png]

5\. First thing we will do is create the model for this.  We will call the model **SalesforceRetrieve**

![alt text][images/9.png]

6\. For this example, we will map the following properties which are all data type String. You can also set the data type to Number for properties containing numerical integer values.

1. AccountID
2. AccountName
3. Website

![alt text][images/1.png0]

7\. Now that we have defined the properties in our API model definition, we can implement a flow by clicking on the Operations tab. The Operations tab is located next to the Properties tab.
From the Operations drop-down menu, select Add a Custom Operation. Here we will customize the operation that we want our API to perform.

8\. Customize the details of your API operation.

* **Note**: You can optionally set a description for your individual API operation.
  * Display Name:**Retrieve Accounts**
  * HTTP Verb:**GET**
  * Operation Name:**accounts**
    * Note: The operation name will be a part of your API Endpoint URL and is therefore consumer-facing.
  * Response body:**SalesforceRetrieve**

9\. After customizing your API operation, the details should match the image below.

![alt text][images/1.png1]

Now we can click the Implement Flow button next to our API operation definition. This will take us to the App Connect Designer flow. This is where we can insert Smart Connectors to communicate with a variety of external applications as well as implement conditional logic and callable flows.

10\. After clicking the blue plus icon on our flow designer interface, we will be able to see the variety of Smart Connectors offered by IBM App Connect Designer. You will also see an option for callable flows which allows you to integrate more complex logic into your Designer flows by building them in App Connect Enterprise Toolkit and calling them via REST API protocols.

![alt text][images/1.png2]

11\.For our lab, we will be using the Salesforce smart connector, so let us scroll down to the Salesforce connector and select it.

12\. There is a vast catalog of different Salesforce objects you can interact with from App Connect Designer. In this lab we are retrieving Account information so go ahead and drop down the Accounts option and click Retrieve accounts.

![alt text][images/1.png3]

13\. The next interface that populates under our Designer flow allows us to add conditionals to our integration flow. For example, if we want to retrieve all account records for a particular account, we can specify this condition by setting the AccountName key to the respective account.

In our example, we will retrieve the first 4 Salesforce account records. In order to do this, we can set the Maximum number of items to retrieve field to 4.  And then select, Process 4 item from the collection in the radio button options. As you can see there is also some error handling options provided by App Connect Designer below.

A helpful feature offered by the Smart Connectors is the **“Try this action”** button outlined in the green box above. Clicking this button will allow you to test your Salesforce connection.

![alt text][images/1.png4]

14\. You can now click on the View details to see the results.   This is done even before your API is complete and allows you to see info that is returned from Salesforce to be mapped.

![alt text][images/1.png5]

15\. This shows the Test Results details.

![alt text][images/1.png6]

16\. Now we can configurate our API Response body to populate a successful response message with the data fields we are interested in returning to our consumer. Go ahead and click the Response button on the integration flow (outlined in the blue box below).

![alt text][images/1.png7]

17\. Now we will map our API Response keys to the respective values we want our consumer to obtain from Salesforce. Let us start with the **AccountID** field.

* Click within the textbox for AccountID.
* A popup window will appear with A.I. enabled suggested mappings from the data available to the flow. At the right hand side of each flow shows a vertical line of dots that show the level of confidence.
* Click on the Account ID from Salesforce

![alt text][images/9ai.png]

Repeat the same process for Account Name and Website selecting the corresponding fields from Salesforce.

Note: If you accidendly click twice on the input field the popup suggestion window will close. Click away from the input field and back again into it so it'll pop up again.

18\. After populating all the fields your mapping should match the image attached below.

![alt text][images/2.png0]

19\. Click Done.

![alt text][images/20b.png]

20\. We are now ready to start the API but first need to give it a meaningful name. Cliecn on the current name of the API. For example Untitled API 1.

![alt text][images/20c.png]

21. Enter your userid followed by SFAccounts as name and then toggle the slider on the right from Stopped to Started.

![images/20d.png][images/20d.png]

## 2a Testing the API flow `<a name="testing_the_API_flow"></a>`

1\. Once the flow switches to Started state a Test tab will appear. Click on it.

![alt text][images/50a.png]

2\. Now select the GET operation on the left menu and review the information on this API we just created.  Now you should be able to see the Details pane describing the properties and parameters of your REST API operation. The full URL endpoint for your Designer flow is also displayed.

![alt text][images/2.png3]

3\. Click on Try It to test the API

![alt text][images/2.png4]

4\. Click on the Send button. This will trigger an API call to your Designer flow and in turn populate a Request and Response pane below the Send button.

![alt text][images/2.png5]

# 3. Deploying Your Designer Flow to App Connect Dashboard `<a name="deploying_your_designer_flow_to_app_connect_dashboard"></a>`

Now we can export our Designer flow App Connect Dashboard on Cloud Pak for Integration. Navigate to your App Connect Designer Dashboard so we can export our flow as a BAR file.

1\. Click on Dashboard to get back to the main designer page where you will see your API running.

![alt text][images/3.png7]

2\. You will see that your API is running and you then will click on the triple-dot icon on your Designer flow.  Select Export.

![alt text][images/3.png8]

3\. We will export this API as a runtime flow asset (BAR).

![alt text][images/3.png9]

4\. You will save the BAR file locally on your PC and will use that to deploy to the AppConnect runtime.

5\. Now we will go back to the Integration home page. Click on the IBM Cloud Pak for Integration on the top menu

![alt text][images/4.png0]

6\. From the Platform Navigator, select your App Connect Dashboard instance.

![alt text][images/4.png1]

7\. Now select the Create a server option from your App Connect Dashboard capability

![alt text][images/4.png2]

8\. We will now select Quick start integration to create a small deployment of an ACE Integration Server.

![alt text][images/4.png3]

9\. Now we will either drag and drop the BAR file we just exported or we can click to upload it.  Then click next.

![alt text][images/4.png4]

10\. The next section is for Configuration you can look at all the options that are available.  Select the designer accounts configurations. It holds the connector accounts configurations. After selecting it click Next.

![alt text][images/73b.png]

11\. The final section is the server details.   We will give it a name, select "local" in for Designer flows mode and "api-flows" in the Designer flows drop down combo.

![alt text][images/4.png6]

12\. This will take you back to the Servers Dashboard where you will see your new server.  To start with, it will be showing Unavailable while it is starting up the pods for it. (Note: You might need to refresh your browser window if it doesn't refreesh for over a minute). Once it is up and running it will show the following:

![alt text][images/4.png8]

13. CLick In the integration Server and then click in the API.

    ![alt text][images/75.png]

14\. We can also quickly test the API call running in the Integration server.   Select the GET accounts operation, then click Try it and then click Send.

![alt text][images/4.png9]

15\.You will see the results of the API call.

While building the API flow in ACE Designer we where able to test the API in the manner. I this step we have deployed and tested the API in the runtime/production environment which is an ACE Integration Server.

[Return to main lab page](/acelabs/Overview)

[images/0.png]: images/0.png
[images/1.png]: images/1.png
[images/2.png]: images/2.png
[images/3.png]: images/3.png
[images/4.png]: images/4.png
[images/5.png]: images/5.png
[images/6.png]: images/6.png
[images/7.png]: images/7.png
[images/8.png]: images/8.png
[images/9.png]: images/9.png
[images/9ai.png]: images/9ai.png
[images/1.png0]: images/10.png
[images/1.png1]: images/11.png
[images/1.png2]: images/12.png
[images/1.png3]: images/13.png
[images/1.png4]: images/14.png
[images/1.png5]: images/15.png
[images/1.png6]: images/16.png
[images/1.png7]: images/17.png
[images/1.png8]: images/18.png
[images/1.png9]: images/19.png
[images/2.png0]: images/20.png
[images/2.png1]: images/21.png
[images/2.png2]: images/22.png
[images/2.png3]: images/50b.png
[images/2.png4]: images/50c.png
[images/2.png5]: images/50d.png
[images/2.png6a]: images/26a.png
[images/2.png6]: images/26.png
[images/2.png7]: images/27.png
[images/2.png8]: images/28.png
[images/2.png9]: images/29.png
[images/3.png0]: images/30.png
[images/3.png1]: images/31.png
[images/3.png2]: images/32.png
[images/3.png3]: images/33.png
[images/3.png4]: images/34.png
[images/3.png5]: images/35.png
[images/3.png6]: images/36.png
[images/3.png7]: images/60.png
[images/3.png8]: images/38.png
[images/3.png9]: images/61.png
[images/4.png0]: images/40.png
[images/4.png1]: images/41.png
[images/4.png2]: images/70.png
[images/4.png3]: images/71.png
[images/4.png4]: images/44.png
[images/4.png5]: images/45.png
[images/4.png6]: images/73.png
[images/4.png7]: images/47.png
[images/4.png8]: images/74.png
[images/4.png9]: images/80.png
[images/5.png0]: images/50.png
[images/5.png1]: images/51.png
[images/20b.png]: images/20b.png
[images/20c.png]: images/20c.png
[images/20d.png]: images/20d.png
[images/50a.png]: images/50a.png
[images/73b.png]: images/73b.png
[images/75.png]: images/75.png
