import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { ethers } from 'ethers';
import axios from 'axios';
// import { useStateContext } from '../context';
import { money } from '../assets';
// import { CustomButton, FormField, Loader } from '../components';
// import { checkIfImage } from '../utils';
import FormField from './FormField';
import Loader from './Loader';
import CustomButton from './CustomButton';


const CreateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    // const { createCampaign } = useStateContext();
    const [form, setForm] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: ''
    });

    const handleFormFieldChange = (fieldName, e) => {
        e.preventDefault();

        console.log(e.target.value);
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('Button clicked');
        console.log(form);
        const response = await axios.post("http://localhost:3000/createCampaign", form).then((res) => { console.log(res); return res }).catch((err) => { console.log(err); })
        console.log(response);
        if (response.status == 200) {
            navigate('/');
        }


        //   checkIfImage(form.image, async (exists) => {
        //     if(exists) {
        //       setIsLoading(true)
        //       await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        //       setIsLoading(false);
        //       navigate('/');
        //     } else {
        //       alert('Provide valid image URL')
        //       setForm({ ...form, image: '' });
        //     }
        //   })
    }


    const handleClick = () => {
        console.log('Button clicked');
    }

    return (
        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 mx-[200px] mt-[10px]">
            {isLoading && <Loader />}
            <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
                <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Start a Campaign</h1>
            </div>

            <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
                <div className="flex flex-wrap gap-[40px]">
                    <FormField
                        labelName="Your Name *"
                        placeholder="John Doe"
                        inputType="text"
                        value={form.name}
                        handleChange={(e) => handleFormFieldChange('name', e)}
                    />
                    <FormField
                        labelName="Campaign Title *"
                        placeholder="Write a title"
                        inputType="text"
                        value={form.title}
                        handleChange={(e) => handleFormFieldChange('title', e)}
                    />
                </div>

                <FormField
                    labelName="Story *"
                    placeholder="Write your story"
                    isTextArea
                    value={form.description}
                    handleChange={(e) => handleFormFieldChange('description', e)}
                />

                <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
                    <img src={money} alt="money" className="w-[40px] h-[40px] object-contain" />
                    <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
                </div>

                <div className="flex flex-wrap gap-[40px]">
                    <FormField
                        labelName="Goal *"
                        placeholder="ETH 0.50"
                        inputType="text"
                        value={form.target}
                        handleChange={(e) => handleFormFieldChange('target', e)}
                    />
                    <FormField
                        labelName="End Date *"
                        placeholder="End Date"
                        inputType="date"
                        value={form.deadline}
                        handleChange={(e) => handleFormFieldChange('deadline', e)}
                    />
                </div>

                <FormField
                    labelName="Campaign image *"
                    placeholder="Place image URL of your campaign"
                    inputType="url"
                    value={form.image}
                    handleChange={(e) => handleFormFieldChange('image', e)}
                />

                <div className="flex justify-center items-center mt-[40px]">
                    <CustomButton
                        btnType="submit"
                        title="Submit new campaign"
                        // onClick={handleClick}
                        handleClick={handleClick}
                        styles="bg-[#1dc071]"
                    />
                    {/* <CustomButton 
 btnType="submit"
 title="Submit new campaign"
 handleClick={handleClick}
 styles="bg-[#1dc071]"
/> */}

                    {/* <button type='submit' className='bg-[#999]'  >
                        Submit
                    </button> */}
                </div>
            </form >
        </div >
    )
}

export default CreateCampaign