import { Venture } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.scss'
})
export class QuotationComponent {
 quotationForm!: FormGroup;
  ventures:Venture[]=[];
  step = 1;



 constructor(private fb: FormBuilder,private service:RealEStateService) {

  }

  ngOnInit():void{
    this.quotationForm = this.fb.group({
      propertyName: [''],
      basePrice: [''],
      gstPercentage: [''],
      gstAmount: [''],
      registrationCharges: [''],
      maintenanceCharges: [''],
      discountPercentage: [''],
      discountAmount: [''],
      finalPrice: [''],
      validityDate: [''],
      termsAndConditions: [''],
      createdDate: [''],
      createdBy: ['']
    });
    this.loadVentures();
  }

  goToStep(num: number) {
    if (num === 2 && this.quotationForm.invalid) {
      alert('Please fill all required fields!');
      return;
    }
    this.step = num;
  }


loadVentures() {
  this.service.getAllVentures().subscribe(
    (data: Venture[]) => {
      this.ventures = data;
    },
    error => {
      console.error('Error fetching ventures', error);
    }
  );
}
 // ✅ Save data before download
  downloadAsPDF() {
    if (this.quotationForm.valid) {
      this.saveQuotation();
    } else {
      alert('Please fill all required fields before saving.');
    }
  }

  // ✅ API call to save quotation
  saveQuotation() {
    const quotationData = this.quotationForm.value;
    console.log('Sending Quotation:', quotationData);

    this.service.addQuotation(quotationData).subscribe({
      next: (response) => {
        console.log('Quotation saved successfully:', response);
        alert('Quotation saved successfully!');
        window.print(); // ✅ print/download after save success
      },
      error: (err) => {
        console.error('Error saving quotation:', err);
        alert('Failed to save quotation!');
      }
    });
  }
}
