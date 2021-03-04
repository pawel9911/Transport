import { useState } from "react";

const Contact = ({name}) =>{
    const [form, setForm] = useState({email: '', name: '', message: ''});
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
        if((form.name.length<=0)||(form.email.length<=0)||(form.message.length<=0)){
            console.log('Alert')
        }
        else{
            e.target.submit();
            console.log(form)
        }
    }
    return (
            <div className='contact'>
                <div name={name} className='container'>
                    <form onSubmit={handleSumbit}>
                        <h2>Skontaktuj się z nami</h2>
                        <span className='dataContact'>
                            <div>
                                <label>Imię</label>
                                <input placeholder='Jan' type='text' name='name' value={form.name} onChange={handleChange}></input>
                            </div>
                            <div>
                                <label>Email</label>
                                <input placeholder='jan@email.com' type='email' name='email' value={form.email} onChange={handleChange}></input>
                            </div>
                        </span>
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