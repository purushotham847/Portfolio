
import Comp from './Comproject'

export default  function projects(){


   return(
<>
<div>

<h1 className="font-bold  text-center   text-4xl text-black ">Projects</h1>
<div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 '>

<Comp img={'homepage.png'}  title={'Hostile Detection'} des={"An ML application that uses computer vision techniques to detect hostile or dangerous behaviors such as fire, fights, and weapons in real-time surveillance footage."} demo={ ""}  code={"https://github.com/purushotham847/Hostile-detection-system" }/>
<Comp img={'tms.png'}  title={'Translation Management'} des={"This project is a Django-based web application designed to manage translation and review workflows efficiently. It supports user registration, authentication, job allocation, and detailed dashboards for administrators, translators, and reviewers."} demo={ ""}  code={"https://github.com/purushotham847/Translation-Management-System" }/>
<Comp img={'weather.png'}  title={'WEATHER APP'} des={"Weather app is weather forecasting application built using javascript.in this project Api is handled , data of all around the world is avaliable."} demo={ "https://purushotham847.github.io/weather_app/ "}  code={"https://github.com/purushotham847/weather_app" }/>


</div>
<div>
    <div><img src="" /></div>
</div>
</div>
</>
    )
}