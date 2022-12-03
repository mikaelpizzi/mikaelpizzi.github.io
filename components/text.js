import { mainText } from "../constants"


const Text = () => {
    return ( 
        <div>
            <h1 className="text-[#ff0000] text-center font-extrabold text-[48px] font-['Source_Serif_Pro']">Hi, I'm Stupid</h1>

            <div className="text-left py-8 text-lg">
            <p className="my-5">{mainText[0]}</p>
            <p className="my-5">{mainText[1]}</p>
            <p className="my-5">{mainText[2]}</p>
            <p className="my-5">i'm thinking what tf write lol</p>
            </div>
        </div>
    );
}
 
export default Text;