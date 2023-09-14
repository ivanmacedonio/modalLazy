/*
cuando ocultamos/mostramos elementos, lo hacemos mediante un setState 
de true o false, lo que determina si el componente se ve o no.
El tema de esa estrategia es que el componente SIEMPRE existe, se vea o no
Ahora vamos a hacer que el componente no se muestre/oculte, sino que 
se cree/destruya para optimizar, gracias a lazyloading

lazy loading carga el componente solo cuando se lo llama
si no se lo llama, el componente NO EXISTE  

*/

import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

export default function  openModal () {
  const Modal = lazy(() => import("./Modal")); ///indicamos que componente se importa con lazy. Ahora el componente esta almacenado en una var
  ///el root por defecto es la app, hay que crear un nuevo root, el cual solo se genera cuando llamamos al lazy

  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv); ///cargamos el div al html

  const root = createRoot(modalDiv); ///indicamos que componente estara ligado al nuevo root
  root.render(
    <Suspense fallback={<div>loading...</div>}>
      <Modal root={root} title="Modal de prueba">
        contenido
      </Modal>
    </Suspense>
  );
}

///suspense maneja lo que sucede mientras carga el modal
