import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEspaceEnseignantService {

  constructor(private connexionBD: HttpClient,) { }

  urlEN = ("http://localhost:3000/Enseignant");
  urlMAT = ("http://localhost:3000/Matiere");
  urlDOC = ("http://localhost:3000/Document");

  

  IsUser() {
    let tokenn = localStorage.getItem("token");
    if (tokenn) {
      return true;
    } else {
      return false;
    }
  }

  GetDataProfile(){
    let token = localStorage.getItem("token");
    let Data = JSON.parse(window.atob(token.split('.')[1]));
    return Data
  }
  
  ajouterMatiere(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.post(this.urlMAT+"/ajouterMatiere",o,{ headers })
  }

  GetMatiere(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.get(this.urlMAT+"/GetAllCardMatiere/"+o , { headers })
  }

  DeleteeMatiere(o:any,x:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.delete(this.urlMAT+"/deleteMatiere/"+o+"/"+x, { headers })
  }

  /*ajouterClasse(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.post(this.urlCAL+"/ajouterClasse",o,{ headers })
  }

  GetClasse(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.get(this.urlCAL+"/GetAllCardClasse/"+o , { headers })
  }

  DeleteeClasse(o:any,x:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.delete(this.urlCAL+"/deleteClasse/"+o+"/"+x, { headers })
  }*/

  AjouterMatiereEnseignant(o,id:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.post(this.urlEN+"/AjouterMatiereEnseignant/"+id,{o}, { headers })
  }

  RecupererMatiereEnseignant(id:any,token:any): Observable<string[]>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.get<string[]>(this.urlEN+"/RecupererMatiereEnseignant/"+id, { headers })
  }

  MiseAjour(data,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
    console.log(data)
   return this.connexionBD.put<any>(this.urlEN+"/MiseAjourProfile",data,{headers})
  }

  GetAllMediasSociaux(id:any,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.get<any>(this.urlEN+"/GetAllMediasSociaux/"+id,{headers})
  }

  DataEn(id:any,token:any){
   const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.get(this.urlEN+"/Lister/"+id,{headers})
  }

  SupprimerMatiereEnseignant(id:any,M:String,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.delete(this.urlEN+"/SupprimerMatiereEnseignant/"+id+"/"+M,{headers})
   }

   AjouterDoucument(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.post(this.urlDOC+"/AjouterDoucument",o,{headers})
   }

   GetDocuments(Email:any,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.get<any>(this.urlDOC+"/Lister/"+Email,{headers})
   }

   

}
