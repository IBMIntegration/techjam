---
title: ACE Integration Server Autoscaling on CP4I
---
[Return to main lab page](../../acelabs/Overview/)

---

# Introduction

The purpose of this LAB is to show how to configure autoscaling of Integration Server instances based on cpu utilization.

## Deploy the an Integration Server on CP4i

1. Log in to Platform Navigator with your assigned user id.

   ![](images/1_loginCP4i.png)
2. Click on the Ace Dashboard intance under Integrations. Note: It migh have a different name  than the one in the screenshot in the cluster you are using.

   ![](images/2_Integrations.png)
3. Click on the Dashboard icon

   ![](images/3_dashoard.png)
4. Click on Create Server

   ![](images/4_createserver.png)
5. Click on Quick Start Integration and then click Next

   ![](images/5_quickstart.png)
6. Select the HellowWorld bar file from the dropdown selection box and then click Next

   ![](images/6_selectHellow.png)
7. Click on Next in the Configurations step

   ![](images/7_confnext.png)
8. Rename the integration server to is-helloworld-`<your userid>`. For example is-helloworld-cody01

   ![](images/8_renameIS.png)
9. Click on the Advanced Settings toggle switch on the left so it turns green.

![](images/9_advancedSettings.png)

10. Scroll down and reduce  cpu limit and cpu request to 200m. We are doing doing this so it'll be easier to reach target resource usage limit for autoscaling. Once you are down changing the values click Create on the top right.

![](images/10_limits.png)

11. Wait until the Integration Server is ready. It might take a minute or two. You may need to refresh your browser window to confirm that it is ready.

![](images/11_waitready.png)

12. Open the OpenShift console in an new browser window or tab and go to Workloads->pods on the left menu bar. Once in the pod list type is-hello as filter and look for your Integration Server name. You should see just one pod for your Integration Server.

![](images/12_pods.png)

13. Click on the (+) sign on the top right of the Openshift Console to import a yaml file. Insert the following yaml, append your userid to the name and to the name of the target referece:

![](images/13_importyaml.png)

For CP4I 2022.2 or earlier:
```
kind: HorizontalPodAutoscaler
apiVersion: autoscaling/v1
metadata:
  name: helloworldhpa
  namespace: cp4i
spec:
  scaleTargetRef:
    kind: IntegrationServer
    name: helloworld
    apiVersion: appconnect.ibm.com/v1beta1
  minReplicas: 1
  maxReplicas: 4
  targetCPUUtilizationPercentage: 20
```
For CP4I 2022.4 or later
```
kind: HorizontalPodAutoscaler
apiVersion: autoscaling/v1
metadata:
  name: helloworldhpa
  namespace: cp4i
spec:
  scaleTargetRef:
    kind: IntegrationRuntime
    name: helloworld
    apiVersion: appconnect.ibm.com/v1beta1
  minReplicas: 1
  maxReplicas: 4
  targetCPUUtilizationPercentage: 20
```

This creates a Horizontal Pod Autoscaler that will increase the number of replicas of the pod when average CPU utilization goes beyond 20%. Note that the target of the pod autoscaler is not a base k8s object such as deployment or statefuleset but rather an ACE Integration Server Custom Definition.

14. Go back to the ACE Dashboard window and click on your Integration server and then click on the HellowWorldAPI API

![](images/14_api.png)

15. Click on the GET /Customer method

![](images/15_getapi.png)

16. Click on Tryit and then Send.

![](images/16_tryit.png)

You should get a successul response (HTTP code 200). Select and copy the URL.

17. Open a new browser tab or window and paste the URL. You should see the same reponse.

![](images/17_browser.png)

Now we will generate additional load with a rather rudementary method but should work for this lab without needing additional tools. Ideally we would used specialized tools such as LoadRunner.

18. Press and keep pressing the refresh button/shortcut of your brower for about 10 seconds. Note: In windows it would be the F5 key. On a mac it would be command+R.

20. Go back to the Openshift console and check the pods. Type is-hellow as filter and find your pods. If  utilization CPU goes beyond 0.02 cores (10% of 200 milicores) you should see that at least new pod was automatically created.

![](images/18_2pods.png)

20. In the OpenShift Console go to Workloads and then HorizontalPodAutoscalers. Click on your horizontal pod autoscaler.

![](images/19_hpa.png)

21. Switch to the YAML view. You will see that the desired replica count is now greater than 1.

![](images/20_desiredreplica.png)


## Congratulations

You have completed the ACE Autoscaling lab.

[Return to main lab page](/acelabs/Overview)
