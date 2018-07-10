app.component.ts
```ts
import { Component, ViewChild, ElementRef, Inject } from "@angular/core";
import * as jsPDF from "jspdf";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("content") content: ElementRef;
  public downloadPDF() {
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('test.pdf');
  }
}

```
app.html
```html

<div id="content" #content>
  <table id="contentToConvert">
    <tr>
      <th>Column1</th>
      <th>Column2</th>
      <th>Column3</th>
    </tr>
    <tr>
      <td>Row 1</td>
      <td>Row 1</td>
      <td>Row 1</td>
    </tr>
    <tr>
      <td>Row 2</td>
      <td>Row 2</td>
      <td>Row 2</td>
    </tr>
    <tr>
      <td>Row 3</td>
      <td>Row 3</td>
      <td>Row 3</td>
    </tr>
    <tr>
      <td>Row 4</td>
      <td>Row 4</td>
      <td>Row 4</td>
    </tr>
    <tr>
      <td>Row 5</td>
      <td>Row 5</td>
      <td>Row 5</td>
    </tr>
    <tr>
      <td>Row 6</td>
      <td>Row 6</td>
      <td>Row 6</td>
    </tr>
  </table>


</div>
<button (click)="downloadPDF()">Print PDF</button>
```
