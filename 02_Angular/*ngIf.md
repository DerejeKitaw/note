### *ngIf

The * in ngIf add `<ng-template>` tag with ngIf structural directives
```html
<p *ngIf="value">My name is Dereje</p>

is equivalent to 

<ng-template [ngIf]="value">
    <p>My name is Dereje</p>
</ng-template>
```
Base on the above comparision how can we write out=r own directives?
[custom-*ngIf](./custom-*ngIf.md)
