import React, { useEffect, useState } from 'react';
import { getUserData } from './Login';
import blackFridayImage from '../Assets/black-friday-concept-with-products-shopping-cart.jpg';
import image2 from "../Assets/casual-dressed-woman-holding-paper-bags.jpg"
import image3 from '../Assets/medium-shot-smiley-woman-with-tote-bag.jpg'
import image4 from "../Assets/women-s-day-still-life-with-makeup-jewelry.jpg"
import {useNavigate} from 'react-router-dom'
import '../CssFiles/Home.css'
export default function HomePage() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = getUserData();
        if (userData) {
            setUser(userData);
        }
    }, []);

    const handleProductpage=()=>{
        navigate('/allproducts')
    }

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <div class="flex min-h-screen w-screen">
                <div class="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">

                    <div class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
                        <div class="mb-16 lg:my-auto lg:max-w-lg">
                            <div class="mb-6 max-w-xl">
                                <div>
                                    <p class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">25% off this summer</p>
                                </div>
                                <h2 class="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                                    Discover Fantasy <br />
                                    Lands of
                                    <span class="rounded- abg-gradient-to-r inline-block bg-sky-400 from-lime-400 to-sky-400 px-2 font-bold text-white">netsMarts</span>
                                </h2>
                                <p class="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam rem voluptatem, animi tempora expedita!Lorem ipsum dolor.</p>
                            </div>
                            <div class="flex items-center">
                                <a href="/" class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"> Get started </a>
                                <a href="/" class="inline-flex items-center font-semibold text-sky-400 transition-colors duration-200 hover:text-lime-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                    </svg>
                                    Watch Videos</a
                                >
                            </div>
                        </div>
                    </div>

                    <div class="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
                        <div class="hidden w-56 items-center space-y-3 lg:flex">
                            <div class="overflow-hidden rounded-xl bg-yellow-400">
                                <img class="h-full w-full object-cover" src={blackFridayImage} alt="" />
                            </div>
                        </div>
                        <div class="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
                            <div class="h-40 overflow-hidden rounded-xl bg-green-600/60">
                                <img class="mx-auto h-full w-full object-cover" src={image2} alt="" />
                            </div>
                            <div class="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                                <img class="mx-auto h-full w-full object-cover" src={image3} alt="" />
                            </div>
                            <div class="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                                <img class="mx-auto h-full w-full object-cover" src={image4} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>






            <div class="mx-auto max-w-screen-lg">

                <div class="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
                    <div class="max-w-lg">
                        <h1 class="text-2xl font-bold text-gray-800">Beep Essences</h1>
                        <p class="mt-2 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias. Quas necessitatibus exercitationem praesentium.</p>
                    </div>
                    <div class="">
                        <button class="flex whitespace-nowrap rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Chat with us
                        </button>
                        <p class="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +1 432 923 0001
                        </p>
                    </div>
                </div>

                <main class="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
                    <article class="relative">
                        <div class="aspect-square overflow-hidden">
                            <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={require('../Assets/img.jpg')} alt="" />
                        </div>
                        <div class="absolute top-0 m-1 rounded-full bg-white">
                            <p class="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                        </div>
                        <div class="mt-4 flex items-start justify-between">
                            <div class="">
                                <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                                    <a title="" class="">
                                        Arabian Musk
                                        <span class="absolute" aria-hidden="true"></span>
                                    </a>
                                </h3>
                                <div class="mt-2 flex items-center">
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                </div>
                            </div>

                            <div class="text-right">
                                <del class="mt-px text-xs font-semibold text-gray-600 sm:text-sm"> $79.00 </del>
                                <p class="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                            </div>
                        </div>
                    </article>

                    <article class="relative">
                        <div class="aspect-square overflow-hidden">
                            <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={require('../Assets/img2.jpg')} alt="" />
                        </div>
                        <div class="mt-4 flex items-start justify-between">
                            <div class="">
                                <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                                    <a title="" class="">
                                        Albanian Essence
                                        <span class="absolute" aria-hidden="true"></span>
                                    </a>
                                </h3>
                                <div class="mt-2 flex items-center">
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                </div>
                            </div>

                            <div class="text-right">
                                <p class="text-xs font-normal sm:text-sm md:text-base">$299.00</p>
                            </div>
                        </div>
                    </article>
                    <article class="relative">
                        <div class="aspect-square overflow-hidden">
                            <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={require('../Assets/img1.jpg')} alt="" />
                        </div>
                        <div class="mt-4 flex items-start justify-between">
                            <div class="">
                                <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                                    <a title="" class="">
                                        Siberian Perfum
                                        <span class="absolute" aria-hidden="true"></span>
                                    </a>
                                </h3>
                                <div class="mt-2 flex items-center">
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                </div>
                            </div>

                            <div class="text-right">
                                <p class="text-xs font-normal sm:text-sm md:text-base">$49.00</p>
                            </div>
                        </div>
                    </article>

                    <article class="relative">
                        <div class="aspect-square overflow-hidden">
                            <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={require('../Assets/img2.jpg')} alt="" />
                        </div>
                        <div class="mt-4 flex items-start justify-between">
                            <div class="">
                                <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                                    <a title="" class="">
                                        Siberian Perfum
                                        <span class="absolute" aria-hidden="true"></span>
                                    </a>
                                </h3>
                                <div class="mt-2 flex items-center">
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                                    </svg>
                                </div>
                            </div>

                            <div class="text-right">
                                <p class="text-xs font-normal sm:text-sm md:text-base">$49.00</p>
                            </div>
                        </div>
                    </article>
                </main>
            </div>








            <section class="w-screen bg-white bg-contain bg-center bg-no-repeat py-16 text-center font-medium text-gray-700 md:py-24">
                <div class="mx-auto w-full py-0 text-gray-700 md:py-24">
                    <div class="flex flex-wrap text-center">
                        <div class="lg:w-1\/2 mx-auto w-full max-w-full flex-shrink-0 text-gray-700 lg:flex-none xl:w-5/12 xl:flex-none">
                            <h2 class="mt-0 mb-3 font-bold tracking-normal text-gray-800 md:text-3xl">Know more about products</h2>
                            <p class="mt-0 mb-5 text-sm md:px-24 lg:px-3">We are trusted by over 2000+ clients. Join them and grow our business.</p>
                            <a onClick={handleProductpage} class="rounded-md border-blue-600 bg-blue-600 px-5 py-2 text-sm font-bold text-white focus:bg-blue-700 focus:text-white hover:bg-blue-700 hover:text-white hover:shadow-md">Get a Products</a>
                        </div>
                    </div>
                </div>
            </section>






            <footer class="">
                <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
                    <div class="max-w-sm">
                        <div class="mb-6 flex h-10 items-center space-x-2">
                            <img class="h-full object-contain" src="/images/logo-circle.png" alt="" />
                            <span class="text-lg font-medium">Boleno</span>
                        </div>
                        <div class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
                    </div>
                    <div class="">
                        <div class="mt-4 mb-2 font-medium xl:mb-4">Guides</div>
                        <nav aria-label="Guides Navigation" class="text-gray-500">
                            <ul class="space-y-3">
                                <li><a class="hover:text-blue-600 hover:underline" >How to make a footer</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Designing your app</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Getting help from the community</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Pricing vs Hourly Rate</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="">
                        <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
                        <nav aria-label="Footer Navigation" class="text-gray-500">
                            <ul class="space-y-3">
                                <li><a class="hover:text-blue-600 hover:underline" >Pricing</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Demo</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Press</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Support Hub</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" >Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="">
                        <div class="mt-4 mb-2 font-medium xl:mb-4">Support Us on Product Hunt</div>
                        <div class="flex flex-col">
                            <div class="mb-4">
                                <a href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?post_id=100070&theme=light" alt="Apple - Think&#0032;Different | Product Hunt" width="250" height="54" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-t">
                    <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
                        <p class="">© 2022 Boleno | All Rights Reserved</p>
                        <p class="-order-1 sm:order-none">Made with ❤️ Remotely</p>
                        <p class="">
                            <a class="" >Privacy Policy</a>
                            <span>|</span>
                            <a class="">Terms of Service</a>
                        </p>
                    </div>
                </div>
            </footer>



        </div>
    );
}
