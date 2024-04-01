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

  public displayedColumns: string[] = [
    'requestName',
    'opEntity',
    'approvingDiv',
    'businessArea',
    'approvingStatus',
    'finalAppDate',
    'curency',
  ];

  public columnDisplayNameMap: { [key: string]: string } = {
    requestName: 'Request Name',
    opEntity: 'Op. Entity',
    approvingDiv: 'Approval Div.',
    businessArea: 'App. Business Area',
    approvingStatus: 'Approval Status',
    finalAppDate: 'Final App. Date',
    curency: 'Curency',
  };

  public checkboxColumns: any[] = [];

  public dataSource = new MatTableDataSource<ListViewTableHeader>();
  constructor(
    private _router: Router,
    private _investmentService: InvestmentsService
  ) {}

  public ngOnInit(): void {
    this._investmentService.getViewListData().subscribe((data) => {
      this.dataSource.data = data;
    });

    this.checkboxColumns = this.displayedColumns.map((column) => ({
      key: column,
      title: this.columnDisplayNameMap[column],
      activated: true,
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

  public onRowClicked(row: any) {
    this._router.navigate(['/investment/detail']);
  }
}
