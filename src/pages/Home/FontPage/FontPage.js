import TypeWriterEffect from 'react-typewriter-effect';
import hello from '../../../assets/hello.gif';


const FontPage = () => {

    return (
      <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="">
        <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div>
        <img className='w-12 rounded-full' src={hello} alt="" />
        <h4  className="card-title">Hello,My Name Is </h4>
        </div>
        <h1 className="text-7xl font-bold font-serif">Farhad Hossain .</h1>
        <h3 className="text-5xl font-bold font-mono">I'm Front-End developer...</h3>
        <h2 className="text-4xl font-bold mt-8 font-serif">I build exclusive <br /> &  accessible website.</h2>
          <div>
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'mono',
          color: 'rgb(195, 150, 52)',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={500}
        cursorColor="#3F3D56"
        fontFamily="mono"
        multiText={[
          'My passion is coding.',
          'I’m a front-end web developer specializing in react js. ',
          'The main focus is front-end, but at the same time,',
          ' I try to learn new technology also. Currently,',
          'I’m focused on learning mern stack development.',
          'I have six months of experience in',
          'the web development sector with some problem-solving expertise and am a Quick Learner. Here are some examples of projects and skills.',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
        </div>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
      </div>
    );
};

export default FontPage;
