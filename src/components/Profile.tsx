import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import moneyAppIcon from '../assets/money-app-icon.png'
import Timer from "../assets/timer.png"
import ProfileData from './CompanyInfo';

const Profile = () => {
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 120000)
    }, [navigate]);
    return (
        <div className='pb-8'>
            <header className='border-b pl-8'>
                <img src={moneyAppIcon} alt="Money App Icon" />
            </header>
            <main className='md:flex md:gap-8'>
                <ProfileData />
                <div className='bg-[#F7F7F7] mx-auto w-[85%] md:mr-8 md:mt-4 rounded-lg pb-8'>
                    <div className='mt-12 translate-y-4 ml-4 md:ml-8 p-2 md:p-4 rounded-[30px] w-2/4 flex bg-[#FEEBEE]'>
                        <img src={Timer} alt="A timer" className='w-4 h-4' />
                        <p className='pl-4 text-sm text-[#E60A2B]'>Coming Soon</p>
                    </div>
                    <article className='rounded-lg bg-[#FFFFFF] pb-12 mt-12 pl-8 w-[85%] mx-auto grid gap-8'>
                        <div className='mt-8 flex gap-4'>
                            <h2 className='w-14 h-14 text-3xl bg-[#F4F5F5] rounded-lg'>🎉</h2>
                            <div className='w-full grid self-center gap-2'>
                                <div className='h-3.5 w-3/4 bg-[#F5F5F5] rounded'></div>
                                <div className='h-3.5 w-1/2 bg-[#F5F5F5] rounded'></div>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <h2 className='w-14 h-14 text-3xl bg-[#F4F5F5] rounded-lg'>✨</h2>
                            <div className='w-full grid self-center gap-2'>
                                <div className='h-3.5 w-3/4 bg-[#F5F5F5] rounded'></div>
                                <div className='h-3.5 w-1/2 bg-[#F5F5F5] rounded'></div>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <h2 className='w-14 h-14 text-3xl bg-[#F4F5F5] rounded-lg'>💥</h2>
                            <div className='w-full grid self-center gap-2'>
                                <div className='h-3.5 w-3/4 bg-[#F5F5F5] rounded'></div>
                                <div className='h-3.5 w-1/2 bg-[#F5F5F5] rounded'></div>
                            </div>
                        </div>
                    </article>
                    <div className='mt-8 ml-8'>
                        <h3 className='text-center text-3xl font-bold'>📫 Notifications</h3>
                        <p className='text-base text-center'>Receive notifcations about your rider performance, efficiency reviews and a lot more</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile;