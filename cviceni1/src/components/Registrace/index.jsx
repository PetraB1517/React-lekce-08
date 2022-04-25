import React,{ useState } from "react";
import './style.css'


const Registrace = () => {
    const [userName, setUsrName] = useState('');
    const [country, setCountry] = useState('Česká republika')
    const [termsAccepted, setTerms] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Registrován nový uživatel ${userName} ze země ${country}`);
    };

    


    return (
        <form onSubmit={handleSubmit}>
            <div className={userName == '' ? "block":"none"}>
            Uživatelské jméno je povinny udaj
            </div>

            <label>
                Uživatelské jméno:
                <input type="text" onChange={(event) => setUsrName(event.target.value)}/>
            </label>
            <label>
                Země původu:
                <select value={country} onChange={(event) => setCountry(event.target.value)}>
                    <option value="Chorvatsko">Chorvatsko</option>
                    <option value="Česká republika">Česká republika</option>
                    <option value="Polsko">Polsko</option>
                    <option value="Slovenská republika">Slovenská republika</option>
                </select>
            </label>
            <label>
				<input
					type="checkbox"
					onChange={(event) => { setTerms(event.target.checked) }}
				/>
				Souhlasim s podminkami
			</label>
            <button disabled={(userName == '') || !termsAccepted} type="submit">Registrovat</button>
            
        </form>
        
    );
};

export default Registrace;