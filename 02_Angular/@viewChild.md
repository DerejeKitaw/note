### @ViewChild
@ViewChild used to make access template variable to the component method

app.component.html
```html
<input type="text" #myInputText>
```
To access the value of input in the compoent

app.component.ts
```ts
@ViewChild('myInputText') inputText; 
// ViewChild make 'myInputText' available to be used in the method as inputText
```
app.component.ts
```ts
export class AppComponent{
    @ViewChild('myInputText') inputText;
    constructor(){
        setInterval (()=>{this.send2Console();}, 2000);
    }
    send2Console(){
        let data = this.inputText.nativeElement;
        console.log(data.value);
    }
}
```
