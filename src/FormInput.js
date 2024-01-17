function FormInput({handleChange, formInputData, handleSubmit}){
    return(
     
    
        <div className="form-row row">
            <h2 className='mb-5 mt-5 text-center'>STUDENT FORM</h2>
          <div className="col-12 mb-4">
            <input type="text" onChange={handleChange} value={formInputData.r_no} autoComplete='off' name="r_no" className="form-control"  placeholder="Enter Your ROll No" />
          </div>
          <div className="col-12 mb-4">
            <input type="email" onChange={handleChange} value={formInputData.name} autoComplete='off' name="name" className="form-control" placeholder="Enter Your name" />
          </div>
          <div className="col-12 mb-4">
            <input type="text" onChange={handleChange} value={formInputData.sub_1} autoComplete='off' name="sub_1" className="form-control" placeholder="React js " />
          </div>
          <div className="col-12 mb-4">
            <input type="text" onChange={handleChange} value={formInputData.sub_2} autoComplete='off' name="sub_2" className="form-control" placeholder="Node js " />
          </div>
          <div className="col-12 mb-4">
            <input type="text" onChange={handleChange} value={formInputData.sub_3} autoComplete='off' name="sub_3" className="form-control" placeholder="Python" />
          </div>
          <div className="col-12 mb-4">
            <input type="text" onChange={handleChange} value={formInputData.sub_4} autoComplete='off' name="sub_4" className="form-control" placeholder=".Net" />
          </div>
          <div className="col-12 mb-4">
            <input type="text" onChange={handleChange} value={formInputData.sub_5} autoComplete='off' name="sub_5" className="form-control" placeholder="Rubby" />
          </div>
          <div className="col-12 mb-4">
            <input type="submit" onClick={handleSubmit} className="btn btn-success" />
          </div>
          <div>
            
          </div>
        </div>
    
      
    )
    }
    
    export default FormInput;