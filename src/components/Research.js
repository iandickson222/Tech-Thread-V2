import CosmicSpikesHq from '../images/CosmicSpikesHq.jpg'

function Research() {
    return( 
        <div className='research'>

            <h3>Research & Technical Experience</h3>

            <a className="card" href="https://www.youtube.com/watch?v=_uz8s21KIhM&t=1s" target="_blank" rel="noreferrer">
                <img src="https://img.youtube.com/vi/_uz8s21KIhM/hqdefault.jpg" alt="YouTube Thumbnail"/>
                <div>
                    <h4>Deep Q Network Plays Atari (MsPacman-v0)</h4>
                    <p>The Deep Q Network implemented in this video is from the TensorFlow Agents library. </p>
                </div>
            </a>

            <a className="card" href="https://www.youtube.com/watch?v=HhxB3cTwuXw" target="_blank" rel="noreferrer">
                <img src="https://img.youtube.com/vi/HhxB3cTwuXw/hqdefault.jpg" alt="YouTube Thumbnail"/>
                <div>
                    <h4>Virtual Rocket Landing (Thrust Vector Control)</h4>
                    <p>The virtual rockets use the Unity engine to simulate the physics and use thrust vector control to achieve a steady landing.</p>
                </div>
            </a>

            <a className="card" href="https://play.google.com/store/apps/details?id=com.IanDickson.CosmicSpikes&hl=en_US" target="_blank" rel="noreferrer">
                <img src={CosmicSpikesHq} alt="YouTube Thumbnail"/>
                <div>
                    <h4>Cosmic Spikes (Mobile Game)</h4>
                    <p>Alien droids are attacking your galaxy. Defend your galaxy by using your spikes to destroy the droids and lead the invasion away.</p>
                </div>
            </a>

            <a className="card" href="https://www.youtube.com/watch?v=mJ1Dxp26W2g&t=3s" target="_blank" rel="noreferrer">
                <img src="https://img.youtube.com/vi/mJ1Dxp26W2g/hqdefault.jpg" alt="YouTube Thumbnail"/>
                <div>
                    <h4>Flutter Social Media App</h4>
                    <p>Mybook is a social media app I developed using Flutter and Firebase. The design was inspired by Facebook.</p>
                </div>
            </a>

        </div>           
    );
}

export default Research;
