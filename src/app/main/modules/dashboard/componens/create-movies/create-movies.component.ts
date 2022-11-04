import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UpdateComponent } from '../update/update.component';
import { MoviesService } from '../../sevices/movies.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.scss']
})
export class CreateMoviesComponent implements OnInit, OnChanges {
  @Input() listMovies: any;
  @Output() reloadMethod = new EventEmitter()
  displayedColumns: string[] = ['id', 'Image', 'Name', 'Description', 'edit', 'delete'];
  dataSource!: MatTableDataSource<any>;
  @Input() loading!: boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public _MatDialog: MatDialog, private _MoviesService: MoviesService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.listMovies);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openCreateDialog(type: string) {
    const dialogRef = this._MatDialog.open(UpdateComponent, {
      data: {
        type: type,
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.reloadMethod.emit()
      }
    });
  }
  openEditDialog(type: string, item: number) {
    const dialogRef = this._MatDialog.open(UpdateComponent, {
      data: {
        type: type,
        item: item
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.reloadMethod.emit()
      }
    });
  }
  deleteMovie(id: number) {
    this._MoviesService.deleteMovie(id).subscribe({
      next: (res: any) => {
        console.log('update', res)
        this.reloadMethod.emit()
        this.toastr.error('Delete is successfully', 'success');
      },
      error: (err: any) => { console.log(err) }
    })
  }
}
