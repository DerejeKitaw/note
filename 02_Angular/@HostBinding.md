In Angular, a component `host` is the element this component is attached to. 
We can set properties on the host element by using the @HostBinding() decorator. 
In this case, we’re asking Angular to keep the value of the host elements class to be in sync with the property cssClass.

By using @HostBinding() the host element (the app-article tag) we want to set the class attribute to have “row”.
```ts
import { Component, HostBinding } from '@angular/core';

export class ProductComponent implements OnInit { 
  @HostBinding('attr.class') cssClass = 'row'
}
```
The HostBinding decoration is new - it lets us set attributes on the host element. 
The host is the element this component is attached to. 
Here when we say @HostBinding('attr.class') cssClass = 'row'; we’re saying that we want to attach the CSS class `row` to the host element.

Using host is nice because it means we can configure our host element from within the component. This is great because otherwise we’d require the host element to specify the CSS tag and that is bad because we would then make assigning a CSS class part of the requirement to using the Component.
Changing the Host’s CSS To add attributes to the host element, we use a new decorator, similar to when we listened to events on the host: the HostBinding decorator. But now, instead of specifying the event name we want to listen for, we’ll define the attribute name we want to ‘bind’ to. In this component, it looks like this:

@HostBinding('attr.class') cssClass = 'ui message';
This decoration tells angular that we want the value of cssClass to be kept in sync with the host’s attribute class.
