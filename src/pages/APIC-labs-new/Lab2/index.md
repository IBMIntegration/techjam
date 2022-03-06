---
title: The Developer Portal Experience
---

### [Return to main APIC lab page](../../APIC-labs-new/Overview/)

### <span style="color: red">**Lab prerequisite:**</span> [Create and Secure an API to Proxy an Existing REST Web Service](../Lab1/)

---

# Table of Contents
1. [Introduction](#introduction)
   
2. [Generate the Developer Portal](#generate_portal)
   1. [Login to the API Connect Developer Portal](#portal_login)
   
3. [Register a Test Application](#register_app)
   1. [Create a new Consumer Application](#consumer_app)
   
4. [Subscribe to the API Product](#subscribe_product)
   
5. [Test the API](#test_api)
   
6. [Summary](#summary)

---

## 1. Introduction <a name="introduction"></a>

In this lab, we will take the API created in the "Create and Secure an API to Proxy an Existing REST Web Service" lab and publish it to a Developer Portal where it will be ready for consumption by application developers.

We will begin by creating a new catalog and configuring the Developer Portal for our Customer 1.0.0 Product. We will then define a new Plan in the Product and publish to our new Developer Portal.

In this lab, you will explore the following key capabilities:

-   Configure the Developer Portal and publish the APIs

-   Create a Portal Account

-   Create an application and subscribe to a Plan

-   Test the API in the Developer Portal

## 2. Generate the Developer Portal <a name="generate_portal"></a>

A Developer Portal for the Sandbox catalog has already been configured in this environment.

### 2a. Login to the API Connect Developer Portal <a name="portal_login"></a>

1\. In a browser, enter the URL for the Platform Navigator that is provided by your instructor.

2\. Select the **Enterprise LDAP**.

![alt text][pic0]

**Note:** You may get a warning message that your connection is not private.  If you get this message, you can add an exception.  

To add an exception in the Chrome browser, click **Advanced** and then click **Proceed** to the URL.

![alt text][pic1]

![alt text][pic2]

To add an exception in the Firefox browser, click **Advanced** and then click **Accept the Risk and Continue**.

![alt text][pic3]

![alt text][pic4]

3\. When prompted, use the username and password provided to you for this lab. The username in the screenshots of this lab is chopper12.

![alt text][pic5]

4\. Navigate to the API Connect instance.

![alt text][pic6]

5\. Click **the LDAP User Registry**. In the example image below it is Techcon LDAP.

![alt text][pic7]

6\. When prompted, log in with the username and password provided to you for this lab. Click **Log in**. The username in the screenshots of this lab is chopper12.

**Note:** If you get a warning message that your connection is not private, follow the instructions in the previous section.

![alt text][pic8]

7\. Click on **Manage catalogs**.  If you are already logged in and continuing from the previous lab, click on the **Home** icon on the left navigation bar.

![alt text][pic9]

8\. Click on **Sandbox**.

![alt text][pic10]

9\. Select the **Catalog settings** tab.

![alt text][pic11]

10\. From the left menu, click on **Portal**.

![alt text][pic12]

11\. Copy the **Portal URL** and paste it in a new browser tab.

![alt text][pic13]

12\.  The IBM API Connect Developer Portal provides consumers access to API Catalog information.  This gives application developers the opportunity to explore and test APIs, register applications, and subscribe to Plans. 

A Portal Administrator can customize the look and feel to their organizational specifications. The default Developer Portal looks like the image below.  Note:  Depending on what you have published, the Products that you see may be different.

![alt text][pic14]

13\. Some Products are visible to all users without an account depending on the Product visibility setting. Additional options are available when you log into the Developer Portal.

The portal is setup for self service so we will create a new account as a developer. If you have a username beginning with jam, you can skip to Step 16.  If not, click on **Create an account**.

![alt text][pic15]

14\. Fill in the form and make sure to use a valid email address since that is where the activation email is sent.  At the bottom when done, click **Sign up**.

![alt text][pic16]

15\. You will receive an email that you will copy the link and paste in to your browser to complete the registration at which point you can log in. 

![alt text][pic17]

16\. Go to **Sign in** and enter your Username and Password you just created.  Click **Sign in**.

![alt text][pic18]

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

## 3. Register a Test Application <a name="register_app"></a>
 
 1\. Once you are logged in, you can explore various sections in the Developer Portal.  The Products that you see in your Portal may vary from what is shown in the lab images.  Click on **Customer 1.0.0**.  This is the Product that we published in the "Create and Secure an API to Proxy an Existing REST Web Service" lab. 

![alt text][pic19]

2\. You will see the API and Plan that is associated with the Customer 1.0.0 Product.

![alt text][pic20]

### 3a. Create a new Consumer Application <a name="consumer_app"></a>

IBM API Connect enforces entitlement rules to ensure that consumers are allowed to access the APIs that are being requested.  In the following steps you will register your consumer application and subscribe to an API Product.

1\. Click on **Apps**.

![alt text][pic21]

2\. Click **Create new app**.

![alt text][pic22]

3\. Give your application a **title** (e.g. Customer Demo) and click **Save**.

![alt text][pic23]

4\.  When your consumer application is registered in the IBM API Connect system, it is assigned a unique set of client credentials. These credentials must be provided on each API request in order for the system to validate your subscription entitlements. The Client Key can be retrieved anytime but the Client Secret can only be retrieved at this time.

Make note of your **Client Key** and **Client Secret** by click on the copy icon for each.  You will need the Client Secret in a future step.  Click **OK**.

![alt text][pic24]

[pic19]: images/19.png
[pic20]: images/20.png
[pic21]: images/21.png
[pic22]: images/22.png
[pic23]: images/23.png
[pic24]: images/24.png

## 4. Subscribe to the API Product<a name="subscribe_product"></a>

At this point, your registered consumer application has no entitlements.

In order to grant it access to an API resource, you must subscribe to a Product and Plan.

1\. Click on **API Products**.

![alt text][pic25]

2\. Click the **Customer 1.0.0** Product.

![alt text][pic26]

3\. Click on **Select** for the **Default Plan**.

![alt text][pic27]

4\. Select the application (e.g. **Customer Demo**) that you just created.  **Note:** The number of applications that you see in your environment may differ.

![alt text][pic28]

5\. Review the subscription information and click **Next**.

![alt text][pic29]

6\. Click **Done**.

![alt text][pic30]

[pic25]: images/25.png
[pic26]: images/26.png
[pic27]: images/27.png
[pic28]: images/28.png
[pic29]: images/29.png
[pic30]: images/30.png

## 5. Test the API<a name="test_api"></a>

The API Connect Developer Portal allows consumers to test the APIs directly from the website. This feature may be enabled or disabled per-API.

1\. You should be on a screen that shows the API and Plan for the **Customer 1.0.0** Product.  If you are not on this screen, click on **API Products** in the top navigation and select the **Customer 1.0.0** Product.

![alt text][pic31]

2\. Click on the **Customer Database 1.0.0** API.

![alt text][pic32]

3\. Click on the **GET /customers** operation.

![alt text][pic33]

4\. On the right, you will find information about the request parameters and links to the response schemas.  Click the **Try it** tab.

![alt text][pic34]

5\. If you only have one application registered, it will be automatically selected in the **API Key** drop-down menu. If you have more than one, select the application (**Customer Demo**) which is subscribed to this API Product.

Paste your **Client Secret** in the **API Secret** field.

Click **Send**.

![alt text][pic35]

6\. Scroll down to see the call results.

![alt text][pic36]

Note: If running for the first time, you may see Code: 0 No response received. Causes include a lack of CORS support on the target server, the server being unavailable, or an untrusted certificate being encountered.  Clicking the link below will open the server in a new tab.

If the browser displays a certificate issue, you may choose to accept it and return here to test again.

7\. Feel free to test the rest of the operations.  Testing will be similar to the testing that was completed in the "Create and Secure an API to Proxy an Existing REST Web Service" lab.

[pic31]: images/31.png
[pic32]: images/32.png
[pic33]: images/33.png
[pic34]: images/34.png
[pic35]: images/35.png
[pic36]: images/36.png

## 6. Summary <a name="summary"></a>

Congratulations, you have completed the **Developer Portal Experience** lab. Throughout the lab, you learned how to:

-   Navigate to the Developer Portal

-   Create a Portal account

-   Create an application and subscribe to a Plan

-   Test a API in the Developer Portal

### [Return to main APIC lab page](../Overview/)