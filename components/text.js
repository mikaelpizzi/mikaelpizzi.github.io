import { title, mainText } from "../constants"

const Text = () => {
    return ( 
        <main>
            <h1 className="text-left font-extrabold sm:text-[48px] text-[32px] font-['Source_Serif_Pro']">{title}</h1>

            <div className="text-left py-8 sm:text-lg text-[1.05rem]">
                { mainText.map((text, index) => (
                    <div
                        key={`line-${index+1}`}    
                    >
                        { index === 0 ? (
                            <p className="mb-5">{text}</p>
                        ) : (
                            <p className="my-5">{text}</p>
                        ) 
                        }
                    </div>
                ))}
            </div>
        </main>
    );
}
 
export default Text;