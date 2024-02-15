> [Source code](https://gist.github.com/maestrotex/b7b9ab8dad9d54181e08ccc69fb4b9b1) & [Youtube](https://www.youtube.com/watch?v=o4dX6uyipOk)
> 
> [Microsoft doc](https://learn.microsoft.com/en-us/power-platform/alm/solution-packager-tool)
>
> [So
> 
> Run downloadhelpertoolsforsolutionpackager.ps1 in powershell to extract solution file

> To pcak solution again
```
solutionpackager.exe /action:Extract /zipfile:"D:\CRM\Sandbox\Default_1_0.zip" /folder:"Sandbox\Solution"

solutionpackager.exe /action:Pack /folder:"D:\CRM\Sandbox" /zipfile:CRM_Solution.zip"
```

> This help in CI/CD
