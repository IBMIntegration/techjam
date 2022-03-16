---
title: Secure Multi-Protocol Gateway – Loopback Hello World Lab
---


# What is a Multi-Protocol Gateway?

It is a gateway that can accept client-oriented messages in various protocols.  The service can then pass messages to a remote server with various protocols.  The protocol that the client uses does not need to be the same as the protocol that the remote server uses.  An example, the client sends a message in https to the DataPower’s DataPower Multi-Protocol Gateway and the DataPower Multi-Protocol Gateway converts the message to http to pass to the remote internal server that sends it to various remove internal servers.  By converting the message to http, none of the internal servers will have the overhead of decrypting the message.

## 1. Log in to Datapower

-  User Name:  admin
-  Password:  	admin123
-  Domain:	default
-  Graphical Interface:	WebGUI

![alt txt](images/1.png)

## 2. Create a Domain

1. In the Search entry field, type Application Domain and click on Application Domain   

    ![alt txt](images/2.png)

2. From the Configure Application Domain page, click on the Add button

    ![alt txt](images/3.png)


3. In the Configuration Application Domain page, 
   -  In the Name field, enter mpgw.hello.world
   -  Press the Apply button
   -  Click on Save Configuration
    
    ![alt text](images/4.png)

4. Switch to the mpgw.hello.world domain

    ![alt text](images/4.png)

## 3. Get the IP Address
   1. In the Search entry field, type Network Interfaces and click on Network Interfaces
        ![alt text](images/5.png)
   2. In the Network Interfaces page, do the following:
      1. Look the IP address in the eth0 row
      2. For this DataPower, eth0’s IP address is 172.30.167.156
        ![alt text](images/6.png)

## 4. Generate a Key
   1. In the Search entry field, type Crypto Tools
   2. Click on Crypto Tools
        ![alt text](images/7.png)
   3. From the Crypto Tools page and Generate Key tab 
      1. In the Common Name (CN) field, enter Hello.World
      2. Toggle Export Private Key from off to on
      3. Click Generate Key button
        ![alt text](images/8.png)
   4. From the Execute Action dialog box, click Confirm button
        ![alt text](images/9.png)
   5. Close the Execute Action Confirmation dialog box, click on Close
        ![alt text](images/10.png)
   6. In the Crypto Tools window, click on the Save Configuration button
        ![alt text](images/11.png)

## 5. Download the Certificate
   1. In the Search entry field, type File Management and click on File Management
        ![alt text](images/12.png)
   2. In the File Management window, click on the ”+” temporary:
   3. Right Click on the file to Download
        ![alt text](images/13.png)

## 6. Configure Crypto Identification Credentials
   1. In the Search entry field, type Crypto Identification Credentials and click on Crypto Identification Credentials
        ![alt text](images/14.png)
   2. In the Configure Crypto Identification Credentials window, press the Add button
        ![alt text](images/15.png)
   3. In the Configure Crypto Identification Credentials window, 
      1. In the Name field, type HelloWorldCryptoIDCreds.RGI
      2. In the Crypto Key field, select Hello.World
      3. In the Certificate, select Hello.World
      4. Press the Apply button
   4. In the Configure Crypto Identification Credentials window, click on the Save Configuration button
        ![alt text](images/16.png)

## 7. Create A TLS Server Profile
   1. In the In the Search entry field, type TLS Server Profile and click on TLS Server Profile
        ![alt text](images/17.png)
   2. In the Configure TLS Server Profile window and Main tab, 
      1. In the Name field, enter HelloWorldTLSServerProfile.your initials
      2. In the Identification credentials, select HelloWorldCryptoIDCreds.your initials
      3. Press the Apply button
   3. In the Configure TLS Server Profile, click on the Save Configuration button.
        ![alt text](images/18.png)

## 8. Create a Multi-Protocol Gateway
   1. In the Search entry field, type Multi-Protocol Gateway and click on New Multi-Protocol Gateway
        ![alt text](images/19.png)
   2. In the Configure Multi-Protocol Gateway window and Main tab, 
      1. enter the following values:
         1. Name field:  HelloWorld-MPGW
         2. Type field:  dynamic-backends
      2. Toggle Propagate URI to off
        ![alt text](images/20.png)
   3. In the Configure Multi-Protocol Gateway window and Main tab, Click on the “+” button and select HTTPS Handler for the Front Side Protocol:
        ![alt text](images/21.png)
   4. In the Configure HTTPS Handler window Enter the following values:
      1. Name field:  HelloWorld-HttpsHandler
      2. Port field:  {Port you were assigned}
   5. In the TLS server type field, select Server Profile
   6. In the TLS server profile, select HelloWorldTLSServerProfile
   7. Press the Apply button
        ![alt text](images/22.png)
   8. In the Configure Multi-Protocol Gateway window and Proxy tab, select the following values:
      1. Response Type field:	XML
      2. Request Type field:  	XML 
        ![alt text](images/23.png)
   9. In the Configure Multi-Protocol Gateway window and Main tab, press the Apply button
   10. In the Configure Multi-Protocol Gateway, click on the Save Configuration button
        ![alt text](images/24.png)
   11. In the Search entry field, type Policy and click on Multi-Protocol Gateway Policy
        ![alt text](images/25.png)
   12. In the Configure Multi-Protocol Gateway Style Policy, click on the Add New Policy button
        ![alt text](images/26.png)
   13. In the Configure Multi-Protocol Gateway Style Policy window,
       1.  In the Policy Name field, type HelloWorld-Policy
       2.  Click on New Rule button
       3.  Toggle Rule Direction to Client to Server
       4.  Drag the Advanced button ![alt text](images/27.png) to the right of the Match button ![alt text](images/28.png)
       5.  Drag the Results ![alt text](images/29.png) button to the right of the Advanced button
       6.  Double click on the Match button ![alt text](images/28.png)

![alt text](images/30.png)

   14. In the Configure a Match Action window, click on the “+” button
   15. In the Configure Matching Rule window, 
       1.  In the Name field, type HelloWorldMatchAll
       2.  Click on the Add button
   16. In the Edit Rules window, 
       1.  Confirm Matching Type is URL
       2.  In the URL match field, type *
       3.  Press the Apply button
   17. In the Configure Matching Rule window, 
       1.  Press the Done button

![alt text](images/31.png)

   18. In the Configure Multi-Protocol Gateway Style Policy window,
       1.  Double click on the Advanced button ![alt text](images/27.png)
   19. In the Configure Action window, select the Set Variable option and press the Next button

![alt text](images/32.png)

   20. In the Configure Multi-Protocol Gateway Style Policy window,
       1.  Select Input for Context
       2.  For Variable Name,
           1.  In the pulldown selection, select var://
           2.  In the text field, type service/mpgw/skip-backside
           3.  In the Variable Assignment, type 1
       3.  Press the Done button

![alt text](images/33.png)

## 9. Install and Configure PostMan

   1. Download and Install Postman https://www.postman.com/downloads/
   2. Configure the certificate by selecting on the gear button ![alt text](images/34.png) then Settings.  
       ![alt text](images/36.png)
   3. In the Settings window, switch to the Certificates tab and click on the Select File under CA Certificates.
       ![alt text](images/35.png)
   4. Close the Settings window by clicking on the “X”

 
## 10. Create a New Test in Postman

   1. Create a new tab by clicking on the “+” by the Overview tab.
        ![alt text](images/37.png)
   2. Select the test type to POST underneath Untitled Request.
   3. In the Enter request URL, type `<<Your IP address>>:<<port>>`
   1. Switch Input format to XML
   2. Switch to the Body tab and type: 	
        ```
        <Request>
        <Message>
        Hi
        </Message>
        </Request>
        ```
   3. Press Send
   4. If you get a message certificate does not match host, press ignore
   5. Verify your Body looks like below.

![alt text](images/38.png)

