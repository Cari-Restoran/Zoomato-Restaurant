import React, {useEffect} from 'react'

import { fetchMenu } from "../../redux/actions";
import { connect } from "react-redux";

function Desc(props) {
  
    useEffect(() => {
        
        props.dispatch(fetchMenu());
        console.log(props)
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {props.daily_menus !== undefined && 
            props.daily_menus.map((item)=> {
                return (

                    <h3>{item.name}</h3>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.desc)
    return {
        detail: state.desc,
    }    
    
    
};
export default connect(mapStateToProps,null)(Desc)
