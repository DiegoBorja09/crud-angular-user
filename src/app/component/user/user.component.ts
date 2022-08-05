import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
accion='Agregar';
accion2='Agregar';
id:number|undefined;
id2:number|undefined;
  datos: any[] =[
    {
      id: '1',
      nombre:'diego',
      apellidos: 'borja',
      identificacion:'1192716568'
   },  {
   id: '2',
   nombre:'diego',
   apellidos: 'borja',
   identificacion:'1192716568'
  },];

  datos2: any[] =[
    {
      id: '1',
      nombre:'diego',
      apellidos: 'borja',
      identificacion:'1192716568'
   },  {
   id: '2',
   nombre:'diego',
   apellidos: 'borja',
   identificacion:'1192716568'
  },];

  form: FormGroup;
  form2:FormGroup;

  constructor(private fb:FormBuilder) { this.form=this.fb.group({
    id:['',Validators.required],
    nombre:['',Validators.required],
    apellidos:['',Validators.required],
    identificacion:['',[Validators.required,Validators.maxLength(10),Validators.minLength(8)]]
  }),
  this.form2=this.fb.group({
    id:['',Validators.required],
    nombre:['',Validators.required],
    apellidos:['',Validators.required],
    identificacion:['',[Validators.required,Validators.maxLength(10),Validators.minLength(8)]]
  })
}

  ngOnInit(): void {
  }

 Editar(user:any){
    this.accion='Editar';
    this.id=user.id;
    this.form.patchValue({
      id: user.id,
      nombre:user.nombre,
      apellidos: user.apellidos,
      identificacion:user.identificacion
    })
    
  }
  Editar2(user:any){
    this.accion2='Editar';
    this.id2=user.id;
    this.form2.patchValue({
      id: user.id,
      nombre:user.nombre,
      apellidos: user.apellidos,
      identificacion:user.identificacion
    })
    
  }
 
  
  //metodo del boton eliminar.
  Delete(index:number){
    this.datos.splice(index,1)
    Swal.fire({
      icon: 'error',
      title:'Eliminado',
      text:'Registro Eliminado Correctamente',
      timer:2000
      
    })
    }
    Delete2(index:number){
      this.datos2.splice(index,1)
      Swal.fire({
        icon: 'error',
        title:'Eliminado',
        text:'Registro Eliminado Correctamente',
        timer:2000
        
      })
      }

    Guardar(){
    const dato:any={
      id: this.form.get('id')?.value,
      nombre:this.form.get('nombre')?.value,
      apellidos: this.form.get('apellidos')?.value,
      identificacion:this.form.get('identificacion')?.value
    }
    if (this.id==undefined) {
      this.datos.push(dato);
      this.form.reset();
      Swal.fire({
        icon: 'success',
        title:'Guardar',
        text:'Registro Almacenado Correctamente',
        timer:2000,
        showConfirmButton: false,
        
      })
      
      
    }else {
      for (let user in this.datos) {
        if (this.datos[user].id==this.form.get("id")?.value) {
          this.datos[user].nombre=this.form.get('nombre')?.value,
          this.datos[user].apellidos=this.form.get('apellidos')?.value,
          this.datos[user].identificacion=this.form.get('identificacion')?.value
          this.form.reset();
          this.id=undefined
          this.accion='AGREGAR'
          Swal.fire({
            icon: 'info',
            title:'Editado',
            text:'Registro Editado Correctamente',
            showConfirmButton: false,
            timer:2000
            
          })
          
          
        }
        
      }
    } 
    
    }

    Guardar2(){
      const dato:any={
        id: this.form2.get('id')?.value,
        nombre:this.form2.get('nombre')?.value,
        apellidos: this.form2.get('apellidos')?.value,
        identificacion:this.form2.get('identificacion')?.value
      }
      if (this.id2==undefined) {
        this.datos2.push(dato);
        this.form2.reset();
        Swal.fire({
          icon: 'success',
          title:'Guardar',
          text:'Registro Almacenado Correctamente',
          timer:2000,
          showConfirmButton: false,
          
        })
        
        
      }else {
        for (let user in this.datos2) {
          if (this.datos2[user].id==this.form2.get("id")?.value) {
            this.datos2[user].nombre=this.form2.get('nombre')?.value,
            this.datos2[user].apellidos=this.form2.get('apellidos')?.value,
            this.datos2[user].identificacion=this.form2.get('identificacion')?.value
            this.form2.reset();
            this.id2=undefined
            this.accion2='AGREGAR'
            Swal.fire({
              icon: 'info',
              title:'Editado',
              text:'Registro Editado Correctamente',
              showConfirmButton: false,
              timer:2000
              
            })
            
            
          }
          
        }
      } 
      
      }
}
