import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from "react-router-dom";


const ContentPage = () => {
  const {id} = useParams();
  const [movieDetails, setMovieDetails]= useState([]);
  const [loading, setLoading] =useState(false);
  const APP_ACCESS_TOKEN =process.env.REACT_APP_ACCESS_TOKEN;

  const apiBaseUrl = 'https://api.themoviedb.org/3';
  const apiKey = 'f62ee32f237ff2b7b0aeeea0d73ad3cb';
  const imagePath = "https://image.tmdb.org/t/p/w500"

// Use the correct endpoint for fetching a specific movie by ID
    const apiUrl = `${apiBaseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`


   const fetchMovieDetails =()=>{
    const options = {
      method: 'GET',
      url: apiUrl,
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: APP_ACCESS_TOKEN,
      }
    };

    setLoading(true)
    axios
    .request(options)
    .then(function (response) {
      setMovieDetails(response.data)
      console.log(response.data)
    })
    .catch(function (error) {
      toast('An error occured',  {position: toast.POSITION.TOP_RIGHT});
    })
    .finally(() => {
        setLoading(false);
    });
    
  };

   useEffect(()=>{
    fetchMovieDetails()
  },[]);

  return (
    <div className="movie-card px-[5%] mt-[38px] w-full">
      <ToastContainer />
      <div className="relative">
      <img className="w-full h-[30px] hover:p-2 hover:opacity-80 cursor-pointer" src={`${imagePath}${movieDetails.poster_path}`} alt="" />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between mt-[32px] sm:items-center">
        <div className="flex gap-[17px] items-center text-[10px] sm:text-[12px] md:text-[16px]">
          <div className="flex gap-2">
            <p data-testid='movie-title'>{movieDetails.title}</p> • 
            <p data-testid='movie-release-date'>{movieDetails.release_date}</p> •
            <p data-testid='movie-runtime'>PG-13 • {movieDetails.runtime}</p>
          </div>
           
          <div className="flex items-center">
            <p className="mt-1 flex gap-1">
              <span className="text-[#E8E8E8]">8.5</span> | 350k
            </p>
          </div>
        </div>

        <div className="flex gap-[5px] sm:gap-[11px] text-[10px] sm:text-[12px] md:text-[16px]">
          <div className="text-[#B91C1C] border flex justify-center items-center py-[3px] px-[17px] border-[#F8E7EB] rounded-[15px]">
            <p>Action</p>
          </div>
          <div className="text-[#B91C1C] border flex justify-center items-center py-[3px] px-[17px] border-[#F8E7EB] rounded-[15px]">
            <p>Drama</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-4 mt-[25px]">
        <div>
          <p data-testid='movie-overview' className="text-[16px] md:text-[18px] lg:text-[20px] text-[#333333]">
            {movieDetails.overview}
          </p>
        </div>

        <div className="text-[14px] md:text-[17px] w-full flex flex-row sm:flex-col gap-[14px]">
          <button className="flex w-[180px] md:w-[270px] h-[42px] md:h-[55px] justify-center items-center bg-[#BE123C] rounded-[10px] text-white gap-[5px] md:gap-[10px]">
            <p>See Showtimes</p>
          </button>

          <button className="flex w-[180px] md:w-[270px] h-[42px] md:h-[55px] justify-center items-center gap-[5px] md:gap-[10px] rounded-[10px] bg-[#be123d4d] border border-[#BE123C]">
            <p>More watch options</p>
          </button>
        </div>
      </div>

      <div className="flex w-full justify-between gap-4 mt-[25px] mb-[41px] lg:mb-0">
        <div className="w-full text-[#333333] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] flex flex-col gap-[20px] md:gap-[31px]">
          <p>
            Director: <span className="text-[#BE123C]">Joseph Kosinski</span>
          </p>
          <p>
            Writers:{" "}
            <span className="text-[#BE123C]">
              {" "}
              Jim Cash, Jack Epps Jr, Peter Craig
            </span>
          </p>
          <p>
            Starts:{" "}
            <span className="text-[#BE123C]">
              {" "}
              Tom Cruise, Jennifer Connelly, Miles Teller
            </span>
          </p>

          <div className="hidden md:flex font-semibold  border border-[#C7C7C7] h-[55px] rounded-[10px]">
            <div className="bg-[#BE123C] text-[12px] sm:text-[14px] md:text-[16px] px-5 rounded-[10px] flex justify-center items-center">
              <p className="text-white">Top rated movie #65</p>
            </div>
            <div className="flex items-center px-5">
              <p className="text-[12px] sm:text-[14px] md:text-[16px]">Awards 9 nominations</p>
            </div>
          </div>
        </div>

        <div>
        </div>
      </div>

      <div className="flex md:hidden font-semibold w-full border border-[#C7C7C7] h-[45px] rounded-[10px] mb-7">
            <div className="bg-[#BE123C] text-[12px] sm:text-[14px] md:text-[16px] px-5 rounded-[10px] flex justify-center items-center">
              <p className="text-white">Top rated movie #65</p>
            </div>
            <div className="flex items-center px-5">
              <p className="text-[12px] sm:text-[14px] md:text-[16px]">Awards 9 nominations</p>
            </div>
          </div>
    </div>
  );
};

export default ContentPage;