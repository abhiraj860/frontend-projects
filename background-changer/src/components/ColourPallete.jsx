import ColourButton from "./ColourButton";
const obj = [
    {bcol:'Red', col:'Black', text:'Red'},
    {bcol:'Yellow', col:'Black', text:'Yellow'},
    {bcol:'Black', col:'White', text:'Black'},
    {bcol:'Purple', col:'Black', text:'Purple'},
    {bcol:'Green', col:'Black', text:'Green'},
    {bcol:'Blue', col:'Black', text:'Blue'},
    {bcol:'Tomato', col:'Black', text:'Default'}
];  
export default function ColourPallete() {
    return <div style={{display: 'flex', justifyContent: 'center', marginTop: "42%"}}>
        <div style={{display:'flex', 
                    justifyContent:'center', 
                    padding:"7px", 
                    paddingRight: "20px",
                    boxShadow: "10px 5px 15px #ccc",
                    backgroundColor: 'White'}}>
            {obj.map((value, id)=><ColourButton props={obj[id]} />)}
        </div>
    </div> 
    
}