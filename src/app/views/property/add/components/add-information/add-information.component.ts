import { Venture } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectFormInputDirective } from '@core/directive/select-form-input.directive'
import * as XLSX from 'xlsx';

@Component({
  selector: 'add-information',
  standalone: true,
  imports: [SelectFormInputDirective, FormsModule, ReactiveFormsModule],
  templateUrl: './add-information.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddInformationComponent implements OnInit {

  totalPlots: number = 0;
  availablePlots: number = 0;
  bookedPlots: number = 0;
  venture!: Venture;
  soldPlots: number = 0;;
  registerVenture!: FormGroup;

  constructor(private service: RealEStateService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerVenture = this.fb.group({
      ventureName: ['', Validators.required],
      ventureSize: ['', Validators.required],
      totalPlots: [{ value: 0, disabled: true }],
      availablePlots: [{ value: 0, disabled: true }],
      bookedPlots: [{ value: 0, disabled: true }],
      soldPlots: [{ value: 0, disabled: true }],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phno: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pincode: [null, [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      plots: [[]]
    });
  }

  onFileChange(event: any): void {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      alert('Please upload one Excel file.');
      return;
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const workbook: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = workbook.SheetNames[0];
      const ws: XLSX.WorkSheet = workbook.Sheets[wsname];

      // Check if the worksheet is empty
      if (!ws || !ws['!ref']) {
        alert('The uploaded Excel file is empty.');
        return;
      }

      // Get the header row
      const headerRow = XLSX.utils.sheet_to_json(ws, { header: 1, range: 0, defval: '' })[0];

      // Define the expected column names
      const expectedColumns = ['Plot Number', 'Plot Size', 'Price', 'Status', 'Location', 'Facing', 'Corner Plot'];

      // Check if the column names match the expected column names
      if (!this.validateColumnNames(headerRow, expectedColumns)) {
        alert('The column names in the uploaded Excel file do not match the expected column names. Please reupload the file with the correct column names.');
        return;
      }

      const data = XLSX.utils.sheet_to_json(ws, { defval: '' });

      // Initialize venture if it's undefined
      if (!this.venture) {
        this.venture = {} as Venture;
      }

      this.venture.plots = data.map((row: any) => ({
        plotNumber: row['Plot Number'],
        plotSize: Number(row['Plot Size']),
        price: Number(row['Price']),
        status: row['Status'],
        location: row['Location'],
        facing: row['Facing'],
        cornerPlot: row['Corner Plot'] === true || row['Corner Plot'] === 'true'
      }));

      // Count logic
      this.totalPlots = this.venture.plots.length;
      this.availablePlots = this.venture.plots.filter(p => p.status === 'AVAILABLE').length;
      this.bookedPlots = this.venture.plots.filter(p => p.status === 'BOOKED').length;
      this.soldPlots = this.venture.plots.filter(p => p.status === 'SOLD').length;

      // Set counts to venture
      this.venture.totalPlots = this.totalPlots;
      this.venture.availablePlots = this.availablePlots;
      this.venture.bookedPlots = this.bookedPlots;
      this.venture.soldPlots = this.soldPlots;

      // Patch values to form controls
      this.registerVenture.patchValue({
        totalPlots: this.totalPlots,
        availablePlots: this.availablePlots,
        bookedPlots: this.bookedPlots,
        soldPlots: this.soldPlots,
        plots: this.venture.plots
      });

      console.log('Uploaded plots:', this.venture.plots);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  validateColumnNames(headerRow: any, expectedColumns: string[]): boolean {
    // Check if the length of the header row matches the length of the expected columns
    if (headerRow.length !== expectedColumns.length) {
      return false;
    }
    // Check if each column name in the header row matches the expected column name
    for (let i = 0; i < headerRow.length; i++) {
      if (headerRow[i].toString().trim().toLowerCase() !== expectedColumns[i].toLowerCase()) {
        return false;
      }
    }
    return true;
  }


  addVenture() {
    const formData = this.registerVenture.getRawValue();

    console.log('Venture object:', formData); // Log the venture object

    this.service.registerVenture(formData).subscribe((data: any) => {
      alert('Venture registered..!!');
      this.registerVenture.reset();
      // window.location.reload();
    });
  }
}
