import React, { useState } from 'react'

export default function DependentFormRepeater() {
    const [forms, setForms] = useState([{ id: 0 }]);
    const [formData, setFormData] = useState([]);

    const handleChange = (event, formId) => {
        const updatedFormData = [...formData];
        const formIndex = updatedFormData.findIndex(form => form.id === formId);

        if (formIndex === -1) {
            updatedFormData.push({ id: formId, [event.target.name]: event.target.value });
        } else {
            updatedFormData[formIndex] = { ...updatedFormData[formIndex], [event.target.name]: event.target.value };
        }

        setFormData(updatedFormData);
    };

    const addForm = () => {
        const newFormId = forms.length;
        setForms([...forms, { id: newFormId }]);
    };

    const removeForm = (formId) => {
        if (forms.length > 1) {
            setForms(forms.filter(form => form.id !== formId));
            setFormData(formData.filter(form => form.id !== formId));
        }
    };

  return (
    <div className='p-5 w-100 container'>
    {forms.map((form) => (
        <div key={form.id} className='card shadow mt-3'>
            <form className='p-5 text-start'>
                <div className="form-group">
                    <label htmlFor={`fullName-${form.id}`} className='lable-text'>Full name</label>
                    <input
                        type="text"
                        className="form-control"
                        id={`fullName-${form.id}`}
                        name="fullName"
                        onChange={(e) => handleChange(e, form.id)}
                        placeholder="Enter name"
                    />
                </div>


                <div className="form-group">
                    <label htmlFor={`mobileNumber-${form.id}`} className='lable-text'>Mobile number</label>
                    <input
                        type="text"
                        className="form-control"
                        id={`mobileNumber-${form.id}`}
                        name="mobileNumber"
                        onChange={(e) => handleChange(e, form.id)}
                        placeholder="Enter mobile"
                    />
                </div>

                <div className='mt-3'>
                    <button type="button" className="btn btn-danger mr-2 remove" onClick={() => removeForm(form.id)}>
                        Remove
                    </button>
                </div>
            </form>
        </div>
    ))}

    <div className='mt-3'>
        <button type="button" className="btn btn-primary addmore" onClick={addForm}>
            + Add more
        </button>
    </div>
</div>
  )
}
