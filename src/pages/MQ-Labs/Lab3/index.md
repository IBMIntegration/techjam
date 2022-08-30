---
title: Lab 2 - Deploy a Cloud Native HA persistent IBM MQ Queue Manager on CP4I
---
[Return to main lab page](../../MQ-Labs/Overview/)

These instructions will document the process to deploy a NativeHA highly available (HA) persistent IBM MQ on the Cloud Pak for Integration (CP4I) 2022.2.1.

## MQ Native HA Overview

A Native HA configuration provides a highly available queue manager where the recoverable MQ data (for example, the messages)  are replicated across multiple sets of storage, preventing loss from storage failures. The queue manager consists of multiple running instances, one is the leader, the others are ready to quickly take over in the event of a failure, maximizing access to the queue manager and its messages.

A Native HA configuration consists of three Kubernetes pods, each with an instance of the queue manager. One instance is the active queue manager, processing messages and writing to its recovery log. Whenever the recovery log is written, the active queue manager sends the data to the other two instances, known as replicas. Each replica writes to its own recovery log, acknowledges the data, and then updates its own queue data from the replicated recovery log. If the pod running the active queue manager fails, one of the replica instances of the queue manager takes over the active role and has current data to operate with.

A Kubernetes Service is used to route TCP/IP client connections to the current active instance, which is identified as being the only pod which is ready for network traffic. This happens without the need for the client application to be aware of the different instances.

Three pods are used to greatly reduce the possibility of a split-brain situation arising. In a two-pod high availability system split-brain could occur when the connectivity between the two pods breaks. With no connectivity, both pods could run the queue manager at the same time, accumulating different data. When connection is restored, there would be two different versions of the data (a 'split-brain'), and manual intervention is required to decide which data set to keep, and which to discard.

Native HA uses a three pod system with quorum to avoid the split-brain situation. Pods that can communicate with at least one of the other pods form a quorum. A queue manager can only become the active instance on a pod that has quorum. The queue manager cannot become active on a pod that is not connected to at least one other pod, so there can never be two active instances at the same time:

- If a single pod fails, the queue manager on one of the other two pods can take over. If two pods fail, the queue manager cannot become the active instance on the remaining pod because the pod does not have quorum (the remaining pod cannot tell whether the other two pods have failed, or they are still running and it has lost connectivity).
- If a single pod loses connectivity, the queue manager cannot become active on this pod because the pod does not have quorum. The queue manager on one of the remaining two pods can take over, which do have quorum. If all pods lose connectivity, the queue manager is unable to become active on any of the pods, because none of the pods have quorum.
- If an active pod fails, and subsequently recovers, it can rejoin the group in a replica role.

The following figure shows a typical deployment with three instances of a queue manager deployed in three containers.

![](./images/image00.png)

## Deploy the MQ Queue Manager with associated resources

Instead of creating the queues, channels and security settings manually as we did in the previous lab we will provide a configmap that will be used the MQ operator to create/configure all those objects on pod startup.

  The hyperlink to the OpenShift Console for the cluster should be included in your email. Navigate to the OCP console now.

1. Click on the (+) icon at the top right of the Openshift console and paste the contents of the nativehamqsc.yaml file included in this lab. Edit the configmap name prepending your your userid. Also prepend your username in front of both of the occurences of the EXTERNALCHL channel name. In this example we are prepending*cody01*. Use you own user name. After all 3 edits are made click Create at the bottom of the screen.

![](assets/20220710_163056_createconfigmap.png)

  The hyperlink to the Platform Navigator Console for the cluster should be included in your email. Navigate to the Platorm Navigator now.

2. When presented with the "Log in to IBM Automation", click *Enterprise LDAP*. Enter the userid and password that you received in your email and click *Login*. Remember to use your credentials, not the ones in the screen shot.

   ![](assets/20220709_221547_0.png)

3. Click on *Integration Instances*.

   ![](assets/20220710_154139_cp4ihome.png)

4. Click *Create an Instance*.

   ![](assets/20220709_222334_instances.png)

5. Select *Messaging* and click *Next*.

   ![](assets/20220709_221720_createMQ.png)
6. Click select *Quick start* and then click *Next*.

   ![](assets/20220709_221803_createqm.png)

7. Type mq-<<`<your user id>`user user id>>-ha as Name. For example *mq-cody01-ha* and click on the License acceptance checkbox.

   ![](assets/20220709_221911_qmname.png)

8. Scroll down and select NativeHA as type of availability, one of the compatible block storage classes for Default storage class (for example *ibmc-block-gold* in IBM Cloud or *ocs-storagecluster-ceph* for self-managed clsuters) and persistent-clain as Type of volume.

![](assets/20220709_222000_qmavail.png)

9. Click on the*Advanced settings* toggle to show additional properties. Then scroll down to PKI.

![](assets/20220710_155446_advancedpki.png)

10. Type*keystore* as name. Then type*tls.key* in the Items text box and press Enter. Type*tls.crt* and press enter again. Finally select*mq-tls-secret* from the Secret name combo box.

Note: The mq-tls-secret was previously created for your you. It holds the tls private key (tls.key) and public key (tls.crt) needed for TLS channel encryption.

![](assets/20220709_222538_pki.png)

11. Scroll down to the MQSC section. This allows you to provide a mq command script file so that MQ objects are created/configured automatically on pod startup.

12. Type nativehamqsc.mqsc and press enter in the Items text box and then select the name of the configmap you created at the step 1 of this lab in the Name drop down combo, then click*Create*.

![](assets/20220710_163759_mqsc2.png)

The new Queue Manager instance will be created.

Finally, We need to create an openshift route to allow external application to connect in the cluster using TLS.

13. Click on the (+) icon at the top right of the Openshift console and paste the contents of the mqroute.yaml file included in this lab. Edit the route prepending your your userid to the name and hostname and then click Create.

    Note: The first part of the host URL must match the name of the channel name in the queue manager (which was creted using the configmap) but all lower case. The "*.chl.mq.ibm.com*" is always fixed. It does not need to match any real domain name of the cluster. This setting is needed so that by using SNI over TLS the incomming requests can be routed not only to the correct port but also to the correct channel within the MQ pod.

![](assets/20220710_170056_mqroute3.png)

14. Click in the  Workloads->Pods menu item in the OCP console and then filter the pods by typing your username.

![](assets/20220709_223045_viewqms.png)

As expected you will see three pods for the nativeha queue manager. One of the pods has 1 of 1 containers running. Two of the pods have 0 of 1 containers running. This is the nature of nativeHA, one pod running the queue manager and data being replicated to the other two pods which are in standby mode.

### Viewing the status of Native HA queue managers

You can view the status of the Native HA instances by running the dspmq command inside one of the running Pods.

You can use the dspmq command in one of the running Pods to view the operational status of a queue manager instance. The information returned depends on whether the instance is active or a replica. The information supplied by the active instance is definitive, information from replica nodes might be out of date.
You can perform the following actions:

* View whether the queue manager instance on the current node is active or a replica.
* View the Native HA operational status of the instance on the current node.
* View the operational status of all three instances in a Native HA configuration.

The following status fields are used to report Native HA configuration status:

* ROLE
  Specifies the current role of the instance and is one of Active, Replica, or Unknown.
* INSTANCE
  The name provided for this instance of the queue manager when it was created using the -lr option of the crtmqm command.
* INSYNC
  Indicates whether the instance is able to take over as the active instance if required.
* QUORUM
  Reports the quorum status in the form number_of_instances_in-sync/number_of_instances_configured.
* REPLADDR
  The replication address of the queue manager instance.
* CONNACTV
  Indicates whether the node is connected to the active instance.
* BACKLOG
  Indicates the number of KB that the instance is behind.
* CONNINST
  Indicates whether the named instance is connected to this instance.
* ALTDATE
  Indicates the date on which this information was last updated (blank if it has never been updated).
* ALTTIME
  Indicates the time at which this information was last updated (blank if it has never been updated).

1. Click on any of the 3 pods and and then go to the Terminal tab.

![](assets/20220709_223134_terminal1.png)

2. Type*dspmq* and hit Enter to check the status of the local queue manager . You will see that in its status it'll say either Running or Replica depending on if it is the active queue manager or one of the two replicas of the Native HA cluster.

![](assets/20220709_223158_dspmq1.png)

3. Type* dspmq -o nativeha -m QUICKSTART* to display the complete hativeha status of the local queue manager. It'll show the role of the queue manager, nativeha instance name, if it is in sync with the other two replicas and the number of queue managers in quorum.

![](assets/20220709_223230_dspmq2.png)

4. Type*dspmq -o nativeha -x -m QUICKSTART* to display the complete hativeha status of all 3 queue managers in the nativeha cluster.

![](assets/20220709_223404_dspmq3.png)

We will not test every possibility, but the following are possible displays to expect. Review the possibilities.

* An active instance of the queue manager named **mq00ha** would report the following status:

  QMNAME(mq05ha)                 STATUS(Running)

  * A replica instance of the queue manager would report the following status:

    QMNAME(mq05ha)                 STATUS(Replica)

    * An inactive instance would report the following status:

      QMNAME(mq05ha)                 STATUS(Ended Immediately)
      To determine Native HA operational status of the instance in the specified pod:

    We will not test every possibility, but the following are possible displays to expect. Review the possibilities.* The active instance of the queue manager named **mq05ha** might report the following status:

    QMNAME(mq05ha)               ROLE(Active) INSTANCE(inst1) INSYNC(Yes) QUORUM(3/3)

    * A replica instance of the queue manager might report the following status:

      QMNAME(mq05ha)               ROLE(Replica) INSTANCE(inst2) INSYNC(Yes) QUORUM(2/3)

      * An inactive instance of the queue manager might report the following status:

        QMNAME(mq05ha)               ROLE(Unknown) INSTANCE(inst3) INSYNC(no) QUORUM(0/3)

    To determine the Native HA operational status of all the instances in the Native HA configuration:

    We will not test every possibility, but the following are possible displays to expect. Review the possibilities.* If you issue this command on the node running the active instance of queue manager **mq05ha**, you might receive the following status:

    QMNAME(mq05ha)			ROLE(Active) INSTANCE(inst1) INSYNC(Yes) QUORUM(3/3)
    INSTANCE(mq05ha-ibm-mq-0) ROLE(Active)  REPLADDR(mq05ha-ibm-mq-0) 					CONNACTV(Yes) INSYNC(Yes) 					BACKLOG(0) CONNINST(Yes) ALTDATE(2021-01-12) ALTTIME(12.03.44)
    INSTANCE(mq05ha-ibm-mq-1) ROLE(Replica) REPLADDR(mq05ha-ibm-mq-1) 					CONNACTV(Yes) INSYNC(Yes) 					BACKLOG(0) CONNINST(Yes) ALTDATE(2021-01-12) ALTTIME(12.03.44)
    INSTANCE(mq05ha-ibm-mq-2) ROLE(Replica) REPLADDR(mq05ha-ibm-mq-2) 					CONNACTV(Yes) INSYNC(Yes) 					BACKLOG(0) CONNINST(Yes) ALTDATE(2021-01-12) ALTTIME(12.03.44)

    * If you issue this command on a node running a replica instance of queue manager **mq05ha**, you might receive the following status, which indicates that one of the replicas is lagging behind:

      QMNAME(mq05ha)			ROLE(Replica) INSTANCE(inst2) INSYNC(Yes) QUORUM(2/3)
      INSTANCE(mq05ha-ibm-mq-2) ROLE(Replica) REPLADDR(mq05ha-ibm-mq-2) 					CONNACTV(Yes) INSYNC(Yes) 					BACKLOG(0) CONNINST(Yes) ALTDATE(2021-01-12) ALTTIME(12.03.44)
      INSTANCE(mq05ha-ibm-mq-0) ROLE(Active)  REPLADDR(mq05ha-ibm-mq-0) 					CONNACTV(Yes) INSYNC(Yes) 					BACKLOG(0) CONNINST(Yes) ALTDATE(2021-01-12) ALTTIME(12.03.44)
      INSTANCE(mq05ha-ibm-mq-1) ROLE(Replica) REPLADDR(mq05ha-ibm-mq-1) 					CONNACTV(Yes) INSYNC(No)  					BACKLOG(435) CONNINST(Yes) ALTDATE(2021-01-12) ALTTIME(12.03.44)

      * If you issue this command on a node running an inactive instance of queue manager **mq05ha**, you might receive the following status:

        QMNAME(mq05ha)			ROLE(Unknown) INSTANCE(inst3) INSYNC(no) QUORUM(0/3)
        INSTANCE(mq05ha-ibm-mq-0) ROLE(Unknown) REPLADDR(mq05ha-ibm-mq-0) 					CONNACTV(Unknown) 							INSYNC(Unknown) BACKLOG(Unknown) CONNINST(No) ALTDATE() ALTTIME()
        INSTANCE(mq05ha-ibm-mq-1) ROLE(Unknown) REPLADDR(mq05ha-ibm-mq-1) 					CONNACTV(Unknown) 							INSYNC(Unknown) BACKLOG(Unknown) CONNINST(No) ALTDATE() ALTTIME()
        INSTANCE(mq05ha-ibm-mq-2) ROLE(Unknown) REPLADDR(mq05ha-ibm-mq-2) 					CONNACTV(No) 								INSYNC(Unknown) BACKLOG(Unknown) CONNINST(No) ALTDATE() ALTTIME()

        * If you issue the command when the instances are still negotiating which is active and which are replicas, you would receive the following status:

          QMNAME(mq05ha)              STATUS(Negotiating)

      If necessary, use these commands while testing the deployment.

    ## Test the deployment

    #NOTE: PRE-REQUISITE
    Make sure that you have an MQ Client installed in your local machine.
    They can be downloaded from:


    - Windows:
      https://www.ibm.com/support/fixcentral/swg/doSelectFixes?options.selectedFixes=9.3.0.0-IBM-MQC-Win64&continue=1
    - Linux:
      https://www.ibm.com/support/fixcentral/swg/doSelectFixes?options.selectedFixes=9.3.0.0-IBM-MQC-LinuxX64&continue=1  
    - MacOS
      https://developer.ibm.com/tutorials/mq-macos-dev/

      Follow any configuration instructions of the mq client after installation.

  1. The 4 clientkey files corresponding to the certificates configured on the MQ Channel will be provided to you. Download them to a folder in your local machine.

  2. Return the Platform Navigator home page and click on on your queue manager name in the Messaging box

     ![](assets/20220710_174446_PNMessaging.png)

  3. Click on *Download Connection File*

     ![](assets/20220710_181545_connectionFile.png)

  4. Select *QUICKSTART* as channel name and your channel name and *ANY_TLS12_OR_HIGHER* as cipher spec.

     ![](assets/20220710_181912_SelectChannel.png)

  5. Click Next twice reviewing the settings without making any further changes.

     ![](assets/20220710_182202_SelectHostname.png)

  6. Click Create. Save the file to a folder in your local machine

     ![](assets/20220710_182314_CreateConnFile.png)

  7. Open a new terminal window and run the following commands replacing "*path-to-ccdt*" and *"path-to-keyfile"* with the folders where you downloaded the keyfile and connection file:

     ```
     export MQCCDTURL='/path-to-ccdt/ibm-mqha-ccdt.json'
     ```
     ```
     export MQSSLKEYR='/path-to-keyfile/clientkey'
     ```
  8. Run the follwing command in the terminal window:

     ```
     amqsputc APPQ1 QUICKSTART
     ```
     The sample program amsputc will put the messages to queue **APPQ1** which has a default persistence defined as persistent. These messages should still be available after a failover.

  9. Type any message and press Enter. Type another message and press Enter twice to disconnect from the queue manager. Remember the text of the messages you typed.

  10. In the terminal window enter the following commands replacing "*path-to-ccdt*" and *"path-to-keyfile"* with the folders where you downloaded the keyfile and connection file:

      ```
      export MQCCDTURL='/path-to-ccdt/ibm-mqha-ccdt.json'
      ```
      ```
      export MQSSLKEYR='/path-to-keyfile/clientkey'
      ```
      ```
      amqsghac APPQ QUICKSTART
      ```
      ![](assets/20220710_174848_getmsgs.png)

      The sample program amqsghac starts running and will wait for messages to arrive on queue **APPQ**.

  11. Open another terminal window and type the following command:

      ```
      amqsphac APPQ QUICKSTART
      ```
  12. The sample program amqsphac will connect to MQ and start sending messages incessantly.
  
  13. Return to the window where *amqsghac* is running. You should get a list of all the messages that have been previously sent before running the command and the ones that are being sent after.

      ![](assets/20220710_174809_QMputget.png)

  14. Go back to the OCP console and check the status of the pods:
      ![](assets/20220709_223045_viewqms.png)

  15. Delete the running pod

      ![](assets/20220710_172025_deletepod.png)

  Once the active pod is deleted, the running programs will then reconnect to the other pod for it to take over.

  ![](./images/image29.png)

  16. Return to the browser tab where OCP is open. In your project, click the drop-down for *Workloads* and select *Pods*. Enter your queue manager name in the *Name* field to filter out the rest. You will see the now a different pod is in 1/1 Ready state.

      ![](./images/image31a.png)
  17. Return the Platform Navigator home page and click on on your queue manager name in the Messaging box

      ![](assets/20220710_174446_PNMessaging.png)
  18. Click on Manage.

      ![](assets/20220710_174615_QMManage.png)
  19. Verify that queue **APPQ1** still has the number of messages you put to the queue earlier.

      ![](./images/image56.png)
  20. Click the hyperlink for the queue to verify that those are the messages you created.

      ![](./images/image57.png)

  ## Congratulations

  You have completed this lab nativeHA for MQ on CP4I.
