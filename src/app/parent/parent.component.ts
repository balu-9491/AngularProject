import { Component } from '@angular/core';
import{jsPDF}from 'jspdf'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  message= 'welcome to balaji world';
  date =new Date();

  color='red' 
changeColor(){
  this.color='blue'
}

name: string='';

totalAmount: number = 75000;
taxRate: number = 0.1;

getTaxedAmount(): number {
  return this.totalAmount * this.taxRate;
}
enteredData: string = 'Hello, world! npm install jspdf --save';

generatePDF() {
  const doc = new jsPDF();
  doc.text(this.enteredData, 10, 10);
  doc.save('entered-data.pdf');
}

}
