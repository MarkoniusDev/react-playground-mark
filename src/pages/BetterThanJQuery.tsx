import React, { useState } from 'react';

import '../styles/JQuery.css';

const initialHiddenLines = [
  false,
  false,
  false,
  false,
  false,
  false
]

const initialRemovedLines = [
  false,
  false,
  false,
  false,
  false,
  false
]

const BetterThanJQuery = () => {
  const [hiddenLines, setHiddenLines] = useState(initialHiddenLines);
  const [removedLines, setRemovedLines] = useState(initialRemovedLines);

  const handleInvisibilite = (key: number) => {
    hiddenLines[key] = true;
    setHiddenLines([... hiddenLines]);
  }

  const handleDisparition = (key: number) => {
    removedLines[key] = true;
    setRemovedLines([... removedLines]);
  }

  const resetInvisibilite = () => {
    const newArray = hiddenLines.map(() => {
      return false;
    })
    setHiddenLines([...newArray]);
  }

  const resetDisparition = () => {
    const newArray = removedLines.map(() => {
      return false;
    })
    setRemovedLines([...newArray]);
  }

  return(
    <main className='Page'>
      <br />Saisir la couleur des lignes paires : <input type='text' className='saisieCouleur' id='txtPair' />
      <br />Saisir la couleur des lignes impaires : <input type='text' className='saisieCouleur' id='txtImpair' />
      <br/><button id='faireApparaitre' onClick={() => {resetDisparition()}}>Faire apparaitre toutes les lignes</button>
      <br/><button id='rendreVisible' onClick={() => {resetInvisibilite()}}>Rendre visible toutes les lignes</button>
      <table id='tabLogiciel' className="views-table cols-7">
        <thead>
          <tr>
            <th>Actions</th>
            <th className="views-field-title" scope="col">Nom</th>
            <th className="views-field-version" scope="col">Version          </th>
            <th className="views-field-body" scope="col">Introduction</th>
            <th className="views-field-systemedexploitation" scope="col">OS          </th>
            <th className="views-field-typelicence" scope="col">Type de licence</th>
            <th className="views-field-salles" scope="col">Dans quelles salles ?          </th>
            <th className="views-field-tags" scope="col">Mot clés          </th>
          </tr>
        </thead>
        <tbody>
          <tr id='item1' className={(hiddenLines[0] ? 'hidden' : '') + (removedLines[0] ? ' removed' : '')} >
            <td><button onClick={() => {handleDisparition(0)}}>Disparition</button><button onClick={() => {handleInvisibilite(0)}}>Invisibilité</button></td>
            <td className="views-field-title"><a href="/?q=content/xslt-pour-php">XSLT pour PHP</a>          </td>
            <td className="views-field-version">5.4.6</td>
            <td className="views-field-body"><p>XSL signifie Extensible Stylesheet Language, et est un langage de feuille de style pour les documents XML.</p>          </td>
            <td className="views-field-systemedexploitation">Linux</td>
            <td className="views-field-typelicence">Libre          </td>
            <td className="views-field-salles">Toutes les salles          </td>
            <td className="views-field-tags"><a href="/?q=logiciel/xslt" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">XSLT</a>, <a href="/?q=logiciel/xml" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">XML</a>, <a href="/?q=logiciel/html" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">HTML</a>          </td>
          </tr>
          <tr id='item2' className={(hiddenLines[1] ? 'hidden' : '') + (removedLines[1] ? ' removed' : '')}>
            <td><button onClick={() => {handleDisparition(1)}}>Disparition</button><button onClick={() => {handleInvisibilite(1)}}>Invisibilité</button></td>
            <td className="views-field-title"><a href="/?q=content/xppaut">Xppaut</a>          </td>
            <td className="views-field-version">5.85          </td>
            <td className="views-field-body"><p>XPP (XPPAUT is another name; I will use the two interchangeably) is a tool for solving</p>          </td>
            <td className="views-field-systemedexploitation">Linux, Windows          </td>
            <td className="views-field-typelicence">Libre          </td>
            <td className="views-field-salles">Toutes les salles          </td>
            <td className="views-field-tags"></td>
          </tr>
          <tr id='item3' className={(hiddenLines[2] ? 'hidden' : '') + (removedLines[2] ? ' removed' : '')}>
            <td><button onClick={() => {handleDisparition(2)}}>Disparition</button><button onClick={() => {handleInvisibilite(2)}}>Invisibilité</button></td>
            <td className="views-field-title"><a href="/?q=content/xmlmind-xml-editor">XMLmind XML Editor</a>          </td>
            <td className="views-field-version">5.3.0          </td>
            <td className="views-field-body"><p>XMLmind XML Editor is a strictly validating, near WYSIWYG, <a href="http://docbook.org/" >DocBook</a> editor, <a href="http://dita.xml.org/" >DITA</a> editor, <a href="http://www.w3.org/TR/MathML2/" >MathML</a> </p>          </td>
            <td className="views-field-systemedexploitation">Linux, Windows          </td>
            <td className="views-field-typelicence">Propriétaire          </td>
            <td className="views-field-salles">Toutes les salles          </td>
            <td className="views-field-tags"><a href="/?q=logiciel/xml" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">XML</a>          </td>
          </tr>
          <tr id='item4' className={(hiddenLines[3] ? 'hidden' : '') + (removedLines[3] ? ' removed' : '')}>
            <td><button onClick={() => {handleDisparition(3)}}>Disparition</button><button onClick={() => {handleInvisibilite(3)}}>Invisibilité</button></td>
            <td className="views-field-title"><a href="/?q=content/xmaple">Xmaple</a>          </td>
            <td className="views-field-version">9          </td>
            <td className="views-field-body"><p>Maple est un <a href="http://fr.wikipedia.org/wiki/Logiciel_propri%C3%A9taire" title="Logiciel propriétaire">logiciel propriétaire</a> de <a href="http://fr.wikipedia.org/wiki/Calcul_formel" title="Calcul formel">calcul formel</a> édité par la soc</p>          </td>
            <td className="views-field-systemedexploitation">Linux          </td>
            <td className="views-field-typelicence">Libre          </td>
            <td className="views-field-salles">Toutes les salles          </td>
            <td className="views-field-tags"><a href="/?q=logiciel/informatique-math%C3%A9matiques-sciences" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Informatique; Mathématiques; sciences</a>          </td>
          </tr>
          <tr  id='item5' className={(hiddenLines[4] ? 'hidden' : '') + (removedLines[4] ? ' removed' : '')}>
            <td><button onClick={() => {handleDisparition(4)}}>Disparition</button><button onClick={() => {handleInvisibilite(4)}}>Invisibilité</button></td>
            <td className="views-field-title"><a href="/?q=content/xm-grace">XM-grace</a>          </td>
            <td className="views-field-version">5.1.20          </td>
            <td className="views-field-body"><p>Xmgrace est un outil du domaine public pour le tracé de courbes et d'histogrammes sous X.</p></td>
            <td className="views-field-systemedexploitation">Linux          </td>
            <td className="views-field-typelicence">Libre          </td>
            <td className="views-field-salles">Toutes les salles          </td>
            <td className="views-field-tags"><a href="/?q=logiciel/informatiques-biologie-math%C3%A9matiques" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Informatiques; Biologie; Mathématiques</a>          </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default BetterThanJQuery;
