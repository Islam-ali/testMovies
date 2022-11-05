import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from '../../../movie/services/movie.service';
import { MoviesService } from '../../sevices/movies.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/@core/authentication/service/auth.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  createForm: FormGroup;
  imageSrc = 'assets/images/movie-add.webp';
  listCategory: any[] = [];
  loading:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _MoviesService: MoviesService,
    private _MovieService: MovieService,
    private toastr: ToastrService,
  ) {
    this.createForm = this.formBuilder.group({
      image: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      category_id: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.data?.item) {
      this.imageSrc = `https://test-api.storexweb.com/${this.data.item.image}`
      this.createForm.patchValue({
        image: this.data.item.image,
        name: this.data.item.name,
        description: this.data.item.description,
        category_id: this.data.item.category_id,
      })
    }
    this.getListCategoy();
  }
  getListCategoy() {
    this._MovieService.listCategory().subscribe({
      next: (res: any) => {
        this.listCategory = res.message;
      }
    })
  }
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.createForm.patchValue({
          image: event.target.files[0]
        });
      };
    }
  }
  onSubmit(): void {
    this.loading = true;
    if (!this.createForm.valid) {
      return
    }
    const formData = new FormData();
    formData.append('image', this.createForm.value.image);
    formData.append('name', this.createForm.value.name);
    formData.append('description', this.createForm.value.description);
    formData.append('category_id', this.createForm.value.category_id);
    if (this.data.type == 'create') {
      this._MoviesService.createMovie(formData).subscribe({
        
        next: (res: any) => {
        this.loading = false;   
          this.dialogRef.close('done');
          if (res.status == 'success') {
            this.toastr.success('update is successfully', res.status);
          } else {
            this.toastr.warning('update is faild', res.status)
          }
        },
        error: (err: any) => { 
        this.loading = false;   
        }
      })
    } else {
      formData.append('_method', 'put');
      this._MoviesService.updateMovie(formData, this.data.item.id).subscribe({
        next: (res: any) => {
        this.loading = false;   
          this.dialogRef.close('done');
          if (res.status == 'success') {
            this.toastr.success('update is successfully', res.status);
          } else {
            this.toastr.warning('update is faild', res.status)
          }
        },
        error: (err: any) => { 
        this.loading = false;   
        }
      })
    }
  }
  close(): void {
    this.dialogRef.close();
  }
}
