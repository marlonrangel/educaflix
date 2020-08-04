import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias ] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  // função para passar os parâmetros dinamicamente
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor, //nome : 'valor
    })
  }

  function handleChange(infoEvent){
    
    
    setValue(
      infoEvent.target.getAttribute('name'), 
      infoEvent.target.value);
  }

    return(
      <PageDefault>
          <h1>Cadastro de categoria: { values.nome } </h1>

          <form onSubmit={function handleSubmit(infoEvent){
            infoEvent.preventDefault();
            console.log('Você tentou criar um form');
            setCategorias([
              ...categorias,
              values
            ]);

            setValue(valoresIniciais);

          }}>
           
          <FormField
           label="Nome da categoria"
           type="text"
           name="nome"
           value={values.nome}
           onChange={handleChange} 
          />
          <FormField
                label="Descrição"
                type="textArea"
                name="descricao"
                value={values.descricao}
                onChange={handleChange} 
                />      
          <FormField
                label="Cor"
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange} 
          />

              <button>Cadastrar</button>
          </form>
                <ul>
                  {categorias.map((categoria, indice) => {
                    return(
                      <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                      </li>
                      )
                  })}
                </ul>
          <Link to="/">
            Ir para home
          </Link>
        </PageDefault>
    )
  }
export default CadastroCategoria;  