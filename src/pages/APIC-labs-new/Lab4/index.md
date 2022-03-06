---
title: Creating a GraphQL Proxy API
---

### [Return to main APIC lab page](../../APIC-labs-new/Overview/)

---

# Table of Contents

1. [Introduction](#introduction)

2. [Create a GraphQL Proxy API](#create)

3. [Test the API](#test_api)

4. [Create a Product](#create_product)

5. [Test GraphQL API from the Developer Portal](#test_api_portal)

6. [Summary](#summary)
    
---

## 1. Introduction <a name="introduction"></a>

In this lab, we will explore how to define GraphQL APIs that proxy to a backend GraphQL server. 

GraphQL is a query language for APIs that gives an application client greater control over what data it retrieves in an API request when compared with a REST API request.

API Connect GraphQL support provides the ability to set rate limits and other controls using the API Gateway.

In this lab, you will explore the following key capabilities:

-   Create a GraphQL Proxy API

-   Learn about GraphQL introspection and Schema Editor

-   Test APIs by using the built-in GraphQL editor

-   Publish the API to the Portal and test

## 2. Create a GraphQL Proxy API <a name="create"></a>

1\. In a browser, enter the URL for the Platform Navigator that is provided by your instructor.

2\. Select the **Enterprise LDAP**:

![alt text][pic0]

**Note:** You may get a warning message that your connection is not private. If you get this message, you can add an exception.  

To add an exception in the Chrome browser, click **Advanced** and then click **Proceed** to the URL.

![alt text][pic1]

![alt text][pic2]

To add an exception in the Firefox browser, click **Advanced** and then click **Accept the Risk and Continue**.

![alt text][pic3]

![alt text][pic4]

3\. When prompted, use the username and password provided to you for this lab. The username in the screenshots of this lab is chopper2.

![alt text][pic5]

4\. When you log in for the first time, you may see a **Welcome, let's get started** window. Feel free to review the contents by click **Start the tour** or by click on the **X** to close the window.

![alt text][pic6]

5\. From the home screen, navigate to the API Connect instance.  

**Note:** If you are on a different screen, click on **IBM Automation** in the upper left.

![alt text][pic7]

6\. Click **TechCon LDAP User Registry**.

![alt text][pic8]

7\. When prompted, log in with the username and password provided to you for this lab. Click **Log in**. The username in the screenshots of this lab is chopper2.

**Note:** If you get a warning message that your connection is not private, follow the instructions in the previous section.

![alt text][pic9]

8\. When you log in for the first time, you may see a **Get started** window. Feel free to review the contents and close the window.

9\. Confirm that you are in the provider organization for your username (upper right) and then click on **Develop APIs and products**.

![alt text][pic10]

10\. We are now able to begin to create APIs and Products.  Click **Add**.

![alt text][pic11]

11\. Click **API (from REST, GraphQL or SOAP)**.

![alt text][pic12]

12\. Click **From existing GraphQL service (GraphQL proxy)** under **Import** and click **Next**.

![alt text][pic13]

13\. Enter the following values and click **Next**. You can accept the default values for the rest of the fields.

- Title:  accounts
- GraphQL server URL:  https://graphql-test-server.us-east.cf.appdomain.cloud/accounts/graphql

![alt text][pic14]

14\. The schema validator reports warning and errors if found. There are two warning in the accounts schema imported from the server. You can review the schema warning details and also select the end points interested for this proxy. Select all the available end points. Click **View**.

![alt text][pic15]

15\. A review of the schema shows that no limits are set on the size of the lists. You will fix these warnings in later steps. Click on the **X** to close the window.

![alt text][pic16]

16\. Click **Next** to continue.

![alt text][pic17]

17\. Make sure both **Secure using Client ID** and **CORS** are selected and click **Next**.

![alt text][pic18]

18\. API Connect successfully created a GraphQL proxy API. You can edit the API to view more details on the proxy API just created. Click **Edit API** to continue.

![alt text][pic19]

19\. GraphQL APIs are structured the same as REST APIs with some additional options. Just like REST APIs, you will be able to add security definitions, properties and activity logs from the left menu bar. 

You can also view the Source and Assemble tabs similar to REST APIs. You will notice a new tab for GraphQL APIs. 

Click on **GraphQL Schema** tab to view the schema.

![alt text][pic20]

20\. The GraphQL Schema editor displays Type and Weight information. The weighting factor is used when calculating the type cost for a request to the GraphQL API. For example, a field that requires extensive CPU or memory use on the server to retrieve its value would be given a higher cost.

![alt text][pic21]

21\. Click on the **Warning** icon to review the warning details for Query and Account. 

![alt text][pic22]

22\. The Warnings window gives us the option to fix the warning by applying the limits. You can either click Apply for each warning or click Apply All to fix both warnings. Click **Apply all**.

![alt text][pic23]

23\. You will see a summary of the suggestions. Click **Apply**.

![alt text][pic24]

24\. After applying the recommendations, you will no longer see any warning messages.  Click **Save** to save the API definition.

![alt text][pic25]

Once saved, you will see an indicator window appear that shows that **Your API has been updated**.  Click on the **X** to close the window.  You should no longer see the warning indicator.

![alt text][pic26]

25\. Select the **Gateway** tab to view the API. The flow is automatically created as part of the initial API creation. You may apply addition logic by dragging and dropping items from the pallet to the canvas. In this lab, we will not be adding additional logic.

![alt text][pic27]

![alt text][pic28]

26\. To publish the API, toggle the switch from offline to online.

![alt text][pic29]

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
[pic26]: images/26.png
[pic27]: images/27.png
[pic28]: images/28.png
[pic29]: images/29.png

## 3. Test the API <a name="test_api"></a>

In the API Designer, you have the ability to test the API immediately after creation in the Assemble view!

1\. You will see an indicator window appear that shows that **Your API has been updated**. Click on the **X** to close the window. You should see that the API is now Online.

![alt text][pic30]

2\. Click on the **Test** tab. **Note:** Issues have been noted with the Safari browser.

![alt text][pic31]

3\. For the **Request**, select the request that begins with **GET** and ends in **../accounts/graphql**.

![alt text][pic32]

4\. The API Connect Test feature also includes a GraphQL Editor. Enter the following in GraphiQL Editor window. You may use Prettify option to view formatting string.

```
{
  accounts(limit: 2) {
    name {
      first
      last
    }
  }
}
```
![alt text][pic33]

**Note:** You may get a **No response received** popup. Click **Here**.

![alt text][pic34]

This will take you to the GraphiQL editor.

![alt text][pic35]

You may need to add a security exception. To add an exception in the Chrome browser, click in the whitespace of the page.

![alt text][pic36]

Blindly type **thisisunsafe**.  This should direct you to a new page that states **401 - Unauthorized**.

![alt text][pic37]

To add an exception in the Firefox browser, click **Advanced** and click **Accept the Risk and Continue**.

![alt text][pic38]

![alt text][pic39]

This will direct you to a new page that states **401 - Unauthorized**.

![alt text][pic40]

You could run the query from this editor. However, you would need to input the Client ID.

5\. Navigate back to the **API Connect** browser window.

6\. Click the **Execute Query** icon.

![alt text][pic41]

7\. The results for GraphQL request are displayed on the right panel. In the request we limited the values to 2, so only two accounts are displayed. 

![alt text][pic42]

8\. Change the value to 5.

![alt text][pic43]

**Note:** You may get a **No response received** popup. Click **Here**.

![alt text][pic34]

This will take you to the GraphiQL editor.

![alt text][pic35]

9\. In the previous test example, we used the GraphiQL editor that is part of the test feature. In the next step, we will use this GraphiQL editor. Navigate back to the **API Connect** browser window.

10\. Click on the **Parameters** tab.

![alt text][pic44]

11\. Copy the **X-IBM-Client-Id**.

![alt text][pic45]

12\. Navigate to the **GraphiQL editor** window.

Paste the Client ID that you copied in the previous step into the **Client ID** field and click **Set credentials**.

![alt text][pic46]

13\. Enter the following into the GraphiQL editor and click on the **Execute Query** icon.

```
{
  accounts(limit: 5) {
    name {
      first
      last
    }
  }
}
```

![alt text][pic47]

14\. You will see 5 accounts are returned in the results window.

![alt text][pic48]

15\. You can request additional data fields (refer to the schema editor for details). GraphQL may reject if certain fields are locked or prohibited. To test this, enter CreditCard information in the request field and click **Execute Query**.

```
{
  accounts(limit: 2) {
    name {
      first
      last
    }
    shippingAddress {
      building
      street
    }
  }
  creditCard {
    number
    expirationDate
  }
}
```

![alt text][pic49]

16\. You will notice that an error message is displayed in the results window instead of the account values as the server restricts the query field creditCard.

![alt text][pic50]

17\. Submit another request to get account and shipping address details and click **Execute Query**.

```
{
  accounts(limit: 2) {
    name {
      first
      last
    }
    shippingAddress {
      building
      street
      state
      zip
    }
  }
}
```
![alt text][pic51]

18\. This time values are returned without errors.

![alt text][pic52]

[pic30]: images/30.png
[pic31]: images/31.png
[pic32]: images/32.png
[pic33]: images/33.png
[pic34]: images/34.png
[pic35]: images/35.png
[pic36]: images/36.png
[pic37]: images/37.png
[pic38]: images/38.png
[pic39]: images/39.png
[pic40]: images/40.png
[pic41]: images/41.png
[pic42]: images/42.png
[pic43]: images/43.png
[pic44]: images/44.png
[pic45]: images/45.png
[pic46]: images/46.png
[pic47]: images/47.png
[pic48]: images/48.png
[pic49]: images/49.png
[pic50]: images/50.png
[pic51]: images/51.png
[pic52]: images/52.png

## 4. Create a Product<a name="create_product"></a>

In this lab, we will make the API available to developers. In order to do so, the API must be first put into a product and then published to the Sandbox catalog. A product dictates rate limits and API throttling.

1\. Navigate back to the **API Connect** browser window.

2\. Click on the **Develop** icon from the left menu bar.

![alt text][pic53]

3\. Click on the **Products** tab.

![alt text][pic54]

4\. Click on **Add** and then select **Product** from the list.

![alt text][pic55]
![alt text][pic56]

5\. Confirm that **New product** is selected and click **Next**.

![alt text][pic57]

6\. Enter **Accounts** for the **Title** and click **Next**.

![alt text][pic58]

7\. Select **accounts** and click **Next**.

![alt text][pic59]

8\. You can keep the values for the Default Plan and click **Next**.

![alt text][pic60]

9\. Select **Publish product** and confirm that **Public** is selected for **Visibility** and **Authenticated** is selected for **Subscribability** and click **Next**.

![alt text]pic61]

10\. Once the product has been published.  Click **Done**.

![alt text][pic62]

[pic53]: images/53.png
[pic54]: images/54.png
[pic55]: images/55.png
[pic56]: images/56.png
[pic57]: images/57.png
[pic58]: images/58.png
[pic59]: images/59.png
[pic60]: images/60.png
[pic61]: images/61.png
[pic62]: images/62.png

## 5. Test GraphQL API from the Developer Portal<a name="test_api_portal"></a>

1\. Click on the **Manage** icon from the left menu bar.

![alt text][pic63]

2\. Click on the **Sandbox**.

![alt text][pic64]

3\. Click on the **Catalog settings** tab.

![alt text][pic65]

4\. Click on **Portal** in the left menu bar of the Sandbox catalog.

![alt text][pic66]

5\. Copy the **Portal URL** and paste it in a new browser tab.

![alt text][pic67]

6\. The IBM API Connect Developer Portal provides consumers access to API Catalog information.  This gives application developers the opportunity to explore and test APIs, register applications, and subscribe to Plans. 

A Portal Administrator can customize the look and feel to their organizational specifications. The default Developer Portal looks like the image below.  Note:  Depending on what you have published, the Products that you see may be different.

**Note:** If you get a warning message that your connection is not private, follow the instructions in the previous section.

![alt text][pic68]

7\. Some Products are visible to all users without an account depending on the Product visibility setting. Additional options are available when you log into the Developer Portal.

Click on **Sign in**.

![alt text][pic69]

8\. Enter your Username and Password you just created.  Click **Sign in**.

![alt text][pic70]

9\. IBM API Connect enforces entitlement rules to ensure that consumers are allowed to access the APIs that are being requested.  In the following steps you will register your consumer application and subscribe to an API Product.

Click on **Apps**.

![alt text][pic71]

10\. Click **Create new app**.

![alt text][pic72]

11\. Give your application a **title** (e.g., Account Demo) and click **Save**.

![alt text][pic73]

12\.  When your consumer application is registered in the IBM API Connect system, it is assigned a unique set of client credentials. These credentials must be provided on each API request in order for the system to validate your subscription entitlements. The Client Key can be retrieved anytime but the Client Secret can only be retrieved at this time.

Make note of your **Client Key** and **Client Secret** by click on the copy icon for each.  You will need the Client Secret in a future step.  Click **OK**.

![alt text][pic74]

13\. At this point, your registered consumer application has no entitlements.

In order to grant it access to an API resource, you must subscribe to a Product and Plan.

14\. Click on **API Products**.

![alt text][pic75]

15\. Click the **Accounts 1.0.0** Product.

![alt text][pic76]

16\. Click on **Select** for the **Default Plan**.

![alt text][pic77]

17\. Select the application (e.g., **Account Demo**) that you just created.  **Note:** The number of applications that you see in your environment may differ.

![alt text][pic78]

18\. Review the subscription information and click **Next**.

![alt text][pic79]

19\. Click **Done**.

![alt text][pic80]

20\.  The API Connect Developer Portal allows consumers to test the APIs directly from the website. This feature may be enabled or disabled per-API.

You should be on a screen that shows the API and Plan for the **Accounts 1.0.0** Product.  If you are not on this screen, click on **API Products** in the top navigation and select the **Accounts 1.0.0** Product.

![alt text][pic81]

21\. Click on the **accounts 1.0.0** API.

![alt text][pic82]

22\. Click on the **Try it** tab.

![alt text][pic83]

23\. For the **API Key**, enter the value that you copied for the Application **Client Key**.

![alt text][pic84]

24\. Enter account and shipping address details and click the **Execute Query** icon.

```
{
  accounts(limit: 2) {
    name {
      first
      last
    }
    shippingAddress {
      building
      street
      state
      zip
    }
  }
}
```
![alt text][pic85]

25\. You will see the results populate in the right window.

![alt text][pic86]

26\. Feel free to submit requests with different field names and watch how quickly the results are returned in the results window. If this was a REST API multiple end points will be needed to achieve the same result.

```
{
  accounts(limit: 2) {
    name {
      first
      last
    }
  }
}
```

![alt text][pic87]

[pic63]: images/63.png
[pic64]: images/64.png
[pic65]: images/65.png
[pic66]: images/66.png
[pic67]: images/67.png
[pic68]: images/68.png
[pic69]: images/69.png
[pic70]: images/70.png
[pic71]: images/71.png
[pic72]: images/72.png
[pic73]: images/73.png
[pic74]: images/74.png
[pic75]: images/75.png
[pic76]: images/76.png
[pic77]: images/77.png
[pic78]: images/78.png
[pic79]: images/79.png
[pic80]: images/80.png
[pic81]: images/81.png
[pic82]: images/82.png
[pic83]: images/83.png
[pic84]: images/84.png
[pic85]: images/85.png
[pic86]: images/86.png
[pic87]: images/87.png

## 7.Summary <a name="summary"></a>

Congratulations, you have completed the **Creating a GraphQL Proxy API** lab. Throughout the lab, you learned how to:

-   Create a GraphQL Proxy API

-   Learn about GraphQL introspection and Schema Editor

-   Test APIs by using the built-in GraphQL editor

-   Publish the API to the Portal and test

### [Return to main APIC lab page](../../APIC-labs-new/Overview/)
