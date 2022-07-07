---
title: Lab 1 - Creating an MQ Instance Using the Platform Navigator
---
[Return to main lab page](../../MQ-Labs/Overview/)

Starting with this lab, each attendee will be assigned an ID number (01 - 30) by the instructor if running a PoT. If running this lab independently, use ID number 00. During a PoT the instructor will always be ID 00.

## Getting Started with MQ on Cloud Pak for Integration

These instructions document how to setup MQ within Cloud Pak for Integration which is accessible from within the OpenShift Cluster. The instructions have been created using a a Red Hat OpenShift environment deployed on bare metal servers on IBM Cloud however the processa should be similar on other environments.

## Deploying IBM MQ for internal consumers

1. Open the *Platform Navigator*. Click the *Enterprise LDAP* hyperlink.

   ![](./images/image206.png)
2. Enter the user name and password that was provided in your email to log on.
3. The *IBM Automation* page appears. This is also referred to as the *Integration Platform Navigator*. Click the up arrow on right side of page to close the upper half saving screen space.

   ![](./images/image207.png)
4. Click *Create runtime* to display the various runtimes available in CP4I.

   ![](./images/image208.png)
5. A number of tiles are displayed. Click the *Messaging* tile, then click *Next*.

   ![](./images/image209.png)
6. You will use the option called **Quick start** which will deploy an MQ container with 1 cpu, 1 GB of memory, and measured at 0.25 vpc (Virtual Processor Core). Click the *Quick start* tile then click *Next*.

   ![](./images/image210.png)
7. On the *Create queue manager* configuration page, enter "mq" plus your student number as a prefix to the Name *quickstart-cp4i* and use the drop-down under *Namespace* to select your student namespace. Click the License acceptance button to turn it on.

   ![](./images/image211.png)
8. Scroll down to *Queue Manager* section. Using the drop-down under *Type of availability* select **SingleInstance**. Under *Type of volume* leave the default **ephemeral**. You have a choice between ephemeral or persistent-claim. Ephemeral means that the queue manager does not maintain state so does not need persistent-storage.

   ![](./images/image104.png)

   Do NOT click Create yet. You need to name your queue manager.

   ![](./images/image105.png)
9. On the left side bar, click the button under *Advanced settings* to expose more settings. You may need to scroll to find the *Queue Manager* section again. Under *Advanced: Name* field you see the default **QUICKSTART**. Replace this with your queue manager name using your student ID and qs, ie **mq00qs**.

   Now click *Create*.

   ![](./images/image212.png)
10. If all entries are valid, you will receive a notification of success in green. Any errors result in a notification in red. Status remains *Pending* while the queue manager is being provisioned. If you click *Pending* you may receive a *Conditions* pop-up. Close the pop-up.

    ![](./images/image8a.png)

    Click the *IBM Cloud Pak for Integration* hamburger menu on the left side bar then select **Integration Home** to return to the *Platform Navigator*.

    ![](./images/image221.png)
11. Your queue manager now appears in the *Messaging* tile.

    ![](./images/image222.png)

<a name="mqconsole"></a>

### Start MQ Console

1. In the navigator under *Integration Runtimes* and your queue manager shows a *Ready* status, you can now click the hyperlink to open the MQ console for your queue manager. The runtime instance shows *mq00-quickstart-cp4i*, but that is not your queue manager name. You named it **mq00qs**.

   ![](./images/image223.png)

   If you receive a potential security risk warning. Click *Advanced* then *Accept the risk* as you did before.

   The MQ Console looks nothing like MQ Explorer. It doesn't even look like earlier versions of MQ Console. Feel free to poke around (or click around) and explore the various tiles and side bar menus. When you are ready, continue to the next step - creating a queue.
2. Click the *Create a queue* tile.

   ![](./images/image224.png)
3. A number of tiles are displayed for the different queue types. Behind each tile are the properties for that particular queue type. Click the tile for a *Local* queue.

   ![](./images/image225.png)
4. Only the required basic options are displayed with the required field *Queue name*. If you need to alter or just want to see all available options, you can click the *Custom create* tab. For now, just enter the name for the test queue **app1** and click *Create*.

   ![](./images/image226.png)
5. An MQ channel needs to be defined for communication into MQ. Click the *Manage* option.

   ![](./images/image227.png)
6. Select the *Communication* tab, click *App channels*, then click *Create +*.

   ![](./images/image228.png)
7. Read the definition, then click *Next*.
8. To keep it simple enter the name of your queue manager (mq00qs for the instructor) so that the channel name matches the queue manager name. *Custom create* tab lets you provide detailed properties. Click *Create*.

   ![](./images/image229.png)
9. You receive a green success message and the channel appears in the list.

   ![](./images/image230.png)
10. By default MQ is secure and will block all communication without explicit configuration. We will allow all communication for the newly created channel. Click on *View Configuration* in the top right corner:

    ![](./images/image231.png)
11. Click the *Security* tab, *Channel authentication* section, then click *Create +*.

    ![](./images/image232.png)
12. We will create a *channel auth* record that blocks nobody and allows everyone. Select **Block** from the pull down, and click the *Final assigned user ID* tile.

    ![](./images/image233.png)
13. For *Channel name* enter the channel name you just created. Scroll down and type  **nobody** in the *User list* field then click the "+" sign to add it.

    ![](./images/image234.png)
14. Click *Create* to add the record.

    ![](./images/image235.png)
    You will receive a green succes notification and the record appears in the list.

    ![](./images/image236.png)

## Test MQ

MQ has been deployed within the Cloud Pak for Integration to other containers deployed within the same Cluster. This deployment is NOT accessible externally. Depending on your scenario you can connect ACE / API Connect / Event Streams, etc to MQ using the deployed service. This acts as an entry point into MQ within the Kubernetes Cluster. Assuming you followed the above instructions within the deployment the hostname will be of the form mq00qs-cp4i-ibm-mq. To verify the installation we will use an MQ client sample within the deployment.

1. Return to the OCP Console. Make sure you are in the *mqxx* namespace, by clicking *Projects*, typing **mq** in the filter field to find *mqxx* and clicking its hyperlink.

   ![](./images/image237.png)
2. Once in the *mqxx* namespace, click the drop-down for *Workloads* then select *Pods*. You will see the one pod for your MQ instance. You will see that the *Status* is **Running** and there are three containers running in this pod. You will also see a pod for registering your instance with the Operations Dashboard (tracing) that has been completed.

   ![](./images/image238.png)
3. Click the hyperlink for the pod. Now you will see quite a bit of details about the pod. Explore the details where you find graphs for memory and cpu usage, filesystem and network. Scroll down and you will find the containers and volumes. From this panel you can drill down into any of these. But for now, you need to run a test. Click the *Terminal* tab which will automatically log you into the Queue Manager container.

   ![](./images/image239.png)
4. Run the following commands to send a message to the **app1** queue. Don't forget to replace 00 with your student ID.

   ```
   export MQSERVER='mq00qs/TCP/mq00-quickstart-cp4i-ibm-mq(1414)' 
   ```

   The format of this environment variable is :
   *channel name / TCP / host name (port)*

   The host name is actually the network service for your queue manager instance.

   ```
   /opt/mqm/samp/bin/amqsputc app1 mq00qs
   ```

   This command is putting a message on queue **app1** on queue manager **mq00qs**.
   Type a message such as:'

   ```
   sending my first test message to qm mq00qs queue app1
   ```

   Hit enter again to end the program.

   ![](./images/image240.png)
5. Return to the MQ Console and navigate back to the queue manager view by clicking on *Manage*.

   ![](./images/image241.png)
6. Notice the **app1** queue has a queue depth of 1 with a maximum queue depth of 50,000. Select the *app1* queue.

   ![](./images/image242.png)
7. Click the hyperlink for queue **app1**. Here you see the messages on the queue. You will recognize your message under *Application data* along with application name and time stamp.

   ![](./images/image243.png)

Congratulations! on completing Lab 2.

## Cleanup

1. Return to the Platform Navigator. Under *Runtimes* find your instance, click the elipsis on the right and select **Delete**. This will delete the queue manager pods and all related artifacts. This will help reduce load on the cluster as you continue the rest of the labs. This queue manager will not be needed again.

   ![](./images/image244.png)
2. You will be required to enter the name of your instance. Then the *Delete* button becomes active. You must now click the *Delete* button.

   ![](./images/image245.png)
3. Your instance is now gone and you will receive a success pop-up.

   ![](./images/image246.png)
