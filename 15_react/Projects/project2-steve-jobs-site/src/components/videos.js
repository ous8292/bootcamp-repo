import React from 'react'



function videos(props) {
    const video = props.video
    console.log(props)
    const videoList = video.map((video, index) => 
            <div>
                <h1>{video.title}</h1>
                <iframe src={video.src} title={video.title}></iframe>
            </div>
    );

    return (
        <div>
            { videoList }
        </div>
    )
}

export default videos
