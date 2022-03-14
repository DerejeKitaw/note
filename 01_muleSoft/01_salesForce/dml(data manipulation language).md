> Create new account
```java
Account newAccount = new Account(name='AccountOne');
insert newAccount;
```

> Update billingCity
```java
Account myAccount =[Select id, Name, billingCity from Account where Name='AccountOne' LIMIT 1];
myAccount.billingCity='Silver Spring';
update myAccount;
```
> Delete AccountOne
```java
Account myAccount =[Select id, Name, billingCity from Account where Name='AccountOne' LIMIT 1];
delete myAccount;
```
> Undelete AccountOne
```
Account myAccount =[Select id, Name, billingCity from Account where Name='AccountOne' ALL ROWS];
undelete myAccount;
```

