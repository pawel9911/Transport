import { useState } from "react";

const Contact = ({name}) =>{
    const [form, setForm] = useState({email: '', name: '', message: ''});
    const [error, setError] = useState(false);
    const validate = (f) =>{
        if((f.name.length<=0)||(f.email.length<=0)||(f.message.length<=50)){
            setError(true)
            return 'Błąd Walidacji'
        }
        return null;
    }
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm(prevState =>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    const handleSumbit = (e) =>{
        e.preventDefault();
        const errorMsg = validate(form);
        if(errorMsg){
            console.log(errorMsg);
        }
        //wysłanie do jakiegoś API
        fetch('./contact.json')
        // , {
        //     method: 'POST',
        //     body: JSON.stringify(form),
        //     headers: {
        //         'content-Type': 'application/json'
        //     }
        // }
        .then((response)=> response.json())
        .then(obj => console.log(obj.messages, 'dodałem wiadomość'))
        .catch(err => console.log(err))
    }
    return (
            <div className='contact'>
                <div name={name} className='container'>
                    <form onSubmit={handleSumbit}>
                        <h2>Skontaktuj się z nami</h2>
                        {error? <p>Błąd Walidacji</p>: null}
                        <div className='dataContact'>
                            <div>
                                <label>Imię</label>
                                <input placeholder='Jan' type='text' name='name' value={form.name} onChange={handleChange}></input>
                            </div>
                            <div>
                                <label>Email</label>
                                <input placeholder='jan@email.com' type='email' name='email' value={form.email} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className='message'>
                            <label> Wpisz swoją wiadomość</label>
                            <textarea placeholder='Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.' maxLength='265' name='message' value={form.message} onChange={handleChange}></textarea>
                            <button>Wyślij</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Contact;