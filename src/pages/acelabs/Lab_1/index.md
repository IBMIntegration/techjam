---
title: App Connect Designer Salesforce
---

[Return to main lab page](../../acelabs/Overview/)

# Table of Contents 
- [Table of Contents](#table-of-contents)
- [1. Introduction <a name="introduction"></a>](#1-introduction-)
  - [Pre-Lab: Gathering your Salesforce Credentials <a name="pre_lab"></a>](#pre-lab-gathering-your-salesforce-credentials-)
- [2. Create a Designer Flow in CP4I to Call Salesforce  <a name="create_a_designer_flow_in_cp4i_to_call_salesforce"></a>](#2-create-a-designer-flow-in-cp4i-to-call-salesforce--)
  - [2a Testing the API flow <a name="testing_the_API_flow"></a>](#2a-testing-the-api-flow-)
  - [2b Add an Additional Operation for our Salesforce API <a name="add_an_additional_operation_for_our_salesforce_API"></a>](#2b-add-an-additional-operation-for-our-salesforce-api-)
  - [2c Testing the New API Operation <a name="testing_the_new_API"></a>](#2c-testing-the-new-api-operation-)
- [3. Deploying Your Designer Flow to App Connect Dashboard <a name="deploying_your_designer_flow_to_app_connect_dashboard"></a>](#3-deploying-your-designer-flow-to-app-connect-dashboard-)
    
---

# 1. Introduction <a name="introduction"></a>

The purpose of this LAB is to show how to retrieve Salesforce Account Records using IBM App Connect Designer on IBM Cloud Pak for Integration. When prompted to log in to CP4I  use the username and password provided to you for this lab.   

 ## Pre-Lab: Gathering your Salesforce Credentials <a name="pre_lab"></a>

For this lab, you will need to collect your Salesforce account details: Username, Password, Client Secret, and Client ID. You can learn how to obtain these values from this link:

 https://developer.ibm.com/integration/docs/app-connect/how-to-guides-for-apps/use-ibm-app-connect-salesforce/


# 2. Create a Designer Flow in CP4I to Call Salesforce  <a name="create_a_designer_flow_in_cp4i_to_call_salesforce"></a>

In this section we use App Connect Designer to create a flow that will be exposed as an API to connect and call Salesforce records.

1\. Select the Enterprise LDAP

![alt text][images/0.png]

2\. When prompted use the username and password provided to you for this lab. In this example we are using chopper9.

3\. Click on the App Connect Designer link to take you to the designer dashboard.

![alt text][images/2.png]

4\. Select the tab on the left to open the Catalog screen.

![alt text][images/3.png]

5\. Now scroll down to the Salesforce connector and click on the Connect button

![alt text][images/4.png]

6\. Fill in the Salesforce connection info that you have from the pre-lab section at the beginning of this lab. 

![alt text][images/5.png]

7\. You will see the events and actions availble with this connector. Also you can change the Account Name to something more meaningful to you by clicking on the 3 dots next to the Account name. 

![alt text][images/6.png]

8\. Click on the App Connect Designer dashboard icon:

![alt text][images/7.png]

9\. Select from the New drop down to create a new API flow:  

![alt text][images/8.png]

10\. First thing we will do is create the model for this.  We will call the model **SalesforceRetrieve**

![alt text][images/9.png]

11\. For this example, we will map the following properties which are all data type String. You can also set the data type to Number for properties containing numerical integer values. 

1. AccountID
2. AccountName
3. Website

![alt text][images/1.png0]


12\. Now that we have defined the properties in our API model definition, we can implement a flow by clicking on the Operations tab. The Operations tab is located next to the Properties tab.
From the Operations drop-down menu, select Add a Custom Operation. Here we will customize the operation that we want our API to perform. 

13\. Customize the details of your API operation. 
* **Note**: You can optionally set a description for your individual API operation. 
    * Display Name: **Retrieve Accounts**
    * HTTP Verb: **GET** 
    * Operation Name: **accounts**
        * Note: The operation name will be a part of your API Endpoint URL and is therefore consumer-facing.
    * Response body: **SalesforceRetrieve**

14\. After customizing your API operation, the details should match the image below.

![alt text][images/1.png1]

Now we can click the Implement Flow button next to our API operation definition. This will take us to the App Connect Designer flow. This is where we can insert Smart Connectors to communicate with a variety of external applications as well as implement conditional logic and callable flows. 

15\. After clicking the blue plus icon on our flow designer interface, we will be able to see the variety of Smart Connectors offered by IBM App Connect Designer. You will also see an option for callable flows which allows you to integrate more complex logic into your Designer flows by building them in App Connect Enterprise Toolkit and calling them via REST API protocols. 

![alt text][images/1.png2]

16\.For our lab, we will be using the Salesforce smart connector, so let us scroll down to the Salesforce connector and select it.
In the account drop down menu for the Salesforce smart connector, select Add a new account. You should see a credentials form populate your screen where you will enter your Salesforce account credentials from the pre-lab. After filling the form with your Login URL, Username, Password, Client ID, and Client Secret, click the **Connect** button and you should be successfully connected to Salesforce assuming your credentials are correct.

17\. There is a vast catalog of different Salesforce objects you can interact with from App Connect Designer. In this lab we are retrieving Account information so go ahead and drop down the Accounts option and click Retrieve accounts.

![alt text][images/1.png3]

18\. The next interface that populates under our Designer flow allows us to add conditionals to our integration flow. For example, if we want to retrieve all account records for a particular account, we can specify this condition by setting the AccountName key to the respective account.   

In our example, we will retrieve the first 4 Salesforce account records. In order to do this, we can set the Maximum number of items to retrieve field to 4.  And then select, Process 4 item from the collection in the radio button options. As you can see there is also some error handling options provided by App Connect Designer below.

A helpful feature offered by the Smart Connectors is the **“Try this action”** button outlined in the green box above. Clicking this button will allow you to test your Salesforce connection. If your credentials and operations are configured correctly you should be able to pull records from Salesforce. 

![alt text][images/1.png4]

19\. You can now click on the View details to see the results.   This is done even before your API is complete and allows you to see info that is returned from Salesforce to be mapped. 

![alt text][images/1.png5]

20\. This shows the Test Results details.

![alt text][images/1.png6]

21\. Now we can configurate our API Response body to populate a successful response message with the data fields we are interested in returning to our consumer. Go ahead and click the Response button on the integration flow (outlined in the blue box below).

![alt text][images/1.png7]

22\. Now we will map our API Response keys to the respective values we want our consumer to obtain from Salesforce. Let us start with the **AccountID** field. 

* Click on the hamburger icon next to AccountID field. ![alt text][images/1.png8]
* Now you will see the list of **Available mappings.**

Click on the **Salesforce / Retrieve accounts / Accounts** mapping and select **Account ID.** Repeat the process for the other two data fields. After populating all the fields your mapping should match the image attached below.

![alt text][images/1.png9]

23\. After populating all the fields your mapping should match the image attached below.

![alt text][images/2.png0]

24\. We are now ready to start the API but first need to give it a meaningful name.  And then click on the Test tab on the top. 

![alt text][images/2.png1]


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


## 2a Testing the API flow <a name="testing_the_API_flow"></a>

Make sure your API is running by checking the upper pane of your Designer instance. Since App Connect Designer has an built-in REST API testing utility. 

1\. Click in the upper right cornor hamburger tab and select Start API.

![alt text][images/2.png2]

2\. Now select the GET operation on the left menu and review the information on this API we just created.  Now you should be able to see the Details pane describing the properties and parameters of your REST API operation. The full URL endpoint for your Designer flow is also displayed.

![alt text][images/2.png3]


3\. Click on Try It to test the API

![alt text][images/2.png4]


4\. Scroll down and click on the Send button. This will trigger an API call to your Designer flow and in turn populate a Request and Response pane below the Send button.

![alt text][images/2.png5]


[images/2.png2]: images/22.png
[images/2.png3]: images/23.png
[images/2.png4]: images/24.png
[images/2.png5]: images/25.png


## 2b Add an Additional Operation for our Salesforce API <a name="add_an_additional_operation_for_our_salesforce_API"></a>
In this section we will add an additional operation to get Account by ID.
First we will stop the API

![alt text][images/2.png6a]

1\. Now we will go back to the Define tab of our API to add another operation. First select to add another operation and select the Retrieve SalesforceRetrieve by ID. 

![alt text][images/2.png6]
![alt text][images/2.png7]

2\. Select “Implement flow” for the new operation and that will get us to the flow editor where we will select the “+” sign and scroll down to SaleForce connector and select Retrieve accounts.

![alt text][images/2.png8]

3\. We will now add a condition to retrieve the Account for the Account ID that is passed to the API.  
Click on the Add condition and you will see the Where clause for the equals condition click in the blank box and you will see the mapping option there where you can select the Account ID that is passed to the API.   
When done should look like the following:

![alt text][images/2.png9]

4\. Now we will map our API Response keys to the respective values we want our consumer to obtain from Salesforce. Let us start with the **AccountID** field
* Click on the hamburger icon next to AccountID field. ![alt text][images/3.png0]
* Now you will see the list of **Available mappings.**

Click on the **Salesforce / Retrieve accounts / Accounts** mapping and select Account ID. Repeat the process for the other two data fields. After populating all the fields your mapping should match the image attached below.

![alt text][images/3.png1]

5\. We are now ready to start the API and test the new operation. 

[images/2.png6a]: images/26a.png
[images/2.png6]: images/26.png
[images/2.png7]: images/27.png
[images/2.png8]: images/28.png
[images/2.png9]: images/29.png
[images/3.png0]: images/30.png
[images/3.png1]: images/31.png

## 2c Testing the New API Operation <a name="testing_the_new_API"></a>
Make sure your API is running by checking the upper pane of your Designer instance. Since App Connect Designer has an built-in REST API testing utility. 

1\. Click in the upper right cornor hamburger tab and select Start API.

![alt text][images/3.png2]

2\. As you can see we have two operations now one that will get us the first four accounts and the other will get account by id.   
So let’s first run the accounts GET first to get a list of Account IDs.

![alt text][images/3.png3]

Click the Send button and we will see the Response with list of AccountID

![alt text][images/3.png4]

images/k.png one of the AccountID from the Response to use in the other Operation.


3\. Now select the GET operation on the left menu and review the information on this new operation we just created.  

![alt text][images/3.png5]


4\. You will see the response for the AccountID that we entered to the API.

![alt text][images/3.png6]

[images/3.png2]: images/32.png
[images/3.png3]: images/33.png
[images/3.png4]: images/34.png
[images/3.png5]: images/35.png
[images/3.png6]: images/36.png


# 3. Deploying Your Designer Flow to App Connect Dashboard <a name="deploying_your_designer_flow_to_app_connect_dashboard"></a>

Now we can export our Designer flow App Connect Dashboard on Cloud Pak for Integration. Navigate to your App Connect Designer Dashboard so we can export our flow as a BAR file. 

1\. Click on Dashboard to get back to the main designer page where you will see your API running.

![alt text][images/3.png7]

2\. You will see that your API is running and you then will click on the triple-dot icon on your Designer flow.  Select Export.

![alt text][images/3.png8]

3\. We will export this API as a runtime flow asset.

![alt text][images/3.png9]

4\. You will save the SalesforceDemo.bar file locally on your machine and will use that to deploy to the AppConnect runtime.


5\. Now we will go back to the Integrtion home page. Click on the IBM Cloud Pak for Integration on the top menu

![alt text][images/4.png0]

6\. From the Platform Navigator, select your App Connect Dashboard instance.

![alt text][images/4.png1]

7\. Now select the Create a server option from your App Connect Dashboard capability

![alt text][images/4.png2]

8\. We will now select the Designer Integration that we will deploy then click next.

![alt text][images/4.png3]

9\. Now we will either drag and drop the BAR file we just exported or we can click to upload it.  Then click next.

![alt text][images/4.png4]

10\. The next section is for configuration you can look at all the options that are available.   We will just be using the Designer Accounts which will include your Salesforce credentials.

![alt text][images/4.png5]

11\. The final section is the server details.   We will give it a name and change the Replicas to 1. Go ahead and click Create.

![alt text][images/4.png6]

12\. This will take you back to the Servers Dashboard where you will see your new server. To start with, it will be showing Unavailable while it is starting up the pods for it. 

![alt text][images/4.png7]

13\. Once it is up and running it will show the following:

![alt text][images/4.png8]

14\. We can also quickly test the API call running in the Integration server.   Select the Get accounts and then select the GET url and past in a browser window.

![alt text][images/4.png9]

15\.You will see the following results.

![alt text][images/5.png0]

16\. You can click on your Integration Server and then click on the API that is running inside of it. This is where you will be able to download your OpenAPI Swagger document which will be utilized to export your Integration Flow to IBM API Connect.
![alt text][images/5.png1]

[Return to main lab page](/acelabs/Overview)

[images/3.png7]: images/37.png
[images/3.png8]: images/38.png
[images/3.png9]: images/39.png
[images/4.png0]: images/40.png
[images/4.png1]: images/41.png
[images/4.png2]: images/42.png
[images/4.png3]: images/43.png
[images/4.png4]: images/44.png
[images/4.png5]: images/45.png
[images/4.png6]: images/46.png
[images/4.png7]: images/47.png
[images/4.png8]: images/48.png
[images/4.png9]: images/49.png
[images/5.png0]: images/50.png
[images/5.png1]: images/51.png
