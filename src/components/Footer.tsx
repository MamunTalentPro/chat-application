import SendIcon from '@mui/icons-material/Send';
export function Footer(){
    const handleTypeMessage=()=>{

    }

    return <>
    <div className="h-20 bg-white ">
        <input placeholder="typing ......" onChange={handleTypeMessage} className="h-20  z-10 rounded-md bottom-0 bg-white w-screen shadow-lg px-5
        " />
        <SendIcon/>
        
        

    </div>
    </>
}