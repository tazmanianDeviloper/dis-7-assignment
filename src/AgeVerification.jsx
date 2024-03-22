import {useState} from 'react';

export default function AgeVerification() {
    const [age, setAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [welcomeMessageVisible, setWelcomeMessageVisible] = useState(false);

    const checkAge = () => {
        const ageInput = parseInt(age);

        if (isNaN(ageInput) || ageInput < 0) {
            setErrorMessage('Your answer is not acceptable! Please put a new one!');
            setAge('');
        } else if (ageInput > 17) {
            setWelcomeMessageVisible(true);
            setErrorMessage('');
        } else {
            setErrorMessage('You must be at least 18 years old to enter.');
        }
    };

    function handleAgeChange(event){
        setAge(event.target.value);
        setWelcomeMessageVisible(false);
        setErrorMessage('');
    }

    return (
        <div>
            <h2>To enter this website, you need to be at least 18 years old.</h2>
            <label htmlFor="age">How old are you? </label>
            <input id="age" value={age} onChange={handleAgeChange} />
            <button onClick={checkAge}>Check Age</button>
            {errorMessage && <h5>{errorMessage}</h5>}
            {welcomeMessageVisible && <h1>Welcome</h1>}
        </div>
    );
}

