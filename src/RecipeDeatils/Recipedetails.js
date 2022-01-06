import React from 'react'

function Recipedetails(props) {
    return (
        <div style={{ margin: "80px 0px 0px 0px" }}>

            {
                props.data.map((val, idx) => {
                    return (<div key={val + idx}>
                        <div className="card">
                            <img src={val.image} className="card-img-top" alt="img" height={"400px"} width={"400px"} />

                            <div >
                                <h4 className="card-title">{val.recipeName}</h4>
                            </div>
                            <p className="card-text">{val.deatils}</p>
                        </div><br />
                    </div>)
                })
            }

        </div>
    )
}

export default Recipedetails
