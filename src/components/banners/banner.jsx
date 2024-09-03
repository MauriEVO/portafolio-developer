import React, { useEffect, useState } from 'react'
import './styles.sass'
import ImagePefil from '../../assets/image.png'
import FacebookLogin from 'react-facebook-login';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


export const BannerHome = () => {
	const [data, setData] = useState(null);
	const [user, setUser] = useState(null);
  	const [profile, setProfile] = useState(null);
	// AUTENTICACIÓN FACEBOOK
  const responseFacebook = (response) =>{
    console.log(response);
    if(response.accessToken){
      setData({
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
      })
    }
  }
	console.log('🚀 ~ data:', data)

  
	// AUTENTICACIÓN CON GOOGLE
	const login = useGoogleLogin({
			onSuccess: (codeResponse) => setUser(codeResponse),
			onError: (error) => console.log('Login Failed:', error)
	});
	const logOut = () => {
		googleLogout();
		setProfile(null);
	};

	useEffect(() => {
		if (user) {
			axios
			.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
					headers: {
						Authorization: `Bearer ${user.access_token}`,
						Accept: 'application/json'
					}
			})
			.then((res) => {
					setProfile(res.data);
					console.log("data assigned");
					console.log(res.data);

			})
			.catch((err) => console.log(err));
		}
	},[user]);
	return (
		<section className='banner_home'>
			<div className="banner_container">
				<div className="banner_info">
					<h1>Hello,  my name is Mauri Villafuerte Orbezo</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium laborum minus aliquam expedita fuga, provident dignissimos dolor id. Sed labore tenetur itaque repellat atque nihil laborum ab sint autem!
					Voluptate quidem officia, soluta veritatis libero nulla ipsa. Commodi ipsum eum voluptatum consectetur vero rerum non. Ad unde error molestias blanditiis, voluptates in, dolore hic perferendis nulla natus voluptatibus pariatur.</p>
					<div className="banner_btns">
						<a href="">Projects</a>
						<a href="">LinkedIn</a>
						{profile ? (
							<div>
									<img src={profile.picture} alt="user image" />
									<p>Name: {profile.name}</p>
									<p>Email Address: {profile.email}</p>
									<br />
									<button onClick={logOut}>Log out</button>
							</div>
						) : (
							<button className='redes_sociales' onClick={() => login()}>Sign in with Google 🚀 </button>
						)}
					</div>

					{/* <FacebookLogin
						appId="427489390334170"
						autoLoad
						callback={responseFacebook}
						render={renderProps => (
							<button onClick={renderProps.onClick}>This is my custom FB button</button>
						)}
					/> */}
					<FacebookLogin
						appId="358134537084144"
						autoLoad={false}
						fields="name,email,picture"
						textButton="Login Facebook"
						icon="fa-facebook"
						// onClick={componentClicked}
						callback={responseFacebook} 
					/>

				</div>
				<div className="banner_image">
					<figure><img src={ImagePefil} alt="" /></figure>
				</div>
			</div>
		</section>
	)
}
