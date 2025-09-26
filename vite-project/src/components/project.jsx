
import { ChildA } from "./pchild.jsx"


export function Parents() {





    return (

        <>


            <div className="box">

                <div >

                    <h1 style={{textAlign:"center"}}>The Right Plan For </h1>

                    <h1 style={{color:"purple", textAlign:"center"}}>Your Business</h1>
                </div>


                <p style={{marginLeft:"45px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque repudiandae nostrum delectus ut reprehenderit, nemo ad voluptatibus, laudantium porro officia tenetur numquam. Soluta quae ab fuga officiis aut, deserunt non.</p>

            </div>

            <ChildA type={"simple"} />
            <ChildA type={"plus"} />
            <ChildA type={"pro"} />

        </>

    )



}