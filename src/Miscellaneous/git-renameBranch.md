
# Git: rename branch
<!-- ![alt text](../../Images/GitHub-Logo.png) -->

<img src="../../Images/GitHub-Logo.png" alt="Git Logo" style="width: 400px; background-color: white; display: block; margin: auto;"  />  

&nbsp;

---
<center> <h1>How to rename a Local & Remote branch</h1> </center>

Ok, this can happen to anyone, there is a typo or error en the name of the branch, 
and this is in the local and remote branches. 

No problem here is one way to get things fix:

0- Make sure you are in the branch you need to rename  
>`git checkout Wrong-Name`

&nbsp;

1- Rename your local branch  
>`git branch -m New-Fix-Name`

&nbsp;

2- Delete the Wrong-Name remote branch and push New-Fix-Name  
>`git push origin :Wrong-Name New-Fix-Name`

&nbsp;

3- Reset the upstream branch  
>`git push origin -u New-Fix-Name`

&nbsp;

And this should be all.

---

By Edmundo Rubio