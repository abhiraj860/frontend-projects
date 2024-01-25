
export default function ColourButton({props}) {
    function clickHandler(colos) {
        document.body.style.backgroundColor = colos !== 'Default' ? colos : 'tomato';
        return;
    }
    return <div>
       <button onClick={()=>clickHandler(props.text)} style={{backgroundColor: props.bcol, 
                        width: "80px", 
                        border:"none", 
                        padding: "5px",
                        color: props.col,
                        borderRadius: "12px",
                        cursor:'pointer',
                        marginLeft: "15px"}}>{props.text}</button>
    </div>
}