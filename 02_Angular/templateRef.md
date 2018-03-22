### [TemplateRef](https://angular.io/api/core/TemplateRef)
> Represents an Embedded Template that can be used to instantiate Embedded Views.

> You can access a TemplateRef, in two ways. 
* Via a directive placed on a <ng-template> element (or directive prefixed with *) and have the TemplateRef for this Embedded View injected into the constructor of the `directive` using the TemplateRef Token. 
```html
<!-- test-my-ng-if-directive.component.html -->
<p *myNgIf>
  test-my-ng-if-directive works!
</p>
<div>Similarly we can do</div>
<ng-template myNgIf>
  <p>test-my-ng-if-directive works!</p>
</ng-template>
```

* Alternatively you can query for the TemplateRef from a Component or a Directive via `Query`.

> To instantiate Embedded Views based on a Template, use [createEmbeddedView](./createEmbeddedView.md), which will create the View and attach it to the View Container.