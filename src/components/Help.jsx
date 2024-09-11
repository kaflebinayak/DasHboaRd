import { TbDiamond } from "react-icons/tb";

function Help() {
  return (
    <>
    <div className="p-1 card ">
      <TbDiamond />
      <b>Need Help?</b>
      <br />
      <p>Please check our docs</p>
      <button type="btn btn-outline-primary" style={{border:"0px", width:"170px", alignItems:"center"}}>

          {/* ELEMENT  */}



        DOCUMENTATION
      </button>
    </div>
    <div className="p-1 card ">
      <button type="btn btn-outline-primary" style={{border:"0px", width:"170px"}}>

       {/* ELEMENT  */}


        UPGRADE TO PRO
      </button>
    </div>

    </>
  );
}
export default Help;
