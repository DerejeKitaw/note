### [ViewContainerRef](https://angular.io/api/core/ViewContainerRef)
> Represents a `container` where one or more Views can be attached.

> The container can contain two kinds of Views. 
* `Host Views`, created by instantiating a Component via createComponent, and 
* `Embedded Views`, created by instantiating an Embedded Template via createEmbeddedView.
```ts
this.viewContainer.createEmbeddedView(this.template);
```
> The location of the `View Container` within the containing View is specified by the `Anchor element`. Each View Container can have only `one` Anchor Element and each Anchor Element can only have a single View Container.

> Root elements of `Views attached` to this container become siblings of the Anchor Element in the Rendered View.

> To access a `ViewContainerRef` of an Element, you can either place a 
* Directive injected with ViewContainerRef on the Element, or 
* you obtain it via a ViewChild query.
```ts
// my-ng-if.directive.ts
import {Directive, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myNgIf]'
})
export class MyNgIfDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}

  ngOnInit(): void {
    const condition = true;
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}

```
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