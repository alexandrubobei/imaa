import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { InvestmentsService } from '../../services/investments.service';
import { ListViewTableHeader } from '../../models/listview-model';
import { AppImportsModule } from '../../../../app-imports.module';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-listview',
  standalone: true,
  imports: [AppImportsModule],
  templateUrl: './investment-listview.component.html',
  styleUrl: './investment-listview.component.scss',
})
export class InvestmentListviewComponent {
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  tableColumns = new FormControl('');

  public displayedColumns: string[] = [
    'select',
    'requestName',
    'opEntity',
    'approvingDiv',
    'businessArea',
    'approvingStatus',
    'finalAppDate',
    'curency',
  ];

  // Define a map of column keys to their display names
  public columnDisplayNameMap: { [key: string]: string } = {
    select: 'Selection',
    requestName: 'Request Name',
    opEntity: 'Operational Entity',
    approvingDiv: 'Approval Div.',
    businessArea: 'App. Business Area',
    approvingStatus: 'Approval Status',
    finalAppDate: 'Final App. Date',
    curency: 'Curency',
  };

  public checkboxColumns: any[] = [];

  public dataSource = new MatTableDataSource<ListViewTableHeader>();
  public selection = new SelectionModel<ListViewTableHeader>(true, []);
  public color = 'primary';
  constructor(
    private _router: Router,
    private _investmentService: InvestmentsService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  public ngOnInit(): void {
    this._investmentService.getViewListData().subscribe((data) => {
      this.dataSource.data = data;
    });

    this.checkboxColumns = this.displayedColumns.map((column) => ({
      key: column,
      title: this.columnDisplayNameMap[column],
      activated: true, // Set to true to show all columns initially
    }));

    this.updateDisplayedColumns();
  }

  updateDisplayedColumns() {
    this.displayedColumns = this.checkboxColumns
      .filter((column) => column.activated)
      .map((column) => column.key);
  }

  get dynamicColumns() {
    return this.displayedColumns.filter((column) => column !== 'select');
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort!;
  }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  public checkboxLabel(row?: ListViewTableHeader): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.opEntity + 1
    }`;
  }

  public onCheckboxChange(event: MatCheckboxChange, row: any): void {
    this.selection.toggle(row);

    const rowElement = event.source._elementRef.nativeElement.closest('tr');

    if (event.checked) {
      rowElement?.classList.add('selected-row');
    } else {
      rowElement?.classList.remove('selected-row');
    }

    this.selection.toggle(row);
  }

  public onRowClicked(row: any) {
    this._router.navigate(['/investment/detail']);
  }
}
