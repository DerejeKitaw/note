### Run downloadhelpertoolsforsolutionpackager.ps1 in powershell to extract solution file

### To pcak solution again
```
solutionpackager.exe /action:Extract /zipfile:"D:\CRM\Sandbox\Default_1_0.zip" /folder:"Sandbox\Solution"

solutionpackager.exe /action:Pack /folder:"D:\CRM\Sandbox" /zipfile:CRM_Solution.zip"
```
