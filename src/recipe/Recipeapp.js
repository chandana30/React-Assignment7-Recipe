import React from 'react'

function Recipeapp(props) {

    let list = (val1,val2,val3,val4) => {
        
        var data = [{id:val1, recipeName:val2, deatils:val3, image:val4}];
        props.getData(data)
    }
    return (
        <div style={{ float: "left", margin: "60px  60px"}} >
            {
                props.data.map((val, idx) => {
                    return (
                        <div key={val+val.id} className="border border-secondary shadow p-3 mb-5 bg-body rounded">
                            <div  className="card" style={{ width: "18rem" }} onClick={()=>{list(val.id,val.recipeName,val.deatils,val.image)}}>
                                <img src={val.image} className="card-img-top" alt="img" />
                                <div>
                                    <h5  className="card-name-top">{val.recipeName}</h5>
                                </div>
                            </div>
                            <br />
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Recipeapp

