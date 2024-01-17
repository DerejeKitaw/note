> On Developer command prompt
```
cd C:\Doc\Git Projects\PowerApps-Samples\component-framework\AngularJSFlipControl
```

```
npm install
```

```
msbuild /t:restore
```

```
mkdir AngularJSFlipControlSolution
cd AngularJSFlipControlSolution
```

```
pac solution init --publisher-name powerapps_samples --publisher-prefix sample
```

```
pac solution add-reference --path ../../AngularJSFlipControl
```

```
msbuild /t:restore
```

```
msbuild /t:rebuild /restore /p:Configuration=Release
```

```
msbuild
```
