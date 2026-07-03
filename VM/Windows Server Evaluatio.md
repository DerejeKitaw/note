# Windows Server Evaluation License Extension (Dynamics 365 F&O Development VM)

## Overview

This development VM uses Windows Server 2022 Datacenter Evaluation edition.

The evaluation period is currently valid for 180 days.

When the evaluation period approaches expiration, the remaining rearm count can be checked and, if available, used to extend the evaluation period.

## Check Current License Status

Run PowerShell or Command Prompt as Administrator:

```cmd
slmgr /dlv
```

Review the following values:

- License Status
- Timebased activation expiration
- Remaining Windows rearm count
- Remaining SKU rearm count

To view the exact expiration date:

```cmd
slmgr /xpr
```

## Renew / Extend the Evaluation Period

If the remaining rearm count is greater than zero, extend the evaluation period by running:

```cmd
slmgr /rearm
```

Restart the server:

```cmd
shutdown /r /t 0
```

## Verify Extension

After the restart, verify the new expiration period:

```cmd
slmgr /xpr
```

Expected result:

```text
Windows Server 2022 Datacenter Evaluation
Windows License valid for 180 days
```

## Notes

- This process extends the Windows Server Evaluation period.
- The current VM had 5 remaining rearms available before the extension.
- Each successful rearm reduces the available rearm count by one.
- Once all rearm counts have been consumed, the evaluation period can no longer be extended using this method.
- At that point, the VM must either be activated with a valid Windows Server license or replaced/rebuilt with a new development image.
- This process affects only the Windows operating system and does not impact the Dynamics 365 Finance & Operations application, database, or development artifacts.
