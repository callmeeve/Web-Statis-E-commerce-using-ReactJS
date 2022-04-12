import { useState } from "react"; // syntax onchange yaitu melakukan perubahan pada event dimana targetnya adalah value atau isi yang di isikan dan dimasukkma ke dalam stategambar

const Form = () => {
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    const simpan = () => {
        setEmail('')
        setNumber('')
        setPassword('')
    }
    return (
        <div className="container mb-3">
            <div class="text-center">
                <div class="h1 text-dark">Order Form</div>
                <p class="mb-4 text-muted">Try Our Fresh Seafood Now!!!</p>
            </div>
            <form>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email :</label>
                    <br />{email}
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="hp" className="form-label">No.Hp :</label>
                    <br />{number}
                    <input type="hp" className="form-control" id="hp" placeholder="Enter number handphone" name="hp" value={number} onChange={(e)=>setNumber(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password :</label>
                    <br />{password} 
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-danger" onClick={simpan}>Order</button>
            </form>
        </div>
    );
}

export default Form;