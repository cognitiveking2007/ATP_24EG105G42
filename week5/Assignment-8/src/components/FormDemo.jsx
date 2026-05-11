import { useForm } from "react-hook-form";
function FormDemo(){
    const {register, // to registerr form fields
        handleSubmit, //to handle for submissions
        formState:{errors},//to handle validations
    }=useForm();
    // form submit function
    const onFormSubmit = (obj)=>{
        console.log(obj);
    };
    return(
        <div>
           <form className="max-w-md mx-auto mt-10"
                 onSubmit={handleSubmit(onFormSubmit)}>
            {/* username */}
            <div className="mb-3">
                <label htmlFor="username">Username</label>
                <input type="text"
                {...register("username"),
                    {
                        required:"Username required",
                        validate:(v)=>v.trim().length!==0||"White space is not valid"
                        //minLength:4,
                    }
                }
                id="username"
                className="border w-full p-3" />
                {/* username validation error message */}
                {errors.username?.type==="required"&&<p className=" text-color-red" />}
                {/*
                errors.username?.type==="minLength"&&<p className="text-color-red"/>
                */}
            </div>
            {/* email */}
            <div className="mb-3">
                <label htmlFor="email">email</label>
                <input type="email"{...register("email"),
                    {required:"email required"}
                } id="email"
                className="border w-full p-3" >
                </input>
                 {/* email validation error message */}
                {errors.email?.type==="required"&&<p className=" text-color-red" />}
            </div>
            <button>submit</button>
                 </form>
            </div>
    )
}

export default FormDemo;