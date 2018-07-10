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
for image
```ts
import {
  Component,
  ViewChild,
  ElementRef,
  Inject,
  OnInit
} from "@angular/core";
import * as jsPDF from "jspdf";
import * as Html2Canvas from "html2canvas";

@Component({
  selector: "app-print-pdf",
  templateUrl: "./print-pdf.component.html",
  styleUrls: ["./print-pdf.component.css"]
})
export class PrintPdfComponent implements OnInit {
  ngOnInit(): void {}
  @ViewChild("content") content: ElementRef;
  public downloadPDF() {
    Html2Canvas(this.content.nativeElement, <Html2Canvas.Html2CanvasOptions>{
      onrendered: function(canvas: HTMLCanvasElement) {
        var pdf = new jsPDF("p", "pt", "a4");
        var img = canvas.toDataURL("image/png");
        pdf.addImage(img, "PNG", 10, 10, 580, 300);
        pdf.save("web.pdf");
      }
    });
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
