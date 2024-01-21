import { VideoCard } from "./videocard";

const videos = [
    {
      title: "Playing with a robot",
      image: '../public/thumbnail.png',
      thumbnail: '../public/channels4_profile.jpg',
      author: 'Abhiraj Aditya',
      views: '100K',
      timestamp: '2 days ago'
    },
    {
      title: "Exploring Robotics",
      image: '../public/thumbnail.png',
      thumbnail: '../public/channels4_profile.jpg',
      author: 'John Doe',
      views: '75K',
      timestamp: '1 week ago'
    },
    // Add more videos with similar structure
    {
      title: "Robot Adventures",
      image: '../public/thumbnail.png',
      thumbnail: '../public/channels4_profile.jpg',
      author: 'Jane Smith',
      views: '50K',
      timestamp: '3 days ago'
    },
    {
        title: "Robot Adventures",
        image: '../public/thumbnail.png',
        thumbnail: '../public/channels4_profile.jpg',
        author: 'Jane Smith',
        views: '50K',
        timestamp: '3 days ago'
      },
      {
        title: "Robot Adventures",
        image: '../public/thumbnail.png',
        thumbnail: '../public/channels4_profile.jpg',
        author: 'Jane Smith',
        views: '50K',
        timestamp: '3 days ago'
      },
      {
        title: "Robot Adventures",
        image: '../public/thumbnail.png',
        thumbnail: '../public/channels4_profile.jpg',
        author: 'Jane Smith',
        views: '50K',
        timestamp: '3 days ago'
      },
      {
        title: "Robot Adventures",
        image: '../public/thumbnail.png',
        thumbnail: '../public/channels4_profile.jpg',
        author: 'Jane Smith',
        views: '50K',
        timestamp: '3 days ago'
      },
      {
        title: "Robot Adventures",
        image: '../public/thumbnail.png',
        thumbnail: '../public/channels4_profile.jpg',
        author: 'Jane Smith',
        views: '50K',
        timestamp: '3 days ago'
      },
      {
        title: "Robot Adventures",
        image: '../public/thumbnail.png',
        thumbnail: '../public/channels4_profile.jpg',
        author: 'Jane Smith',
        views: '50K',
        timestamp: '3 days ago'
      },
      {
        title: "Robot Adventures",
        image: '../public/thumbnail.png',
        thumbnail: '../public/channels4_profile.jpg',
        author: 'Jane Smith',
        views: '50K',
        timestamp: '3 days ago'
      },
      {
        title: "Robot Adventures",
        image: '../public/thumbnail.png',
        thumbnail: '../public/channels4_profile.jpg',
        author: 'Jane Smith',
        views: '50K',
        timestamp: '3 days ago'
      }
    // Add more videos as needed
  ];
  
export function Videogrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {videos.map((video, id)=><VideoCard key={id} 
        title={video.title} 
        image={video.image}
        thumbnail={video.thumbnail}
        author={video.author}
        views={video.views}
        timestamp={video.timestamp}/>)}
    </div>
}