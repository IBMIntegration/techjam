---
title: Aspera Labs Preparation
---

##	Setting up and Getting access to the Environment.

1. Reserve an environment.  
Open the following page (Login in with your IBMid).
[https://techzone.ibm.com/collection/cloud-pak-for-integration-activation-kit-v-2#tab-3 ](https://techzone.ibm.com/collection/cloud-pak-for-integration-activation-kit-v-2#tab-3 ).  
	Click on Environments and Choose “CP4I PoT VDI (Desktop)”.   
	Enter the details and submit the request.    
You will receive an email with details on how to access the reserved server. This may take about 30-60 minutes.    

2. Once you have received the email, take note of the servers public IP address in the message. 
3. Open a terminal (or putty) and try connecting to the server.


> > 	IP Address: From the email
> > 	Port: 2222
> > 	Username: ibm
> > 	Password: IBMDem0s!

	`ssh -p 2222 ibm@<IP Address>`   
*Avoid using the VNC access as we will be disabling VNC access. *

4. Disable VNC and NoVNC web access. Some of the ports used by VNC are needed by Faspex5 Beta.   
> > 	Edit this file and change the port to 5080
> > 	sudo vi /root/noVNC/utils/launch.sh
> > 	Change PORT="80" to PORT="5080"
> > 	Save the file. 
> > 	
> > 	sudo pkill -f python
> > 	sudo pkill -f /usr/bin/Xvnc
> > 	
> > 	Check if ports 80 and 6000 are free.
> > 	sudo netstat -anp | grep 6000
> > 	sudo netstat -anp | grep 80
*Ensure to check and repeat this step if the node is rebooted. *

5.   Restart Docker.  
> > 	sudo systemctl restart docker
6. Download Installation Software and License
> > 	sudo mkdir /opt/software
> > 	cd /opt/software/
> > 	
> > 	sudo wget -v -O ibm-aspera-lab-software.zip https://ibm.box.com/shared/static/q4zzlhk5pn5osn0ojtzx67q8ulg9ig2e.zip
> > 	
> > 	sudo wget -v -O ibm-aspera-lab-license.zip https://ibm.box.com/shared/static/y5s6c2abk2m81iaji2zctyg976qmt0ga.zip
> > 	
> > 	sudo unzip ibm-aspera-lab-software.zip
> > 	sudo unzip ibm-aspera-lab-license.zip

