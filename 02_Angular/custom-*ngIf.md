### Custom *myNgIf
```
ng g d myNgIf/myNgIf -d
```
import and inject in the constructor ViewContainerRef and TemplateRef 
```ts
import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[myNgIf]'
})
export class MyNgIfDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}

  ngOnInit(): void {
    const condition = false;
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
```
```html
<p *myNgIf>
  test-my-ng-if-directive works!
</p>
<div>Similarly we can do</div>
<ng-template myNgIf>
  <p>test-my-ng-if-directive works!</p>
</ng-template>
```


