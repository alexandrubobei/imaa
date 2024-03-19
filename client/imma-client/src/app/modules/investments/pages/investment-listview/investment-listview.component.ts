import { Component, ViewChild } from '@angular/core';
import { InvestmentsService } from '../../services/investments.service';
import { ListViewTableHeader } from '../../models/listview-model';
import { AppImportsModule } from '../../../../app-imports.module';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';

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
    'select',
    'RequestName',
    'OpEntity',
    'AdminDivision',
    'BusinessArea',
    'ApprovingDiv',
    'EndorsingDiv',
    'Requester',
  ];
  dataSource = new MatTableDataSource<ListViewTableHeader>();
  selection = new SelectionModel<ListViewTableHeader>(true, []);

  constructor(
    private _investmentService: InvestmentsService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this._investmentService.getViewListData().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  get dynamicColumns() {
    return this.displayedColumns.filter((column) => column !== 'select');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort!;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: ListViewTableHeader): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.OpEntity + 1
    }`;
  }
}
