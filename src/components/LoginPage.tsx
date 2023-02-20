import moneyAppIcon from '../assets/money-app-icon.png'
import pinkImg from '../assets/pink-img.png'
import blueImg from '../assets/blue-img.png'
import yellowImg from '../assets/yellow-img.png'
import tickCircle from '../assets/tick-circle.png'
import React, { useContext, useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { AuthContext } from './userDetails/userDetailsContext'

interface UserData {
    email: string;
    password: string;
}

const LoginPage = () => {
    const navigate: NavigateFunction = useNavigate();
    const userData: UserData = useContext(AuthContext);
    const [invalidDetails, setInvalidDetails] = useState<boolean>(false);
    const [userDetails, setUserDetails] = useState<UserData>({
        email: "",
        password: ""
    });

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const { value, name } = e.target as HTMLInputElement;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const login = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (userDetails.email === userData.email && userDetails.password === userData.password) {
            navigate("/profile")
        } else {
            setInvalidDetails(true)
        }
    };

    return (
        <div className="App md:flex">
            <div className='md:ml-16 mt-11 mx-auto w-[90%] md:w-5/12 md:mr-14'>
                <img src={moneyAppIcon} alt="Money App icon" className="" />
                <h1 className='mt-3.5 text-left font-bold text-3xl mb-2'>Hi there, see what’s new</h1>
                <p className='text-left text-[#595959] font-normal text-base'>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</p>
                <div className='mt-16'>
                    <div className='flex mb-10'>
                        <img src={pinkImg} alt="A note where you monitor your earnings" className='w-16 h-16' />
                        <div className='ml-5'>
                            <h3 className='text-left text-[#858585] font-medium text-base'>Monitor your Earnings</h3>
                            <p className='text-left text-[#A3A3A3] font-normal text-xs'>Easily see how much your busineses are earning  on each transaction and watch your earnings rise. </p>
                        </div>
                    </div>
                    <div className='flex mb-10'>
                        <img src={blueImg} alt="A note where you monitor your earnings" className='w-16 h-16' />
                        <div className='ml-5'>
                            <h3 className='text-left text-[#858585] font-medium text-base'>Manage your Businesses</h3>
                            <p className='text-left text-[#A3A3A3] font-normal text-xs'>Easily see how much your businesses are earning  on each transaction and watch your earnings rise. </p>
                        </div>
                    </div>
                    <div className='flex mb-10 bg-[#F8F8F6] p-4 rounded-[20px]'>
                        <img src={yellowImg} alt="A note where you monitor your earnings" className='w-16 h-16' />
                        <div className='ml-5'>
                            <h3 className='text-left font-medium text-[#1A1A1A] text-base'>Delegate to Staff</h3>
                            <p className='text-left font-medium text-[#1A1A1A] text-xs'>Easily see how much your businesses are earning  on each transaction and watch your earnings rise. </p>
                        </div>
                        <img src={tickCircle} alt="A small yellow tick circle" className='w-5 h-5 self-center' />
                    </div>
                </div>
            </div>
            <div className='bg-[#FEF0F2] md:w-7/12 md:py-0 py-8'>
                <article className='bg-[#FFFFFF] w-4/5 mx-auto md:translate-y-[15%] px-10 py-8 shadow-lg rounded-xl'>
                    <h5 className='text-left font- text-[#1A1A1A] font-semibold text-2xl'>Login into your dashboard</h5>
                    <p className='text-left text-[#858585] font-normal text-base'>Provide details to login into your account</p>
                    <form className='mt-12 grid gap-8'>
                        {invalidDetails ? <p className='text-[#E60A2B]'>Invalid Details</p> : null}
                        <label className='grid text-left'>
                            Email
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder='Cokitchen222@gmail.co'
                                className='h-[65px] rounded-lg border border-[#1A1A1A] shadow-md mt-1.5 pl-4'
                                onChange={handleChange} />
                        </label>
                        <label className='grid text-left'>
                            Password
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder='E.g=Bigboy123'
                                className='h-[65px] rounded-lg border border-[#1A1A1A] shadow-md mt-1.5 pl-4'
                                onChange={handleChange} />
                        </label>
                        <button
                            type='submit'
                            className='mt-14 bg-[#1CC578] text-[#FFFFFF] h-[65px] rounded-[40px]'
                            onClick={(e) => login(e)}
                        >Login</button>
                    </form>
                </article>
            </div>
        </div>
    )
}

export default LoginPage;