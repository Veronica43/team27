import React, {useState, useEffect} from 'react';
import axios from 'axios' ;
import '../styles/RandomFact.scss';
import { ButtonBack } from '../components/ButtonBack';

const fetchUrlFacts = 'https://ffa.aakhilv.me/json'

const RandomFact = () => {
    //Variable
const [fact, setFact] = useState('')

    // The fact load with webpage
useEffect( () => {
    getFacts()
}, []);

    // Calling to Fun Fact API
const getFacts = async () => {
    const result = await axios.get(fetchUrlFacts)
    const text = result.data.text
    setFact(text)
}

    // Method to get next Fact
const nextFact = () => {
    getFacts()
}

    return (
        <div className='main'>
            <ButtonBack />
            <h1>Did you know that...?</h1>
            <div className='container'>
                <p>{fact}</p>
            </div>
            <button onClick={nextFact}>Get a random joke</button>
        </div>

    )
}

export default RandomFact;
