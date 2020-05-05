
// * IIEF
(function(){
  'use strict';
  // * EVENT LISTENER, ACTIVATED WHEN THE HTML DOCUMENT IS DONE LOADING
  document.addEventListener('DOMContentLoaded', function(){

    // * WORKING WITH THE DOM LOADED

    // * BY ID --> document.getElementById('<name>')
    // let logo = document.getElementById('logo');

    // let navegacion = document.getElementById('navegacion')

    // console.log(logo)
    // console.log(navegacion)

    // navegacion.style.display = "none"
    
    // * BY CLASSNAME --> document.getElementsByClassName('<className>')
    // let navegacion = document.getElementsByClassName('navegacion')

    // let contenido = document.getElementsByClassName('contenido')

    // console.log(navegacion[0])
    // console.log(navegacion[1])
    // console.log(contenido)

    // contenido[0].style.display = "none"

    // * TAG NAME --> document.getElementsByTagName('<element>')
    // let enlaces = document.getElementsByTagName('a')

    // console.log(enlaces)
      
    // for(let i = 0; i < enlaces.length; i++){
    //   enlaces[i].setAttribute('target', '_blank')
    // }

    // let enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a')

    // console.log(enlacesSidebar)
    // for(let i = 0; i < enlacesSidebar.length; i++){
    //   enlaces[i].setAttribute('href', 'https://google.com')
    // }

    // * QUERY SELECTOR --> document.querySelector('<#ID>') OR document.querySelector('<.CLASSNAME>')
    // let logo = document.querySelector('#logo')
    // let logo = document.querySelector('.logo')
    // console.log(logo)

    // * QUERY SELECTOR ALL --> document.querySelectorAll('<element>')

    // let encabezado = document.querySelectorAll('h2, footer p')
    // console.log(encabezado)

    // let enlaces = document.querySelectorAll('a')
    // console.log(enlaces)
    
    // for(let i = 0; i < enlaces.length; i++){
    //   console.log(enlaces[i].innerText)
    // }

    //////////////////////////////////////////////////////////////


    // * NODOS
    // let enlaces = document.querySelectorAll('#menu ul li a')[0]
    // * nodeType --> return an int for the type of node check: https://developer.mozilla.org/es/docs/Web/API/Node/nodeType
    // console.log(enlaces.nodeType)
    // * nodeName --> return the name of the element
    // console.log(enlaces.nodeName)
    // * attributes --> return the attributes of the element
    // console.log(enlaces.attributes)
    // * firstChild --> return the first element of the collection
    // console.log(enlaces.firstChild)
    // * nodeValue --> return the content of the element
    // console.log(enlaces.firstChild.nodeValue)

    // enlaces.firstChild.nodeValue = "Home"

    //////////////////////////////////////////////////////////////


    // * CREATE CONTENT

    // * GET THE SIDEBAR
    // let sidebar = document.querySelector('#sidebar')

    // * CREATE THE HTML ELEMENT  
    // let nuevoElemento = document.createElement('H1')

    // * CREATE THE TEXT
    // let nuevoTexto = document.createTextNode('Hola Mundo')

    // * INSERT THE TEXT IN THE HTML ELEMENT
    // nuevoElemento.appendChild(nuevoTexto)

    // * INSERT THE NEW ELEMENT IN THE SIDEBAR
    // sidebar.appendChild(nuevoElemento)

    // * ADD ENTRY AT 6
    // let enlacesSidebar = document.querySelectorAll('#sidebar ul')

    // * CREATE NEW LINK
    // let nuevoEnlace = document.createElement('A')
    // * ADD ATTRIBUTTES TO THE ELEMENT
    // nuevoEnlace.setAttribute('href', 'https://google.com')

    // * CREATE HTML 
    // let textoEnlace = document.createTextNode('Entrada 6')

    // * INSERT THE TEXT IN THE HTML ELEMENT
    // nuevoEnlace.appendChild(textoEnlace)

    // * CREATE ELEMENT FROM THE LIST
    // let nuevaLista = document.createElement('LI')

    // * ADD NEW ELEMENT 
    // nuevaLista.appendChild(nuevoEnlace)

    // * ADD ELEMENT TO THE SIDEBAR UL
    // enlacesSidebar[0].appendChild(nuevaLista)

    //////////////////////////////////////////////////////////////

    // * CLONING CONTENT
    // let contenido = document.querySelectorAll('main')

    // * CLONE THE FIRST
    // let nuevoContenido = contenido[0].cloneNode(true)

    // * GET THE DESTINY CODE
    // let sidebar = document.querySelector('aside')

    // * PRINTING THE CLONED CODE
    // sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5])

    /////////////////////////////////////////////////////////////////

    // * INSERTIONS WITH INSERTBEFORE

    // * GET THE SIDEBAR
    // let sidebar = document.querySelector('aside')

    // * CREATE THE HTML H2 ELEMENT
    // let masVisitados = document.createElement('H2')

    // * SET THE TEXT FOR THE H2
    // let textoVisitados = document.createTextNode('Post más visitados')

    // * SET THE TEXT IN THE H2
    // masVisitados.appendChild(textoVisitados)

    // * INSERT THE ELEMENT
    // * <target_element>.insertBefore(<element_to_insert>, <target_element>.childNodes[<position>])
    // sidebar.insertBefore(masVisitados, sidebar.childNodes[0])

    // * SELECT ALL THE H2 FROM THE MAIN ELEMENT
    // let contenido = document.querySelectorAll('main h2')

    // for (let i = 0;  i < contenido.length; i++){
    //   // * CREATE ELEMENT FROM THE 
    //   let nuevoElemento = document.createElement('LI')
    //   let nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue)
    //   nuevoElemento.appendChild(nuevoTexto)
    //   sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1])
    // }

    /////////////////////////////////////////////////////////////////

    // * DELETE NODES

    // * GET ELEMENT TO MANIPULATE
    // let primerPost = document.querySelector('main article')
    // console.log(primerPost)
    
    // * element --> get's parent node -> remove the first element from the selected value
    // primerPost.parentNode.removeChild(primerPost)

    // let enlaces = document.querySelector('#navegacion nav ul li a')
    // console.log(enlaces)

    // enlaces.parentNode.removeChild(enlaces)


    /////////////////////////////////////////////////////////////////

    // * REPLACE ELEMENTS
    
    // let viejoNodo = document.querySelector('main h2')
    // console.log('main h2')

    // let nuevoNodo = document.querySelector('footer h2')

    // * <elemento_to_replace>.parentNode.replaceChild(<new_element>, <element_to_replace>)
    // viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo)

    let nuevoTitulo = document.createElement('H2')

    let nuevoTexto = document.createTextNode('Hola mundo')

    nuevoTitulo.appendChild(nuevoTexto)

    let viejoNodo = document.querySelector('main H2')
    viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo)

  });
  
})();