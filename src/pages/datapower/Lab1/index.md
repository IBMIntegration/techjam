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





