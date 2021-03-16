import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface List {
  Date?: Date;
  ListName: string;
  NoOfEntities: number;
  description?: string;
  elements?: string[]
}
const ELEMENT_DATA: List[] = [
  { Date: undefined, ListName: "Competitive Intelligence", NoOfEntities: 0 },
  { Date: undefined, ListName: "MyVendors", NoOfEntities: 0 },
  { Date: undefined, ListName: "My Customers", NoOfEntities: 0 },
  {
    Date: new Date('07/23/2020'), ListName: "Test_30_results", NoOfEntities: 28, description: "This is Test 20 results",
    elements: ["Reliance Industries Ltd.", "Indian Oil Corporation Ltd.", "Oil And Natural Gas Corporation Ltd.", "State Bank of Indi", "Bharat Petroleum Corporation Ltd.", "Hindustan Petroleum Corporation Ltd.", "Tata Motors Ltd.", "Rajesh Exports Ltd.", "Tata Consultancy Services Ltd.","Reliance Industries Ltd.", "Indian Oil Corporation Ltd.", "Oil And Natural Gas Corporation Ltd.", "State Bank of Indi", "Bharat Petroleum Corporation Ltd.", "Hindustan Petroleum Corporation Ltd.", "Tata Motors Ltd.", "Rajesh Exports Ltd.", "Tata Consultancy Services Ltd.","Reliance Industries Ltd.", "Indian Oil Corporation Ltd.", "Oil And Natural Gas Corporation Ltd.", "State Bank of Indi", "Bharat Petroleum Corporation Ltd.", "Hindustan Petroleum Corporation Ltd.", "Tata Motors Ltd.", "Rajesh Exports Ltd.", "Tata Consultancy Services Ltd."]
  },
  { Date: new Date('06/28/2020'), ListName: "To_index", NoOfEntities: 100 },
  { Date: new Date('04/10/2020'), ListName: "KMPG Requested Companies-Listed Set_Prasada Kumar", NoOfEntities: 34 },
  { Date: new Date('03/12/2020'), ListName: "Error Case-LTB To EBITDA Blank_Prasada Kumar", NoOfEntities: 24 },
  { Date: new Date('12/14/2020'), ListName: "Two Companies", NoOfEntities: 2 },
  { Date: new Date('11/01/2020'), ListName: "Custom", NoOfEntities: 30 },
  { Date: new Date('10/29/2020'), ListName: "Mumbai", NoOfEntities: 3 },
  { Date: new Date('06/23/2020'), ListName: "Delhi", NoOfEntities: 10 },
  { Date: new Date('01/11/2020'), ListName: "Rajasthan", NoOfEntities: 50 },
  { Date: undefined, ListName: "Outide Nation", NoOfEntities: 0 },
  { Date: undefined, ListName: "International", NoOfEntities: 0 },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'list-details';

  displayedColumns: string[] = ['Date', 'ListName', 'NoOfEntities', 'Actions', 'details'];
  dataSource = new MatTableDataSource<List>(ELEMENT_DATA);
  selection = new SelectionModel<List>(false, []);
  descObject: List

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data, filter) => {
      return !filter || data.ListName.toLowerCase().includes(filter)
    }
  }

  constructor() {
    this.descObject = { ListName: "", NoOfEntities: 0, Date: new Date() }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showDetails(element: List) {
    if(this.selection.isSelected(element)){
      this.descObject = element;
    }else{
      this.descObject = { ListName: "", NoOfEntities: 0, Date: new Date() }
    }

  }

}
