import { Link } from "react-router-dom";
import logo from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import Swal from 'sweetalert2'

const Login = () => {
    const {singIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
       

        singIn(email, password)
        .then(result=>{
            const logedUser = result.user;
            console.log(logedUser)
            if(logedUser){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })                  
            }
        })
        .catch(error=>{
            if(error){
                Swal.fire({
                  icon: 'error',
                  title: 'Error...',
                  text:`${error}`
                })
              }
        })
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:mr-12 w-1/2 ">
            <img src={logo} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl text-secondary font-bold">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-secondary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="my-5">New to car Doctors?<Link to='/singup' className="text-orange-600 font-bold"> Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
