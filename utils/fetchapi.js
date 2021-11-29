import axios from "axios";


export const baseurl='https://bayut.p.rapidapi.com'

export const fetchapi=async(url)=>{
	const{data}=await axios.get((url),{
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '9fd30e62e9mshdcb4c03bfc29b46p133d56jsn71fe38d7fc73'
		      }


		})
		return data;
}

