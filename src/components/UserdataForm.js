import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    name: '',
    email:'',
    phone:''
}

const onSubmit = values => {
    console.log('Form Data',values)
}

const validate = values => {
    let errors = {}

    if(!values.name){
        errors.name = 'Required'
    }

    if(!values.email){
        errors.email = 'Required'
    }

    if(!values.phone){
        errors.phone = 'Required'
    }

    return errors
}

function UserdataForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

   // console.log('Form Values', formik.values);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? <div className='error'> {formik.errors.name} </div> : null }
                </div>

                <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email ? <div className='error'>{ formik.errors.email} </div> : null }
                </div>
                
                <div className='form-control' > 
                <label htmlFor='phone'>Phone No</label>
                <input type='tel' id='phone' name='phone' onChange={formik.handleChange} value={formik.values.phone}/>
                {formik.errors.phone ? <div className='error'> {formik.errors.phone} </div> : null }
                </div>

                <button type='submit'> Submit </button>
            </form>

        </div>
        
    )
}

export default UserdataForm
