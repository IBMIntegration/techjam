---
title: Getting Started with IBM Event Streams 10.5.0
---

## Introduction

IBM Event Streams is based on years of operational expertise that IBM has gained from running Apache Kafka® for enterprises. IBM Event Streams offers enterprise-grade security, scalability, and reliability running on Red Hat® OpenShift® Container Platform as certified container software. Building an event-driven architecture with IBM Event Streams allows organizations to transition from traditional monolith systems and silos to modern micro-services and event streaming applications that increase their agility and accelerate their time to innovation.
IBM Event Streams builds on top of open-source Apache Kafka® to offer enterprise-grade event streaming capabilities. The following features are included as part of IBM Event Streams:  
- Identity and Access Management (IAM) offers fine-grain security controls to manage the access that you want to grant each user for Kafka clusters, Topics, Consumer Groups, Producers, and more.
- Geo-replication enables the deployment of multiple Event Stream instances in different locations and the synchronization of data between your clusters to improve service availability.
- Visual driven management and monitoring experience with the Event Streams dashboard that displays metrics collected from the cluster, Kafka brokers, messages, consumers, and producers to provide health check information and options to resolve issues.
  
IBM Event Streams enables you to adopt event-driven architectures.

## Lab Objective

The objective of this lab is to demonstrate the step-by-step process to download and install our Starter Apache Kafka application. The starter application provides a demonstration of a Java application that uses the Vert.x Kafka Client to send and receive events from Event Streams. 

The starter application also includes a user interface to easily view message propagation. The source code is provided in GitHub to allow you to understand the elements required to create your own Kafka application.
App details: https://ibm.github.io/event-streams/getting-started/generating-starter-app/

Note: The API keys generated for the starter application can only be used to connect to the topic selected during generation. In addition, the consumer API key can only be used to connect with a consumer group ID set to the name of the generated application.

## Environment used for this lab

1.	IBM Cloud Pak for Integration 
2.	Red Hat Openshift Container Platform
3.	IBM Event Streams version 10.5.0
4.	Apache Kafka 2.8.1
5.	Java version 8 or 11

## Lab Environment Pre-Requisites

•	The Cloud Pak for Integration has been deployed and the access credentials are available.
•	Java version 8 installed on local environment.
•	Apache Maven Installed on local environment.

## Getting started with IBM Event Streams

1. Log into your Event Streams instance using the student credentials provided. Once you've logged in, you'll see the Event Streams homepage.  
   ![](images/es-eem1.png) 
   
2. Select “Try the starter application” tile.
    ![](images/es-eem1a.png)
3. Create a working directory on your local drive then select the “Download JAR from GitHub” tab. You’ll want the demo-all.jar file for release 1.1.3.
   ![](images/es-eem2.png)
4. Copy the downloaded .jar file to your working directory.
   ![](images/es-eem2a.png)
5.	Now let’s generate and download our properties file. Select the “Generate properties” tab. 
    ![](images/es-eem3.png)
6.	Enter a name of your app. For guidance, the prefix should be your login ID similar to the example below (i.e. cody1app). This will help us identify which apps are running and who is the owner. Select the “New topic” tab and enter a topic name. Again, use your login ID as the prefix for your topic name. Now select the “Generate and download .zip” tab.
    ![](images/es-eem4.png)
7.	Extract the downloaded .zip file in your working directory. Copy the properties file and p12 file to your working directory. 
    ![](images/es-eem5.png)
8.	Open a terminal and navigate to your working directory. Enter the following command:
java -Dproperties_path=./ -jar demo-all.jar
    ![](images/es-eem6.png)
         	
9.	After your applications starts, open a browser, and enter:
localhost:8080 
    ![](images/es-eem7.png)
10.	Select the “Start Producing” and “Start Consuming” tabs. 
    ![](images/es-eem8.png)
11.	You should soon see messages being produced and consumed.  
    ![](images/es-eem9.png)
12.	Now, let’s check our Event Streams cluster to verify our topic creation and monitoring of the messages. To do this, go back to the Event Streams homepage. Select “Toolbox”.
    ![](images/es-eem10.png)
13.	Select “Home” to go to the EventStreams homepage.
    ![](images/es-eem11.png)
14.	Select “Topics” to see the topic you created in the Starter application. Click on your topic to see the Producers, Messages and Consumers.
    ![](images/es-eem12.png)

**Congratulations! You have successfully run your starter application.**

## Learning summary

In summary, you have learned the following in this lab:
- Run an Apache Kafka Java application that has both a producer and consumer.
- View consumer and producer message traffic in IBM Event Streams console.
- Specifying the topic within IBM Event Streams and then connecting an Apache Kafka application to produce and consume messages to and from that topic.

