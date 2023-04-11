---
title: Lab 3 - Deploy an MQ Uniform Cluster on CP4I
---
[Return to main lab page](../../MQ-Labs/Overview/)

## Configure and deploy an MQ Uniform cluster in CloudPak for Integration.

In this lab you will deploy an MQ Uniform Cluster in CP4I. The MQ Operator is not "uniform cluster aware" but you can easily configure a uniform cluster by providing INI and MQSC files to new queue managers deployed by the operator.

* #NOTE: PRE-REQUISITE
  Make sure that you have an MQ Client installed in your local machine.
  They can be downloaded from:

  - Windows:
    https://www.ibm.com/support/fixcentral/swg/doSelectFixes?options.selectedFixes=9.3.0.0-IBM-MQC-Win64&continue=1
  - Linux:
    https://www.ibm.com/support/fixcentral/swg/doSelectFixes?options.selectedFixes=9.3.0.0-IBM-MQC-LinuxX64&continue=1
  - MacOS
    https://developer.ibm.com/tutorials/mq-macos-dev/

    Follow any configuration instructions of the mq client after installation.


* #NOTE: FILES REQUIRED FOR THIS LAB
All files required for this lab can be downloaded from:
https://github.com/IBMIntegration/techjam/tree/master/src/pages/mq/2023_Lab4/_labfiles

1. Log into the OCP console
2. Click on the (+) icon at the top right of the Openshift console and paste the contents of the configmap-unicluster-ini.yaml file included in this lab.

![](images/1_ocpconsole_newfile.png)

3. Replace the namespace with your namespace (e.g. "cody01") and also replace it in the Conname parameter values and then click Create.

![](images/2_change_namespace.png)

4. Click the plus sign once more to import the configmap-unicluster-qm1-mqsc.yaml file as shown in the following screenshot.

![](images/3_importmqsc.png)

5. Replace the namespace with your own namespace and also place it in the CONNAME parameter within the MQSC file.

![](images/4_replacenamespamqsc.png)

6. Repeat the same process to import the configmap-unicluster-qm2-mqsc.yaml and configmap-unicluster-qm3-mqsc.yaml files.
7. After clicking on Configmaps under the Workloads section in the left menu bar you should see the configmaps that where created by importing the files

![](images/5_allconfigmaps.png)

8. Switch to the Platform Navigator console, log in and then click on Integration Instances.

![](images/6_integrationinstances.png)

9. Click on Create an Instance.

![](images/7_createii.png)

10. Click on Messaging.

![](images/8_messagingnext.png)

11. Click on QuickStart

![](images/9_quickstart.png)

12. Type unicluster-qm1 as name, accept the license and toggle the Advanced Settings switch.

![](images/10_namelicense.png)

13. Scroll down to the INI section. Click on Add+ to add items to the section. Type AutoCluster.ini in the Advanced:Items text box and press Enter. A gray bouble shoud appear arund the text). Then select unicluster-ini in the Advanced:Name selection box.

![](images/11_uniclusterini.png)

14. Scroll further down into the MQSC section and click on Add+. Type UniCluster.mqsc in the Advanced:Items section and press Enter and then select unicluster-qm1-mqsc in the Advanced:Name selection box. Finally, type QM1 as the queue manager name and click create on the top right

![](images/12_mqsc.png)

15. Repeat the process for another queue manager called QM2. Make sure you select the corresponding mqsc configmap.
16. You should end up with two running queue managers.

![](images/13_2qm.png)

The INI and MQSC cofigmaps you provided included the configuration so that a Uniform cluster is created between both queue managers. Unlike traditional MQ queue managers where you have to select a couple a full repositories and then manually create channels and add additional queue managers by starting the channeles, a Uniform Cluster has automatic dynamic configuration. New queue mananagers just need to boot up and they will be automatically added to the cluster.

17. Go back to the OCP console. Under workloads select pods and type Uni in the filter text box.
    You should see the two queue managers running. Click on the first queue manager.

![](images/14_qmpods.png)

19. Click on Terminal

![](images/15_terminal.png)

20. Type runmqsc and then type DISPLAY QMGR REPOS

![](images/16d_displayrepo.png)

It will show that that queue manager is a full repository for a cluster called UNICLUSTER (which was defined in the INI file)

20. Type DISPLAY CHANNEL(UNI*)

![](images/17_displaychannel.png)

It will show a Cluster receiever and a cluster sender channel. Those are the channels connecting the two queue managers.

21. Repeat the queue manager creation process once again in the Platform Navigator console but for a queue manager called QM3. Make sure you select the corresponding mqsc configmap when required.
22. Go back to the OCP console and select Pods. You should now see 3 pods.

![](images/18_3qms.png)

23. Click on the qm3 pod and go into the terminal
24. Type runmqsc and then type DISPLAY QMGR REPOS and then DISPLAY CHANNEL(UNI*)

![](images/19_displayrepo.png)

You will see that now the REPOS parameter is empty. This is because the new queue manager is not a ful repository for the cluster. You will also see that now there are 3 channels. One cluster receiver with its name and two cluster senders connecting it to the other two queue managers.

Now we will allow external connectivity into the cluster so that you can connect an mq client running in your laptop to the queue manager uniform cluster.
On Lab #2 we created an OCP route and TLS on MQ to connect to the queue manager. Now we are going to take another approach. We will be creating a LoadBalancer object and will not be using TLS.

With this approach each queue manager will have its own external IP address. Even though we will be creating a LoadBalancer there will be no loadbalacing performed by an external load balancer into the pods as each queue manager pod is unique. It is the quemanagers themselves who balance the client connections in to them once a client connects to any of them. The client is aware of the ip addresses of each queue manager by using a CCDT file.

25. Import the  unicluster-qm1-lb.yaml, unicluster-qm2-lb.yaml and unicluster-qm1-lb.yaml files

![](images/20_importlbyaml.png)

26. In the OCP console click on services within the Networking section in the left menu and type -lb in the filter text box. Click on the unicluster-qm1-lb service.

![](images/21_lblist.png)

27. You will see that it has an external IP address assigned. Take note of it.

![](images/22_getip.png)

Do the same to get the ip address of the unicluster-qm2-lb service.

28. Edit the ibm-mq-ccdt.json file and replace the two exiting IP addresses with the two ip address you got from your service instances. Note that they are repeated once more. This is because the client shoudl be able to  connect by either providing a specific queue manager name (with no load balancing nor failover) or providing a wildcard name.

![](images/23_ccdt.png)

29. In your laptop open a new terminal window and run the following commands replacing "*path-to-ccdt*" with the folders where you downloaded the ibm-mq-ccdt.json file:
    Note: If your laptop is running MacOS Catalina or later run the bash command. This is because the fault command shell (zsh) has issues when typing "*" as part of command.

![](images/24_bashexport.png)

```
export MQCCDTURL='/path-to-ccdt/ibm-mq-ccdt.json'
```

30. Run the follwing command in the terminal window:

    ```
    amqsputc Q1 *ANY_QM
    ```

    The sample program amsputc will put the messages to queue **Q1** . These messages should still be available after a failover.
    Type a few messages and press Enter after each one. Type another message and press Enter twice to disconnect from the queue manager.

![](images/25_amqsput.png)


31. Go back to Platform Navigator and into the Intgration Instances section. Click on the unicluster-qm1 queue manager.

![](images/26_clickinstance.png)


32. Click on Queues

![](images/27_queues.png)


33. Check the queue depth of Q1. It should show the number of messages you sent from the command line using amqsputc.

![](images/28_curpdeth.png)

34. Go back to the OCP console, click in statefulsets within the Workloads section of the left menu, type Uni in the filter text box and click on the unicluster-qm1-ibm-mq statefulset

![](images/29_statefulset.png)

35. Click on the down arrow next to the wheel to scale down the statefulset to 0 pods.

![](images/30_scaledown.png)


36. Return to the terminal window on your browser and put more messages.

![](images/31_put2.png)

```
amqsputc Q1 *ANY_QM
```


37. Return the Platform Navigator intgration instances. You should see that unicluster-qm1 shows an error because we removed all pods. Click on unicluster-qm2.

![](images/32_qmlist2.png)

38. Click on Queues.

![](images/33_queues.png)

39. Check the queue depth of Q1. It should show the number of messages you sent from the command line using amqsputc. It should show the number of messages you put the second time.

Q1 exists on all 3 queue managers. Unlike Lab #1 these queue managers are not replicas of each other for HA purposes. They equal but independent queue managers. The MQ client successfuly failed over to the second queue manager when the first went down but each queue manager has it´s own set of messages. If more clients were to be connected the connections will get load balanced across all queue managers. Unifom clusters provide scaling/load balacing and continuos avaibility for new transactions. It can be combined with MQ Native HA so that data HA is provided as well. In that case each of the members of the Uniform cluster will have 2 additional passive pods.

## Congratulations

You have completed this lab for MQ Uniform clusters on CP4I.

## Chalenge

Combine all 3 MQ labs: Add Native HA to the Uniform Cluster members and configure OCP routes and TLS for each of the queue managers.
