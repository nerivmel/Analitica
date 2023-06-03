import React, { useState } from 'react'
import axios from 'axios'

export class HandleSubmit {
    instance: any
    credentials: any

    constructor(credentials: any) {
        this.instance = axios.create({
            baseURL: 'http://127.0.0.1:4000/',
            timeout: 5000,
            headers: {'Content-Type': 'application/json'}
        })
        this.credentials = credentials
    }


    async handleSignin (e:any){
        e.preventDefault();
        console.log(this.credentials)
        const res = await axios.post("http://localhost:4000/admin", this.credentials);
        console.log(res);
    }
    
    async handleLogin (e:any){
        {/*ESTO ENVÍA LOS DATOS DE LOGIN AL BACK END*/ }
        e.preventDefault();
        console.log(this.credentials)
        const res = await this.instance.post("admin/login/", this.credentials).then((res:any) => {
          this.instance.defaults.headers.post['admin'] = `${res.data.token_type} ${res.data.access_token}`
        }).catch((e:any) => { console.log(e) });
        console.log(this.instance.defaults.headers)
    }
}