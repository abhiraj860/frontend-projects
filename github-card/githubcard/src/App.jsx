import { useEffect, useState } from 'react'
import { ProfileCard } from './components/ProfileCard'
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [follow, setFollow] = useState(0);
  const [likes, setLikes] = useState(0);
  const [posts, setPosts] = useState(0);
  const [location, setLocation] = useState(0);
  const [bday, setbday] = useState(0);
  useEffect(()=>{
    axios.get("https://dummyapi.online/api/social-profiles").then(resp=>{
      const res = resp.data[1];
      setName(res.fullName);
      setFollow(res.followersCount);
      setLikes(res.followingCount);
      setPosts(res.postsCount);
      setLocation(res.location);
      let curr = res.birthDate;
      let today = new Date();
      let dob = new Date(curr);
      let diff = (today.getTime() - dob.getTime())/1000/60/60/24/365.25;
      setbday(Math.abs(Math.round(diff)));
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-slate-500 flex justify-center min-h-screen items-center">
      {(loading=== true) ? <p>{loading}</p> : <ProfileCard name={name}
                                                           follow={follow}
                                                           like={likes}
                                                           post={posts}
                                                           location={location}
                                                           bday={bday}></ProfileCard>}
    </div>
  )
}

export default App
