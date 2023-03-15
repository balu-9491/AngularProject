import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
// import Validation from '../utils/validation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        // validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }}
const radius=[4,5,6,7,1,2,]
const output= radius.map((x)=>x*3)
console.log(output) 
// output [12,15,18,21,3,6]
const number =[9,2,3,5,6,7,8]  
const newnumber= number.map((i)=>Math.PI*i*2);
console.log(newnumber)
// output [56.54,12.56,18.84,31.41,37.69,43.98,50.26]

const nenumber= number.map((i)=>Math.PI*i*i);
console.log(nenumber)
  // ouput [254.469,12.566,28.274,78.539,113.097,153.938,201.061]

const nnumber= number.map((i)=>Math.sqrt(i));
console.log(nnumber);
// ouput[1.414,1.732,2.236,2.44,2.645,2.828]
  let array=[7,2,4,5,8,9,]
  console.log(Math.max.apply(Math,array))  //output  9
  console.log(Math.min.apply(Math,array)) // output 2

  let course="this is JavaScript code";
  let words = course.split(" ");
  let reversedWords = words.map(word => word.split("").reverse().join(""));
  let reversedString = reversedWords.reverse().join(" ");
  console.log(reversedString);  // output: edoc tpircSavaJ si siht


  const str ="full stack developer"
const otput=str.split("").reverse().join("");
console.log(otput)// repoleved kcats lluf


// uiquenumbers
const arr1 =[1,2,3,4,5];
const arr2 =[6,7,8,9,10]
const uiniqueNumbers=[...new Set([...arr1, ...arr2])]
console.log(uiniqueNumbers) //[1.2,3,4,5,6,7,8,9,10]
 
// find idfferent numbers from given two arrays
const a1 =[1,2,3,4,7,5,6];
const a2 =[1,3,4,5,8,9];
let res1 = a1.filter((num)=> !a2.includes(num));
let res2 = a2.filter((num)=>!a1.includes(num));
console.log([...res1,...res2]); //output[2,7,6,8,9]
// without using built in array methods for reverse string
function reverse(strr: string | any[]){
let output="";
for(let  i=strr.length-1; i>=0;i--){
  output+=strr[i]

} return output;
}
console.log(reverse("javascript code"))