import React, { useState } from 'react';
import { initialBox } from '../mocks/initialPokemonBox';

import '../styles/Types.css';

interface Pokemon {
  id: number;
  name: string;
  imgUrl: string;
  isPicked: boolean;
}

const Types: React.FC = () => {
  const [box, setBox] = useState<Pokemon[]>(initialBox);
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [filterValue, setFilterValue] = useState<string>('');
  const [log, setLog] = useState<string>('Logs will show here');

  const isTeamFull = ():boolean => {
    const maxTeamSize = 4;
    
    return( team.length < maxTeamSize )
  }

  const togglePokemonAvailability = (pokemonToToggle: Pokemon, key?: number): void => {
    let newPokemon: Pokemon = { ...pokemonToToggle };
    if (key || key === 0) {
      newPokemon = { ...pokemonToToggle, isPicked: true };
      box[key] = newPokemon;
      setBox([...box]);

    } else {
      newPokemon = { ...pokemonToToggle, isPicked: false };
      const index = box.findIndex((pokemon: Pokemon) => pokemon.id === pokemonToToggle.id )
      box[index] = newPokemon;
      setBox([...box]);
    }
  }

  const addPokemonToTeam = (pokemon: Pokemon):void => {
    setLog(`${pokemon.name} was added to the team \n`);
    team.push(pokemon);
    setTeam([...team]);
  }

  const removePokemonFromTeam = (key: number): void => {
    setLog(`Removing index ${key} from team.`);
    team.splice(key, 1);
    setTeam([...team]);
    
  }

  const handleClickOnBoxPokemon = (pokemon: Pokemon, key: number) => {
    if (pokemon.isPicked === false) {

      if (isTeamFull()) {
        togglePokemonAvailability(pokemon, key);
        addPokemonToTeam(pokemon);

      } else {
        setLog(`L'équipe est complète. ${pokemon.name} n'a pas pu être ajouté`)

      }
    } else {
      setLog(`${pokemon.name} est déjà dans l'équipe.`)
    }
  }

  const handleClickOnTeamPokemon = (pokemon: Pokemon, key: number): void => {
    removePokemonFromTeam(key);
    togglePokemonAvailability(pokemon);
  }

  return(
    <main className='Page'>
      <h1>Logs : </h1>
      <p>{log} </p>

      <h1>Box : </h1>
      { box.length === 0 ? (
        <></>
      ) : (
        <div>
          <input 
            type='text' 
            placeholder='Nom . . .' 
            value={filterValue} 
            onChange={
              (event) => {
                setFilterValue(event.currentTarget.value);
              }
            }
          />
          <div className='box-container'>
            { box.map((pokemon: Pokemon, key: number) => (
              <>
                { pokemon.name.toLowerCase().includes(filterValue.toLowerCase()) &&
                  <div key={key} className='box-flex-element'>
                    <img 
                      src={pokemon.imgUrl}
                      onClick={() => {handleClickOnBoxPokemon(pokemon, key)}}
                      className={pokemon.isPicked ? 'disabled' : ''}
                    />
                  </div>
                }
              </>
            ))}
          </div>
        </div>
      )}

      <h1>Team : </h1>
      { team.length === 0 ? (
        <></>
      ) : (
        <div className='team-container'>
          { team.map((pokemon: Pokemon, key: number) => (
            <div key={key} className='team-flex-item'>
              <img 
                src={pokemon.imgUrl}
                onClick={() => {handleClickOnTeamPokemon(pokemon, key)}}
              />
              <p>{pokemon.name} </p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Types;
